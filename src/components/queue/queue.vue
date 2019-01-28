<template>
  <div  class="homeBox">
    <div class="queue">
      <div class="tableHead">
          <span class="queueHead">打印队列</span>
          <span  style="display:inline-block;float:right;margin-right:25px;"><el-button id="editButton" v-on:click="changeButton" size="small" :type="editButtonType" round>{{editText}}</el-button></span>
      </div>
      <div  v-for="(val,index) in printerInfo.printerQueue " :key="val.guid"  class="table" >  
        <el-row  type="flex" :class="((val.username== printerInfo.currentUser && val.percentage == 0))? 'row-bg':'row-bg disable'" justify="space-between">
          <el-col :span="3">
            <div class="grid-contentOne bg-pNo">
              <el-tooltip placement="bottom">
                <div slot="content">创建时间：{{val.createdTime}}<br/>尺寸大小：{{val.modelSize}}</div>
                <el-button>{{val.pName}}</el-button>
              </el-tooltip>
            </div>
          </el-col>
          <el-col :span="3">
            <div>
              <el-radio-group  style="margin-top: 5px; position:relative ;right:60px ;top:12px">
                <el-tag type="text" label="martiral" color="#eff3f5" size="mini" >{{val.pmaterialType}}</el-tag>
                <el-tag type="success" label="standart" color="#eff3f5" size="mini">{{val.mode}}</el-tag>
                <el-tag type="success" label="more" color="#eff3f5" size="mini">{{val.count}}件</el-tag>
              </el-radio-group>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-contentOne bg-progess">
              <el-progress :percentage="val.percentage" :color="val.color"></el-progress>
                <p>{{val.timeRemaining}}</p>
            </div>
          </el-col> 
            <el-col :span="3">
            <div class="actionButton" :class="(isActionButton==false && val.username== printerInfo.currentUser)? 'disableEdit':''">      
              <el-button size="mini" @click="moveUp(index)"><i class="el-icon-arrow-up"></i></el-button>
              <el-button  size="mini" @click="moveDown(index)"><i class="el-icon-arrow-down"></i></el-button> 
            </div>
          </el-col>
          <el-col :span="3">
              <el-button @click="changeable(index)" :type="val.type" size="mini"  round>{{val.currentState}}</el-button>
              <el-button @click="deleteRow(index)" type="danger" size="mini" round>删除</el-button>
          </el-col>
        </el-row>
      </div>
    </div> 
  </div> 
</template>

<script>
export default {
  name: "queue",
  data() {
    return {
      isActionButton: false,
      editButtonType:"primary",
      editText:"调整打印顺序",
      printerInfo: [],
      userQueue: []
    };
  },
  //每一行都获得不同的key值
  guid: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
      //判断当前用户
  // beforcreated(){
  //   if(this.currentUser.username==this.printerQueue.username){
  //     console.log("1")
  //   }
  // },
  // currentUser(index,currentUser,printerQueue){
  //   if(this.currentUser.username=this.this.printerQueue[index].username){
  //     console.log("this.currentUser.username")
  //   }
  // },
  created() {
    this.axios.get("data/queue.json").then(res => {
      this.printerInfo = res.data;
      this.userQueue = res.data.userQueue;
      // console.log(res);
    });
  },
  methods: {
    //开始与暂停按钮的切换
    changeable(index) {
      if(!this.printerInfo.printerQueue[index].start) {
        this.$set(this.printerInfo.printerQueue[index], "start", true);
        this.printerInfo.printerQueue[index].currentState = "开始";
        this.printerInfo.printerQueue[index].type = "primary";
      } else {
        this.$set(this.printerInfo.printerQueue[index], "start", false);
        this.printerInfo.printerQueue[index].currentState = "暂停";
        this.printerInfo.printerQueue[index].type = "info";
      }
      // console.log(this.printerQueue[index].start);
    },
    changeButton(){
      this.isActionButton = !this.isActionButton;
      if(this.isActionButton==true) 
      {
        this.editText="确认打印顺序";
        this.editButtonType="success"
      }
      else
      {
      this.openConfirm();
      this.editText="调整打印顺序";
      this.editButtonType="primary"} 
    },
    //等待中与剩余时间的变化
    timeRemainingChange(){
      let percentage = this.printerInfo.printerQueue.percentage;
      if(percentage!=0){
        this.timeRemaining="30mim"
      }
    },

    //删除操作
    deleteRow(index) {
      this.$confirm("此操作将删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            return: this.printerInfo.printerQueue.splice(index,1),
          });}).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除 "
          });
        });
   },
   openConfirm() {
        this.$confirm('是否确定调整为此打印顺序?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '调整文件打印顺序成功!'
          });
          //将数据传输给后端
                this.axios({
                    method: 'post',
                    url: 'http://192.168.1.243:7001/api/v1/login',
                    withCredentials: true,
                    data:{
                        printerQueue: this.printerInfo.printerQueue    
                    }
                }).then(res => {console.log(res);})    
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    /*数组元素交换*/
    swapArray(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      return arr;
    },
    /*向上移动*/
    moveUp(index){
      //在总队列遍历查找
      for(let i=index-1;i>0;i--)
      {
         if(this.printerInfo.printerQueue[i].username== this.printerInfo.currentUser)
         {
           this.printerInfo.printerQueue=this.swapArray(this.printerInfo.printerQueue,index,i);
           break;
         }
      }
    },
    /*向下移动*/
    moveDown(index){
       for(let i=index+1;i<this.printerInfo.printerQueue.length;i++)
      {
         if(this.printerInfo.printerQueue[i].username== this.printerInfo.currentUser)
         {
           this.printerInfo.printerQueue=this.swapArray(this.printerInfo.printerQueue,index,i);
           break;
         }
      }
      if(index==this.printerInfo.printerQueue.length-1) alert("该文件已经排在最后了哦！");
    }
   },
};

</script>

<style scoped>
.homeBox {
  font-family: "Arial";
  width: 100%;   
  height: 100%;
  top: 0px;
  background-color: #eeeeee;
}
.queue{
  width: 1140px;
  max-width: 1140px;
  margin: auto auto;
  padding: 0px 10px 40px 10px;
  box-sizing: border-box;
  overflow: hidden;
}
.tableHead {
  width: 1120px;
  height: 50px;
  min-width: 1120px;
  margin: auto auto;
  background-color: #ffffff;
  font-size: 20px;
  border-left: 1px solid #D4EDDA;
  border-right: 1px solid #D4EDDA;
}
.table{
  width: 1320px;
  min-width: 1320px;
  margin: auto auto;
  position: relative;
  right: 100px;
}

.queueHead{
  padding: 10px 40px;
  position: relative;
  top: 10px;
}
.row-bg {
  margin: 2px 100px;
  border-bottom: 3px solid white;
  background-color:white;
  border-left: 1px solid #D4EDDA;
  border-right: 1px solid #D4EDDA;
  padding: 10px 10px;
}

.bg-pNo{
  text-align: center;
  
}
.grid-contentOne.bg-progess {
  position: relative;
  top: 5px;
  right: 40px;
}
.grid-contentOne {
  min-height: 30px;
}
.disableEdit button{
   opacity:0.6;
  pointer-events:none;
}
.disable{
  background-color: rgb(26, 194, 114,0.1);

}
.disable button{
  opacity:0.3;
  pointer-events:none;
}
.actionButton{
  text-align: center;
}
.el-icon-sort-down,
.el-icon-sort-up{
  position: relative;
  top: 5px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color:rgb(89, 216, 106);
}
/* 
.whiteSpace{
  width: 30px;
  height: 1px;
} */
button{
    -webkit-appearance: button;
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    top: 7px;
}

.pauseClass {
  height: 100px;
}
</style> 
