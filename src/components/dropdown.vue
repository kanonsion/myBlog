<template>
  <div class="topbar_submenu_wrap ">
    <div class="topbar_submenu">
      <div class="topbar_item" v-for="(item, index) in menu" :key="index" @click="jump(item.tag)">
        <div :class="{ topbar_text: true, isSelect: tag === item.tag }">
          {{ item.tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array
    },
    tag: {
      type: String
    }
  },
  data() {
    return {
      flag: this.$route.query.tag | false
    };
  },
  methods: {
    jump(tag) {
      this.$router.push({
        path: 'classify',
        query: {
          tag
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.topbar_submenu_wrap {
  position: absolute;
  transition: all 0.3s;
  overflow: hidden;
  height: 0;
  left: 0;
  border-radius: 4px;
  .topbar_submenu {
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(85, 85, 85, 0.15);
    position: relative;
    cursor: default;
    padding: 10px 0;
    margin-top: 18px;
    border-radius: 4px;
    .topbar_item {
      padding: 10px 20px;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
      .isSelect {
        font-weight: bold;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: -16px;
      left: 50%;
      margin-left: -8px;
      border: 8px solid transparent;
      border-bottom-color: #fff;
    }
  }
}
</style>
