<template>
  <div>
    <navinfo></navinfo>
    <div class="userLogin">
      <login></login>
    </div>
  </div>
</template>
<script>
import navinfo from "../components/nav/nav";
import login from "../components/login/login";
export default {
  components: {
    navinfo,
    login
  }
};
</script>
<style>
</style>
