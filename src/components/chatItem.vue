<style scoped>
  .chat {
    display: flex;
    align-items: center;
    padding: .1rem;
    background-color: rgba(255,255,255,.1);
    border-radius: 1rem;
  }
  .avatar {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: block;
    margin-right: .1rem;
    vertical-align: middle;
  }
  .message {
    padding: 0 .2rem 0 0;
    margin: 0;
    font-size: .36rem;
  }
</style>

<template>
  <div class="chat" v-if="item.data.show">
    <img class="avatar" :src="item.data.user.avatarUrl">
    <p class="message">{{item.data.message}}</p>
  </div>
</template>

<script>
export default {
  name: 'ChatItem',
  props: ['item'],
  data () {
    return {}
  }
}
</script>
