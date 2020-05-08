<template>
  <div>
    <div v-for="(item, index) in comment" :key="index">
      <div class="chat-item">
        <div class="avatar"></div>
        <div class="right">
          <div class="name">{{ item.name }}</div>
          <div class="date">{{ item.date }}</div>
          <div class="context">{{ item.content }}</div>
          <div class="icon" @click="showReplay(item._id, item.name)">
            <i class="el-icon-chat-dot-square"></i>
          </div>
        </div>
      </div>
      <transition name="sub-comments" v-if="(rePlayId === item._id) & isColl">
        <comment :comment="comment" @submit="submit" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object
    }
  },
  methods: {
    showReplay(id, name) {
      this.$emit('showReplay', id, name);
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-item {
  @include flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 10px;
  padding-top: 20px;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
    background-color: rosybrown;
  }
  .right {
    @include flex(column);
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 15px;
    width: calc(100% - 15px - 50px);
    .name {
      font-size: 16px;
      color: #444;
    }
    .date {
      font-size: 12px;
      margin-top: 5px;
      color: rgba(0, 0, 0, 0.38);
    }
    .context {
      margin-top: 9px;
    }
    .icon {
      text-align: right;
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
