<template>
  <div>
    <homeheader />
    <div class="main">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import homeheader from "./HomeHeader";
export default {
  components: {
    homeheader
  }
};
</script>

<style lang="stylus">
.main
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
    li
      font-size 18px
      margin-bottom 20px
      a
        color #555
</style>
