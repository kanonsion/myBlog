<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="!$route.meta.UNkeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.UNkeepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
@import url('./../public/css/reset.styl')
#app
  width 100%
  height 100%
</style>

