<template>
  <div class="detail">
    <div class="title">{{ detail.title }}</div>
    <div class="sub-title">
      <div>{{ detail.date | getDate }}</div>
      <div>{{ detail.tag }}</div>
    </div>
    <mavon-editor
      class="content"
      :value="detail.content"
      :subfield="false"
      :boxShadow="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
      codeStyle="arduino-light"
      previewBackground="#fff"
    />
    <div class="chat" v-if="detail.comment">
      <comment @submit="submit" />
      <div class="chat-content">
        <div v-for="(item, index) in detail.comment" :key="index">
          <div class="chat-item">
            <div class="avatar"></div>
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div class="date">{{ item.date | getDate }}</div>
              <div class="context">{{ item.comment }}</div>
              <div class="icon">
                <i
                  class="el-icon-chat-dot-square"
                  @click="showReplay(item._id, item.name, item._id)"
                ></i>
              </div>
            </div>
          </div>
          <transition name="sub-comments" v-if="(rePlayId === item._id) & isColl">
            <comment :comment="comment" @submit="submit" />
          </transition>
          <div class="sub-content" v-for="(repay, index) in item.children" :key="index">
            <div class="sub-item">
              <div class="avatar"></div>
              <div class="right">
                <div class="name">{{ repay.name }}</div>
                <div class="date">{{ repay.date | getDate }}</div>
                <div class="context">
                  <span>{{ repay.at }}</span
                  >{{ repay.comment }}
                </div>
                <div class="icon">
                  <i
                    class="el-icon-chat-dot-square"
                    @click="showReplay(repay._id, repay.name, item._id)"
                  ></i>
                </div>
              </div>
            </div>
            <transition name="sub-comments" v-if="(rePlayId === repay._id) & isColl">
              <comment :comment="comment" @submit="submit" />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getClassification } from '@/assets/js';
import { getDate } from '@/assets/js/filter';
import { setComment } from '@/assets/js';
import comment from '@/components/comment';
export default {
  components: {
    comment
  },
  data() {
    return {
      detail: {},
      rePlayId: -1,
      isColl: false,
      /*  */
      comment: {},
      id: '',
      cid: ''
    };
  },
  methods: {
    async _getData(id) {
      this.id = id;
      this.detail = await getClassification(id);
      this.detail.tag = this.detail.tagId.tag;
      console.log(this.detail);
    },
    showReplay(id, name, cid) {
      this.comment.placeholder = '@' + name;
      this.rePlayId === id ? (this.isColl = !this.isColl) : (this.isColl = true);
      this.rePlayId = id;
      this.cid = cid;
    },
    async submit(val) {
      let obj = Object.assign({}, val);
      if (this.isColl) {
        obj.id = this.cid;
        obj.isReply = true;
        obj.at = this.comment.placeholder;
      } else {
        obj.id = this.id;
        obj.isReply = false;
      }
      console.log(obj);
      await setComment({ ...obj });
      this.isColl = false;
      this._getData(this.$route.query.id);
    }
  },
  created() {
    this._getData(this.$route.query.id);
  },
  filters: {
    getDate
  }
};
</script>

<style lang="scss" scoped>
.sub-comments-leave-active,
.sub-comments-enter-active {
  transition: max-height 0.5s ease;
}
.sub-comments-enter,
.sub-comments-leave-to {
  max-height: 0;
  opacity: 0;
}
.sub-comments-enter-to,
.sub-comments-leave {
  max-height: 160px;
  opacity: 1;
}

.detail {
  max-width: 820px;
  margin: 0 auto;
  padding: 50px 10px;
  @include flex(column);
  .title {
    font-weight: bold;
    font-size: 26px;
    color: $titles-color;
  }
  .sub-title {
    @include flex;
    margin-top: 20px;
    color: $primary-foreground-color;
    font-size: 14px;
    margin-bottom: 20px;
    div {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .content {
    background-color: $baseColor;
    padding: 30px;
    box-shadow: $content-shadow;
    width: 100%;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .chat {
    margin-top: 60px;
    @extend .content;
    .chat-content {
      .chat-item {
        @include flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 10px;
        padding-top: 20px;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: url('data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgATABMAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t/yo/EUfgKPyoAPxFH5UfgKdFFJPIscaGSRjgKoyT+FADfxFH4iuit/h74huow6aY6qe0jqh/IkGs7VPDmp6KM3tlLAvTeVyv8A30OKAM78qPxFGPpRj6UAH4ijn1FH5UY+lABgUYFFFAEtrayXtzFbwoXllYIijuT0r3Xwj4NtPC9ouEWW9YfvbgjnPovoK81+FVml14sR3GfIheUZ9eF/9mr2ugA/OmSxJPG0ciCRGGGVxkEehFPooA8a+I3glPD8y31khFjM21o+vlN6fQ1xOBX0B40s0vvCuqRuMhYGkHsVG4fyr5/zQAYFGBRmjNABg+gox7CiigDpvhzqqaT4qtWlIWKcGBmPbd0/UCvdce1fMmcf/rr2b4deKr3W7IQXlpM5iGFvdvyOB2J/vfSgDtce1GPak/AVFcz/AGa3klETzFBny4hlm9gKAMD4h6oml+FbzJAkuF8hB6luD+ma8Jwfaug8aeJbzxDqjG6ie1SHKx2z5BT1z7mufoAMH2owfaiigAz70Z96M10ngLw4PEevIkq5tYB5s3uOy/if0zQB0PgD4drfRR6lqqEwN80NuRjeP7ze3oO/06+qRokMaoiqiKMBVGABSgBQAAABwAB0pc/SgAzSZ96XP0oz9KAMTxN4UsfE9qUuECTgfu7hB86f4j2rw/XdEuvDupSWd0uHXlXH3XXswr6Lz9K5X4ieG117Q5JY1BvLUGSMgcsP4l/EfqBQB4dn3oz70UUAHFexfCPTVtfDsl2R891KecfwrwP13V46RXvfgCMJ4P0wDgeWT+bE0AdBRSelLj3oAKKMUY96ACj/AD0pDS496APnnxTpq6R4i1C0UbUSUlBjop5X9CKyvwrrfikgXxjcEfxRxk/98gf0rkhz3oA//9k=');
          background-size: cover;
        }
        .right {
          @include flex(column);
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 15px;
          width: calc(100% - 15px - 40px);
          .name {
            font-size: 16px;
            color: #444;
          }
          .date {
            font-size: 12px;
            margin-top: 5px;
            color: rgba(0, 0, 0, 0.38);
          }
          .context {
            margin-top: 9px;
            font-size: 15px;
            line-height: 20px;
          }
          .icon {
            text-align: right;
            width: 100%;
            cursor: pointer;
          }
        }
      }
    }
    .sub-content {
      margin-left: 40px;
      .sub-item {
        @extend .chat-item;
        padding-top: 5px !important;
        .context {
          span {
            color: skyblue;
            margin-right: 10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .detail {
    padding: 30px 5px;
    .content {
      padding: 20px 10px;
    }
  }
}
</style>
