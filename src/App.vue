<template>
  <div id="app">
      <keep-alive>
       <router-view></router-view>
      </keep-alive>
      <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from "components/content/mainTabbar"
export default {
  name: 'app',
  components: {
    mainTabbar
  },
  created(){}
}
</script>

<style>
@import "assets/css/base.css"
</style>
