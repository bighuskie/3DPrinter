<template>
  <div class="selectPrinter">
    <!-- 按钮 -->
    <el-button id="elButton" type="primary" @click="dialogTableVisible = true" size="small">选择打印机</el-button>
    <!-- 模态框 -->
    <el-dialog id="elDialog"  title="请选择打印机" :visible.sync="dialogTableVisible">
      <!-- 模态框内容 -->
      <div id="dialog-content" style="height:500px;">
        <!-- 滚动条 -->
        <el-scrollbar style="height: 100%;">
          <!-- 头部 地理位置-->
          <span style="margin-bottom:-10px;">您的当前位置是：<i class="el-icon-location" style="color:#1AC272"></i><span id="location">广东工业大学生活区东区</span></span>
          <!-- 搜索框 -->
          <span id="searchInput"><el-autocomplete
                  v-model="searchMsg"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="请输入内容" 
                  @select="handleSelect"
                  value-key="pName">
          </el-autocomplete></span>
          <!-- 折叠板 -->
          <el-collapse v-for="(val,key) of displayInfo" :key="key" style="margin-top:20px;" accordion>
                <el-collapse-item :title="val.pNo+'号打印机'+'('+val.pName+')'" >
                  <div class="el-collapse-item-content">
                      <ul>   
                        <li><span>打印机型号</span>{{val.pModal}}<i class="el-icon-info"></i></li>
                        <li><span>打印机品牌</span>{{val.pName}}<i class="el-icon-printer"></i></li>
                        <li><span>打印机状态</span>{{val.pStatus}}<i class="el-icon-download"></i></li>
                        <li><span>预计等待时间</span>{{val.waitingTime}}<i class="el-icon-time"></i></li>
                      </ul>
                  </div>  
                  <div style="text-align: right; padding-right:20px;">  
                   <el-button size="small" @click="selectPrinterClick(val.pNo)" type="primary"  round>去打印</el-button>   
                  </div>  
                </el-collapse-item>
          </el-collapse> 
        </el-scrollbar>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "SelectPrinter",
  data() {
    return {
      modelInfo: [],
      displayInfo:[],
      searchMsg: '',
      timeout: null,
      dialogTableVisible: false,
      formLabelWidth: "120px"
    };
  },
  methods:{
    openMsg() {
        this.$message({
        type: 'success',
        message:'为您找到以下打印机，请点击查看详情',
        showClose: true,});
    },
    handleSelect(item){
        this.searchMsg = item.pName;
        var modelInfo = this.modelInfo;
        var results = this.searchMsg ? modelInfo.filter(this.createStateFilter(this.searchMsg)) : modelInfo;
        this.displayInfo=results;
        this.openMsg();
    },
    selectPrinterClick(num){
        //将数据传输给后端
                // this.axios({
                //     method: 'post',
                //     url: 'http://192.168.1.243:7001/api/v1/printer/select',
                //     withCredentials: true,
                //     data:{
                //         printerNumber:num
                //     }
                // }).then(res => {
                // console.log(res); 
                // })  
        //关闭弹窗
        this.dialogTableVisible = false ; 
    },
     querySearchAsync(queryString, callback) {
        var modelInfo = this.modelInfo;
        var results = queryString ? modelInfo.filter(this.createStateFilter(queryString)) : modelInfo;
      clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.displayInfo=results;
          console.log(results);
          callback(results);//回调输入建议
        }, 10);
      },
      createStateFilter(queryString) {
        return (printer) => {
          return (printer.pName.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    }
  },
  created() {
    //获取打印机数据
    this.axios.get("data/select.json").then(res => {
        this.modelInfo = res.data.printerData;
        this.displayInfo = this.modelInfo;
        
      });
  },
  mounted(){
    document.getElementById("elButton").click();//自动弹窗
    this.openMsg();
  }
}
</script>

<style>
.el-dialog__title {
  font-size: 24px;
  font-weight: 600;
}
.el-autocomplete-suggestion__wrap {
  height: 200px !important;
}
.el-collapse-item__arrow {
  margin-left:20px !important;
}
.el-collapse-item-content li{
  font-size: 16px;
  text-align: center;
  display: block;
  height: 130px;
  width: 140px;
  color: black;
  float: left;
  margin: 0 10px 15px 10px;
  border: 1px solid #1AC272;
  background-color: #fff;
  transition: all 1s;
}
.el-collapse-item-content li:hover{
  width: 150px;
  height:135px;
  margin: 0 5px 10px 5px;
  color: #fff;
  background-color: #1AC272;
  font-size: 20px;
}
.el-collapse-item-content li:hover > span{
   color:  rgb(100, 224, 164);
}
.el-collapse-item-content li:hover > i{
   color:  rgb(100, 224, 164);
}
.el-collapse-item-content li span {
    margin-top: 15px;
    display: block;
    font-size: 14px;
    font-weight: 600;
    transition: font-size 1s;
}
.el-collapse-item-content li i {
    margin:10px auto;
    display: block;
    font-size: 30px;
    color: #1AC272;
    font-weight: 600;
    transition: color 1s;
}
.el-message {
    z-index: 30000 !important;
}
.el-dialog {
    margin-top: 8vh !important;
}
.el-collapse-item__header {
    font-weight: 600 !important;
    font-size: 15px !important;
}
.el-collapse{
  margin-top: 0px !important;
  margin-bottom: 10px !important;
}
.el-dialog__body {
    padding-top: 0px !important;
}
#searchInput {
  float: right;
  margin-right: 30px;
  }
.el-collapse-item-content {
  text-align: left;
   overflow: hidden;
}
.el-collapse-item-content ul {
  list-style-type: none;
  margin: 0px;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important; 
}
.el-icon-location {
  margin-right: 10px;
  font-size: 18px;
}
</style>