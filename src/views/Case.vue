<template>
  <div class="main-container">
    <header id="mart-header" class="transparent">
      <div id="top-menu">
        <div class="container clearfix">
          <a href="/" class="logo clearfix">
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
      <div id="case_list">
        <div id="mart-page-header">
          <div class="title">
            <span>汉迅案例</span>
          </div>
        </div>
        <div class="onepcssgrid">
          <section class="nav">
            <div class="onerow">
              <div id="nav-list">
                <ul>
                  <li
                    class="col2 filter"
                    v-for="(item, index) in navList"
                    :key="index"
                  >
                    <div class="icon_wrap">
                      <img :src="item.url" alt="" />
                      <!-- <img v-if="w" :src="item.urlw" alt="" /> -->
                    </div>
                    <div>
                      <div class="title">{{ item.title }}</div>
                      <div class="subtitle">{{ item.subtitle }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="case_list onerow">
            <a
              @mouseenter="showmask(index)"
              @mouseleave="hiddenmask(index)"
              href=""
              v-for="(item, index) in caseList"
              :key="index"
            >
              <div class="case">
                <div class="logo_wrap">
                  <div class="logo">
                    <img :src="item.url" alt="" />
                  </div>
                </div>
                <div class="delimiter"></div>
                <div class="desc">
                  <div class="title">{{ item.title }}</div>
                  <div class="digest">
                    <div>
                      <div>金额</div>
                      <div class="strong">{{ item.price }}</div>
                    </div>
                    <div>
                      <div>项目时间</div>
                      <div class="strong">{{ item.time }}</div>
                    </div>
                    <div>
                      <div>参与角色</div>
                      <div class="strong">{{ item.part }}</div>
                    </div>
                  </div>
                </div>
                <div
                  :class="mask[index] ? 'mask' : 'hover_case'"
                  style="
                    left: 137.8px;
                    width: 980px;
                    height: 226px;
                    margin-top: 10px;
                  "
                >
                  {{ item.hidden }}
                </div>
              </div>
            </a>
          </section>
        </div>
        <div class="page-bottom">
          <p class="hint-words">在汉迅实现您的项目</p>
          <a href="/publish" class="publish-btn">发布需求</a>
        </div>
      </div>
    </div>
    <bottom-footer></bottom-footer>
    <div
      class="kf5-support-chat kf5-chatSupport-right-bottom"
      style="position: relative; z-index: 999"
    >
      <div
        id="kf5-support-btn"
        class="kf5-chatSupport-btn kf5-chatSupport-style kf5-waves"
        style="color: #fff; background: #4677c1"
      >
        <svg
          t="1621926453587"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6816"
          width="25"
          height="25"
          style="padding-top:5px;box-sizing:border-box"
        >
          <path
            d="M485.734 76.86c-235.218 0-425.578 165.593-425.578 369.859 0 125.328 72.735 236.765 182.61 304.828v114.531c0 15.469 10.828 24.75 23.218 24.75 4.641 0 9.297-1.531 12.375-3.094l116.063-77.375c29.422 6.188 58.812 7.75 89.765 7.75 235.22 0 425.563-165.593 425.563-369.859 1.566-205.797-188.778-371.39-424.016-371.39z m0 679.346c-26.312 0-52.625-3.094-78.921-7.75l-12.391-3.094c-7.735-1.53-15.469 0-23.219 4.657l-10.812 7.718-55.72 37.157V734.55c0-10.844-6.187-21.688-15.468-26.313l-15.484-9.28C177.766 641.674 120.516 547.3 120.516 448.252c0-170.219 162.5-307.937 363.671-307.937 201.188 0 363.657 137.718 363.657 307.937 1.565 168.672-162.466 307.953-362.11 307.953zM244.313 457.531c0 28.219 22.859 51.078 51.078 51.078 28.203 0 51.062-22.859 51.062-51.078 0-28.172-22.86-51.047-51.062-51.047-28.22 0-51.079 22.875-51.079 51.047z m193.453 0c0 28.219 22.859 51.078 51.062 51.078s51.078-22.859 51.078-51.078c0-28.172-22.875-51.047-51.078-51.047s-51.062 22.875-51.062 51.047z m187.234 0c0 28.219 22.875 51.078 51.063 51.078 28.218 0 51.093-22.859 51.093-51.078 0-28.172-22.875-51.047-51.093-51.047-28.188 0-51.063 22.875-51.063 51.047z m293.128 79.957c-0.912-1.152-1.872-2.256-2.816-3.408-6.656 25.28-16.16 49.632-28.128 72.752 0.496 1.12 1.12 2.192 1.6 3.312 8.096 18.624 12.496 38.752 12.496 59.744 0 55.664-32.16 108.688-86.064 140.848l-8.688 5.216c-5.216 2.592-8.72 8.688-8.72 14.784v33.904l-31.28-20.88-6.096-4.336c-4.336-2.592-8.688-3.472-13.024-2.592l-6.944 1.712c-14.816 2.656-29.6 4.336-44.336 4.336-35.44 0-68.816-7.84-97.936-21.504-28.912 6.752-58.912 11.008-89.808 12.464 48.4 41.712 115.008 67.504 188.592 67.504 19.504 0 38-0.976 56.496-4.848l73.056 48.688c1.936 0.976 4.848 1.936 7.744 1.936 7.808 0 14.624-5.84 14.624-15.568v-72.096c69.152-42.848 114.944-112.976 114.944-191.84 0-48.192-16.848-92.976-45.712-130.128z"
            fill="#ffffff"
            p-id="6817" 
          ></path>
        </svg>
        <span>在线客服</span>
      </div>
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
      navList: [
        {
          url: require("../assets/all.png"),
          urlw: require("../assets/all-w.png"),
          title: "全部",
          subtitle: "All Cases",
        },
        {
          url: require("../assets/computer.png"),
          urlw: require("../assets/computer-w.png"),
          title: "网站",
          subtitle: "Web Develop",
        },
        {
          url: require("../assets/phone.png"),
          urlw: require("../assets/phone-w.png"),
          title: "APP",
          subtitle: "iOS & Android",
        },
        {
          url: require("../assets/wechat.png"),
          urlw: require("../assets/wechat-w.png"),
          title: "微信",
          subtitle: "Wechat Develop",
        },
        {
          url: require("../assets/html5.png"),
          urlw: require("../assets/html5-w.png"),
          title: "HTML5",
          subtitle: "HTML5 App",
        },
      ],
      caseList: [
        {
          url: "https://dn-coding-net-production-pp.codehub.cn/ad0c030e-1dfa-4713-842f-6ff93aea6fd8.png",
          title: "渔乐帮",
          price: "￥20000",
          time: "60天",
          part: "前端开发、测试工程师",
          hidden:
            "一家专注于以钓点为中心的本地化垂钓互动社区，致力于为广大钓友打造一个真实有趣的互动社群。您可以在渔乐帮结识新钓友，聊钓技、约钓友、分享渔获、随时随地了解最新渔汛。",
        },
        {
          url: "https://dn-coding-net-production-pp.codehub.cn/1f76e5cf-6761-4ea6-8adc-3af785e582b3.jpg",
          title: "MiUsky蜜友天空",
          price: "￥80000",
          time: "90天",
          part: "开发团队",
          hidden:
            "MiUsky蜜友天空，专注场景社交第一APP。让你不再只是对着冷冰冰的手机屏幕YY，打开蜜友天空，给你一个37℃的真人！ 不需要时光机，也不需要瞬间转移技术…利用手机APP技术，以西餐厅、酒吧、咖啡店为目标虚拟场景，将其叠加在现实世界的场景中，以社交软件为载体，通过虚拟世界与现实世界的对应，使在同一社交软件的用户在虚拟现实中进行社交，将产生巨大的用户体验。VR社交创新新模式–虚拟实景社交.",
        },
        {
          url: "https://dn-coding-net-production-pp.codehub.cn/9733697a-3556-429e-a847-33cfabe6f6b3.jpg",
          title: "晴蜂科技",
          price: "￥57500",
          time: "50天",
          part: "测试工程师，设计师，产品经理，开发团队",
          hidden:
            "本项目是网络直播推广服务的平台网站，该平台主要业务有主播赏金任务发布、主播流量套餐购买等。该项目开发人员包括产品经理、UI设计师、前后台开发工程师，平台前端业务功能包括注册、认证、登录、简单商城、简单任务系统、账户系统和用户中心；后台主要业务功能为用户管理、订单管理和财务管理等。",
        },
        {
          url: "https://dn-coding-net-production-pp.codehub.cn/9096f919-f66b-4695-9936-d7f1513e5dda.png",
          title: "产品大牛",
          price: "￥18000",
          time: "30天",
          part: "全栈开发",
          hidden:
            "产品大牛是一个服务于产品团队的工具+社区的平台,旨在帮助产品经理,交互设计师在线托管自己设计的产品原型与PRD文档,并快速地在线分发,收集各方对产品的意见。通过享受产品大牛的服务,提高工作效率,提升业内水平，拓展产品理念，从而成为一个牛逼的产品经理。",
        },
        {
          url: "https://dn-coding-net-production-pp.codehub.cn/6bdb6fca-a736-4d8b-843d-549d3951a724.png",
          title: "译文的书",
          price: "￥270000",
          time: "110天",
          part: "开发团队",
          hidden:
            "该项目是上海译文出版社旗下一款主题功能为电子书购买和阅读应用，项目分为APP（读者端）、管理后台和Web网站。读者端主要功能有查看、评论、点赞和分享最新图书信息，试读、购买和本地阅读电子书；后台主要功能有用户管理、图书信息管理、图书管理和财务管理等；Web网站主要用于展示产品信息。",
        },
        {
          url: "https://dn-coding-net-production-pp.codehub.cn/aa30f380-5467-4526-856f-7a8e8f6948ee.jpg",
          title: "熊猫足球O2O APP",
          price: "￥90000",
          time: "65天",
          part: "设计师 & 开发团队",
          hidden:
            "产品可以帮助⽤户快速的组织球赛和预定场地。通过加入或者创建球队的⽅式让散户和球队变得更加专业，让每个用户在团队中都能找到归属感和认同感。同时满⾜球队管理者对球队⽇常事务管理的需求。",
        },
        {
          url: "https://dn-coding-net-production-pp.codehub.cn/1cd5cf26-51a2-40ab-b31c-b8b2c8e77754.jpg",
          title: "繁世",
          price: "￥15000",
          time: "15天",
          part: "Android Native,前端开发",
          hidden:
            "根据需求方提供的原型和设计，完成 IM 原生 Android 社交应用开发。约15页。即时通讯部分接第三方。",
        },
      ],
      mask: {},
    };
  },
  methods: {
    show() {
      this.list = true;
    },
    hidden() {
      this.list = false;
    },
    showmask(i) {
      this.mask[i] = true;
      document.getElementsByClassName;
    },
    hiddenmask(i) {
      this.mask[i] = false;
    },
  },
};
</script>
<style lang="scss" scoped>
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
    padding-bottom: 366px;
    #mart-page-header {
      height: 22rem;
      background-color: #00193b;
      position: relative;
      z-index: 100;
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
    .onepcssgrid {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 0 0 1%;
      .onerow {
        padding: 0;
        clear: both;
        #nav-list {
          ul {
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            li {
              color: #2d3238;
              height: 80px;
              width: 196px;
              margin: 56px auto 42px;
              border-radius: 3px;
              box-sizing: border-box;
              cursor: pointer;
              float: left;
              .icon_wrap {
                float: left;
                clear: left;
                margin-top: 14px;
                margin-left: 35px;
                width: 42px;
                height: 42px;
                img {
                  float: left;
                  width: 42px;
                  height: 42px;
                }
              }
              div {
                margin-top: 14px;
                margin-left: 84px;
                .title {
                  font-size: 21px;
                  line-height: 29px;
                  margin: 0;
                  padding: 0;
                }
                .subtitle {
                  font-size: 11.2px;
                  line-height: 16px;
                  white-space: nowrap;
                  margin: 0;
                  padding: 0;
                }
              }
            }
            li:hover {
              background: #414952;
              color: #fff;
            }
          }
        }
      }
      .onerow {
        padding: 0;
        clear: both;
      }
      .case_list {
        .case {
          background-color: #fff;
          margin-bottom: 21px;
          height: 196px;
          display: flex;
          padding-top: 10px;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          border-radius: 4px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
          padding-bottom: 20px;
          .logo_wrap {
            width: 40.5%;
            .logo {
              text-align: center;
              img {
                max-height: 80px;
                max-width: 70%;
              }
            }
          }
          .delimiter {
            width: 1px;
            box-sizing: border-box;
            border-left: 1px solid #d9d9d9;
            height: 140px;
          }
          .desc {
            width: 59.5%;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            .title {
              font-size: 28px;
              line-height: 40px;
              color: #4b4b4b;
            }
            .digest {
              font-size: 14px;
              color: #999;
              line-height: 20px;
              text-align: center;
              outline: none;
              div {
                display: inline;
              }
              & > div {
                padding-right: 10px;
                margin-right: 10px;
              }
              .strong {
                color: #505050;
              }
            }
          }
          .hover_case {
            display: none;
            position: absolute;
            -webkit-box-pack: center;
            color: #fff;
            background-color: #000;
            -webkit-box-align: center;
            opacity: 0.8;
            border-radius: 4px;
            text-indent: 2em;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            cursor: pointer;
          }
          .mask {
            display: flex;
            position: absolute;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            color: #fff;
            background-color: #000;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            opacity: 0.8;
            border-radius: 4px;
            text-indent: 2em;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            cursor: pointer;
          }
        }
      }
    }
    #case_list {
      .page-bottom {
        font-size: 1rem;
        width: 100%;
        text-align: center;
        background: #2b3747;
        padding: 3em 0 4em;
        border-bottom: 1px solid #424b5a;
        .hint-words {
          font-size: 2.5rem;
          color: #fff;
        }
        .publish-btn {
          font-size: 1.3rem;
          display: inline-block;
          background: #4289db;
          color: #fff;
          margin: 2.6em auto 0;
          padding: 1em 5em;
          border-radius: 0.3em;
        }
      }
    }
  }
}
.kf5-support-chat{
  position: fixed !important;
  margin: 0;
  .kf5-chatSupport-style{
    right: 50px;
    bottom: 0;
    font-size: 16px;
    padding: 0 15px 0 12px;
    line-height: 40px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, .05);;
    transform-origin: center bottom;
  }
  .kf5-chatSupport-btn{
    position: fixed;
    cursor: pointer;
    overflow: visible;
    z-index: 100;
  }
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
::after,
::before {
  box-sizing: border-box;
}
a {
  color: #2d59a2;
}
p {
  padding: 0;
  margin: 0;
}
</style>