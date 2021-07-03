<template>
  <div>
    <mini-nav></mini-nav>
    <main>
      <header class="main-header">
        <div class="wrap">
          <ul class="breadcrumbs">
            <li>
              <a href="/index">首页</a>
            </li>
            <li><a href="/category">我是需求方</a></li>
            <li><a href="/Publish">发布项目</a></li>
          </ul>
          <form action="" method="get" class="main-header-search">
            <label for="search">
              <input
                type="search"
                id="search"
                name="keyword"
                placeholder="输入问题关键字，找到答案"
              />
              <svg
                style="position: absolute; top: 0px; left: 10px"
                t="1621909625742"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5849"
                width="20"
                height="20"
              >
                <path
                  d="M464.213333 808.96c-88.746667 0-177.493333-34.133333-245.76-102.4-133.12-133.12-133.12-354.986667 0-488.106667 133.12-133.12 354.986667-133.12 488.106667 0 133.12 133.12 133.12 354.986667 0 488.106667-64.853333 68.266667-153.6 102.4-242.346667 102.4z m0-621.226667c-71.68 0-143.36 27.306667-194.56 81.92-109.226667 109.226667-109.226667 283.306667 0 392.533334 109.226667 109.226667 283.306667 109.226667 392.533334 0 109.226667-109.226667 109.226667-283.306667 0-392.533334-54.613333-54.613333-126.293333-81.92-197.973334-81.92z"
                  p-id="5850"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M904.533333 938.666667c-10.24 0-17.066667-3.413333-23.893333-10.24l-191.146667-191.146667c-13.653333-13.653333-13.653333-34.133333 0-47.786667s34.133333-13.653333 47.786667 0l191.146667 191.146667c13.653333 13.653333 13.653333 34.133333 0 47.786667-6.826667 6.826667-13.653333 10.24-23.893334 10.24z"
                  p-id="5851"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </label>
            <input type="submit" value="搜索" />
          </form>
        </div>
      </header>
    </main>
  </div>
</template>
<script>
import miniNav from "../components/MiniNav.vue";
export default {
  components: {
    miniNav,
  },
};
</script>
<style lang="scss" scoped>
main {
  display: block;
  .main-header {
    height: 88px;
    background: #4a99ed;
    .wrap {
      width: 1080px;
      margin: 0 auto;
      .breadcrumbs {
        float: left;
        margin-bottom: 0;
        li {
          font-size: 16px;
          color: #fff;
          line-height: 88px;
          float: left;
          a {
            margin-right: 5px;
          }
        }
        li::before {
          content: ">";
          float: left;
          margin-right: 5px;
        }
        li:nth-child(1)::before {
          content: "";
        }
        a {
          color: #fff;
        }
      }
      .breadcrumbs::after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .main-header-search {
        float: right;
        margin-top: 25px;
        position: relative;
        input {
          height: 38px;
          vertical-align: middle;
          width: 260px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 40px;
          padding-left: 30px;
          border: none;
          padding-right: 10px;
          -webkit-transition: all ease 0.4s;
          -moz-transition: all ease 0.4s;
          transition: all ease 0.4s;
        }
        input[type="submit"] {
          visibility: hidden;
          position: absolute;
          right: 0;
          height: 38px;
          width: 30px;
          display: inline-block;
        }
      }
    }
  }
}
header,
div,
ul,
li,
form,
label {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  word-break: break-word;
  display: block;
}
a {
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
  text-decoration: none;
  padding: 0;
  margin: 0;
}
label {
  cursor: pointer;
}
input[type="search"] {
  appearance: none;
}
</style>