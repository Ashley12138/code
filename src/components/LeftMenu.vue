<template>
  <div class="menu">
    <div>
      <div class="side-nav">
        <ul v-for="(item, index) in leftMenu" :key="index">
          <li class="side-nav-header border-radius-top">
            <span>{{ item.heading }}</span>
          </li>
          <li class="side-nav-item" v-for="(x, y) in item.sideList" :key="y">
            <a :href="x.url" class="nav-link">
              <img
                class="icon"
                :src="x.image"
                style="width: 16px; height: 16px"
                alt=""
              />
              <span>{{ x.title }}</span>
              <span class="right-icon-wrapper">
                <img v-if="x.right" src="../assets/finished.png" alt="" />
                <img v-else src="../assets/unfinished.png" alt="" />
              </span>
            </a>
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
      leftMenu: [
        {
          heading: "基本信息",
          sideList: [
            {
              url: "/user/info",
              image: require("../assets/account.png"),
              title: "账户信息",
              right: true,
            },
            {
              url: "/user/identity",
              image: require("../assets/install.png"),
              title: "汉迅认证",
            },
          ],
        },
        {
          heading: "开发者信息",
          sideList: [
            {
              url: "/user/skills",
              image: require("../assets/adjust.png"),
              title: "技能展示",
            },
            {
              url: "/user/workers",
              image: require("../assets/works.png"),
              title: "案例作品",
              right: true,
            },
            {
              url: "/quiz/done",
              image: require("../assets/list.png"),
              title: "汉迅测试",
            },
          ],
        },
        {
          heading: "增值信息",
          sideList: [
            {
              url: "/user/deposit",
              image: require("../assets/shield-l.png"),
              title: "保证金计划",
            },
          ],
        },
        {
          heading: "我的开发宝",
          sideList: [
            {
              url: "/mpay/account",
              image: require("../assets/view.png"),
              title: "账户概览",
            },
            {
              url: "/mpay/records",
              image: require("../assets/record.png"),
              title: "交易记录",
            },
            {
              url: "/mpay/password",
              image: require("../assets/password.png"),
              title: "交易密码",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.menu {
  max-width: 300px;
  .side-nav {
    max-width: 300px;
    margin: 0;
    ul {
      padding: 0;
      margin: 0;
      border-radius: 4px;
      box-shadow: 0 -1px 0 0 #e7e7e7, inset 0 1px 0 0 #fff, 0 1px 0 0 #e6e6e6,
        1px 0 0 0 #e6e6e6, -1px 0 0 0 #e6e6e6;
      list-style: none;
      .side-nav-header {
        background-color: #e6ebf0;
        padding: 7px 0 7px 21px;
        width: 220px;
        box-shadow: inset 0 1px 0 0 #fff, 0 1px 0 0 #e6e6e6, 1px 0 0 0 #e6e6e6,
          -1px 0 0 0 #e6e6e6;
        span {
          font-size: 0.8rem;
        }
      }
      .side-nav-item {
        background-color: #f0f2f5;
        height: 48px;
        width: 220px;
        box-shadow: 0 -1px 0 0 #e6e6e6, inset 0 1px 0 0 #fff, 0 2px 0 0 #e6e6e6,
          1px 0 0 0 #e6e6e6, -1px 0 0 0 #e6e6e6;
      }
      li {
        position: relative;
        margin: 0;
        box-sizing: border-box;
        .nav-link {
          display: block;
          padding: 14px 0 14px 50px;
          color: #979fa8;
          line-height: 18px;
          text-decoration: none;
          outline: none;
          font-weight: 500;
          .icon {
            position: absolute;
            left: 20px;
            top: 16px;
          }
        }
      }
    }
    .right-icon-wrapper {
      position: relative;
      margin-right: 10px;
      float: right;
      font-size: 18px;
      img{
        width: 16px;
        height: 16px;
      }
    }
  }
}
div,
li {
  margin: 0;
  padding: 0;
}
a {
  color: #108ee9;
  background: transparent;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease;
}
</style>