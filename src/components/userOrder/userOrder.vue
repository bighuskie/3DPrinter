<template>
    <div class="userOrder">
        <h1>
                我的订单
        </h1>
        <a id="goback" @click="goBack">返回</a>
        <p> 订单号：{{this.displayInfo.oNum}}
            <!-- <router-link to="/userMsg/userOrder" id="test1">
                 <button class="btn btn-success op_btn op_btn3 ">测试按钮</button>
            </router-link> -->
        </p>
        <hr>
        <section class="main">
            <section>
                <h3 class="subtitle">{{this.displayInfo.pStatus}}</h3>
                <div id="msgTitle">
                    <span>下单时间</span>
                    <span>文件名称</span>
                    <span>模型名称</span>
                    <span>打印机编号</span>
                </div>
                <div id="msgContext">
                    <span>{{this.displayInfo.oDate}}</span>
                    <span>{{this.displayInfo.mfileName}}</span>
                    <span>{{this.displayInfo.mName}}</span>
                    <span>{{this.displayInfo.pNo}}</span>
                </div>
                <span></span>
                <hr>
            </section>
            <section>
                <div class="model">
                   <img :src="this.displayInfo.mPicPath" alt="">
                    <ul>
                        <li>{{this.displayInfo.mName}}  x {{this.displayInfo.mNum}}</li>
                        <li class="unKey"><span class="x_size">{{this.displayInfo.mSizeL}}mm x</span>
                        <span class="y_size"> {{this.displayInfo.mSizeW}}mm x</span>
                        <span class="z_size"> {{this.displayInfo.mSizeH}}mm</span></li>
                        <li class="unKey">打印材料类型:{{this.displayInfo.mMaterialType}}</li>
                    </ul>
                    <hr>
                </div>
                <div class="middle">
                    <div class="file">
                        <h3 class="subtitle">文件信息</h3>
                        <ul>
                            <li>文件名: {{this.displayInfo.mfileName}}</li>
                            <li>文件大小：{{this.displayInfo.mfileSize}}</li>
                            <li>文件格式：{{this.displayInfo.mfileFormat}}</li>
                        </ul> 
                    </div>
                    <div class="printer">
                        <h3 class="subtitle">打印机信息</h3>
                        <ul>
                            <li>编&nbsp;&nbsp;&nbsp;&nbsp;号: {{this.displayInfo.pNo}}</li>
                            <li>型&nbsp;&nbsp;&nbsp;&nbsp;号：{{this.displayInfo.pModal}}</li>
                            <li>品&nbsp;&nbsp;&nbsp;&nbsp;牌：{{this.displayInfo.pName}}</li>
                            <li>打印模式：{{this.displayInfo.mQuality}}</li>
                        </ul>
                    </div>
                </div>
                <hr>
                <div class="footer">
                    <div class="invoicing">
                        <ul>
                            <li>单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</li>
                            <li>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</li>
                            <li>订单总价：</li>
                            <li>付款时间：</li>
                        </ul>
                        <ul class="data">
                            <li>{{this.displayInfo.price}}元</li>
                            <li>{{this.displayInfo.mNum}}</li>
                            <li>{{this.displayInfo.total}}元</li>
                            <li>{{this.displayInfo.oDate}}</li>
                        </ul>
                        <div class="total">
                        实际付款：<span>{{this.displayInfo.total}}元</span>
                        </div>
                    </div>
                </div>
                
            </section>
            
        </section>
    </div>
    
     
</template>
<script>
import bus from '../../assets/eventBus.js'
export default {
    data(){
        return {
            displayInfo:[]
        }
    },
   created() {
       bus.$on("communication",function(msg){
           //将数据传输给后端
            this.axios({
                    method: 'post',
                    url: 'http://192.168.1.243:7001/api/v1/printer/select',
                    withCredentials: true,
                    data:{
                        msg
                    }
                }).then(res => {
                    //发送成功则开始请求页面
                    this.axios.get("data/order.json").then(req => {
                        this.displayInfo = req.data;
                    });
                console.log(res); 
                }).catch(() => {
                console.log(msg);
                console.log("发送数据失败！");
                });
       })
  },
    mounted(){
        //发送成功则开始请求页面
            this.axios.get("data/order.json").then(req => {
                this.displayInfo = req.data;
            });
    },
  methods:{
        goBack() {
        this.$router.push('/userMsg/orderPreview');
        }
  }
}
</script>
<style lang="less" scoped>
@theme-color: #1ac272;
    .userOrder {
        width: 1120px;
        margin: 0 auto; 
        h1 {
            display: inline-block;
        }
        p {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }
    }
    #test1 {
        float: right;
    }
    hr {
        background-color: rgb(211, 212, 211);
    }
    #goback{
        margin-left: 30px;
        cursor: pointer;
        text-decoration: none;
        color: @theme-color;
    }
    #goback:hover{color: #12864e}
    #msgTitle{
        width: 1120px;
        height: 25px;
        line-height: 25px;
        border-radius: 15px;
        background-color: @theme-color;
        span {
            color: #ffffff;
            margin: 0 107px;
        }
    }
    #msgContext{
        span {
            width: 93px;
            display: inline-block;
            margin: 30px 93px;
            font-size: 18px;
        }
    }
    .subtitle {
        display: block;
    }
    
    .model {
        img {
            width: 200px;
            height: 200px;
        }
        li {
            font-size: 20px;
            margin: 15px 0;
        }
        .unKey{
        font-size: 16px;
        color: #8b8888;
      }
    }
  
    
    ul {
        list-style-type:none;
        display: inline-block;
        margin: auto 0;
    }
    .middle {
        position:relative;
        height: 180px;
            .printer {
            float: left;
            height: 200px;
            position: absolute;
            left: 50%;
            display: block;
            li {
                font-size: 18px;
                color: #8b8888;
                margin-top: 5px;
            }
        }
        .file {
            float: left;
            height: 200px;
            display: block;
            li {
                font-size: 18px;
                color: #8b8888;
                margin-top: 10px;
            }
        }
    }
    .footer{
        font-size: 18px;
        height: 350px;
        .invoicing{
            float: right;
            ul{
                margin-left: 140px;
                li {
                    margin: 30px 0;
                    
                }
            }
            .data{
                color: @theme-color;
            }
        }
        .total {
            margin:10px 0;
            text-align: right;
           span {
               margin-left: 60px;
               color: @theme-color;
               font-size: 26px;
           }
        }
    }
</style>
