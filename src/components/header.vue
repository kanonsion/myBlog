<template>
  <div class="header">
    <!-- pc -->
    <header
      :class="{ navbar: true, shadow: header.isShadow }"
      :style="{
        transform: header.isHidden ? 'translateY(-100%)' : 'translateY(0)'
      }"
    >
      <div class="menu">
        <div class="left">
          <div class="logo"></div>
          <ul>
            <li
              v-for="(item, index) in menu"
              :key="index"
              :class="{ classfication: item.dropdown }"
            >
              <template v-if="item.dropdown">
                分类<i class="el-icon-arrow-down"></i><dropdown :menu="tags" :tag="tag" />
              </template>
              <router-link :to="item.path" tag="span" v-else>{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-m">
        <div class="content">
          <svg-icon icon-class="menu1" @click.native="open" />
        </div>
      </div>
    </header>
    <section class="banner">
      <canvas height="500px" ref="canvas" id="canvas" style="position:relative"></canvas>
    </section>
    <section class="etc">
      {{ tag }}
    </section>

    <!--  -->
    <transition name="left">
      <div v-if="isOpen" class="leftP" @click="open">
        <div class="left" @click.stop="">
          <ul>
            <li
              v-for="(item, index) in menu"
              :key="index"
              :class="{ classfication: item.dropdown }"
            >
              <template v-if="item.dropdown">
                <div class="tagT" @click.stop="tagOpen = !tagOpen">
                  分类<i class="el-icon-arrow-down" v-if="!tagOpen"></i>
                  <i class="el-icon-arrow-up" v-else></i>
                </div>
                <transition name="tag">
                  <div class="tags" v-if="tagOpen">
                    <div
                      v-for="(item, index) in tags"
                      :key="index"
                      class="tag"
                      @click.stop="jump(item.tag)"
                    >
                      {{ item.tag }}
                    </div>
                  </div>
                </transition>
              </template>
              <router-link :to="item.path" tag="span" v-else>{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
        <svg-icon
          icon-class="login_icon_close"
          @click.native.stop="open"
          class="close"
          v-if="isOpen"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import { getTags } from '@/assets/js';
import { init } from '@/assets/js/canvas';
import dropdown from './dropdown';
export default {
  data() {
    return {
      menu: [
        { path: '/home', name: '首页' },
        { path: '/types', name: '分类', dropdown: true },
        /*         { path: '/message', name: '留言' },
         */ { path: '/about', name: '关于' }
      ],
      tags: [],
      tag: '欢迎来到我的博客',
      /*  */
      isOpen: false,
      tagOpen: false
    };
  },
  props: {
    header: {
      type: Object
    }
  },
  components: {
    dropdown
  },
  methods: {
    async _getTags() {
      this.tags = await getTags();
    },
    open() {
      this.$emit('open', (this.isOpen = !this.isOpen));
    },
    jump(tag) {
      this.$router.push({
        path: 'classify',
        query: {
          tag
        }
      });
      this.open();
    }
  },
  created() {
    this._getTags();
  },
  mounted() {
    setTimeout(() => {
      init();
    }, 99999);
  },
  watch: {
    $route(val) {
      if (val.query.tag) {
        this.tag = val.query.tag;
      } else {
        this.tag = '欢迎来到我的博客';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 500px;
  width: 100%;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    height: 100%;
    position: absolute;
    background: url('~@/assets/images/bg.jpg') no-repeat 50%;
    width: 100%;
    top: 0;
    background-size: cover;
  }
  .shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 0 0 0 transparent;
  }
  .navbar {
    width: 100%;
    height: 65px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    background-color: $baseColor;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    .menu {
      max-width: 1200px;
      height: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      margin: 0 auto;
      @include flex;
      justify-content: space-between;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      display: block;
      .left {
        height: 100%;
        ul {
          @include flex;
          height: 100%;
          cursor: pointer;
          justify-content: flex-start;
          font-size: 16px;
          li {
            color: $baseColor2;
            margin: 0 2px;
            padding: 0 20px;
          }
          .classfication {
            position: relative;
            cursor: default;
            i {
              transition: transform 0.3s;
              margin-left: 10px;
            }
            &:hover {
              .topbar_submenu_wrap {
                height: 180px;
              }
              i {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
    }
    .menu-m {
      display: none;
    }
  }
  .etc {
    animation: focus-in-expand-fwd 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 50px;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateX(-50%);
  }
  @keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      transform: translateZ(-800px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      filter: blur(0);
      opacity: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 330px;
    .etc {
      font-size: 30px;
    }
    .navbar {
      height: 50px;
      @include flex;
      .menu {
        display: none;
      }
      .menu-m {
        display: block;
        width: 100%;
        position: relative;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        .content {
          height: 25px;
          width: 100%;
          @include flex;
          justify-content: flex-start;
          box-sizing: border-box;
          padding: 0 20px;
          .svg-icon {
            color: #666;
          }
        }
      }
    }
  }
  .leftP {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: 9999999;
    left: 0;
    top: 0;
    @include flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .left {
    background-color: #fff;
    box-shadow: 0 0 18px 0 rgba(87, 87, 87, 0.15);
    height: 100%;
    width: 180px;
    box-sizing: border-box;
    padding: 30px 10px;
    ul {
      width: 100%;
      li {
        margin-bottom: 30px;
        font-size: 14px;
        color: #333;
        i {
          margin-left: 50px;
        }
        .tagT {
          @include flex;
          justify-content: space-between;
        }
        .tags {
          margin-top: 15px;
          .tag {
            padding: 10px;
          }
        }
      }
    }
  }
  .close {
    margin-top: calc((50px - 16px) / 2);
    margin-left: 20px;
    color: #666;
  }
}

.left-enter-active,
.left-leave-active {
  transition: all 0.3s linear;
  transform: translateX(0%);
}
.left-enter,
.left-leave {
  transform: translateX(-100%);
}
.left-leave-to {
  transform: translateX(-100%);
}

.tag-enter-active {
  transition: all 0.3s ease-in;
}

.tag-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.tag-enter,
.tag-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
