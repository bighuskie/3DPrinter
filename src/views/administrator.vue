<template>
    <div class="administrator">
    <status></status>
    <adminOrder></adminOrder>
    </div>
</template>
<script>
import queue from "../components/administrator/queue"
import status from "../components/administrator/status"
import adminOrder from "../components/administrator/adminOrder"

export default {
    components:{
        queue,
        status,
        adminOrder
    }
}
</script>
<style>
.administrator{
    background-color: #fafafa;
    padding-bottom: 30px;
}
</style>
