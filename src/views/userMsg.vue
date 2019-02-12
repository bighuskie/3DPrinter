<template>
    <div class="userMsg">
        <!-- <h1>
                我的订单
        </h1>
        <span>什么什么什么什么什么 >></span>
        <p> 文字文字文字文字
            <router-link to="/userMsg/userOrder" id="test1">
                 <button class="btn btn-success op_btn op_btn3 ">测试按钮</button>
            </router-link>
        </p>
        <hr> -->
        <router-view></router-view>
        
            <!-- <router-link to="/userMsg/userOrder">
                    <button class="btn btn-success btn-sm op_btn op_btn3 printing" ref="printing">测试按钮</button>
        </router-link> -->
    </div>
    
     
</template>
<script>
import userOrder from '../components/userMsg/userOrder'
export default {
   components:{
        userOrder
    }
}
</script>
<style lang="less" scoped>
    .userMsg {
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
</style>
