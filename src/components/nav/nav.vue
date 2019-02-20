<template>
  <div>
    <nav class="nav-wrapper" :style="{'backgroundColor':navBgColor}">
      <div class="branch-wrapper">
        <img src="./images/brand.png" alt>
      </div>
      <div class="wall"></div>
      <div class="list-wrapper">
        <ul>
          <router-link to="/">
            <li>首页</li>
          </router-link>
          <a href="https://3d.biowinedu.com/authenticate">
            <li>在线建模</li>
          </a>
          <router-link to="/onlinePrint">
            <li>在线打印</li>
          </router-link>
          <router-link to="/userMsg/orderPreview">
            <li>我的订单</li>
          </router-link>
          <a href="javascript:;">
            <li>关于我们</li>
          </a>
          <router-link to="/login">
            <li>登录</li>
          </router-link>
        </ul>
      </div>
    </nav>
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
  background-color: #383434;
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

