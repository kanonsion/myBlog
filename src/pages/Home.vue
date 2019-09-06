<template>
  <el-container direction="vertical">
    <homeheader />
    <el-main>
      <div class="content">
        <div class="aritice" v-for="(item, index) in aritices" :key="index">
          <header class="aritice-title">
            <h2>{{item.title}}</h2>
          </header>
          <div class="aritice-meta">
            <span>发表于&nbsp;{{item.date | formatDate}}</span>
            <span>|</span>
            <router-link tag="span" :to="'/Classification/'+item.tagId._id">
              分类&nbsp;
              <a>{{item.tagId.tag}}</a>
            </router-link>
            <span>|</span>
            <span>阅读数</span>
            <span>|</span>
            <span>喜欢数</span>
          </div>
          <div class="aritice-body" v-html="item.content"></div>
          <div class="aritice-more">
            <el-button type="info" size="small">
              <router-link :to="'/aritice/'+item._id" tag="a">查看更多</router-link>
            </el-button>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="avatar">
          <img
            src="https://static.acg12.com/uploads/2019/06/99470a9b7f0bbcb6a8b95af65ff08bfe-424x600.jpg"
          />
        </div>
        <div class="info-messag"></div>
        <tagcloud v-show="condition">
          <router-link to="#" v-for="(item, index) in tags" :key="index">{{item.tag}}</router-link>
        </tagcloud>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { dateFormat } from "./../utils/utils";
import homeheader from "./../components/HomeHeader";
import tagcloud from "./../components/TagCloud";
import { getAritice, getTags } from "./../api/request";
export default {
  data() {
    return {
      aritices: [],
      tags: [],
      condition: false
    };
  },
  methods: {
    async _getAritice() {
      let res = await getAritice();
      this.aritices = res.data;
    },
    async _getTags() {
      let res = await getTags();
      this.tags = res.data;
    }
  },
  mounted() {
    this._getAritice();
    this._getTags();
    setTimeout(() => {
      this.condition = true;
    }, 1500);
  },
  filters: {
    formatDate(value) {
      return dateFormat(value);
    }
  },
  components: {
    homeheader,
    tagcloud
  }
};
</script>

<style lang="stylus">
@import url('./../common/css/a.css')
@media only screen and (max-width: 1000px)
  .info
    display none
.el-main
  display flex
  justify-content center
  height 100%
  .content
    width 60%
    height 100%
    min-height 600px
    background-color #fff
    padding 30px
    box-shadow 0 2px 6px rgba(77, 77, 77, 0.3)
    opacity 0.85
    margin-right 20px
    text-align justify
    min-width 700px
    .aritice
      height 200px
      width 90%
      display flex
      flex-direction column
      flex-wrap nowrap
      justify-content center
      align-items center
      margin-bottom 50px
      color #555
      min-width 600px
      overflow-x hidden
      .aritice-title
        width 100%
        height 20px
        h2
          font-size 20px
      .aritice-meta
        display flex
        justify-content flex-start
        align-items center
        font-size 14px
        width 100%
        height 50px
        span
          margin-right 5px
          padding 5px
        a
          color #555
          border-bottom 1px solid #555
          cursor pointer
      .aritice-body
        width 100%
        height 60px
        overflow hidden
        line-height 30px
        font-size 16px
        min-width 600px
        img
          width 30%
          height 30%
      .aritice-more
        width 100%
        text-align right
  .info
    width 20%
    background-color rgb(245, 245, 245)
    height 400px
    position relative
    .avatar
      position absolute
      width 120px
      height 120px
      overflow hidden
      border-radius 50%
      top 10px
      left 50%
      margin-left -60px
      box-shadow 0 0 3px #dcdde1
      img
        width 100%
    .info-messag
      width 96%
      margin-left 2%
      background-color #fff
      height 70%
      box-shadow 0px 0px 8px #dcdde1
      margin-top 30%
</style>