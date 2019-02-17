<template>
    <div class="orderPreview">
       <div id="orderList">
            <div id="orderTitle">
                <span>商品</span>
                <span>单价/数量</span>
                <span>打印机编号</span>
                <span>订单状态</span>
                <span>详情</span>
                <span>实付金额</span>
            </div>
       </div>
       <div id="box-card">
            <!-- 订单编号与创建时间 -->
            <div class="cardHeader">
                <span class="orderNum">订单编号：160620190211526332</span>
                <span class="orderCreatT" >创建时间：2019-2-15-22:20:20</span>
            </div>
            <div class="cardBody">
                <!-- 模型图片 -->
                <div class="orderPic">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3751910808,1160227988&fm=26&gp=0.jpg" alt="">
                </div>
                <!-- 模型名称与大小 -->
                <div class="orderName">
                    <p>3D模型4</p>
                    <p>100mmX100X100mm</p>
                </div>
                <!-- 商品的单价与数量 -->
                <div class="orderSpent">
                    <p>￥120.00</p>
                    <p>(一件)</p>
                </div>
                <!-- 订单使用的打印机 -->
                <div class="orderUserPt">
                    <P>UTYS654PS/88</p>
                </div>
                <!-- 订单状态 -->
                <div class="orderStatus">
                    <p>打印中……</p>
                </div>
                <!-- 查看详情 -->
                <div class="orderDetail">
                    <button>点击查看详情</button>
                </div>
                <!-- 商品金额 -->
                <div class="orderMon" >
                    <p>￥120.00</p>
                </div>
            </div> 
       </div>
    </div>

</template>
<script>
export default {
    data(){
        return {
            displayInfo:[]
        }
    },
   created() {
    //获取打印机数据
    this.axios.get("data/order.json").then(res => {
        this.displayInfo = res.data;
      });
  },
  methods:{
    
  }
}
</script>
<style lang="less" scoped>
@theme-color: #1ac272;
.orderPreview{
    #orderList{
        margin: auto auto;
        padding: 30px 13px;
        #orderTitle{
        width: 1090px;
        height: 25px;
        line-height: 25px;
        border-radius: 15px;
        background-color: @theme-color;
        span {
            color: #ffffff;
            margin: 0 65px;
        }
    }
}
    #box-card{
        width: 1090px;
        margin-top: 10px;
        margin-left: 13px;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        padding: 18px 20px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .cardHeader{
            font-size: 14px;
            border-bottom: 1px solid #ebeef5;
            padding-bottom: 10px;
            box-sizing: border-box;
        }
            .orderCreatT{
                float: right; 
                color: gray;
        }
        .cardBody{
            padding-top:12px;
            .orderPic{
                width:8%;
                display:inline-block; 
                img{
                    width:70px;
                    height: 70px;
            }
            }
            .order{
                width: 150px;
                display:inline-block;
            }
            .orderName{
                .order;
                width: 16%;
                line-height: 15px;
            }
            .orderSpent{
                .order;
                width: 12%;
                p{

                    float: right;
                }
            }
            .orderUserPt{
                .order;
                width: 12%;
                text-align: center;
            }
            .orderStatus{
                .order;
                width: 16%;
                text-align: center;
            }
            .orderDetail{
                .order;
                width: 19%;
                text-align: center;
            }
            .orderMon{
                .order;
                width: 13%;
                text-align: right;
            }
        }
    }
    }
</style>
