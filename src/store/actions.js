/*
包含n个用于间接更新状态数据的方法的对象
 */
import {
  reqAddress,
  reqShops,
  reqCategorys,
  reqUser,
  reqLogout,
  reqGoods,
  reqRatings,
  reqInfo
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from './mutation-types'

export default {
  // 获取地址的异步action
  async getAddress ({commit, state}) {
    const {longitude, latitude} = state
    // 1. 发送异步ajax请求
    const result = await reqAddress(longitude, latitude)
    // 2. 成功后, 提交mutation
    if(result.code===0) {
      const addess = result.data
      commit(RECEIVE_ADDRESS, addess)
    }

  },

  // 获取食品分类列表的异步action
  async getCategorys ({commit}, callback) {
    // 1. 发送异步ajax请求
    const result = await reqCategorys()
    // 2. 成功后, 提交mutation
    if(result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
      // 更新完状态数据后调用
      typeof callback ==='function' && callback()
    }

  },

  // 获取商家列表的异步action
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    // 1. 发送异步ajax请求
    const result = await reqShops({longitude, latitude})
    // 2. 成功后, 提交mutation
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }

  },

  // 获取用户信息的异步action
  async getUser ({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },

  // 退出登陆的异步action
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },


  // 异步获取商家信息
  async getInfo({commit}) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表
  async getRatings({commit}) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  // 异步获取商家商品列表
  async getGoods({commit}) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },


}