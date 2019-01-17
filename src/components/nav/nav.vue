<template>
  <div>
    <nav class="navbar navbar-default c_navbar navbar-static-top" role="navigation">
      <div class="container c_cot">
        <div class="navbar-header c_header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img
              src="../../assets/images/brand.png"
              alt
              class="img-responsive center-block brand_img hidden-xs"
            >
          </a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="nav navbar-nav navbar-right">
            <li class="cative nav_menu_li">
              <a href="http://120.79.148.35:3010/#/home" class="nav_menu_font">首页</a>
            </li>
            <li class="cative nav_menu_li">
              <a href="http://120.79.148.35:3010/modelbase" class="nav_menu_font">模型库</a>
            </li>
            <li class="cative nav_menu_li">
              <a href="https://3d.biowinedu.com/authenticate" class="nav_menu_font">在线建模</a>
            </li>
            <li class="cative nav_menu_li">
              <a href="http://120.79.148.35:3010/printing" class="nav_menu_font">在线打印</a>
            </li>
            <li class="cative nav_menu_li">
              <router-link to="/login" class="nav_menu_font">当前状态</router-link>
            </li>
            <li class="cative nav_menu_li">
              <a href="http://120.79.148.35:3010/about" class="nav_menu_font">关于</a>
            </li>
            <li class="cative nav_menu_li btn_login login_img">
              <a href="http://120.79.148.35:3010/#/login">
                <img src="../../assets/images/login.png" class="img-circle">
                <span>user_test</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.c_navbar {
  background-color: #464646;
  border-color: #e7e7e700;
  margin-bottom: 0;
  .c_cot {
    width: 90%;
    .c_header {
      display: inline-block;
      width: 19%;
      height: 75px;
    }
    .nav_menu_li {
      margin-right: 1vh;
      .nav_menu_font {
        line-height: 44px;
        font-size: 1.5em;
        color: #fff;
      }
    }
    .btn_login {
      border: 3px solid #fff;
      border-radius: 18px;
      margin-top: 21px;
      width: 74px;
      height: 36px;
      a {
        color: #fff;
        line-height: 0;
        font-size: 1.3em;
        .img-circle {
          width: 45px;
          height: 45px;
          display: inline-block;
        }
        span {
          display: inline-block;
        }
      }
    }
    .login_img {
      margin-top: 0;
      border: none;
      border-radius: 0;
      width: auto;
    }
  }
}
</style>

