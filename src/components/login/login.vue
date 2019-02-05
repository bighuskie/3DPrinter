<template>
<<<<<<< HEAD
  <div class="login">
    <el-card id="loginCard" shadow="always">
      <h1 style="font-family:'Microsoft YaHei';">登录</h1>
      <input type="text" placeholder="账号" v-model="username">
      <input type="password" placeholder="密码" v-model="password">
      <el-button type="primary" round id="submit" @click="submit">登录</el-button>
    </el-card>

    <!-- <h1>登录</h1>
    <v-flex xs12 sm15>
      <v-text-field color="#1AC272" label="账号" single-line v-model="username"></v-text-field>
    </v-flex>
    <v-flex xs12 sm15>
      <v-text-field color="#1AC272" label="密码" single-line type="password" v-model="password"></v-text-field>
    </v-flex>
    <div style="text-align: left;margin-top:10px;">
      <el-checkbox v-model="rememberPsw" style="font-family: inherit;">记住密码</el-checkbox>

    </div>-->
    <button id="submit" @click="submit">登录</button>
  </div>
=======
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
>>>>>>> aa284a7e1d4eb1625a92c7c494901587229773a8
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      cookiename: "APP",
      rememberPsw: false,
      isLogin: false
    };
  },

  methods: {
    submit() {
      if (this.username === "" || this.password === "") {
        alert("请输入账号和密码！");
        return;
      }
      //将数据传输给后端
      this.axios({
        method: "post",
        url: "http://192.168.1.243:7001/api/v1/login",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password
        }
<<<<<<< HEAD
      }).then(res => {
        console.log(res);
        if (res.data.code === 1) {
          this.isLogin = true;
          this.Token.setToken(res.data.token);
          this.$router.push({ path: "/" });
=======
      },
    
    methods:{
        submit() {
            if(this.username===''||this.password==='')
            {
                alert("请输入账号和密码！");
                return;
            }
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
>>>>>>> aa284a7e1d4eb1625a92c7c494901587229773a8
        }
      });
    }
  }
};
</script>
<style scoped>
<<<<<<< HEAD
.login {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/green.jpg) no-repeat fixed;
  background-size: 100%;
  overflow: hidden;
=======
.login{
    width: 100%;
    height: 100%;
    background: url(../../assets/images/Bgone.jpg) no-repeat ;
    background-color: #f0eeee;
    background-size: 100%; 
    overflow: hidden;
>>>>>>> aa284a7e1d4eb1625a92c7c494901587229773a8
}
#loginCard{
    margin:100px auto 150px auto;
    padding:0px 20px;
    text-align: center;
    width:400px;
}
#loginCard input {
<<<<<<< HEAD
  margin: 20px 0;
  width: 250px;
  height: 30px;
  border: 0;
  border-bottom: 1px solid black;
}
#loginCard input:focus {
  outline: none;
  border-bottom: 1px solid #1ac272;
}
#submit {
  display: block;
  margin: 20px auto;
  width: 80px;
=======
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
>>>>>>> aa284a7e1d4eb1625a92c7c494901587229773a8
}
#submit:hover {
  background-color: rgb(72, 199, 138);
}
<<<<<<< HEAD
#loginCard {
  margin: 150px auto;
  text-align: center;
  width: 500px;
}
=======

>>>>>>> aa284a7e1d4eb1625a92c7c494901587229773a8
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
