<style>
  .danmakuContainer {
    width: 100%;
    height: 100%;
    color: #ffffff;
  }
  .content {
    display: inline-block;
  }
  .chatBox {
    position: absolute;
    left: 0;
  }
  .insert-enter {
    transform: translateX(100vw);
  }

</style>

<template>
  <div class="danmakuContainer">
    <transition-group
      name="insert"
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <li class="chatBox" v-for="item in items" :key="item.id">
        <chat-item :item="item"></chat-item>
      </li>
    </transition-group>
  </div>
</template>

<script>
import ChatItem from '../components/chatItem'

export default {
  name: 'Danmaku',
  data () {
    return {
      items: []
    }
  },
  components: {
    ChatItem
  },
  methods: {
    beforeEnter (el) {
      let wh = window.innerHeight
      // 随机位置
      let top = Math.floor(Math.random() * wh)
      el.style.top = top + 'px'
      console.log('动画enter之前')
    },
    enter (el, done) {
      let ew = el.offsetWidth
      let speed = ew / 50
      el.style.transition = 'ease-in all ' + speed + 's'
      console.log('动画enter进入')
      done()
    },
    afterEnter (el) {
      let w = el.offsetWidth
      el.style.left = '-' + w + 'px'
      console.log('动画进入之后')
    },
    beforeLeave (el) {
      console.log('动画leave之前')
    },
    leave (el) {
      console.log('动画leave')
    },
    afterLeave (el) {
      console.log('动画leave之后')
    }
  },
  // 生命周期函数（在整个实例中只执行一次）
  mounted: function () {
    let _this = this
    let ref = _this.$root.$wilddogRefs.ref
    // 监听初始化数据与新增数据（最新10条数据）
    ref.limitToLast(10).on('child_added', function (snapshot, prKey) {
      let key = snapshot.key()
      let val = snapshot.val()

      val['show'] = true

      let newChatItem = {id: key, data: val}
      // console.log(newChatItem)
      _this.items.push(newChatItem)
    }, _this)

    // 监听删除同步数据
    ref.on('child_removed', function (snapshot) {
      let key = snapshot.key()
      let index = _this.items.findIndex(function (item, index) {
        if (item.id === key) {
          return true
        }
        return false
      })
      // 判断是否有这条数据
      if (index >= 0) {
        // 删除这条数据后同步
        _this.items.splice(index, 1)
      }
    }, _this)
  },
  created () {
    document.body.removeChild(document.getElementById('Loading'))
  }
}
</script>
