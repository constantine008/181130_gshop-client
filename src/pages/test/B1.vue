<template>
  <div>
    B11111组件
  </div>
</template>
<script>


  export default {

    // 适用于路由组件没有缓存
    /*mounted () {
      console.log('b1 mounted()')
      this.intervalId = setInterval(() => {
        console.log('做些事件...')
      }, 1000)
    },*/

    /*beforeDestroy() {
      clearInterval(this.intervalId)
    },*/

    // 在当前组件对象被创建前调用, 不能直接访问this(不是组件对象)
    // 但可以通过next(component => {}), 在回调函数中访问组件对象
    beforeRouteEnter (to, from, next) {
      next((component) => {
        // 启动循环定时器并保存
        component.intervalId = setInterval(() => {
          console.log('做些事件...')
        }, 1000)
        // 放行
        next()
      })
    },

    // 在当前组件离开前调用, 可以访问this
    beforeRouteLeave (to, from, next) {
      // 在路由离开前清除定时器
      clearInterval(this.intervalId)
      next()
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>