<template>
  <div class="main-container">
    <header id="mart-header" class="transparent">
      <div id="top-menu">
        <div class="container clearfix">
          <a href="" class="logo clearfix">
            <div
              style="
                display: inline-block;
                font-size: 33px;
                font-weight: 400;
                float: left;
                line-height: 64px;
                padding-left: 13px;
                color: #fff;
              "
            >
              汉迅
            </div>
          </a>
          <div style="position: relative">
            <ul class="nav">
              <li>
                <a href="/find">找项目</a>
              </li>
              <li>
                <a href="/proto"
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
                    ></path></svg
                ></a>
              </li>
              <li
                class="value-add-service-web"
                @mouseenter="show"
                @mouseleave="hidden"
              >
                <a href="">帮助中心</a>
                <div class="child-menu" v-if="list">
                  <div class="menu-item">
                    <a href="/question" target="_blank">常见问题</a>
                  </div>
                  <div class="menu-item">
                    <a href="" target="_blank">我是需求方</a>
                  </div>
                  <div class="menu-item">
                    <a href="" target="_blank">我是开发方</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="right-zone">
            <div class="login-zone">
              <div class="btns">
                <a
                  class="btn_developers user button"
                  style="width: 7em"
                  href="/becomepioneer"
                  >成为开发者</a
                >
                <a href="/login" class="user button">登录</a>
                <a href="/register" class="user button">注册</a>
                <a
                  href=""
                  style="width: 6rem !important; padding: 0"
                  class="publish user button needLogin"
                  >发布项目</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="view-container detailed-footer transparent">
      <div id="mart-help-center">
        <div id="mart-page-header">
          <div class="title">
            <span>帮助中心</span>
          </div>
        </div>
        <div class="help-wrapper">
          <div class="help-nav">
            <ul>
              <li>
                <a href="/help">帮助中心</a>
              </li>
              <li>常见问题</li>
              <div class="clear-fix"></div>
            </ul>
          </div>
          <div class="help-body">
            <div class="menu">
              <div class="search">
                <input
                  type="text"
                  class="search-input"
                  placeholder="关键字搜索"
                />
                <img
                  src="https://dn-coding-net-production-pp.codehub.cn/f7695004-8b24-40ac-9fda-7c04229c676f.png"
                  alt=""
                  class="search-icon"
                />
              </div>
              <div class="menu-list">
                <ul>
                  <li class="active">
                    <a href="/question" target="_blank">常见问题</a>
                  </li>
                  <div class="clear-fix"></div>
                </ul>
                <div class="section-list">
                  <div
                    class="section"
                    v-for="(item, index) in sectionList"
                    :key="index"
                  >
                    <h2>{{ item.title }}</h2>
                    <ul>
                      <li
                        class="category"
                        v-for="(x, y) in item.category"
                        :key="y"
                      >
                        <a href="" target="_blank">{{ x }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="content-wrapper">
                <h2>常见问题</h2>
                <div class="right-list common-list">
                  <ul>
                    <li v-for="(item, index) in commonList" :key="index">
                      <a href="">{{ item.content }}</a>
                    </li>
                    <div class="clear-fix"></div>
                  </ul>
                </div>
                <div class="feedback" style="height: 247px">
                  <span class="feed-tip">问题还没解决？去反馈吧！</span>
                  <a href="#" class="feedback-btn">
                    <span class="feed-words">在线反馈</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="clear-fix"></div>
          </div>
        </div>
      </div>
    </div>
    <bottom-footer></bottom-footer>
  </div>
  <div
    class="kf5-support-chat kf5-chatSupport-right-bottom"
    style="z-index: 99999999"
  >
    <div
      id="kf5-support-btn"
      class="
        kf5-chatSupport-btn
        kf5-chatSupport-style3
        kf5-chatSupport-icon10
        kf5-waves
        waves-effect waves-light
      "
      style="color: #fff; background: #4677c1"
    >
      <svg
        t="1624601222724"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2226"
        width="18"
        height="16"
      >
        <path
          d="M485.734 76.86c-235.218 0-425.578 165.593-425.578 369.859 0 125.328 72.735 236.765 182.61 304.828v114.531c0 15.469 10.828 24.75 23.218 24.75 4.641 0 9.297-1.531 12.375-3.094l116.063-77.375c29.422 6.188 58.812 7.75 89.765 7.75 235.22 0 425.563-165.593 425.563-369.859 1.566-205.797-188.778-371.39-424.016-371.39z m0 679.346c-26.312 0-52.625-3.094-78.921-7.75l-12.391-3.094c-7.735-1.53-15.469 0-23.219 4.657l-10.812 7.718-55.72 37.157V734.55c0-10.844-6.187-21.688-15.468-26.313l-15.484-9.28C177.766 641.674 120.516 547.3 120.516 448.252c0-170.219 162.5-307.937 363.671-307.937 201.188 0 363.657 137.718 363.657 307.937 1.565 168.672-162.466 307.953-362.11 307.953zM244.313 457.531c0 28.219 22.859 51.078 51.078 51.078 28.203 0 51.062-22.859 51.062-51.078 0-28.172-22.86-51.047-51.062-51.047-28.22 0-51.079 22.875-51.079 51.047z m193.453 0c0 28.219 22.859 51.078 51.062 51.078s51.078-22.859 51.078-51.078c0-28.172-22.875-51.047-51.078-51.047s-51.062 22.875-51.062 51.047z m187.234 0c0 28.219 22.875 51.078 51.063 51.078 28.218 0 51.093-22.859 51.093-51.078 0-28.172-22.875-51.047-51.093-51.047-28.188 0-51.063 22.875-51.063 51.047z m293.128 79.957c-0.912-1.152-1.872-2.256-2.816-3.408-6.656 25.28-16.16 49.632-28.128 72.752 0.496 1.12 1.12 2.192 1.6 3.312 8.096 18.624 12.496 38.752 12.496 59.744 0 55.664-32.16 108.688-86.064 140.848l-8.688 5.216c-5.216 2.592-8.72 8.688-8.72 14.784v33.904l-31.28-20.88-6.096-4.336c-4.336-2.592-8.688-3.472-13.024-2.592l-6.944 1.712c-14.816 2.656-29.6 4.336-44.336 4.336-35.44 0-68.816-7.84-97.936-21.504-28.912 6.752-58.912 11.008-89.808 12.464 48.4 41.712 115.008 67.504 188.592 67.504 19.504 0 38-0.976 56.496-4.848l73.056 48.688c1.936 0.976 4.848 1.936 7.744 1.936 7.808 0 14.624-5.84 14.624-15.568v-72.096c69.152-42.848 114.944-112.976 114.944-191.84 0-48.192-16.848-92.976-45.712-130.128z"
          fill="#ffffff"
          p-id="2227"
        ></path>
      </svg>
      <span style="margin-left: 0.3rem">在线客服</span>
    </div>
  </div>
</template>
<script>
import bottomFooter from "../components/BottomFooter.vue";
export default {
  components: {
    bottomFooter,
  },
  data() {
    return {
      list: false,
      sectionList: [
        {
          title: "我是开发方",
          category: [
            "需求方指南",
            "发布项目",
            "招募开发",
            "支付款项",
            "开发项目",
            "验收项目",
          ],
        },
        {
          title: "我是开发方",
          category: [
            "开发者指南",
            "注册认证",
            "报名接单",
            "开发项目",
            "项目验收",
          ],
        },
      ],
      commonList: [
        { content: "需求方确定人选后如何启动项目？" },
        { content: "码市能给您提供什么服务？" },
        { content: "如何在开发宝里充值或提现？" },
        { content: "如何使用Coding管理以及交付项目？" },
        { content: "如何给项目估价？" },
        { content: "开发者接单步骤是什么？" },
        { content: "需求方在码市做项目的步骤是什么？" },
        { content: "开发者如何建立阶段划分？" },
        { content: "如何申请修改项目阶段计划？" },
        { content: "如何申请中止项目？" },
        { content: "码市会员是什么？" },
      ],
    };
  },
  methods: {
    show() {
      this.list = true;
    },
    hidden() {
      this.list = false;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  outline: none;
}
.main-container {
  min-height: 100%;
  position: relative;
  background: #f0f2f5;
  #mart-header {
    position: absolute;
    top: 2rem;
    width: 100%;
    z-index: 10002;
    background-color: rgba(0, 0, 0, 0);
    color: #fff !important;
    #top-menu {
      height: 5rem;
      background: 0;
      border-bottom: 0;
      box-shadow: none;
      transition: 0.1s;
      margin: auto;
      .container {
        height: 100%;
        padding: 0 28px;
        position: relative;
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
            color: #fff;
            position: relative;
            a {
              cursor: pointer;
              color: #fff;
            }
            a:hover {
              color: #e0e6ed;
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
            .btns {
              display: inline-block;
              .button {
                width: 5rem;
                box-shadow: none;
                text-decoration: none;
                transition: 0.3s;
                font-size: 1rem;
                color: #e0e6ed;
                margin-left: 0.5rem;
                border: none;
                height: 3rem;
                line-height: 3rem;
                text-align: center;
                float: none;
                cursor: pointer;
                border-radius: 0.4rem;
                box-sizing: border-box;
                outline: none;
                vertical-align: middle;
              }
              .publish {
                height: 39px;
                line-height: 39px;
                border: 1px solid #fff;
              }
              .publish:hover {
                border: 1px solid #fff;
              }
              .user {
                display: inline-block;
                font-size: 1rem;
                margin-left: 0.5rem;
              }
              .user:hover {
                box-sizing: border-box;
                border: 1px solid #e0e6ed;
                color: #e0e6ed;
                border-radius: 5px;
                height: 42px;
              }
            }
          }
        }
      }
    }
  }
  header {
    display: block;
  }
  a {
    text-decoration: none;
  }
  .view-container {
    padding-top: 0;
    min-height: 600px;
    #mart-page-header {
      height: 22rem;
      background-color: #00193b;
      position: relative;
      z-index: 10000;
      .title {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        height: 100%;
        span {
          padding-top: 3.5rem;
          z-index: 1;
          font-size: 2.5rem;
          line-height: 5rem;
          color: #fff;
        }
      }
    }
    #mart-page-header::after {
      background: url(https://dn-coding-net-production-pp.codehub.cn/f2982d68-af36-4e62-bbb7-41178d7c470b.jpg)
        center/cover no-repeat;
      pointer-events: none;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0.7;
      box-sizing: border-box;
    }
    .help-wrapper {
      font-size: 1rem;
      width: 100%;
      max-width: 70em;
      margin: 0 auto 6em;
      .help-nav {
        margin: 2.2em 0;
        padding-left: 1.05em;
        ul {
          li {
            float: left;
            a {
              color: #4187db;
            }
          }
          li:first-child::after {
            content: "→";
            color: #c7c7c7;
            margin: 0 0.65em;
          }
        }
      }
      .help-body {
        padding: 0 1.05em;
        .menu {
          width: 24%;
          background: #fff;
          border-radius: 4px;
          float: left;
          .search {
            position: relative;
            margin-bottom: 1.2em;
            .search-input {
              font-size: 1.1rem;
              width: 85%;
              height: 2.6em;
              border-radius: 4px;
              margin: 1.4em auto 0;
              display: block;
              border: 1px solid #dde3eb;
              padding-left: 0.65em;
            }
            .search-icon {
              position: absolute;
              top: 0.5em;
              width: 1.8em;
              right: 1.2em;
            }
          }
          .menu-list {
            width: 85%;
            margin: 0 auto;
            padding-bottom: 1.5em;
            border-top: 1px solid #eaecee;
            padding-top: 0.58em;
            .active {
              color: #4187db;
              a {
                color: #4187db;
              }
            }
            li {
              font-size: 0.95rem;
              margin-top: 1em;
              padding-left: 0.7em;
            }
            li::before {
              margin-right: 0.35em;
              content: "•";
            }
            .section-list {
              .section {
                margin-top: 1.5em;
                h2 {
                  color: #56616d;
                }
                ul {
                  li {
                    font-size: 0.95rem;
                    margin-top: 1em;
                    padding-left: 0.7em;
                    color: #979fa8;
                    a {
                      color: #979fa8;
                    }
                  }
                }
              }
            }
          }
        }
        .content {
          width: 74%;
          max-width: 52em;
          border-radius: 4px;
          float: right;
          background: #fff;
          min-height: 42.5em;
          .content-wrapper {
            margin: 4em 4.5em 0;
            h2 {
              color: #56616d;
            }
            .right-list {
              border-top: 1px solid #eaecee;
              border-bottom: 1px solid #eaecee;
              padding: 2.3em 0 2.85em;
              margin-top: 1.5em;
              ul {
                li:nth-child(2n + 1) {
                  width: calc(54% - 22px);
                }
                li:nth-child(2n) {
                  width: calc(46% - 22px);
                }
                li {
                  float: left;
                  line-height: 2.15em;
                  list-style: outside;
                  color: #468bd8;
                  margin-left: 1.5em;
                  a {
                    color: #468bd8;
                  }
                }
              }
            }
            .feedback {
              padding: 40px 0 88px;
              .feed-tip {
                font-size: 18px;
                color: #4b4b4b;
                display: block;
                text-align: center;
              }
              a {
                width: 175px;
                text-align: center;
                font-size: 16px;
                background: #488dd7;
                border: none;
                padding: 16px 0;
                color: #fff;
                border-radius: 5px;
                display: block;
                margin: 35px auto 0;
                .feed-words {
                  font-size: 16px;
                  color: #fff;
                  display: inline-block;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
  .detailed-footer {
    padding-bottom: 366px;
  }
}
.kf5-support-chat {
  position: fixed !important;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  .kf5-chatSupport-style3 {
    right: 50px;
    bottom: 0;
    font-size: 16px;
    padding: 0 15px 0 12px;
    line-height: 40px;
    text-align: center;
    background: #5d94f3;
    color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }
  .kf5-chatSupport-btn {
    position: fixed;
    cursor: pointer;
    overflow: visible;
    z-index: 10;
    -webkit-font-smoothing: antialiased;
  }
}
li,
ul {
  list-style: none;
  padding: 0;
}
ul {
  margin: 0;
  padding: 0;
}
::after,
::before {
  box-sizing: border-box;
}
#mart-help-center {
  .clear-fix {
    clear: both;
  }
}
input {
  padding: 0;
}
h1,
h2,
h3 {
  font-weight: 400;
  padding: 0;
  margin: 0;
}
</style>