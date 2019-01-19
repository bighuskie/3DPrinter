<template>
  <div class="login">
    <h1>登录</h1>
    <v-flex xs12 sm15>
      <v-text-field color="#1AC272" label="账号" single-line v-model="username"></v-text-field>
    </v-flex>
    <v-flex xs12 sm15>
      <v-text-field color="#1AC272" label="密码" single-line type="password" v-model="password"></v-text-field>
    </v-flex>
    <div style="text-align: left;margin-top:10px;">
      <el-checkbox v-model="rememberPsw" style="font-family: inherit;">记住密码</el-checkbox>
    </div>
    <button id="submit" @click="submit">登录</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      cookiename: "APP",
      rememberPsw: true
    };
  },
  mounted() {
    this.getCookie(); //得到cookie，如果有记住密码
  },
  methods: {
    submit() {
      //判断复选框是否被勾选 勾选则调用配置cookie方法
      if (this.rememberPsw == true) {
        console.log("checked == true");
        //调用设置set函数
        this.setCookie();
      } else {
        console.log("清空Cookie");
        //清空Cookie
        this.clearCookie();
      }
      //这部分与后端请求代码
      console.log("登陆成功");
    },
    //设置cookie
    setCookie(c_name = this.username, c_pwd = this.password, exdays = 7) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.password = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },
    loginClick() {
      this.axios({
        method: "post",
        url: "http://192.168.1.243:7001/post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
@import url('../../../theme/index.css');
#submit {
  cursor: pointer;
  background-color: #1ac272;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  color: #fff;
}
#submit:hover {
  background-color: rgb(72, 199, 138);
}
.login {
  margin: 200px auto;
  text-align: center;
  width: 300px;
}
.el-input {
  margin: 10px 0;
}
</style>
