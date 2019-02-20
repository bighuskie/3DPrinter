<template>
    <div class="userHistoryShow">
        <navinfo></navinfo>
        <userHistory></userHistory>
    </div>
</template>
<script>
import navinfo from "../components/nav/nav";
import userHistory from "../components/historyOrder/historyOrder";
export default {
   components:{
    navinfo,
    userHistory
    }
}
</script>