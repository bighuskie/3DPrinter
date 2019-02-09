<template>
  <div>
    <nav class="nav-wrapper">
      <div class="branch-wrapper">
        <img src="./images/brand.png" alt>
      </div>
      <div class="wall"></div>
      <div class="list-wrapper">
        <ul>
          <router-link to="/">
            <li>首页</li>
          </router-link>
          <router-link to="/">
            <li>在线建模</li>
          </router-link>
          <router-link to="/onlinePrint">
            <li>在线打印</li>
          </router-link>
          <router-link to="/status">
            <li>当前状态</li>
          </router-link>
          <router-link to="/about">
            <li>关于我们</li>
          </router-link>
          <router-link to="/login">
            <li>登录</li>
          </router-link>
          <router-link to="/register">
            <li>注册</li>
          </router-link>
        </ul>
      </div>
    </nav>
    <!-- <nav
      class="navbar navbar-default c_navbar navbar-static-top"
      role="navigation"
      :style="{'background-color':navBgColor}"
    >
      <div class="container c_cot">
        <div class="navbar-header c_header hidden-md">
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
          <a class="navbar-brand " href="#">
            <img
              src="../../assets/images/brand.png"
              alt
              class="img-responsive center-block brand_img hidden-xs hidden-md"
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
              <router-link to="/" class="nav_menu_font">在线打印</router-link>
            </li>
            <li class="cative nav_menu_li">
              <router-link to="/status" class="nav_menu_font">当前状态</router-link>
            </li>
            <li class="cative nav_menu_li">
              <router-link to="/about" class="nav_menu_font">关于</router-link>
            </li>
            <li class="cative nav_menu_li btn_login login_img">
                <router-link to="/login" class="nav_menu_font">登录</router-link>
            </li>
            <li class="cative nav_menu_li btn_login login_img">
                <router-link to="/register" class="nav_menu_font">注册</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>-->
  </div>
</template>

<script>
export default {
  props: {
    navBgColor: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.nav-wrapper {
  display: flex;
  align-items: center;
  height: 75px;
  width: 100%;
  min-width: 1135px;
  z-index: 999;
  background-color: #f8f8f800;
  .branch-wrapper {
    flex-basis: 400px;
    text-align: center;
    img {
      width: 250px;
      height: 50px;
    }
  }
  .wall {
    flex-grow: 1;
  }
  .list-wrapper {
    ul {
      padding: 0;
      height: 75px;
      li {
        display: inline-block;
        list-style: none;
        line-height: 75px;
        margin-right: 40px;
        font-size: 20px;
        color: white;
      }
    }
  }
}
</style>

