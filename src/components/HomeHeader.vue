<template>
  <el-header height="60px">
    <el-row>
      <el-col :xl="12" :lg="10" :md="8" :sm="7" :xs="0">&nbsp;</el-col>
      <el-col :xl="7" :lg="9" :md="12" :sm="13" :xs="14">
        <ul>
          <li>
            <i class="el-icon-s-home"></i>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <i class="el-icon-menu"></i>
            <router-link to="/types">分类</router-link>
          </li>
          <li>
            <i class="el-icon-s-cooperation"></i>
            <router-link to="/journal">日志</router-link>
          </li>
          <li>
            <i class="el-icon-search"></i>
            <router-link to="#">搜索</router-link>
          </li>
          <li>
            <i class="el-icon-user"></i>
            <router-link to="#">关于</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :xl="5" :lg="5" :md="4" :sm="4" :xs="10"></el-col>
    </el-row>
  </el-header>
</template>

<style lang="stylus">
@import url('./../common/css/a.css');
.el-header
  background-color #34495e
  color #ffffff
  line-height 60px
  min-width 1000px
  .el-row
    max-width 100%
    ul
      display flex
      justify-content space-around
      align-items center
</style>
