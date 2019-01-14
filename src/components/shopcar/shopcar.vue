<template>
  <div>
    <!-- 购物车及底部信息 -->
    <div class="container-fluid" id="shopCar-wrapper">
      <div class="panel panel-default">
        <div class="panel-heading">购物车</div>
        <div class="panel-body shopping">
          <table class="table text-center">
            <tr class="infoList">
              <td></td>
              <td>订单文件名</td>
              <td>打印模式</td>
              <td>单价</td>
              <td>模型数量</td>
              <td>金额</td>
              <td>管理</td>
            </tr>
            <tr class="orderInfo" v-for="(item,i) of shopArray" :key="i">
              <td>
                <!-- <input type="checkbox" id="selectFlag">
                <label for="selectFlag"></label>-->
                <div class="selectFlag">
                  <a :target="item.target" href="javascript:;" @click="selectOne(item)"></a>
                </div>
              </td>
              <td>{{item.shopName}}</td>
              <td>{{item.shopModel}}</td>
              <td>{{item.shopPrice | priceFormat(item.shopPrice)}}</td>
              <td>
                <div class="module-number">
                  <span @click="changeNumber(item,false)">-</span>
                  <input type="tel" value="item.shopNumber" v-model="item.shopNumber">
                  <span @click="changeNumber(item,true)">+</span>
                </div>
              </td>
              <td>{{item.shopPrice*item.shopNumber |priceFormat(item.shopPrice*item.shopNumber)}}</td>
              <td>
                <a href="javascript:;">删除</a>
              </td>
            </tr>
          </table>
          <div class="shopcar-footer">
            <div class="selectFlag">
              <a :target="selectAllFlag" href="javascript:;" @click="selectAll(selectAllFlag)"></a>
            </div>
            <div>全选</div>
            <div class="wall"></div>
            <div class="sum-wrapper">
              <span class="sumMoney">{{sumAllMoney | priceFormat(sumAllMoney)}}</span>
              <a class="sumAll btn btn-danger" href="#">合计</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopArray: [],
      selectAllFlag: false
    };
  },
  created() {
    this.getShopArray();
  },
  methods: {
    /**
     * 得到订单信息
     */
    getShopArray() {
      this.axios.get("data/shopArray.json").then(body => {
        this.shopArray = body.data.shopArray;
      });
    },
    /**
     * 改变模型数量
     */
    changeNumber(item, flag) {
      if (flag) {
        item.shopNumber += 1;
      } else {
        if (item.shopNumber <= 1) {
          item.shopNumber = 1;
          return;
        }
        item.shopNumber -= 1;
      }
    },
    /**
     * 全部选择购买样式的变化
     */
    selectAll(selectFlag) {
      this.selectAllFlag = !selectFlag;
      this.shopArray.forEach((item, index) => {
        if (typeof item.target === "undefined") {
          this.$set(item, "target", !selectFlag);
        } else {
          item.target = !selectFlag;
        }
      });
    },
    /**
     * 选择单个模型
     */
    selectOne(item) {
      if (typeof item.target === "undefined") {
        this.$set(item, "target", true);
      } else {
        item.target = !item.target;
      }
      this.isSelectAll();
    },
    /**
     * 单选时判断是否全选了
     */
    isSelectAll() {
      let isSelectAll = true;
      this.shopArray.forEach(item => {
        if (!item.target) {
          isSelectAll = false;
        }
      });
      this.selectAllFlag = isSelectAll;
    }
  },
  computed: {
    /**
     * 计算订单价格
     */
    sumAllMoney() {
      let AllMonney = 0;
      this.shopArray.forEach(item => {
        if (item.target) {
          AllMonney += item.shopNumber * item.shopPrice;
        }
      });
      return AllMonney;
    }
  },
  filters: {
    /**
     * 格式化价格
     */
    priceFormat(price) {
      return `￥${price}`;
    }
  }
};
</script>

<style lang="less" scoped>
@theme-color: #1ac272;
// 购物车样式
#shopCar-wrapper {
  width: 100%;
  padding: 0 20px;
  .shopping {
    table {
      .infoList {
        height: 50px;
      }
      .orderInfo {
        height: 60px;
        .selectFlag {
          width: 20px;
          height: 20px;
          margin: 0 auto;
          border-radius: 50%;
          border: 1px solid rgb(75, 75, 75);
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          a[target] {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            &::before {
              display: block;
              content: "\2714";
              border-radius: 50%;
              width: 100%;
              height: 100%;
              background-color: #1ac272;
              text-align: center;
              line-height: 20px;
              font-size: 14px;
              color: white;
            }
          }
        }
        .module-number {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          span {
            display: inline-block;
            width: 25px;
            height: 30px;
            line-height: 30px;
            // vertical-align: center;
            border: 1px solid #eee;
            cursor: pointer;
          }
          input {
            display: inline-block;
            width: 50px;
            height: 30px;
            // margin-top: 5px;
            border: 1px solid #eee;
            text-align: center;
          }
        }
      }
    }
    .shopcar-footer {
      width: 100%;
      display: flex;
      height: 50px;
      // justify-content: space-between;
      align-items: center;
      .selectFlag {
        height: 50px;
        margin-left: 34px;
        line-height: 50px;
        a {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-top: 13px;
          margin-right: 10px;
          border: 1px solid rgb(75, 75, 75);
          border-radius: 50%;
        }
        a[target] {
          // display: inline-block;
          width: 20px;
          height: 20px;
          text-decoration: none;
          &::before {
            display: block;
            content: "\2714";
            border-radius: 50%;
            width: 20px;
            height: 20px;
            background-color: #1ac272;
            text-align: center;
            line-height: 20px;
            font-size: 14px;
            color: white;
          }
        }
        div {
          display: inline-block;
          height: 50px;
          margin-left: 10px;
          line-height: 50px;
          font-size: 15px;
          color: #1ac272;
        }
      }
      .wall {
        flex: 1;
      }
      .sum-wrapper {
        height: 50px;
        line-height: 50px;
        .sumMoney {
          margin-right: 10px;
          line-height: 50px;
          font-size: 20px;
        }
        .sumAll {
          width: 60px;
          height: 35px;
          margin-bottom: 8px;
          // line-height: 30px;
        }
      }
    }
  }
}
</style>
