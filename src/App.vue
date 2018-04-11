<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='less'>
@test: red;
body {
  color: @test;
}
</style>
