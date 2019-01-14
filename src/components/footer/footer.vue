<template>
  <div>
    <div class="clearfix">
      <div class="container-fluid" id="footer">
        <div class="row">
          <div class="col-lg-2 col-lg-offset-5">
            <h3 class="h_word">联系我们</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 text-center">
            <img src="../../assets/images/wechat.png" alt class="img-responsive center-block f_img">
            <img src="../../assets/images/qq.png" alt class="img-responsive center-block f_img">
            <img src="../../assets/images/weibo.png" alt class="img-responsive center-block f_img">
            <img src="../../assets/images/facebook.png" alt class="img-responsive center-block f_img">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
            <h3>地址：广东省广州大学城广东工业大学E110</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
            <h3>@2017-2018 Printors.Allright reserved.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#footer {
  // display: none;
  background: #808080a1;
  div {
    div {
      .f_img {
        width: 40px;
        display: inline-block;
        margin-right: 25px;
        cursor: pointer;
      }
      h3 {
        color: white;
        text-align: center;
      }
    }
  }
}
</style>
