<template>
  <div id="app">
    
    <router-view/>
    <footinfo></footinfo>
  </div>
</template>

<script>
import footinfo from "./components/footer/footer";
export default {
  components: {
    footinfo
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
}
</style>
