<template>
  <div class="selectPrinter">
    <!-- 按钮 -->
    <el-button id="elButton" type="primary" @click="dialogTableVisible = true" size="small">选择打印机</el-button>
    <!-- 模态框 -->
    <el-dialog id="elDialog" title="请选择打印机" :visible.sync="dialogTableVisible">
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
                  value-key="name">
          </el-autocomplete></span>
          <!-- 折叠板 -->
          <el-collapse v-for="(val,key) of displayInfo" :key="key" style="margin-top:20px;" accordion>
                <el-collapse-item :title="val.number+'号打印机'+'('+val.name+')'" >
                  <div class="el-collapse-item-content">
                      <ul>   
                        <li>打印机型号：{{key}}{{val.model}}</li>
                        <li>打印机品牌：{{val.name}}</li>
                        <li>打印机状态：{{val.status}}</li>
                        <li>预计等待时间：{{val.time}}</li>
                      </ul>
                  </div>  
                  <div style="text-align: right; padding-right:20px;">  
                   <el-button class="el-button" size="small" type="primary" round>去打印</el-button>   
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
        this.searchMsg = item.name;
        this.openMsg();
    },
     querySearchAsync(queryString, callback) {
        var modelInfo = this.modelInfo;
        var results = queryString ? modelInfo.filter(this.createStateFilter(queryString)) : modelInfo;
      clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.displayInfo=results;
          callback(results);//回调输入建议
        }, 10);
      },
      createStateFilter(queryString) {
        return (printer) => {
          return (printer.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    }
  },
  created() {
    this.axios.get("data/model.json").then(res => {
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
.el-message {
    z-index: 30000 !important;
}
.el-dialog {
    margin-top: 8vh !important;
}
.el-collapse-item__header {
    font-weight: 600 !important;
    font-size: 14px !important;
}
.el-collapse{
  margin-top: 0px !important;
  margin-bottom: 20px !important;
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