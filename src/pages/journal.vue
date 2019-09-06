<template>
  <typePage>
    <div v-for="(item, index) in journalData" :key="index">
      <h2>{{item.date}}</h2>
      <p v-for="(list, index) in item.list" :key="index">
        <span>{{list.date}}</span>        
        <span>{{list.title}}</span>        
      </p>
    </div>
  </typePage>
</template>

<script>
import { getAritice } from "./../api/request";
import dateFormat from "./../api/dateFormat";
import typePage from "./../components/typePage";
export default {
  components: {
    typePage
  },
  data() {
    return {
      journalData: []
    };
  },
  methods: {
    async getAritice() {
      let res = await getAritice();
      let data = []
      for (const i in res.data) {
        let { date, title } = res.data[i];
        data.push({
          title,
          date: dateFormat(date),
          month: this.getDateMonth(date),
          year: this.getDateYear(date)
        });
      }
      this.handleData(data);
    },
    getDateMonth(cellValue) {
      let date = new Date(cellValue);
      let month = date.getMonth() + 1;
      return month;
    },
    getDateYear(cellValue) {
      let date = new Date(cellValue);
      let year = date.getFullYear();
      return year;
    },
    /* 处理需要渲染的数据 */
    handleData(data) {
      const arr = [];[{'a':1},{'a':2}]
      let dateTemp = "";
      data.forEach((item,index) => {
        let { title, date, year, month } = item;
        let temp = {
          title,
          date
        };
        if (index === 0) {
          let obj = {};
          obj.list = [];
          obj.date = `${year}年${month}月`;
          obj.list.push(temp);
          arr.push(obj);
        } else {
          if (arr[arr.length - 1]['date'] === `${year}年${month}月`) {
            arr[arr.length - 1]["list"].push(temp);
          } else {
            let obj = {};
            obj.list = [];
            obj.date = `${year}年${month}月`;
            obj.list.push(temp);
            arr.push(obj);
          }
        }
      });
      this.journalData = arr
      console.log(this.journalData)
    }
  },
  mounted() {
    this.getAritice();
  }
};
</script>

<style lang="stylus">

</style>