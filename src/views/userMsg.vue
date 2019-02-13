<template>
    <div class="userMsg">
        <button class="btn btn-success op_btn op_btn3 " @click="goOrder">测试按钮</button>
         <button class="btn btn-success op_btn op_btn3 " @click="goHistrory">测试按钮</button>
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
        }
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
