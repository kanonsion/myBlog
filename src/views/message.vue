<template>
  <div class="messageRoot">
    <div class="chat">
      <comment @submit="submit" />
      <div class="chat-content">
        <!-- <div v-for="(item, index) in detail.comment" :key="index">
          <div class="chat-item">
            <div class="avatar"></div>
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div class="date">{{ item.date | getDate }}</div>
              <div class="context">{{ item.comment }}</div>
              <div class="icon">
                <i
                  class="el-icon-chat-dot-square"
                  @click="showReplay(item._id, item.name, item._id)"
                ></i>
              </div>
            </div>
          </div>
          <transition name="sub-comments" v-if="(rePlayId === item._id) & isColl">
            <comment :comment="comment" @submit="submit" />
          </transition>
          <div class="sub-content" v-for="(repay, index) in item.children" :key="index">
            <div class="sub-item">
              <div class="avatar"></div>
              <div class="right">
                <div class="name">{{ repay.name }}</div>
                <div class="date">{{ repay.date | getDate }}</div>
                <div class="context">
                  <span>{{ repay.at }}</span
                  >{{ repay.comment }}
                </div>
                <div class="icon">
                  <i
                    class="el-icon-chat-dot-square"
                    @click="showReplay(repay._id, repay.name, item._id)"
                  ></i>
                </div>
              </div>
            </div>
            <transition name="sub-comments" v-if="(rePlayId === repay._id) & isColl">
              <comment :comment="comment" @submit="submit" />
            </transition>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import comment from '@/components/comment';
export default {
  components: {
    comment
  }
};
</script>

<style lang="scss" scoped>
.messageRoot {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 10px;
  box-sizing: border-box;
}
</style>
