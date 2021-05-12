<template>
  <!-- 顶部导航条 -->
  <div class="top-menu">
    <div class="contair clearfix">
      <a class="logo" href="/">
        <img v-if="blue" src="@/assets/mart-logo.png" alt="" />
        <img v-else src="@/assets/mart-logo-white.png" alt="" />
      </a>
      <div class="leftmenu" style="position:relative">
        <ul>
          <li><a href="">找项目</a></li>
          <li><a href="">原型广场</a></li>
          <li>
             <el-dropdown>
            <span class="el-dropdown-link">
              帮助中心
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>常见问题</el-dropdown-item>
                <el-dropdown-item divided>我是需求方</el-dropdown-item>
                <el-dropdown-item>我是开发方</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown> 
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blue: true,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100px;
  height: 50px;
}
.el-dropdown-link {
    cursor: pointer;
  }
</style>