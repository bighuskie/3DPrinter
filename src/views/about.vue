<template>
  <div>
    <navinfo :navBgColor="navBgColor"></navinfo>
    <main class="container-fuild">
      <section class="bg-wrapper">
        <div class="img-wrapper">
          <img src="../assets/images/background.jpg" alt srcset>
        </div>
      </section>
      <section class="text-wrapper">
        <p class="text">年轻而极具创新思维，擅于从实践中获取真知的一群小伙子，为3D打印提供全新技术方案，追求新时代下的智能智造。</p>
      </section>
      <section class="container-wrapper">
        <section class="container approach-wrapper">
          <p class="text-center">我们的途径</p>
          <ul class="intro-wrapper">
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border">
                  <img src="../assets/images/camra.png" alt>
                </div>
              </div>
              <p class="title">技术</p>
              <p class="desc">我们使用我们的Web应用程序与我们的内部技术将您连接到最近的服务提供商。通过硬件和软件合理协作为你提供一整套方便的系统流程服务。</p>
            </li>
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border">
                  <img src="../assets/images/react.png" alt>
                </div>
              </div>
              <p class="title">效率</p>
              <p class="desc">我们提供24小时保证3D自助打印服务，通常可以在同一天开始打印。送货？通过选择适合您的时间和地点来安排打印地点，取货不再等待了。</p>
            </li>
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border">
                  <img src="../assets/images/computer.png" alt>
                </div>
              </div>
              <p class="title">技术</p>
              <p class="desc">我们使用我们的Web应用程序与我们的内部技术将您连接到最近的服务提供商。通过硬件和软件合理协作为你提供一整套方便的系统流程服务。</p>
            </li>
          </ul>
        </section>
      </section>
      <section class="container-wrapper">
        <section class="container approach-wrapper">
          <p class="text-center">对于合作伙伴</p>
          <div class="descInfo">我们将客户与您联系起来。如果您是3D打印经销商或有相关需求，您可以通过我们的平台注册，联系我们进行协商合作。</div>
          <ul class="intro-wrapper">
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border">
                  <img src="../assets/images/camra.png" alt>
                </div>
              </div>
              <p class="title">技术</p>
            </li>
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border">
                  <img src="../assets/images/react.png" alt>
                </div>
              </div>
              <p class="title">效率</p>
            </li>
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border">
                  <img src="../assets/images/computer.png" alt>
                </div>
              </div>
              <p class="title">技术</p>
            </li>
          </ul>
        </section>
      </section>
      <section class="container-wrapper feature-container">
        <section class="container feature-wrapper">
          <ul class="intro-wrapper">
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border border-none">
                  <img src="../assets/images/camra.png" alt>
                </div>
              </div>
              <p class="title">技术</p>
            </li>
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border border-none">
                  <img src="../assets/images/react.png" alt>
                </div>
              </div>
              <p class="title">效率</p>
            </li>
            <li class="col-md-4">
              <div class="img-wrapper">
                <div class="border border-none">
                  <img src="../assets/images/computer.png" alt>
                </div>
              </div>
              <p class="title">技术</p>
            </li>
          </ul>
        </section>
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
  .bg-wrapper {
    height: 525px;
    min-width: 1135px;
    .img-wrapper {
      // height: 600px;
      min-width: 1135px;
      position: relative;
      top: -75px;
      bottom: 0;
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
    margin-top: 255px;
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
  .container-wrapper,
  .feature-container {
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    .approach-wrapper,
    .feature-wrapper {
      p {
        margin-top: 15px;
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        font-weight: bolder;
      }
      .descInfo {
        width: 500px;
        margin: 0 auto;
        padding-bottom: 15px;
        text-align: center;
        font-size: 18px;
        font-weight: bolder;
      }
      .intro-wrapper {
        padding: 0;
        p {
          height: 50px;
          line-height: 50px;
        }
        li {
          list-style: none;
          padding-bottom: 50px;
          .img-wrapper {
            height: 80px;
            width: 100%;
            .border {
              width: 80px;
              height: 80px;
              margin: 20px auto;
              text-align: center;
              line-height: 75px;
              border: 1px solid #08aba6;
              border-radius: 50%;
            }
            .border-none {
              border: none;
              margin-bottom: 0;
              height: 50px;
              width: 50px;
            }
            img {
              width: 50px;
              height: 50px;
            }
          }
          p {
            margin: 0;
            font-size: 16px;
            text-align: center;
            font-weight: normal;
            &.title {
              margin-top: 10px;
              color: rgb(68, 63, 63);
            }
            &.desc {
              line-height: 24px;
              color: #767676;
            }
          }
        }
      }
    }
  }
  .feature-container {
    padding-bottom: 0;
    background-color: #a9f3d06e;
    // #08aba6
  }
}
</style>
