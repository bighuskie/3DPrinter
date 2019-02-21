<template>
    <div class="orderPreview">
       <div class="progress progress-striped active" v-if="isShow">
            <div class="progress-bar progress-bar-success" role="progressbar"
                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                style="width:30%">
                <span class="sr-only">40% 完成</span>
                <span>30%</span>
            </div>
        </div>
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
                    <span class="orderCreatT" >创建时间：{{arr.oDate}}</span>
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
                        ￥{{arr.mcost}} / 1件
                    </div>
                    <!-- 订单使用的打印机 -->
                    <div class="orderUserPt">
                        {{arr.pNo}}
                    </div>
                    <!-- 订单状态 -->
                    <div class="orderStatus">
                        打印中
                        <el-button type="primary" @click="goOrder" size="small">详情</el-button>
                    </div>
                    <!-- 商品金额 -->
                    <div class="orderMon" >
                        ￥{{arr.mcost}}
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
            date:new Date() ,
            isShow:true,
            progress:"0",
            displayInfo:[]
        }
    },
    guid: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
    },
    created() {
    //获取打印机数据
    this.axios.get("data/orderPreview.json").then(res => {
        this.displayInfo = res.data.order;
        console.log(this.displayInfo);
      });
  },

    mounted(){
        // 声明一个变量指向Vue实例this，保证作用域一致
        let me = this; 
        this.timer = setInterval(() => {
        // 修改数据date
        me.date = new Date(); 
        }, 1000)
    }, 
    // 在Vue实例销毁前，清除定时器
    beforeDestroy() {
        if (this.timer) {
        clearInterval(this.timer);
        }
    },

    methods:{
        goOrder() {
            this.$router.push('/userOrderShow');
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
        computedResidualTime(){
            //计算打印所需要的总时间
            let sum=0;
            for(let i=0;i<this.displayInfo.length;i++){
               sum+=this.displayInfo[i].mestimatedTime;
                //console.log(sum);
            }
            const time=this.displayInfo[0].oDate;
            // console.log(time);
            let date1=new Date(time);    //开始时间
            let date2=this.date;    //当前
            let date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
            //计算出相差天数
            let days=Math.floor(date3/(24*3600*1000)) 
            //计算出小时数
            let leave1=date3%(24*3600*1000)
            //计算天数后剩余的毫秒数
            let hours=Math.floor(leave1/(3600*1000))
            //计算相差分钟
            let leave2=leave1%(3600*1000)
            let minutes=Math.floor(leave2/(60*1000))
            //计算出打印的总的分钟数
            let minutesSum=hours*6+minutes;
            // alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟");
            let percentage=Math.round((minutesSum/sum)*100);
            // console.log(percentage)
            if(percentage>=100){
            this.isShow=false;
            }
            return percentage;
        }
    }
}
</script>
<style lang="less" scoped>
@theme-color: #1ac272;
.orderPreview{
    #orderList{
        margin: auto auto;
        padding: 30px 13px 10px 13px;
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
    .progress {
        height: 20px;
        margin: 30px 13px 0px 13px;
        overflow: hidden;
        background-color: #f5f5f5;
        border-radius: 4px;
        box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
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
                margin:0  !important;
                button {
                    display: block;
                    margin-top: 20px;
                }
            }
        } 
    }
}
</style>
