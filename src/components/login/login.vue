<template>
    <div class="login">
        <el-card id="loginCard" shadow="always">
        <h1 style="font-family:'Microsoft YaHei';">登录</h1>
        <input placeholder="账号" v-model="username"></input>
        <input placeholder="密码" v-model="password"></input>
        <div class="submitAndSignup">
            <a href="" class="signUp">注册</a>
            <el-button type="primary"  id="submit" size="small" @click="submit">登录</el-button>
        </div>
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
    background: url(../../assets/images/Bgone.jpg) no-repeat ;
    background-color: #f0eeee;
    background-size: 100%; 
    overflow: hidden;
}
#loginCard{
    margin:100px auto 150px auto;
    padding:0px 20px;
    text-align: center;
    width:400px;
}
#loginCard input {
    margin: 25px 20px;
    width: 280px;
    height: 30px;
    border: 0;
    border-bottom: 1px solid #dcdfe6;
}
#loginCard input:focus {
    outline: none;
    border-bottom: 1px solid #1AC272;
}
#submit{
    float: right;
    display: block;
    margin: 20px  auto 15px auto;
    /* width: 50px; */
}
#submit:hover {
  background-color: rgb(72, 199, 138);
}

.el-input {
  margin: 10px 0;
}
/* .line{
    margin-top: 15px;
    height: 2px;
    background-color: #eeeeee;
} */
.signUp{
    float: left;
    color: green;
    margin: 25px  auto 10px 10px;
}
</style>
