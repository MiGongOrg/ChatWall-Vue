import Vue from 'vue'
import Wilddog from 'wilddog'
import WildVue from 'wildvue'
import App from './App'
import router from './router'

Vue.use(Wilddog)
Vue.use(WildVue)

Vue.config.productionTip = false

var wilddog = Wilddog.initializeApp({
  syncURL: 'https://wd5619279824ctzdha.wilddogio.com'
})

let ref = wilddog.sync().ref('chats')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  wilddog: {
    ref: ref
  }
})
