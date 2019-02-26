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
              <input type="text" name="search" v-model="keyword">
            </form>
          </div>
          <div class="icon" @click="search(keyword)">
            <i class="glyphicon glyphicon-search text-center"></i>
          </div>
        </section>
        <section class="sort-wrapper">
          <ul>
            <router-link to="/onlinePrint/all">
              <li :class="{'selected':sType==0}" @click="select(0)">全部模型</li>
            </router-link>
            <router-link to="/onlinePrint/cartoon">
              <li :class="{'selected':sType==1}" @click="select(1)">动漫手办</li>
            </router-link>
            <router-link to="/onlinePrint/innovate">
              <li :class="{'selected':sType==2}" @click="select(2)">创新设计</li>
            </router-link>
            <router-link to="/onlinePrint/education">
              <li :class="{'selected':sType==3}" @click="select(3)">教育用品</li>
            </router-link>
          </ul>
        </section>
        <section class="model-wrapper" ref="modelWrapper">
          <div>
            <ul>
              <li v-for="(item,index) of modelArray" :key="index">
                <router-link to="/onlinePrint/all/modelDetail">
                  <div class="img-wrapper">
                    <img :src="item.modelImg">
                  </div>
                  <p class="info">
                    <img :src="item.avater" alt>
                    <span class="author">{{item.author}}</span>
                    <i class="glyphicon glyphicon-heart"></i>
                    <span class="favnum">{{item.loveNumber}}</span>
                  </p>
                </router-link>
              </li>
            </ul>
            <div class="page-wrapper text-center">
              <button class="btn btn-warning prepage">上一页</button>
              <button class="btn btn-warning">下一页</button>
            </div>
          </div>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import BScroll from "better-scroll";

// import { resolve, reject } from "q";
export default {
  data() {
    return {
      showFlag: false,
      sType: 0,
      modelArray: [],
      keyword: ""
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$nextTick(() => {
      this.initBScroll();
    });
  },
  methods: {
    /**
     * 根据路由请求相应的数据
     */
    getData() {
      if (this.$route.name === "modelDetail") {
        return;
      } else {
        this.axios.get(`data/${this.$route.name}.json`).then(
          res => {
            if (res.status === 200) {
              let data = res.data;
              this.modelArray = data.modelArray;
            } else {
              return;
            }
          },
          err => {
            console.log("请求失败");
          }
        );
      }
    },
    /**
     * 返回上一个路由
     */
    goback() {
      this.$router.push("/onlinePrint");
    },
    /**
     * 搜索功能
     */
    search(word) {
      this.axios.get("data/search.json").then(res => {
        let models = res.data.searchArray;
        let result;
        result = models.filter(item => {
          if (item.modelName.includes(word)) {
            return true;
          }
        });
        this.modelArray = result;
        this.keyword = "";
      });
    },
    /**
     * 选中模型类型控制样式
     */
    select(type) {
      this.sType = type;
    },
    initBScroll() {
      let scroll = new BScroll(this.$refs.modelWrapper, {
        click: true
      });
    }
  },
  watch: {
    $route: "getData"
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
            text-indent: 12px;
            outline: medium;
            &:focus {
              border-width: 1px;
              background: none;
            }
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
        a {
          text-decoration: none;
          font-size: 13px;
          color: #000;
        }
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
        max-height: 500px;
        min-height: 350px;
        margin: 0 auto;
        overflow: hidden;
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
            max-width: 144px;
            max-height: 120px;
            margin: 0 auto;
            background-color: #eee;
            img {
              margin: 0 auto;
              display: block;
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
      .page-wrapper {
        width: 100%;
        height: 60px;
        margin-top: 20px;
        .prepage {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
