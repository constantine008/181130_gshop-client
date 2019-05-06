/*
包含n个用于直接更新状态数据的方法的对象
 */
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
} from './mutation-types'

export default {
  // 接收地址
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  // 接收商家数组
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  // 接收分类数组
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
}