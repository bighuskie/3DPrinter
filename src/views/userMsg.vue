<template>
    <div class="userMsg">
        <div class="main">
                <ul id="title" >
                  
                    <router-link to="/userMsg/orderPreview">
                    <li class="active" @click="select(0)"><h3>我的订单</h3></li>
                    </router-link>
               
                
                    <router-link to="/userMsg/historyPreview">
                    <li class="secondLi" @click="select(1)"><h3>历史订单</h3></li>
                    </router-link>
                </ul>
                <div class="showbox">
                    <router-view></router-view>
                </div>
            <button class="btn btn-success op_btn op_btn3 " @click="goOrder">我的订单</button>
            <button class="btn btn-success op_btn op_btn3 " @click="goHistrory">历史订单</button>
        </div>
        
    </div>
</template>
<script>
export default {
    methods: {
        goOrder() {
        this.$router.push('/userOrderShow');
        },
        goHistrory() {
        this.$router.push('/userHistoryShow');
        },
        select(num){
        var dv=document.getElementById("title");
        // var ularr=dv.getElementsByTagName("ul");
        var liarr=dv.getElementsByTagName("li");
           if(num==0){
               liarr[0].classList.add("active");
               liarr[1].classList.remove("active");
           }
           else{
               liarr[1].classList.add("active");
               liarr[0].classList.remove("active");
           }
        }
    }
}
</script>
<style lang="less" scoped>
    .userMsg{
        width: 100%;
        height: auto;
        background-color: #fafafa; 
        overflow: hidden;
    }
    .main {
        width: 1120px;
        margin: 30px auto; 
       
        h3 {
            display: inline-block;
        }
        p {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }
    }
    #title{
        border: 1px solid #ebeef5;
        border-bottom: 0;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin: 0;
        padding: 0;
        text-decoration: none;
        background-color: #fafafa;
        li {
            display: inline-block;
            height: 80px;
            line-height: 80px;
            padding:0 30px;
            width: auto;
            color: #000;      
            background-color: #fafafa;
        } 
        
        // li[class=secondLi] {
        //     margin-left:40px;
        // }
    }
    .active {
        background-color: #fff !important;
    }
    #test1 {
        float: right;
    }
    hr {
        background-color: rgb(211, 212, 211);
    }
    .showbox{
        width: 1120px;
        height: 600px;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        border-top: 0;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
</style>
