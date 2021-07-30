<template>
  <!-- 顶部导航条 -->
  <header id="header">
    <div class="content">
      <div class="header">
        <a href="/">
          <div
            style="
              display: inline-block;
              font-size: 35px;
              font-weight: bold;
              float: left;
              line-height: 64px;
              padding-left: 15px;
            "
          >
            汉迅
          </div>
        </a>
        <ul class="nav">
          <li>
            <a href="/find">找项目</a>
          </li>
          <li>
            <a href="/Proto"
              >原型广场
              <svg
                t="1620717829932"
                class="icon new-tip"
                viewBox="0 0 2048 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4839"
                width="2.4rem"
                height="1rem"
              >
                <path
                  d="M113.777778 0h1820.444444a113.777778 113.777778 0 0 1 113.777778 113.777778v796.444444a113.777778 113.777778 0 0 1-113.777778 113.777778H113.777778a113.777778 113.777778 0 0 1-113.777778-113.777778V113.777778a113.777778 113.777778 0 0 1 113.777778-113.777778z m164.124444 248.206222V739.555556h95.630222V390.542222L574.236444 739.555556h102.627556V248.206222h-95.630222v343.04l-195.697778-343.04H277.902222z m857.998222 87.04v-87.04h-360.334222V739.555556h372.337778v-88.348445h-272.042667v-126.293333h238.705778v-85.333334h-238.705778V335.246222h259.982223z m159.004445-87.04h-108.999111L1325.226667 739.555556h95.345777l59.335112-287.288889 17.294222-95.004445 17.351111 95.004445L1573.888 739.555556h98.019556l138.296888-491.349334h-104.334222l-65.649778 284.330667-15.018666 75.377778-14.961778-78.336-58.368-281.372445h-108.316444l-55.352889 283.022222-14.336 76.686223-13.994667-78.336-64.967111-281.372445z"
                  fill="#f75288"
                  p-id="4840"
                ></path>
              </svg>
            </a>
          </li>
          <li
            @mouseenter="show"
            @mouseleave="hidden"
            class="value-add-service-web"
          >
            <a>帮助中心</a>
            <!-- 帮助中心的下拉列表 -->
            <div v-if="list" class="child-menu">
              <div class="menu-item">
                <a href="/Question" target="_blank">常见问题</a>
              </div>
              <div class="menu-item">
                <a href="/Category" target="_blank">我是需求方</a>
              </div>
              <div class="menu-item">
                <a href="" target="_blank">我是开发方</a>
              </div>
            </div>
          </li>
        </ul>
        <div v-show="!token" class="right-zone">
          <div class="login-zone">
            <div class="btns">
              <a href="/becomePioneer" class="user button">成为开发者</a>
              <a href="/login" class="user button">登录</a>
              <a href="/register" class="user button">注册</a>
              <a href="" class="publish user button">发布项目</a>
            </div>
          </div>
        </div>
        <div v-show="token"></div>
        <div class="right-zone">
          <div
            class="user-avatar"
            @mouseover="showInfof"
            @mouseout="hiddenInfo"
          >
            <a href="/" class="avatar-link">
              <img
                src="https://dn-coding-net-production-pp.codehub.cn/29402486-bf33-4cb4-9ea2-ab4bae89bee2.png"
                alt=""
              />
            </a>
            <i class="cursor">﹀</i>
            <ul :class="showInfo ? 'avatar-menu hidden' : 'avatar-menu'">
              <li>
                <a>
                  <span>Hello,</span>
                  <span class="username">{{ username }}</span>
                </a>
              </li>
              <li @mouseover="blue1" @mouseout="white1">
                <a href="/user/info">
                  <img :src="hovered1 ? userw : user" alt="" />
                  个人中心
                </a>
              </li>
              <li @mouseover="blue2" @mouseout="white2">
                <a href="">
                  <img :src="hovered2 ? shieldw : shield" alt="" />
                  <span class="svg-span">我的开发宝</span>
                </a>
              </li>
              <li @mouseover="blue3" @mouseout="white3">
                <a @click="logout">
                  <img :src="hovered3 ? outw : out" alt="" />
                  退出登录
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="notification-layout"
          @mouseover="showNoticef"
          @mouseout="hiddenNotice"
        >
          <a class="notification-zone">
            <img src="../assets/folder.png" alt="" />
          </a>
          <div
            :class="
              showNotice
                ? 'notification-menu menu-zone hidden'
                : 'notification-menu menu-zone'
            "
          >
            <div class="menu-ul">
              <div class="menu-header">
                <span class="menu-title">通知</span>
                <a href="/user/notification" class="menu-button">
                  查看全部》
                </a>
              </div>
              <div id="notification-list"></div>
              <div>
                <div class="notification-section">
                  <div class="notification-content">无未读通知</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-zone">
          <div class="login-zone">
            <div class="btns">
              <a href="/user/project" class="user button">我参与的项目</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: false,
      // 临时登录标记
      token: true,
      showInfo: true,
      showNotice: true,
      username: "柑橘栀子花",
      hovered1: false,
      hovered2: false,
      hovered3: false,
      user: require("../assets/user.png"),
      userw: require("../assets/user-w.png"),
      shield: require("../assets/shield.png"),
      shieldw: require("../assets/shield-w.png"),
      out: require("../assets/out.png"),
      outw: require("../assets/out-w.png"),
    };
  },
  methods: {
    show() {
      this.list = true;
    },
    hidden() {
      this.list = false;
    },
    showNoticef() {
      this.showNotice = false;
    },
    hiddenNotice() {
      this.showNotice = true;
    },
    showInfof() {
      this.showInfo = false;
    },
    hiddenInfo() {
      this.showInfo = true;
    },
    // 头像下列表鼠标移入变色
    blue1() {
      this.hovered1 = true;
    },
    blue2() {
      this.hovered2 = true;
    },
    blue3() {
      this.hovered3 = true;
    },
    white1() {
      this.hovered1 = false;
    },
    white2() {
      this.hovered2 = false;
    },
    white3() {
      this.hovered3 = false;
    },
  },
  computed: {
    ...mapState(["token"]),
  },
};
</script>
<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 999;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .content {
    height: 100%;
    padding: 0 28px;
    margin: auto;
    .header {
      width: 100%;
      height: 64px;
      .logo-image {
        height: 30px;
        margin: 17px 0;
        padding-left: 10px;
        border: none;
        float: left;
      }
      .nav {
        float: left;
        height: 64px;
        line-height: 64px;
        margin-left: 2rem;
        li {
          float: left;
          width: 6rem;
          text-align: center;
          margin-right: 0.5rem;
          color: #3c4858;
          position: relative;
          a {
            cursor: pointer;
            color: #273444;
          }
          .new-tip {
            position: absolute;
            top: 1rem;
            left: 4.7em;
            margin: 0 0.5rem;
          }
        }
        .value-add-service-web {
          .child-menu {
            background: #2d3236;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
            border-radius: 0.4rem;
            width: 6rem;
            .menu-item:first-child {
              border-bottom: 0.1rem solid hsla(212, 9%, 63%, 0.2);
            }
            .menu-item {
              line-height: 3rem;
              height: 3rem;
              text-align: center;
              a {
                color: #fff;
              }
            }
          }
        }
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .right-zone {
        float: right;
        height: 64px;
        line-height: 64px;
        .login-zone {
          float: left;
          .button {
            display: inline-block;
            box-shadow: none;
            text-decoration: none;
            transition: 0.3s;
            font-size: 1rem;
            color: #3c4858;
            margin-left: 0.5rem;
            border: none;
            height: 64px;
            line-height: 64px;
            padding: 0 1.2rem;
            text-align: right;
            float: none;
            cursor: pointer;
            border-radius: 0.4rem;
            box-sizing: border-box;
            outline: none;
          }
          .publish {
            height: 39px;
            line-height: 39px;
            border: 1px solid #333;
          }
        }
        .user-avatar {
          position: relative;
          display: inline-block;
          padding: 0 1rem;
          line-height: 1em;
          .avatar-link {
            display: inline-block;
            position: relative;
            img {
              width: 40px;
              height: 40px;
              margin-right: 0.5em;
              vertical-align: middle;
              border-radius: 20px;
            }
          }
          a {
            color: #108ee9;
            background: transparent;
            text-decoration: none;
            outline: none;
            cursor: pointer;
            transition: color 0.3s ease;
          }
          .avatar-menu {
            position: absolute;
            right: 0;
            top: 40px;
            list-style: none;
            padding: 0;
            margin: 0;
            width: 180px;
            z-index: 65;
            background: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            li {
              padding: 5px 0;
              border-bottom: 1px solid #f7f6f2;
              a {
                color: #333;
                font-size: 1rem;
                display: inline-block;
                width: 100%;
                line-height: 1.5rem;
                padding: 7px 20px;
                box-sizing: border-box;
                text-decoration: none;
                cursor: pointer;
                span {
                  vertical-align: text-bottom;
                }
                .username {
                  max-width: 140px;
                  display: inline-block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                img {
                  width: 16px;
                  height: 16px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .notification-layout {
        position: relative;
        .notification-zone {
          position: relative;
          float: right;
          text-align: center;
          width: 50px;
          cursor: pointer;
          height: 100%;
          line-height: 64px;
          color: #0a0a0a;
          img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
          }
        }
        .menu-zone {
          position: absolute;
          right: 0;
          background: #fff;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          z-index: 1;
          margin-top: 64px;
          margin-right: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          width: 180px;
          transition: 0.3s;
        }
        .notification-menu {
          right: 96px !important;
          margin-right: 0 !important;
          width: 300px !important;
          max-height: 440px !important;
          overflow: scroll !important;
          .menu-ul {
            padding-bottom: 10px;
            .menu-header {
              padding: 15px 10px 10px 20px;
              color: #a9a9a9;
              line-height: 22px;
              .menu-title {
                font-size: 12px;
                color: #333;
              }
              .menu-button {
                font-size: 12px;
                color: #848484;
                float: right;
                cursor: pointer;
              }
            }
            .notification-section {
              font-size: 12px;
              color: #333;
              position: relative;
              border-top: 1px solid #f7f6f2;
              padding: 10px 15px 10px 28px;
            }
          }
        }
      }
      .hidden {
        display: none !important;
      }
    }
  }
}
.blue {
  background: #4289db !important;
  color: #fff !important;
}
header {
  display: block;
}
a {
  text-decoration: none;
}
a:hover {
  color: #49a9ee !important;
}
</style>