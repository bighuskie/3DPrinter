<template>
  <div>
    <section class="detail-wrapper">
      <section class="head">
        <div class="text">
          <i class="glyphicon glyphicon-link"></i>
          <span>全部模型</span>
        </div>
        <div class="back text-center" title="返回" @click="goback">
          <i class="glyphicon glyphicon-arrow-left"></i>
        </div>
      </section>
      <section class="info-wrapper">
        <div class="info-top">
          <div class="img">
            <img src="../../assets/images/content2.png" alt>
          </div>
          <div class="info">
            <p class="text">模型信息</p>
            <ul>
              <li>
                <span class="title">模型名称</span>
                <span>马里奥</span>
              </li>
              <li>
                <span class="title">文件大小</span>
                <span>8.0MB</span>
              </li>
              <li>
                <span class="title">文件格式</span>
                <span>STL</span>
              </li>
              <li>
                <span class="title">上传时间</span>
                <span>2019-01-01</span>
              </li>
            </ul>
            <div class="label-wrapper">
              <span>3D模型</span>
              <span>热门</span>
              <span>STL文件</span>
            </div>
          </div>
        </div>
        <div class="info-foot">
          <div class="desc">
            <p class="title">模型描述</p>
            <p class="text">
              艺术中的情感即审美的情感，是一种无功利的具有人
              类普遍性的情感,情感在艺术活动动机的生成，创造与接受过程中均是重要的因素之一.
            </p>
          </div>
          <div class="preview">
            <p class="title">更多乐趣</p>
            <button class="btn btn-warning" @click="addModule">加入队列</button>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    /**
      返回上一级路由
      */
    goback() {
      this.$router.back();
    },
    /**
     * 将模型加入队列
     */
    addModule() {
      this.$store.state.moduleInfo = "test.stl";
    }
  }
};
</script>

<style lang="less" scoped>
@theme-color: #1ac272;
.detail-wrapper {
  width: 100%;
  height: 430px;
  position: absolute;
  top: 170px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 40px;
  background-color: #fff;
  .head {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid rgb(241, 235, 235);
    .text {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      i {
        display: inline-block;
        margin-right: 10px;
      }
    }
    .back {
      width: 50px;
      height: 25px;
      line-height: 25px;
      float: right;
      margin-right: 10px;
      margin-top: 12px;
      border-radius: 15px;
      font-size: 12px;
      border: 1px solid #fad55f;
      color: #fad55f;
      &:hover {
        width: 70px;
      }
    }
  }
  .info-wrapper {
    height: 380px;
    box-sizing: border-box;
    padding: 30px 10px;
    .info-top {
      position: relative;
      width: 100%;
      height: 250px;
      .img {
        // display: inline-block;
        width: 280px;
        height: 250px;
        line-height: 250px;
        img {
          max-width: 280px;
          max-height: 250px;
          vertical-align: middle;
        }
      }
    }
    .info {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      height: 250px;
      box-sizing: border-box;
      padding-top: 10px;
      .text {
        line-height: 30px;
        font-size: 18px;
        font-weight: bolder;
        border-bottom: 1px solid #eee;
        color: @theme-color;
      }
      ul {
        padding: 0 5px;
        li {
          line-height: 25px;
          list-style: none;
          .title {
            display: inline-block;
            font-weight: bold;
            margin-right: 60px;
          }
        }
      }
      .label-wrapper {
        width: 100%;
        span {
          display: inline-block;
          box-sizing: border-box;
          padding: 0 5px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-left: 10px;
          border: 1px solid @theme-color;
          border-radius: 5px;
        }
      }
    }
    .info-foot {
      position: relative;
      width: 100%;
      height: 100px;
      .desc {
        width: 280px;
        height: 100%;
        background-color: #fff;
        .text {
          width: 100%;
          height: 50px;
          text-indent: 24px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .preview {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 300px;
        height: 100%;
        button {
          width: 80px;
          margin-left: 10px;
          font-size: 12px;
        }
      }
      .title {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #eee;
        font-weight: bold;
      }
    }
  }
}
</style>
