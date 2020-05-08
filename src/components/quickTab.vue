<template>
  <div class="quick">
    <!-- <div class="item" v-if="quick.show && chatShow">
      <i class="el-icon-chat-square"></i>
      <div class="top-bar"><span class="top-bar-triangle"></span> <span> 展开评论 </span></div>
    </div> -->
    <div class="item" v-if="quick.show" @click="goTop">
      <i class="el-icon-arrow-up"></i>
      <div class="top-bar"><span class="top-bar-triangle"></span> <span> 返回顶部 </span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* chatShow: false */
    };
  },
  props: {
    quick: {
      type: Object
    }
  },
  methods: {
    goTop() {
      this.$emit('goTop');
    }
  }
  /*  created() {
    this.chatShow = this.$route.name === 'detail';
  } */
};
</script>

<style lang="scss" scoped>
.quick {
  position: fixed;
  right: 10px;
  bottom: 300px;
  z-index: 99;
  .item {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    box-shadow: $quick-shadow;
    @include flex;
    cursor: pointer;
    font-size: 18px;
    position: relative;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .top-bar {
      opacity: 0;
      font-size: 14px;
      padding: 13px 10px;
      position: absolute;
      top: 0;
      right: 60px;
      box-shadow: $quick-shadow;
      white-space: nowrap;
      border-radius: 4px;
      z-index: 3;
      .top-bar-triangle {
        top: 12px;
        right: -11px;
        position: absolute;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 11px solid #e1e6ec;
        z-index: 2;
        &::after {
          content: '';
          top: -6px;
          right: 1px;
          position: absolute;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 10px solid #fff;
          z-index: 1;
        }
      }
    }
    &:hover {
      background-color: $primary-subtle-color;
      .top-bar {
        display: block;
        animation: fadeIn 0.5s alternate forwards;
      }
      @keyframes fadeIn {
        0% {
          right: 80px;
          opacity: 0.4;
        }
        100% {
          right: 60px;
          opacity: 1;
        }
      }
      i {
        color: $baseColor;
      }
    }
  }
}
</style>
