<template>
  <div>
    <section class="mask-wrapper">
      <section class="main">
        <div class="main-head">
          <ul class>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <i class="close text-right glyphicon glyphicon-off" title="关闭" @click="goback"></i>
        </div>
        <section class="main-container">
          <div class="text-wrapper text-center">
            <i class="glyphicon glyphicon-pencil"></i>
            <span>search</span>
          </div>
          <div class="search-wrapper">
            <form>
              <input type="text" name="search">
            </form>
          </div>
          <div class="icon">
            <i class="glyphicon glyphicon-search text-center"></i>
          </div>
        </section>
        <section class="sort-wrapper">
          <ul>
            <li :class="{'selected':sType==0}" @click="select(0)">
              <router-link to="/onlinePrint/all">全部模型</router-link>
            </li>
            <li :class="{'selected':sType==1}" @click="select(1)">
              <router-link to="/onlinePrint/cartoon">动漫手办</router-link>
            </li>
            <li :class="{'selected':sType==2}" @click="select(2)">
              <router-link to="/onlinePrint/innovate">创新设计</router-link>
            </li>
            <li :class="{'selected':sType==3}" @click="select(3)">
              <router-link to="/onlinePrint/education">教育用品</router-link>
            </li>
          </ul>
        </section>
        <section class="model-wrapper" ref="modelWrapper">
          <div>
            <ul>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
              <li>
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img src="../../assets/images/content2.png" alt srcset>
                  </div>
                  <p class="info">
                    <img src="../../assets/images/pla.png" alt>
                    <span class="author">Hero</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">168</span>
                  </p>
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      showFlag: false,
      sType: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initBScroll();
    });
  },
  methods: {
    /**
     * 返回上一个路由
     */
    goback() {
      this.$router.push("/onlinePrint");
    },
    /**
     * 选中模型类型控制样式
     */
    select(type) {
      this.sType = type;
    },
    initBScroll() {
      this.scroll = new BScroll(this.$refs.modelWrapper, {
        click: true
      });
      console.log(this.$refs.modelWrapper);
      console.log(scroll);
    }
  }
};
</script>

<style lang="less" scoped>
@theme-color: #1ac272;
.mask-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  &.mask-hidden {
    display: none;
  }
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 600px;
    margin-top: -300px;
    margin-left: -400px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    .main-head {
      width: 100%;
      height: 30px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: @theme-color;
      margin: 0;
      ul {
        padding: 0;
        display: inline-block;
        height: 30px;
        li {
          display: inline-block;
          list-style: none;
          width: 15px;
          height: 15px;
          margin-top: 7px;
          margin-left: 7px;
          border-radius: 50%;
          background-color: rgb(64, 235, 141);
        }
      }
      .close {
        line-height: 30px;
        margin-right: 20px;
        font-size: 16px;
        color: rgb(255, 6, 6);
      }
    }
    .main-container {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      .text-wrapper {
        flex-basis: 220px;
        height: 50px;
        line-height: 50px;
        font-size: 25px;
        font-weight: bolder;
      }
      .search-wrapper {
        line-height: 30px;
        form {
          height: 28px;
          input {
            width: 350px;
            height: 30px;
          }
        }
      }
      .icon {
        flex-grow: 1;
        height: 30px;
        padding: 0;
        i {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          width: 60px;
          // margin-bottom: 4px;
          background-color: #fad55f;
          font-size: 16px;
        }
      }
    }
    .sort-wrapper {
      width: 100%;
      height: 40px;
      ul {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid #eee;
        li {
          list-style: none;
          width: 100px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          &:hover {
            border-bottom: 2px solid #fad55f;
          }
          &.selected {
            border-bottom: 2px solid #fad55f;
          }
          a {
            text-decoration: none;
            font-size: 13px;
            color: #000;
          }
        }
      }
    }
    .model-wrapper {
      width: 100%;
      height: 430px;
      box-sizing: border-box;
      padding-bottom: 20px;
      overflow: hidden;
      background-color: rgb(253, 253, 253);
      ul {
        width: 645px;
        padding: 0;
        font-size: 0;
        height: 100%;
        margin: 0 auto;
        a {
          text-decoration: none;
        }
        li {
          list-style: 0;
          display: inline-block;
          width: 150px;
          height: 150px;
          margin-top: 15px;
          margin-left: 15px;
          box-sizing: border-box;
          padding: 3px 3px 0px 3px;
          border: 1px solid #eee;
          &:nth-child(4n + 1) {
            margin-left: 0;
          }
          .img-wrapper {
            width: 100%;
            height: 120px;
            background-color: #eee;
            img {
              max-width: 100%;
              max-height: 120px;
            }
          }
          .info {
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            img {
              width: 15px;
              height: 15px;
              vertical-align: top;
              border-radius: 50%;
              margin-top: 6px;
              margin-left: 3px;
            }
            .author {
              margin-left: 4px;
              margin-right: 55px;
              color: pink;
            }
            i {
              margin-top: 1px;
              color: rgb(58, 55, 55);
            }
            .favnum {
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
