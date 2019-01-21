<template>
    <div class="register">
        <h1>注册</h1>
        <div class="el-form-div">
          <el-form  :model="ruleForm2" style="margin-left:-50px;" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
          <el-form-item label="账号" prop="user">
              <el-input v-model="ruleForm2.user" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobileNum">
              <el-input v-model="ruleForm2.mobileNum" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm2.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
          </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateUser = (rule, value, callback) => {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        let uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        if (value === '') {
          callback(new Error('请输入账号'));
        } else if (uPattern.test(value) !== true) {
          callback(new Error('用户名4到16位（只能包括字母，数字，下划线，减号）'));
        } else {
          callback();
        }
      };
       var validatemobileNum = (rule, value, callback) => {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        let uPattern = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
        if (value === '') {
          callback(new Error('请输入手机号码'));
        } else if (uPattern.test(value) !== true) {
          callback(new Error('请输入正确的手机号码'));
        } else {
          callback();
        }
      };
      var validateemail = (rule, value, callback) => {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        let uPattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else if (uPattern.test(value) !== true) {
          callback(new Error('请输入正确的邮箱'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          user:'',
          pass: '',
          checkPass: '',
          mobileNum:'',
          email:''
        },
        rules2: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          mobileNum: [
            { validator: validatemobileNum, trigger: 'blur' }
          ],
          email: [
            { validator: validateemail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
                method: 'post',
                url: 'http://192.168.1.243:7001/post',
                withCredentials: true,
                data:{
                      user:this.user,
                      pass:this.pass,
                      checkPass:this.checkPass,
                      mobileNum:this.mobileNum,
                      email:this.email
                }
            }).then(res => {
            console.log(res); 
           })
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
.register{
    margin:100px auto;text-align: center;width:350px;
}
</style>
