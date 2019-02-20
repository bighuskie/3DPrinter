<template>
  <div>
    <navinfo></navinfo>
    <status></status>
    <queue></queue>
  </div>
</template>
<script>
import navinfo from "../components/nav/nav";
import queue from "../components/queue/queue";
import status from "../components/status/status";

export default {
  components: {
    navinfo,
    queue,
    status
  }
};
</script>
<style>
</style>
