<template>
  <typePage>
    <ul>
      <li v-for="(item, index) in handleTags" :key="index">
        <router-link
          :to="{ name: 'Classification', params: { tagId: item.id }}"
        >{{item.tag}}({{item.num}})</router-link>
      </li>
    </ul>
  </typePage>
</template>

<script>
import typePage from "./../components/typePage";
import { getAritice, getTags } from "./../api/request";
export default {
  data() {
    return {
      tagId: [],
      tags: []
    };
  },
  methods: {
    async _getTagId() {
      let res = await getAritice();
      console.log(res);
      res.data.forEach(element => {
        this.tagId.push(element.tagId._id);
      });
    },
    async _getTags() {
      let res = await getTags();
      console.log(res);
      res.data.forEach(element => {
        this.tags.push({ id: element._id, tag: element.tag, num: 0 });
      });
    }
  },
  mounted() {
    this._getTagId();
    this._getTags();
  },
  components: {
    typePage
  },
  computed: {
    handleTags() {
      this.tagId.forEach(id => {
        this.tags.forEach(item => {
          if (id === item.id) item.num++;
        });
      });
      return this.tags;
    }
  }
};
</script>

