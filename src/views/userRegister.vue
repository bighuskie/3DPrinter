<template>
  <div>
    <navinfo></navinfo>
    <div class="userRegister">
      <register></register>
    </div>
  </div>
</template>
<script>
import navinfo from "../components/nav/nav";
import register from "../components/register/register";
export default {
  components: {
    navinfo,
    register
  }
};
</script>
