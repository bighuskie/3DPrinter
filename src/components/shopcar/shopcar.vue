<template>
  <div>
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
                  <div class="selectFlag">
                    <a :target="item.target" href="javascript:;" @click="selectOne(item)"></a>
                  </div>
                </td>
                <td>{{item.fileName}}</td>
                <td>{{item.printModel}}</td>
                <td>{{item.unitPrice | priceFormat(item.unitPrice)}}</td>
                <td>
                  <div class="module-number">
                    <span @click="changeNumber(item,false)">-</span>
                    <input type="tel" value="item.moduleNumber" v-model="item.moduleNumber">
                    <span @click="changeNumber(item,true)">+</span>
                  </div>
                </td>
                <td>{{item.unitPrice*item.moduleNumber |priceFormat(item.unitPrice*item.moduleNumber)}}</td>
                <td class="manage-wrapper">
                  <a class="preview btn btn-success" href="javascript:;" @click="previewModule(item)">预览</a>
                  <a  class="deleteShop btn btn-danger" href="javascript:;" @click="deleteShop(item)">删除</a>
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
                <a class="sumAll btn btn-danger" href="javascript:;" @click="sumAll">合计</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 模态框 -->
    <div :class="{'modal-wrapper':showModalFlag}">
      <div class="modal-content">
        <div class="text-wrapper text-center">你确定删除这个商品吗？</div>
        <div class="btn-wrapper text-center">
          <button class="btn canel-btn" @click="confirmDelete(false)">取消</button>
          <button class="btn btn-danger" @click="confirmDelete(true)">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    queueArray: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      shopArray: [],
      selectAllFlag: false,
      showModalFlag: true,
      deleteShopObj: {}
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
      this.shopArray = this.queueArray;
    },
    /**
     * 改变模型数量
     */
    changeNumber(item, flag) {
      if (flag) {
        item.moduleNumber += 1;
      } else {
        if (item.moduleNumber <= 1) {
          item.moduleNumber = 1;
          return;
        }
        item.moduleNumber -= 1;
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
    },
    /**
     * 删除商品,显示模态框
     */
    deleteShop(item) {
      this.showModalFlag = false;
      this.deleteShopObj = item;
    },
    /**
     * 是否确定删除商品,关闭模态框
     */
    confirmDelete(flag) {
      if (flag) {
        let deleteIndex = this.shopArray.indexOf(this.deleteShopObj);
        this.shopArray.splice(deleteIndex, 1);
        if (this.shopArray.length === 0) {
          this.selectAllFlag = false;
        }
      }
      this.showModalFlag = true;
    },
    /**
     * 在购物车里选择预览
     */
    previewModule(item){
      this.$emit('preview',item.fileInQueue);
    },
    /**
     * 确定下单，并显示选择打印机
     */
    sumAll(){
      this.$emit('showPrinterModal');
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
          AllMonney += item.moduleNumber * item.unitPrice;
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
      .manage-wrapper{
        .deleteShop{
          margin-left: 10px;
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
//模态框样式
.modal-wrapper {
  display: none;
}
.modal-content {
  position: fixed;
  width: 500px;
  height: 150px;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  margin-left: -250px;
  .text-wrapper {
    height: 65px;
    line-height: 65px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    color: #000;
  }
  .btn-wrapper {
    height: 85px;
    line-height: 85px;
    .btn {
      width: 100px;
      border-radius: 0;
    }
    .canel-btn {
      margin-right: 100px;
      color: #000;
    }
  }
}
</style>
