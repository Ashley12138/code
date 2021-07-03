<template>
  <div>
    <header class="header">
      <div class="wrap header-inner clear-fix">
        <h1 class="logo">
          <a href="/" title="汉迅">
            <!-- <img src="../assets/mart-logo.png" alt="" /> -->
            <div
              style="
                display: inline-block;
                font-size: 35px;
                font-weight: 400;
                float: left;
                line-height: 64px;
                padding-left: 15px;
              "
            >
              汉迅
            </div>
          </a>
        </h1>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
header {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  word-break: break-word;
  justify-content: center;
}
.header {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  .header-inner {
    display: table;
    height: 72px;
  }
  .wrap {
    width: 1080px;
    margin: 0 auto;
    .logo {
      display: table-cell;
      vertical-align: middle;
      img {
        display: block;
        max-height: 40px;
      }
    }
  }
}
</style>