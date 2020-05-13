<template>
  <div class="about">
    <div class="left">
      <div class="msg">
        <div class="title">关于我</div>
        <div class="content">
          <p>20届毕业生，性别男，软件工程专业，主攻前端，略懂后端</p>
          <p>本站风格，均属个人兴趣，现居住在成都</p>
          <p>找工作ing (ง •̀_•́)ง (*•̀ㅂ•́)و</p>
        </div>
      </div>
      <div class="msg">
        <div class="title">关于本站</div>
        <div class="content">
          <p>本站的诞生纯属个人兴趣，现系统还非常简陋，待完善</p>
          <p>前端技术 ：Vue + ElementUi</p>
          <P>后端技术 ：Express + MongoDB</P>
        </div>
      </div>
      <div class="msg">
        <div class="title">特别说明</div>
        <div class="content">
          <p>本站文章仅代表个人观点，和任何组织或个人无关。</p>
          <p>本站前端开发代码没有考虑对IE浏览器的兼容。</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="bg"></div>
      <div class="bg2"></div>
      <div class="profile">
        <el-tooltip class="item" effect="dark" content="QQ" placement="top">
          <a href="http://123.57.189.47:3003/upload/qq.jpg" target="_blank"
            ><svg-icon icon-class="qq"
          /></a>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Github" placement="top">
          <a href="https://github.com/kanonsion" target="_blank"><svg-icon icon-class="github"/></a>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 10px;
  box-sizing: border-box;
  @include flex;
  justify-content: space-between;
  align-items: flex-start;
  .left {
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    width: 60%;
    .msg {
      margin-bottom: 20px;
    }
    .title {
      padding-left: 15px;
      font-size: 20px;
      border-left: 3px solid #2ecc71;
    }
    .content {
      margin-left: 15px;
      margin-top: 20px;
      font-size: 14px;
      p {
        line-height: 28px;
      }
    }
  }
  .right {
    background-color: #fff;
    width: 35%;
    overflow: hidden;
    position: relative;
    transition: all 0.3s linear;
    &:hover {
      box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
      margin-top: -5px;
    }
    .bg {
      background: url('~@/assets/images/about.png');
      height: 220px;
      background-position-y: -20px;
      border-radius: 2px 2px 0 0;
      background-size: cover;
    }
    .bg2 {
      position: absolute;
      height: 40px;
      width: 100%;
      background: linear-gradient(to bottom, transparent, white);
      top: 180px;
    }
    .profile {
      padding: 20px;
      border-radius: 0 0 2px 2px;
      @include flex;
      a {
        text-decoration: none;
        color: black;
      }
      .item {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        @include flex;
        margin-right: 20px;
        cursor: pointer;
        svg {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
