<template>
    <div class="login">
        <el-card id="loginCard" shadow="always">
        <h1 style="font-family:'Microsoft YaHei';">登录</h1>
        <input type="text" placeholder="账号" v-model="username">
        <input type="password" placeholder="密码" v-model="password">
        <el-button type="primary" round id="submit" @click="submit">登录</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username:"",
            password:"",
            cookiename : "APP",
            rememberPsw: false,
            isLogin:false
        }
    },
    methods:{
        submit() {
            if(this.username===''||this.password==='')
            {
                alert("请输入账号和密码！");
                return;
            }
            //将数据传输给后端
                this.axios({
                    method: 'post',
                    url: 'http://192.168.1.243:7001/api/v1/login',
                    withCredentials: true,
                    data:{
                        username: this.username,
                        password: this.password
                    }
                }).then(res => {
                console.log(res); 
                if(res.data.code===1){
                     this.isLogin=true;
                     this.Token.setToken(res.data.token);
                     this.$router.push({path:'/'})
             }
            })    
        }
    }
}
</script>
<style scoped>
.login{
    width: 100%;
    height: 100%;
    background: url(../../assets/images/green.jpg) no-repeat fixed;
    background-size: 100%; 
    overflow: hidden;
}
#loginCard input {
    margin: 20px 0;
    width: 250px;
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
}
#loginCard input:focus {
    outline: none;
     border-bottom: 1px solid #1AC272;
}
#submit{
    display: block;
    margin: 20px auto;
    width: 80px;
}
#submit:hover{
    background-color: rgb(72, 199, 138);
}
#loginCard{
    margin:150px auto;
    text-align: center;
    width:500px;
}
.el-input {
    margin: 10px 0;
}
</style>
