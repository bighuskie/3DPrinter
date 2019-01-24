<template>
    <div class="homeBox">
    <div class="status" v-for="(val,key) in status " :key=key>
        <el-row :gutter="30">
        <el-col :span="6">
            <div class="grid-contentOne bg-purple"> 
                <div style="color:#EB686E;" class="cardHead">
                    打印机型号
                </div>
                <div class="cardEndOne">
                    <i style="color:#F0959C;font-size:50px;margin-left:15px;margin-top:20px;" class="el-icon-printer"></i>  
                    <span class="dataOfprintor">{{val.pName}}</span>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentOne bg-purple">
                <div style="color:#7E8EE3;" class="cardHead">
                    打印机编号
                </div>
                <div class="cardEndTow">
                    <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/printNum.png" alt=""> 
                    <span class="dataOfprintor">{{val.pNo}}</span>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentOne bg-purple">
                <div style="color:#1CBBB6;" class="cardHead">
                    打印机状态
                </div>
                <div class="cardEndThree">
                    <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/status.png" alt=""> 
                    <span class="dataOfprintor">{{val.printorstate}}</span>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentOne bg-purple">
                <div style="color:#FDB958;" class="cardHead">
                    打印机温度
                </div>
                <div class="cardEndFour">
                    <img style="width: 68px; height:68px;margin-top:10px" src="../../assets/images/temperature.png" alt=""> 
                    <div class="temperature">
                    <div>热床温度：<span class="temperatureNum">{{val.bedtemperature}}℃</span></div>
                    <div>喷嘴1温度：<span class="temperatureNum">{{val.mouthOneTemperature}}℃</span></div>
                    <div>喷嘴2温度：<span class="temperatureNum">{{val.mouthTowTemperature}}℃</span></div>
                    </div>
                </div>
            </div>
        </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" justify="center">
                <div class="line"> <span class="fileSum">已打印文件数量/未打印文件数量：{{val.hasPrint}}/{{val.noPrint}}</span></div>
                <div class="other">
                    <div class="otherInclude">
                    <el-progress :text-inside="true" :stroke-width="16" :percentage="val.totolPecentage" color="#1AC272"></el-progress>
                    </div>
            </div>
            </el-col>
        </el-row>
        <!-- <el-row :gutter="30">
        <el-col :span="6">
            <div class="grid-contentTow"> 
                <div style="color:#FFFFFF;background-color:#EB686E" class="cardHead">
                    打印底盘形状
                </div>    
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentTow bg-purple">
                <div style="color:#FFFFFF;background-color:#7E8EE3" class="cardHead">
                    打印底盘形状
                </div>  
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentTow bg-purple">
                <div style="color:#FFFFFF;background-color:#1CBBB6" class="cardHead">
                    总耗材量
                </div>             
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentTow bg-purple">
                <div style="color:#FFFFFF;background-color:#FDB958" class="cardHead">
                    坐标位置
                </div>               
            </div>
        </el-col>
        </el-row>   -->
    </div>
    </div>
</template>

<script>
export default{
    name:'status',
    data(){
        return{
            status:[],
        }
    },
    created(){
        this.axios.get("data/status.json").then(res => {
        this.status = res.data.status;
        })
    },
}
</script>

<style scoped>
.homeBox{
    font-family: "Arial";
    width: 100%;   
    height: 100%;
    top: 0px;
    background-color: #eeeeee;
}
.status{
    width: 1140px;
    max-width: 1140px;
    margin: auto auto;
    padding: 30px 10px 0px 10px;
    box-sizing: border-box;
    overflow: hidden;
} 
.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 10px;
    
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}

.grid-contentOne {
    min-height: 120px;
    background-color: white;
    box-shadow:1px 1px 7px #87928d;
    border-radius: 3px;
}
.grid-contentTow {
    min-height: 120px;
    background-color: white;
    border-radius: 3px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.el-icon-star-off,
.el-icon-more,
.el-icon-share,
.el-icon-printer{
font-size: 32px;
    color: #1ac272;
}
.dataOfprintor{
    font-size: 36px;
    font-weight:500;
    color: White;
    float: right;
    margin-top: 20px;
    margin-right: 30px; 
}

.note{
    color: #99a9bf;
    font-size: 14px;
}

.other{
    min-height: 50px;
    background-color:white;
    border-radius: 4px;
}
.otherInclude{
    padding: 20px 10px;
    margin-bottom: 10px;
    width: 98%;
    min-height: 44px;
    /* background-color:#D4EDDA; */
    border-radius: 4px;
    position: relative;
    left: 11px;
    top:3px;
    text-align: center;
}
.line{
    height: 35px;
    width: 100%;
    padding: 0px 3px;
}
.temperature{
    font-size: 14px;
    font-weight:500;
    color: White;
    float: right;
    margin-top: 10px;
    margin-right: 40px; 
}
.temperatureNum{
    font-size: 20px;
}
.fileSum{
    font-size: 16px;
    position: relative;
    top: 5px;
}
.cardHead{
    font-size:16px;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
.cardEndOne{
    height:100px;
    background-color:#EB696F;
}
.cardEndTow{
    height:100px;
    background-color:#7E8EE3;
}
.cardEndThree{
    height:100px;
    background-color:#1CBBB6;
}
.cardEndFour{
    height:100px;
    background-color:#FDB958;
}
</style>

