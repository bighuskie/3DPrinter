<template>
    <div class="homeBox">
        <!-- 关于打印机信息的第一排方格 -->
        
        <div class="status" >
        <div class="overview">
            <span  style=" font-size:16px;">综述</span>
            <div class="over">
                
                <div class="head">
                    实例
                </div>
                <div class="mainOver">
                    <div class="cont">
                        <span>总数量</span>
                        <span style=" font-size: 26px;color:#EB686E">100</span>
                        
                    </div>
                    <div class="cont">
                        <span>正在工作</span>
                        <span style=" font-size: 26px;color:#7E8EE3">50</span>
                        
                    </div>
                    <div class="cont">
                        <span>闲置</span>
                        <span style=" font-size: 26px;color:#1CBBB6">30</span>
                        
                    </div>
                    <div >
                        <span>离线</span>
                        <span style=" font-size: 26px;color:#FDB958">20</span>
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div class="printer" style="margin-left:150px;">
          
            <div class="over">
                <div class="head">
                    <span style="margin-right:300px;">当前打印机：</span>
                     <router-link to="/administrator/select1" >
                    <button
                      class="btn btn-success btn-sm op_btn op_btn3 printing"
                      ref="printing"
                      style="background-color:#7E8EE3;"
                    >选择打印机</button></router-link>
                </div>
                <div class="mainOver">
                    <div class="cont">
                        <span>编号</span>
                        <span style=" font-size: 26px;color:#EB686E">86</span>
                        
                    </div>
                    <div class="cont">
                        <span>品牌</span>
                        <span style=" font-size: 26px;color:#7E8EE3">极光沃尔</span>
                        
                    </div>
                    <div >
                        <span>型号</span>
                        <span style=" font-size: 26px;color:#1CBBB6">IP1,880</span>
                    </div>
                </div>
                
            </div>
        </div>
            <!-- Row 组件 提供 gutter 属性来指定每一栏之间的间隔 -->
            <el-row :gutter="30"> 
            <!-- 关于打印机信息的第一排第一个方格 -->
            <!-- <el-col :span="6">
                <div class="grid-contentOne bg-purple"> 
                    <div style="color:#EB686E;" class="cardHead">
                        打印机品牌
                    </div>
                    <div class="cardEndOne">
                        <i style="color:#F0959C;font-size:50px;margin-left:15px;margin-top:20px;" class="el-icon-printer"></i>  
                        <span class="dataOfprintor">{{val.pName}}</span>
                    </div>
                </div>
            </el-col> -->
            <!-- 关于打印机信息的第一排第二个方格 -->
            <!-- <el-col :span="6">
                <div class="grid-contentOne bg-purple">
                    <div style="color:#7E8EE3;" class="cardHead">
                        打印机型号
                    </div>
                    <div class="cardEndTow">
                        <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/printNum.png" alt=""> 
                        <span class="dataOfprintor">{{val.pNo}}</span>
                    </div>
                </div>
            </el-col> -->
            <!-- 关于打印机信息的第一排第三个方格 -->
            <!-- <el-col :span="6">
                <div class="grid-contentOne bg-purple">
                    <div style="color:#1CBBB6;" class="cardHead">
                        打印机状态
                    </div>
                    <div class="cardEndThree">
                        <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/status.png" alt=""> 
                        <span class="dataOfprintor">{{val.printorstate}}</span>
                    </div>
                </div>
            </el-col> -->
            <!-- 关于打印机信息的第一排第四个方格 -->
            <!-- <el-col :span="6">
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
            </el-col> -->
            </el-row>
        </div>
        <!-- 温度表格 -->
        <div class="middle" >
            <div v-for="(val,key) in status" :key="key" class="xbox">
           
                <div class="grid-contentOne bg-purple" >
                    <div style="color:#1CBBB6;" class="cardHead">
                        打印机状态
                    </div>
                    <div class="cardEndThree">
                        <img style="width: 70px; height:70px;margin-top:10px;margin-left:40px;" src="../../assets/images/status.png" alt=""> 
                        <span class="dataOfprintor">{{val.printorstate}}</span>
                    </div>
                </div>
                <div class="grid-contentOne bg-purple" style="margin-top:105px;">
                    <div style="color:#FDB958;" class="cardHead">
                        打印机温度
                    </div>
                    <div class="cardEndFour">
                        <img style="width: 68px; height:68px;margin-top:10px;margin-left:40px;" src="../../assets/images/temperature.png" alt=""> 
                        <div class="temperature">
                        <div>热床温度：<span class="temperatureNum">{{val.bedtemperature}}℃</span></div>
                        <div>喷嘴1温度：<span class="temperatureNum">{{val.mouthOneTemperature}}℃</span></div>
                        <div>喷嘴2温度：<span class="temperatureNum">{{val.mouthTowTemperature}}℃</span></div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="chart-container" style="">
                <span id="soild"></span><span>热床温度及喷头温度状态监控图</span>
                <canvas id="chart"></canvas>
            </div>
          
            
        </div>
       
        <!-- 关于打印机信息的第二排-->
        <div class="status" v-for="(val,key) in status " :key=key>
        <el-row :gutter="30">
        <el-col :span="6">
            <div class="grid-contentOne"> 
                <div style="color:#FFFFFF;background-color:#EB686E" class="cardHead">
                    正在打印数量
                </div>
                <div>
                    <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/printing.png" alt=""> 
                    <span class="printCount">共{{val.printCount}}件</span>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentOne bg-purple">
                <div style="color:#FFFFFF;background-color:#7E8EE3" class="cardHead">
                    已完成打印数量
                </div>
                <div>
                    <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/finish.png" alt=""> 
                    <span class="finishCount">共{{val.finishCount}}件</span>
                </div>  
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentOne bg-purple">
                <div style="color:#FFFFFF;background-color:#1CBBB6" class="cardHead">
                    总耗材量
                </div>   
                <div>
                    <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/matiaral.png" alt=""> 
                    <span class="matiaral">{{val.matiaral}}mm</span>
                </div>          
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-contentOne bg-purple">
                <div style="color:#FFFFFF;background-color:#FDB958" class="cardHead">
                    估计剩余时间
                </div>
                <div>
                    <img style="width: 70px; height:70px;margin-top:10px" src="../../assets/images/timeRe.png" alt=""> 
                    <span class="timeRemain">{{val.timeRemain}}min</span>
                </div>               
            </div>
        </el-col>
        </el-row>  
        </div>
        <router-view></router-view>
    </div>        
</template>
<script>
export default{
    name:'status',
    data(){
        return{
            status:[],
            labels:[],//图表横坐标
            datasets:{}//图表纵坐标
        }
    },
   created(){
            this.axios.get("data/status.json").then(res => {
            this.status = res.data.status;
            this.labels = res.data.labels;
            this.datasets = res.data.datasets;
            
            })
    },
    beforeUpdate(){
        var ctx = document.getElementById('chart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels:this.labels,
            datasets: [{
                label: "热床温度",
                fill: false,
                borderColor: '#EB696F',
                pointBorderColor:"rgb(231, 28, 39)",
                pointBackgroundColor:"rgb(231, 28, 39)",
                lineTension:0,
                data: this.datasets.data1
            },
            {
                label: "喷头温度",
                fill: false,
                borderColor: '#FDB958',
                pointBorderColor:"#FFF",
                pointBackgroundColor:"#FFF",
                lineTension:0,
                data: this.datasets.data2
            }
            ]
        },

        // Configuration options go here
        options: {
            responsive:true,
            aspectRatio:2,
            maintainAspectRatio:true
        }
        });
    },
    methods:{
         addData(chart, label, data) {
            chart.data.labels.push(label);
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push(data);
            });
            chart.update();
        },
         removeData(chart) {
            chart.data.labels.pop();
            chart.data.datasets.forEach((dataset) => {
                dataset.data.pop();
            });
            chart.update();
        }
    }
}
</script>

<style lang="less" scoped>
@one:#EB686E;
@tow:#7E8EE3;
@three:#1CBBB6;
@four:#FDB958;
@white:#fafafa;
.homeBox{
    font-family: "Arial";
    width: 100%;   
    height: 100%;
    top: 0px;
    background-color: @white;
    .overview {
        display: inline-block;
        margin-bottom: 30px;
        width: 500px;
        .over{
            width: 500px;
            height: 180px;
            border: 2px solid #eeeeee;
            .head{
                background-color: #eeeeee;
                width: 500px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                font-size: 16px;
            }
        }
        .mainOver{
            > div {
                width: 124px;
                height: 129px;
                text-align: center;
                float: left;
                padding-top: 20px;
                span {
                    display: block;
                    margin: 10px 0;
                    font-size: 18px;
                }
            }
        }
    }
    .printer {
        display: inline-block;
        margin-bottom: 30px;
        width: 500px;
        .over{
            width: 500px;
            height: 180px;
            border: 2px solid #eeeeee;
            .head{
                background-color: #eeeeee;
                width: 500px;
                height: 50px;
                padding-left: 10px;
                line-height: 50px;
                font-size: 16px;
            }
        }
        .mainOver{
            > div {
                width: 164px;
                height: 129px;
                text-align: center;
                float: left;
                padding-top: 20px;
                span {
                    display: block;
                    margin: 10px 0;
                    font-size: 18px;
                }
            }
        }
    }
}
.cont {
    border-right: 2px solid #eee;
}
.middle{
    width: 1190px;
    height: auto;
    margin: 20px auto;
    .chart-container{
    padding:30px;width:730px;background-color:white;
    margin-left: 60px;
    margin-bottom: 30px;
    float: right;
    }
    .xbox{
        display: inline-block;
        >div {
            width: 400px;
            margin: 20px 0;
        }
    }
}
#soild {
    display: inline-block;
    width: 2px;
    background-color: #EB686E;
    height: 16px;
    margin: 0 10px;
}
/* 关于打印机的前四个方格 */
.status{
    width: 1190px;
    max-width: 1190px;
    margin: auto auto;
    padding: 7px 10px 0px 10px;
    box-sizing: border-box;
    overflow: hidden;
} 
.el-row {
    margin-bottom: 7px;
}
.el-col {
    border-radius: 10px;
}
.bg-purple {
    background: #d3dce6;
}

.grid-contentOne {
    min-height: 120px;
    background-color:white;
    box-shadow:1px 1px 7px #87928d;
    border-radius: 3px;
}

.dataOfprintor{
    font-size: 36px;
    font-weight:500;
    color: White;
    float: right;
    margin-top: 20px;
    margin-right: 30px; 
}
.cardHead{
    font-size:16px;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
.cardStyle{
    height:100px;
}
.cardEndOne{
   .cardStyle;
    background-color:@one;
}
.cardEndTow{
    height:100px;
    background-color:@tow;
}
.cardEndThree{
    .cardStyle;
    background-color:@three;
}
.cardEndFour{
    .cardStyle;
    background-color:@four;
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

/* 关于打印机的后四个方格 */
.aboutFont{
    font-family: 'Awesome Font';
    font-style: italic;
    font-size: 36px;
    font-weight:500;
    font-style: normal;
    float: right;
    margin-top: 20px;
    margin-right: 30px; 
}
.printCount{
    color:@one;
    .aboutFont;
}
.finishCount{
    color:@tow;
    .aboutFont;
}
.matiaral{
    color:@three;
    .aboutFont;
}
.timeRemain{
    color:@four;
    .aboutFont;
}
</style>

