<template>
    <div class="historyPreview">
       <div id="orderList">
            <div id="orderTitle">
                <span>商品</span>
                <span>单价/数量</span>
                <span>打印机编号</span>
                <span>订单状态</span>
                <span>实付金额</span>
            </div>
       </div>
       <section v-for="(arr,index) in displayInfo" :key="arr.guid">
       <div id="box-card">
            <!-- 订单编号与创建时间 -->
            <div class="cardHeader">
                <span class="orderNum">订单编号：160620190211526332</span>
                <span class="orderCreatT" >创建时间：2019-2-15-22:20:20</span>
            </div>
            
                <div class="cardBody">
                    <!-- 模型名称与大小 -->
                    <div class="orderName">
                       <img :src="arr.mPicPath" alt="">
                        <div class="modelMsg">
                            {{arr.mName}}
                            <br>
                            <span class="x_size">{{arr.mSizeL}}mm x</span>
                        <span class="y_size"> {{arr.mSizeW}}mm x</span>
                        <span class="z_size"> {{arr.mSizeH}}mm</span>
                        </div>
                        
                    </div>
                    <!-- 商品的单价与数量 -->
                    <div class="orderSpent">
                        ￥120.00 / 1件
                    </div>
                    <!-- 订单使用的打印机 -->
                    <div class="orderUserPt">
                        {{arr.pNo}}
                    </div> 
                    <!-- 订单状态 -->
                    <div class="orderStatus">
                        已打印
                        <el-button type="primary" @click=" goHistrory" size="small">详情</el-button>
                    </div>
                    <!-- 商品金额 -->
                    <div class="orderMon" >
                        ￥120.00
                        <el-button type="button" @click="deletleOrder(index)" size="small">删除</el-button>
                    </div>
                </div>  
            </div>
       </section>
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
    this.axios.get("data/historyPreview.json").then(res => {
        this.displayInfo = res.data.order;
        console.log(this.displayInfo);
      });
  },
  methods:{
    goHistrory() {
    this.$router.push('/userHistoryShow');
    },
    guid: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
    },
    deletleOrder(index) {
        this.$confirm("此操作将删除该文件, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
        }).then(() => {
            this.$message({
                type: "success",
                message: "删除成功!",
                return: this.displayInfo.splice(index,1),
            });
            //将数据传输给后端
            this.axios({
                method: 'post',
                url: 'http://192.168.1.243:7001/api/v1/login',
                withCredentials: true,
                data:{
                    displayInfo: this.displayInfo   
                }
            }).then(res => {console.log(res);})  
            }).catch(() => {
            this.$message({
                type: "info",
                message: "已取消删除 "
            });
        });
    },
  }
}
</script>
<style lang="less" scoped>
@theme-color: #1ac272;
.historyPreview{
    
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
            margin: 0 120px;
          
        }  
        span:nth-child(2){
            margin-left: 120px;
            margin-right: 100px;
        }
        span:nth-child(3){
            margin: 0 50px;
        }
        span:nth-child(4){
            margin-left: 50px;
            margin-right: 10px;
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
            img{
                width:70px;
                height: 70px;
                margin-right: 10px;
            }
            > div{
                float: left;
                margin-right: 140px;
            }   
            .modelMsg{
                display: inline-block;
            }
            .orderStatus{
                button {
                    display: block;
                    margin-top: 20px;
                }
            }
            .orderMon{
                margin:0 !important;
                button {
                    display: block;
                    margin-top: 20px;
                }
            }
        } 
    }
}
</style>