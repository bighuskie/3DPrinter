<template>
  <div>
    <navinfo :navBgColor="navBgColor"></navinfo>
    <main class="container-fuild">
      <section class="bg-wrapper">
        <div class="img-wrapper">
          <img src="../assets/images/background.jpg" alt srcset>
        </div>
        <div class="text-wrapper">
          <p>随时随地打印</p>
          <p>分享你的创意、设计与技术</p>
          <p class="bigger">开始你的3D创作</p>
          <router-link to="/register">注册</router-link>
        </div>
      </section>
      <section class="info-wrapper">
        <P class="text">文件一键上传，模型轻松获取</P>
        <ul class="img-wrapper">
          <li>
            <p>第一步</p>
            <p class="tip">选择文件上传或在线建模</p>
            <img src="../assets/images/add.png" alt srcset>
          </li>
          <li>
            <p>第二步</p>
            <p class="tip">按需求设置文件打印参数</p>
            <img src="../assets/images/settings-work-tool.png" alt srcset>
          </li>
          <li>
            <p>第三步</p>
            <p class="tip">选择就近的空闲打印机打印</p>
            <img src="../assets/images/upload.png" alt srcset>
          </li>
          <li>
            <p>第四步</p>
            <p class="tip">等待打印机完成后自取模型</p>
            <img src="../assets/images/time.png" alt srcset>
          </li>
        </ul>
      </section>
      <section class="explain-wrapper">
        <p>随时随地打印，拒绝等待</p>
        <div class="img">
          <img src="../assets/images/city.png" alt srcset>
        </div>
        <div class="text">
          <p>打印机多点投放</p>
          <p>将覆盖多个城市的学校、创客空间</p>
          <p>享受最便捷的打印服务</p>
          <p>目前已打算在佛山、广州、深圳等城市进行试点铺开，未来将走进更多的城市进行推广。</p>
        </div>
      </section>
      <section class="desc-wrapper">
        <p>一个连接全世界的交流社区</p>
        <div class="desc">
          <P>Printers汇聚了全世界爱好3D打印的用户，在这里你可以与别人分享你的模型设计、技术开发或者心得体会，留下你学习的点点滴滴</P>
        </div>
        <ul class="explain-wrapper">
          <li>
            <p>100个</p>
            <span>国家</span>
          </li>
          <li>
            <p>500小时</p>
            <span>视频教程</span>
          </li>
          <li>
            <p>3000个</p>
            <span>模型</span>
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
  .bg-wrapper {
    height: 100%;
    min-width: 1135px;
    .img-wrapper {
      //   height: 700px;
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
    .text-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 700px;
      height: 300px;
      margin: -100px 0 0 -350px;
      text-align: center;
      font-size: 30px;
      color: white;
      p {
        line-height: 50px;
        &.bigger {
          font-size: 90px;
          line-height: 110px;
        }
      }
      a {
        display: inline-block;
        width: 160px;
        height: 50px;
        line-height: 50px;
        text-decoration: none;
        border-radius: 25px;
        color: #fff;
        background-color: #07be3e;
      }
    }
  }
  .info-wrapper {
    width: 100%;
    min-width: 1135px;
    .text {
      text-align: center;
      font-size: 25px;
    }
    .img-wrapper {
      width: 100%;
      padding: 0;
      margin-top: 25px;
      text-align: center;
      li {
        list-style: none;
        display: inline-block;
        width: 200px;
        height: 200px;
        border-right: 1px solid #000;
        text-align: center;
        &:last-child {
          border-right: none;
        }
        p {
          width: 100px;
          line-height: 45px;
          margin: 0 auto;
          color: #999;
          &.tip {
            line-height: 20px;
            margin-bottom: 10px;
            font-size: 12px;
            color: #000;
          }
        }
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  .explain-wrapper {
    width: 100%;
    text-align: center;
    p {
      height: 120px;
      line-height: 120px;
      text-align: center;
      font-size: 30px;
    }
    div {
      display: inline-block;
      width: 500px;
      height: 300px;
      &.img {
        width: 600px;
        img {
          width: 600px;
          height: 300px;
          vertical-align: bottom;
        }
      }
      &.text {
        vertical-align: top;
        box-sizing: border-box;
        padding: 60px 0 0 20px;
        p {
          width: 600px;
          height: 40px;
          text-align: left;
          line-height: 30px;
          font-size: 30px;
          &:last-child {
            width: 500px;
            font-size: 18px;
          }
        }
      }
    }
  }
  .desc-wrapper {
    width: 100%;
    min-width: 1135px;
    height: 500px;
    background: url("../assets/images/content2.png") no-repeat center;
    background-size: contain;
    margin: 30px 0 50px 0;
    p {
      text-align: center;
      font-size: 30px;
    }
    .desc {
      width: 100%;
      margin-top: 50px;
      padding: 30px 0;
      background-color: #ffffffd7;
      p {
        width: 630px;
        margin: 0 auto;
      }
    }
    .explain-wrapper {
      padding: 0;
      margin-top: 60px;
      text-align: center;
      li {
        list-style: none;
        display: inline-block;
        width: 250px;
        height: 250px;
        text-align: center;
        p {
          font-size: 40px;
        }
        span {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
