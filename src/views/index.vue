<template>
  <div class="home ">
    <boxs :list="list" :pages="pages" @pageChange="pageChange" />
  </div>
</template>

<script>
import boxs from '@/components/boxs';
import { getAritice } from '@/assets/js';
export default {
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
    async _getAritice(params) {
      let res = await getAritice(params);
      this.pages.count = Math.ceil(res.total / this.pages.pageSize);
      this.list = res.aritices;
    },
    pageChange(val) {
      this.pages.page += val;
      this._getAritice(this.pages);
    }
  },
  created() {
    this._getAritice(this.pages);
  }
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 20px;
  padding-bottom: 100px;
}
@media screen and (max-width: 768px) {
  .home {
    margin-top: 40px;
    padding: 0;
    padding-bottom: 70px;
  }
}
</style>
