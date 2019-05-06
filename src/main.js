/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from 'components/Header/Header.vue'

// 注册全局组件
Vue.component('Header', Header)

new Vue({
  el: '#app',
  /*components: {
    App   // <App>
  },
  template: '<App/>'*/
  render: h => h(App),
  /*render: function (createElement) {
    return createElement(App)   // <App/>
  }*/
  router, // 配置路由器
  store, // 配置vuex   ===> 所有组件对象都有了一个属性: $store
})

/*
store对象的语法
1). 读取数据
    state
    getters
2). 更新数据
    dispatch()  ===> 触发action调用
    commit()  ===> 触发mutation调用
 */