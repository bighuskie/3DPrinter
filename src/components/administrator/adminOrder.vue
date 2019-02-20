<template>
    <div class="adminOrder">
        <div class="main">
                <el-table
                :data="displayInfo.filter(data => !search || data.orderNum.toLowerCase().includes(search.toLowerCase()))"
                style="width: 1190px;
                    margin:20px auto;
                    border-radius: 4px;
                    border: 1px solid #ebeef5;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                "
                :default-sort = "{prop: 'date', order: 'descending'}"
                >
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column type="expand" >
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="模型名称">
                        <span>{{ props.row.mName }}</span>
                    </el-form-item>
                    
                    <el-form-item label="打印机编号">
                        <span>{{ props.row.pNo }}</span>
                    </el-form-item>
                    <el-form-item label="模型尺寸">
                        <span><span class="x_size">{{props.row.mSizeL}}mm x</span>
                            <span class="y_size"> {{props.row.mSizeW}}mm x</span>
                            <span class="z_size"> {{props.row.mSizeH}}mm</span></span>
                    </el-form-item>
                    <el-form-item label="打印机型号">
                        <span>{{ props.row.pModal }}</span>
                    </el-form-item>
                    <el-form-item label="打印数量">
                        <span>{{ props.row.mNum }}</span>
                    </el-form-item>
                    <el-form-item label="打印机品牌">
                        <span>{{ props.row.pName }}</span>
                    </el-form-item>
                    <el-form-item label="打印材料">
                        <span>{{ props.row.mMaterialType }}</span>
                    </el-form-item>
                    </el-form>
                </template>
                </el-table-column>
                <el-table-column
                label="订单号"
                sortable
                prop="orderNum">
                </el-table-column>
                <el-table-column
                label="模型名称"
                sortable
                prop="mName">
                </el-table-column>
                <el-table-column
                label="下单时间"
                sortable
                prop="oDate">
                </el-table-column>
                <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    style="font-weight: normal"
                    placeholder="输入订单号搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click.native.prevent="deleteRow(scope.$index, displayInfo)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        </div>
        <!-- 删除提示 -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
     created() {
        this.axios.get("data/admin.json").then(res => {
            this.displayInfo = res.data.adminData;
            console.log(this.displayInfo);
        });
    },
    data(){
        return {
        displayInfo:[],
        search: '',
        dialogVisible: false,
        index:-1,
        rows:[]
        }
    },
    methods:{
    deleteRow(index, rows) {
        this.dialogVisible = true;//触发提示
        this.index=index;
        this.rows=rows;
        
    },
    confirm(){
        this.dialogVisible = false;
        this.rows.splice(this.index, 1);//删除操作
    }
    }
}
</script>

<style lang="less" scoped>

.demo-table-expand {
    font-size: 0;
}
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
