<template>
  <typePage>
    <ul>
      <li v-for="(item, index) in titles" :key="index">
        <router-link :to="'/aritice/'+item._id">{{item.title}}</router-link>
      </li>
    </ul>
  </typePage>
</template>

<script>
import typePage from "./../components/typePage";
import {getClassification} from './../api/request'
export default {
  components: {
    typePage
  },
  data() {
    return {
      titles: []
    };
  },
  methods: {
    async _getData() {
      let res = await getClassification(this.$route.params.tagId)
      this.titles = res.data
    }
  },
  mounted() {
    this._getData();
  }
};
</script>

