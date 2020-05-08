<template>
  <div class="comment">
    <div class="content">
      <textarea
        :placeholder="comment.placeholder"
        v-model="obj.context"
        class="input content-inner"
      ></textarea>
    </div>
    <div><input type="text" placeholder="名称(必填)" v-model="obj.name" class="input" /></div>
    <div class="submit">
      <div class="btn" @click="submit">发表评论</div>
    </div>
    <!--  -->
    <div class="dialog" v-if="err">{{ errMsg }}</div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => {
        return {
          placeholder: '输入评论'
        };
      }
    }
  },
  data() {
    return {
      obj: {
        name: '',
        context: ''
      },
      errMsg: '',
      err: false,
      flag: true
    };
  },
  methods: {
    submit() {
      if (this.obj.name === '' || this.obj.context === '') {
        if (this.flag) {
          this.err = true;
          this.flag = false;
          this.obj.name === '' ? (this.errMsg = '姓名不能为空') : (this.errMsg = '内容不能为空');
          setTimeout(() => {
            this.err = false;
            this.flag = true;
          }, 1500);
        }
      } else {
        this.$emit('submit', this.obj);
        this.obj = {
          name: '',
          content: ''
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 20px;
  position: relative;
  .title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .input {
    transition: all 0.3s;
    border-radius: 2px;
    padding: 5px 10px;
    color: #333;
    &:hover {
      border-color: #666;
    }
    &:focus {
      border-color: #666;
    }
  }
  .content {
    width: 100%;
    margin-bottom: 10px;
    .content-inner {
      width: 100%;
      box-sizing: border-box;
      height: 80px;
    }
  }
  .submit {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    .btn {
      width: 80px;
      font-size: 12px;
      border-radius: 3px;
      padding: 8px 0;
      cursor: pointer;
      @include flex;
      transition: all 0.3s;
      background-color: rgba(29, 47, 58, 0.6);
      color: #fff;
      box-shadow: 0 5px 5px $button-shadow-color-normal;
      &:hover {
        background-color: rgba(29, 47, 58, 0.7);
      }
      &:active {
        background-color: rgba(29, 47, 58, 0.8);
      }
    }
  }
  .dialog {
    position: absolute;
    background-color: rgba($color: #444, $alpha: 0.8);
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    top: 40%;
    left: 50%;
    font-size: 14px;
    margin-left: -45px;
    animation: bounce-left 0.8s both;
  }
  @keyframes bounce-left {
    0% {
      transform: translateX(-48px);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      transform: translateX(-26px);
      animation-timing-function: ease-in;
    }
    65% {
      transform: translateX(-13px);
      animation-timing-function: ease-in;
    }
    82% {
      transform: translateX(-6.5px);
      animation-timing-function: ease-in;
    }
    93% {
      transform: translateX(-4px);
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87%,
    98% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
}
</style>
