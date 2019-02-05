<template>
  <div>
    <navinfo></navinfo>
    <main class="container-fuild">
      <section class="bg-wrapper">
        <div class="img-wrapper">
          <img src="../assets/images/background.jpg" alt srcset>
        </div>
      </section>
      <section class="text-wrapper">
        <p class="text">年轻而极具创新思维，擅于从实践中获取真知的一群小伙子，为3D打印提供全新技术方案，追求新时代下的智能智造。</p>
      </section>
      <section class="siwper-wrapper">
        <ul>
          <li>
          <img src="../assets/images/printer3.jpg" alt>
        </li>
        <li>
          <img src="../assets/images/printer3.jpg" alt>
        </li>
        <li>
          <img src="../assets/images/printer3.jpg" alt>
        </li>
        <li>
          <img src="../assets/images/printer3.jpg" alt>
          </li>
          <li>
          <img src="../assets/images/printer3.jpg" alt>
        </li>
        <li>
          <img src="../assets/images/printer3.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/printer3.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/printer3.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/printer3.jpg" alt>
          </li>
        </ul>
      </section>
    </main>
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
.container-fuild {
  margin-bottom: 10px;
  .bg-wrapper {
    height: 525px;
    min-width: 1135px;
    .img-wrapper {
      height: 600px;
      min-width: 1135px;
      position: relative;
      top: -75px;
      left: 0;
      z-index: -1;
      background-color: #000;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .text-wrapper {
    width: 100%;
    height: 200px;
    background-color: #a9f3d06e;
    p {
      width: 625px;
      height: 200px;
      margin: 0 auto;
      padding-top: 30px;
      box-sizing: border-box;
      text-align: center;
      font-size: 30px;
    }
  }

  .siwper-wrapper {
    width: 100%;
    height: 300px;
    ul {
      display: flex;
      width: 100%;
      padding: 0;
      font-size: 0;
      background-color: #ff4;
      li {
        flex-basis: 33.33333333333%;
        height: 300px;
        img {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
}
</style>
