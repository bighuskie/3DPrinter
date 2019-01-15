<template>
  <div class="selectPrinter">
    <el-button type="text" @click="dialogTableVisible = true">请选择打印机</el-button>
    <el-dialog title="请选择打印机" :visible.sync="dialogTableVisible">
      <div id="dialog-content" style="height:500px;">
        <el-scrollbar style="height: 100%;">
          <span>您的当前位置是：</span>
          <i class="el-icon-location"></i>
          <span id="location">广东工业大学生活区东区</span>
          <el-collapse v-for="(val,key) of modelInfo" :key="key" style="margin-top:20px;" accordion>
                <el-collapse-item :title="val.number+'号打印机'" name="1">
                  <div class="el-collapse-item-content">
                    <ul >   
                      <li>打印机型号：{{val.model}}</li>
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
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  created() {
    this.axios.get("data/model.json").then(res => {
        this.modelInfo = res.data.printerData;
      });
  }
};
</script>

<style>
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