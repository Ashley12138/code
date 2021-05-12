<template>
  <div>
    <router-view />
  </div>
</template>
<script>
// import TopNav from './components/TopNav'
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
html{
  box-sizing: border-box;
}
.icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
