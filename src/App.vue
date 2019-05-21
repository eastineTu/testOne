<template>
  <div id="app">
    <router-view/>
    <div id="allmap" style="display: none" ></div>
  </div>
</template>
<style lang="stylus">
  *
    margin 0
    padding 0
    box-sizing border-box

  #app
    width 100%
    height 100%
    -webkit-overflow-scrolling touch
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align center
    margin 0 auto
    position absolute
    left 0
    top 0
</style>
