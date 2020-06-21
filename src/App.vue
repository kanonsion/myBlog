<template>
  <div id="app" ref="app" :class="{ app: isOpen }">
    <my-header :header="header" @open="open" />
    <router-view class="slide animate03"> </router-view>
    <quick-tab :quick="quick"  @goTop="goTop" />
    <my-footer />
  </div>
</template>

<script>
import myHeader from '@/components/header';
import myFooter from '@/components/footer';
import quickTab from '@/components/quickTab';
export default {
  components: {
    myHeader,
    quickTab,
    myFooter
  },
  data() {
    return {
      header: {
        isHidden: false,
        isShadow: false
      },
      scrollNum: 0,
      quick: {
        show: false
      },
      isOpen: false
    };
  },
  methods: {
    load() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.header.isHidden = scrollTop >= this.scrollNum ? true : false;
      this.scrollNum = scrollTop;
      if (this.scrollNum > 520) this.header.isShadow = true;
      this.scrollNum > 300 ? (this.quick.show = true) : (this.quick.show = false);
    },
    goTop() {
      let timer;
      clearInterval(timer);
      let scroll_top = this.scrollNum;
      if (scroll_top > 0) {
        timer = setInterval(() => {
          scroll_top = scroll_top - 80;
          document.documentElement.scrollTop = scroll_top;
          if (scroll_top <= 0) {
            clearInterval(timer);
          }
        }, 30);
      }
    },
    open(val) {
      this.isOpen = val;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.load);
  }
};
</script>

<style lang="scss">
@import './assets/reset.css';
.slide {
  animation: slide 1s;
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.app {
  position: relative;
  overflow-x: hidden;
  transition: left 0.2s ease-in;
}
</style>
