<template>
  <div>
    <navinfo :navBgColor="navBgColor"></navinfo>
    <div class="container-fuild img-wrapper">
      <img src="../assets/images/unsplash.jpg" alt srcset>
    </div>
    <div class="wall"></div>
  </div>
</template>

<script>
import navinfo from "../components/nav/nav";

export default {
  data() {
    return {
      navBgColor: "#f8f8f800"
    };
  },
  components: {
    navinfo
  }
};
</script>

<style lang="less" scoped>
.img-wrapper {
  height: 500px;
  position: relative;
  top: -76px;
  left: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
.wall {
  width: 100%;
  height: 10px;
}
</style>
