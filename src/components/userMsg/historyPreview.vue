<template>
    <div class="historyPreview">
       
    </div>

</template>
<script>
export default {
    data(){
        return {
            displayInfo:[]
        }
    },
   created() {
    //获取打印机数据
    this.axios.get("data/order.json").then(res => {
        this.displayInfo = res.data;
      });
  },
  methods:{
    
  }
}
</script>
<style lang="less" scoped>

</style>
