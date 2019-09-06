<template>
  <el-container direction="vertical">
    <homeheader />
    <el-main v-if="aritices">
      <div class="ariticeDetail">
        <header class="aritice-title">
          <h2>{{aritices.title}}</h2>
        </header>
        <div class="aritice-meta">
          <span>发表于&nbsp;{{aritices.date}}</span>
          <span>|</span>
          <span>分类&nbsp;{{tag.tag}}</span>
          <span>|</span>
          <span>阅读数&nbsp;{{aritices.watch}}</span>
          <span>|</span>
          <span>喜欢数</span>
        </div>
        <div class="aritice-body">
          <div class="ql-container ql-snow">
            <div class="ql-editor">
              <div v-html="aritices.content"></div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import homeheader from "./../components/HomeHeader";
import { getAriticeMore } from "./../api/request";
import dateFormat from "./../api/dateFormat";
export default {
  data() {
    return {
      aritices: {
        title: "",
        date: "",
        watch: "",
        content: ""
      },
      tag: {}
    };
  },
  methods: {
    async _getAritice(id) {
      let res = await getAriticeMore(id);
      let { date, title, watch, content, tagId } = res.data;
      date = dateFormat(`${date}`);
      this.aritices = { date, title, watch, content };
      this.tag = tagId;
    }
  },
  mounted() {
    this._getAritice(this.$route.params.id);
  },
  components: {
    homeheader
  }
  /*   filters: {
    formatDate(value) {
      return dateFormat(value);
    }
  } */
};
</script>

<style lang="stylus">
.el-main
  display flex
  justify-content center
  height 100%
  .ariticeDetail
    width 60%
    height 100%
    min-height 600px
    background-color #fff
    padding 30px
    box-shadow 0 2px 6px rgba(77, 77, 77, 0.3)
    opacity 0.85
    margin-right 20px
    text-align justify
    .aritice-title
      text-align center
      color black
      font-size 25px
      padding 10px
    .aritice-meta
      text-align right
      color #555
      font-size 15px
      padding 10px
    .aritice-body
      margin-top 40px
      height 100%
</style>
