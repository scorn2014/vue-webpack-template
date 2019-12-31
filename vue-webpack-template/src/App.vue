<template>
  <div class="App">
    <div>
    Hello World
    </div>
      <div>
      // router-link 组件 用来导航到哪个路由
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
    </div>
    <div>
      // 用于展示匹配到的路由视图组件
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
}
</style>
