<template>
    <div class="userOrderShow">
        <navinfo></navinfo>
        <userOrder></userOrder>
    </div>
</template>
<script>
import navinfo from "../components/nav/nav";
import userOrder from "../components/userOrder/userOrder";
export default {
   components:{
       navinfo,
        userOrder
    }
}
</script>