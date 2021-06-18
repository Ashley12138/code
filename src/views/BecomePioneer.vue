<template>
  <div class="main-container">
    <header id="mart-header" class="transparent">
      <div id="top-menu">
        <div class="container clearfix">
          <a href="/" class="logo clearfix">
            <div
              style="
                display: inline-block;
                font-size: 35px;
                font-weight: bold;
                float: left;
                line-height: 64px;
                padding-left: 15px;
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
                    <a href="" target="_blank">我是需求方</a>
                  </div>
                  <div class="menu-item">
                    <a href="" target="_blank">我是开发方</a>
                  </div>
                </div>
              </li>
            </ul>
            <div class="right-zone">
              <div class="login-zone">
                <div class="btns">
                  <a href="" class="user button">成为开发者</a>
                  <a href="/login" class="user button">登录</a>
                  <a href="/register" class="user button">注册</a>
                  <a href="" class="publish user button">发布项目</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="view-container detailed-footer transparent">
      <div id="mart-developers">
        <div class="bx-wrapper" style="max-width: 100%">
          <div
            class="bx-viewport"
            style="
              width: 100%;
              overflow: hidden;
              position: relative;
              height: 574px;
            "
          >
            <section id="banner" style="width: auto; position: relative">
              <div class="banner-deposit">
                <div class="index-grid index-top">
                  <div class="deposit-content">
                    <div class="left-zone">
                      <h2 class="title">
                        汉迅保证金计划，
                        <br />
                        诚信交易，百分保障！
                      </h2>
                      <div class="desc">选择保证金标识服务方，获得更高保障</div>
                      <div class="btn">
                        <a href="">
                          <button>了解更多</button>
                        </a>
                      </div>
                    </div>
                    <div class="right-zone">
                      <img
                        src="https://dn-coding-net-production-pp.codehub.cn/d5362461-cffc-42d9-8fbc-f236db2ac12c.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section id="step">
          <div class="section-container">
            <div class="header">
              <div class="title">来汉迅，开启自由职业之路</div>
            </div>
            <div class="steps">
              <div class="step">
                <div class="step-image">
                  <img src="https://codemart.com/images/developers/step-1.svg" alt="">
                </div>
                <div class="step-title">认证成为开发者</div>
                <div class="step-desc">
                  <p>
                    <span class="highlight">5</span>
                    分钟完善技能与经验
                  </p>
                  <p>
                    <span class="highlight">1</span>
                    分钟完成身份认证
                  </p>
                </div>
              </div>
              <div class="line"></div>
              <div class="step">
                <div class="step-image">
                  <img src="https://codemart.com/images/developers/step-2.svg" alt="">
                </div>
                <div class="step-title">报名项目</div>
                <div class="step-desc">
                  <p>
                    项目均价
                    <span class="highlight">1.53</span>
                    万元
                  </p>
                  <p>
                    每日百余个项目正在招募
                  </p>
                </div>
              </div>
              <div class="line"></div>
              <div class="step">
                <div class="step-image">
                  <img src="https://codemart.com/images/developers/step-3.svg" alt="">
                </div>
                <div class="step-title">确认合作</div>
                <div class="step-desc">
                  <p>
                    平均耗时
                    <span class="highlight">6.78</span>
                    天
                  </p>
                  <p>
                    即可进入开发阶段
                  </p>
                </div>
              </div>
              <div class="line"></div>
              <div class="step">
                <div class="step-image">
                  <img src="https://codemart.com/images/developers/step-4.svg" alt="">
                </div>
                <div class="step-title">获取收益</div>
                <div class="step-desc">
                  <p>
                    2016收益排行榜第一的开发者
                  </p>
                  <p>
                    在码市赚取了
                    <span class="highlight">15.21</span>
                    万元！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: false,
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
.main-container {
  min-height: 100%;
  position: relative;
  background: #f0f2f5;
  #mart-header {
    position: absolute;
    top: 2rem;
    width: 100%;
    height: 64px;
    z-index: 10002;
    background-color: rgba(0, 0, 0, 0);
    color: #fff !important;
    #top-menu {
      height: 100%;
      padding: 0 28px;
      margin: auto;
      .container {
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
            .button {
              display: inline-block;
              box-shadow: none;
              text-decoration: none;
              transition: 0.3s;
              font-size: 1rem;
              color: #e0e6ed;
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
              border: 1px solid #fff;
            }
            .publish:hover {
              border: 1px solid #fff;
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
  }
  .detailed-footer {
    padding-bottom: 366px;
  }
  #mart-developers {
    .bx-wrapper {
      box-shadow: none;
      border: none;
      background: 0 0;
      margin: 0 auto;
      position: relative;
      padding: 0;
      touch-action: pan-y;
      .bx-viewport {
        max-height: 640px;
        -webkit-transform: translatez(0);
        #banner {
          max-height: 640px;
          height: calc(100vh - 115px);
          min-height: 41rem;
          z-index: 1000;
          .banner-deposit {
            background: rgba(0, 0, 0, 0)
              url("https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1599828218726.png")
              no-repeat scroll center center / cover;
            float: none;
            list-style: outside none none;
            position: absolute;
            width: 1235px;
            z-index: 50;
            display: block;
            max-width: 100%;
            height: 100%;
            padding: 0 1rem;
            .index-grid {
              height: 100%;
              width: 860px;
              max-width: 100%;
              margin: 0 auto;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              .deposit-content {
                padding: 8rem 1rem 2rem 1rem;
                display: table;
                max-width: 100%;
                width: 100%;
                .left-zone {
                  text-align: left;
                  display: table-cell;
                  vertical-align: middle;
                  .title {
                    text-align: left;
                    font-size: 2.5rem;
                    color: #fff;
                    line-height: 3.86rem;
                    margin-bottom: 1.5rem;
                  }
                  .desc {
                    color: #fff;
                    letter-spacing: 0.6px;
                    font-size: 1.2rem;
                    line-height: 1.7rem;
                    margin-bottom: 2.5rem;
                    font-weight: 300;
                  }
                  .btn {
                    padding: 0;
                    border: none;
                    outline: 0;
                    border-radius: 18px;
                    font-size: 13px;
                    transition-property: background;
                    transition-duration: 0.5s;
                    transition-timing-function: cubic-bezier(
                      0,
                      0.98,
                      0.68,
                      0.92
                    );
                    transition-delay: 0s;
                    cursor: pointer;
                    a {
                      color: #2d59a2;
                      text-decoration: none;
                      button {
                        background: #ebba59;
                        border-radius: 4px;
                        padding: 0.6rem 2.5rem;
                        outline: 0;
                        border: none;
                        color: #364151;
                        font-size: 1rem;
                        letter-spacing: 0.5px;
                        cursor: pointer;
                      }
                    }
                  }
                }
                .right-zone {
                  text-align: right;
                  display: table-cell;
                  vertical-align: middle;
                  img {
                    width: 28rem;
                    max-width: 100%;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
        section {
          background: #fff;
        }
      }
    }
  }
}
h2 {
  font-weight: 400;
  text-align: center;
}
</style>