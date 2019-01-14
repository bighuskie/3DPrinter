<template>
  <div id="app">
    <navinfo></navinfo>
    <router-view/>
    <footinfo></footinfo>
  </div>
</template>

<script>
import navinfo from "./components/nav/nav";
import footinfo from "./components/footer/footer";

export default {
  components: {
    navinfo,
    footinfo
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
}
</style>
