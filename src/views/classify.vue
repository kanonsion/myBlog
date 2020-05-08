<template>
  <div class="classify">
    <boxs :list="list" :pages="pages" @pageChange="pageChange" />
  </div>
</template>

<script>
import { getClassify } from '@/assets/js';
import boxs from '@/components/boxs';
/* import { debounce } from '@/assets/js/utils';
 */ export default {
  components: {
    boxs
  },
  data() {
    return {
      list: [],
      pages: {
        page: 1,
        pageSize: 10
      }
    };
  },
  methods: {
    async _getClassify(tag, params) {
      let res = await getClassify(tag, params);
      this.pages.count = Math.ceil(res.total / this.pages.pageSize);
      this.list = res.aritices;
    },
    pageChange(val) {
      this.pages.page += val;
      this._getClassify(this.$route.query.tag, this.pages);
    }
  },
  created() {
    this._getClassify(this.$route.query.tag, this.pages);
  },
  watch: {
    $route() {
      this._getClassify(this.$route.query.tag, this.pages);
    }
  }
};
</script>

<style lang="scss" scoped>
.classify {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 20px;
  padding-bottom: 100px;
}
@media screen and (max-width: 768px) {
  .classify {
    margin-top: 40px;
    padding: 0;
    padding-bottom: 70px;
  }
}
</style>
