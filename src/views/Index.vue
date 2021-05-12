<template>
  <div class="main-container">
    <header class="box" id="mart-header">
      <!-- 顶部导航条 -->
      <div id="top-menu">
        <div class="contair clearfix">
          <a class="logo" href="/">
            <img v-if="blue" src="@/assets/mart-logo.png" alt="" />
            <img v-else src="@/assets/mart-logo-white.png" alt="" />
          </a>
          <div class="leftmenu">
            <ul>
              <li><a href="/Find">找项目</a></li>
              <li><a href="">原型广场</a></li>
              <li>
                <el-dropdown>
                  <span class="el-dropdown-link"> 帮助中心 </span>
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
          <div class="rightmenu">
            <div class="login-zone">
              <div class="btns">
                <a href="" class="user button">成为开发者</a>
                <a href="/Login" class="user button">登录</a>
                <a href="/Register" class="user button">注册</a>
                <a href="" class="user button">发布项目</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index-top">
        <div class="motto-contair">
          <div class="top-motto-contair">
            <div class="top-motto">
              新版阶段划分
              <br />
              自助验收,轻松交付
            </div>
            <a class="start-button" href="">了解详情</a>
          </div>
          <div class="spacer"></div>
          <div class="sub-motto-contair">
            <img
              src="https://codemart.com/images/index/banner-project.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
    <div class="view-container">
      <div id="mart-index">
        <div class="first-page">
          <!-- 头部菜单和轮播图 -->

          <div class="figure-page">
            <div class="figure-grid grid">
              <div class="col figure-tab">
                <p class="figure-number">414,599,467</p>
                <p class="figure-text">累计总金额</p>
              </div>
              <div class="col figure-tab">
                <p class="figure-number">15,233</p>
                <p class="figure-text">项目数量</p>
              </div>
              <div class="col figure-tab">
                <p class="figure-number">227,594</p>
                <p class="figure-text">注册开发者</p>
              </div>
            </div>
          </div>
        </div>
        <div class="process-page">
          <div class="process-title">码市交易与服务流程</div>
          <div class="process-content conent-web">
            <div class="content-text">
              <div class="publish-num">//01</div>
              <div class="publish-title">发布需求</div>
              <div class="publish-desc">
                不知道项目如何报价
                <br />
                在这里，三分钟自动估算
                <br />
                覆盖 App、web、HTML5、微信公众号等常用功能
              </div>
              <div class="publish-link">
                <a href="">查看项目报价</a>
              </div>
            </div>
            <div class="content-img">
              <img
                src="https://codemart.com/images/index/index-content-slice-1@2x.png"
                alt=""
              />
            </div>
          </div>
          <div class="process-content conent-web">
            <div class="content-img">
              <img
                src="https://codemart.com/images/index/index-content-slice-2@2x-new.png"
                alt=""
              />
            </div>
            <div class="content-text">
              <div class="publish-num">//02</div>
              <div class="publish-title">确认合作</div>
              <div class="publish-desc">
                海量开发者，技能多样化，
                <br />
                实现技能需求匹配，
                <br />
                确认合作开发者。
              </div>
            </div>
          </div>
          <div class="process-content conent-web">
            <div class="content-text">
              <div class="publish-num">//03</div>
              <div class="publish-title">资金托管</div>
              <div class="publish-desc">
                项目款分阶段托管，自助验收支付开发者。
                <br />
                高达 1000万元保险赔付机制，
                <br />
                全方位保障开发进度
              </div>
            </div>
            <div class="content-img">
              <img
                src="https://codemart.com/images/index/index-content-slice-3@2x.png"
                alt=""
              />
            </div>
          </div>
          <div class="process-content conent-web">
            <div class="content-img">
              <img
                src="https://codemart.com/images/index/index-content-slice-4@2x.png"
                alt=""
              />
            </div>
            <div class="content-text">
              <div class="publish-num">//04</div>
              <div class="publish-title">无忧交付</div>
              <div class="publish-desc">
                云计算软件协助工具，
                <br />
                提供代码托管、文档管理、代码质量报告等，
                <br />
                让项目过程的每一步都有迹可循，随时监管。
              </div>
            </div>
          </div>
          <div class="process-content conent-web">
            <div class="content-text">
              <div class="publish-num">//05</div>
              <div class="publish-title">无忧质保</div>
              <div class="publish-desc">
                项目质保期内，开发者义务修复BUG及调优，
                <br />
                保障运营无忧。
              </div>
            </div>
            <div class="content-img">
              <img
                src="https://codemart.com/images/index/index-content-slice-5@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="codersay-page" style="visibility: visible">
          <div class="codersay-page-container page-head-container">
            <p class="codersay-head page-head">看看他们怎么说</p>
          </div>
          <div class="bx-wrapper" style="max-width: 980px">
            <div class="bx-viewport">
              <div class="codersay-list-grid">
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “在码市平台，找到的开发者很靠谱，也很及时；我们项目赶时间，码市确实起到了非常大的帮助。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://e.coding.net/static/fruit_avatar/Fruit-20.png"
                      alt=""
                      class="noborder"
                    />
                    <p>罗涛</p>
                    <p>CEO</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “码市是中立的平台，有利于发包方和接包方的对等信息沟通，特别是进度控制和支付控制，流程记录清晰，以理为准，这样可以充分杜绝耍赖或者扯皮的发生。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://dn-coding-net-production-static.codehub.cn/4b602e5f-d1d6-46ea-b6f8-25017303bccf.jpg?imageMogr2/auto-orient/format/jpeg/crop/!492x492a126a0"
                      alt=""
                      class="noborder"
                    />
                    <p>菲基</p>
                    <p>创始人</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “跟码市的合作是一次意外之喜。这个过程中重拾了对外包的信心，也感觉到了码市的专业性。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://dn-coding-net-production-static.codehub.cn/ab155e71-748f-4242-b87d-103a4543cbcf.jpg?imageMogr2/auto-orient/format/jpeg/crop/!500x500a0a0"
                      alt=""
                      class="noborder"
                    />
                    <p>邵明鉴</p>
                    <p>产品经理</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “已经在码市完成了6个项目，开发者的素质和总体产出都非常不错，通过码市发包方式也提高了开发效率，降低了研发风险。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://codemart.com/images/index/avatar/lql.jpg"
                      alt=""
                      class="noborder"
                    />
                    <p>李千龙</p>
                    <p>软件服务公司经理</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “远程开发是我们公司的主要工作方式，也是未来的趋势。码市对于使用自研开源技术的我们帮助很大。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://codemart.com/images/index/avatar/lxz.jpg"
                      alt=""
                      class="noborder"
                    />
                    <p>李西峙</p>
                    <p>大富网络CTO</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “一直以来我们都认为众包不仅仅是一个工具，更是一种生活方式，小白健康是一个采取纯众包方式进行开发的项目实践，而码市为这种实践做了非常好的探索和努力，希望我们能一起为众包的生态环境做些小事。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://codemart.com/images/index/avatar/ly.png"
                      alt=""
                      class="noborder"
                    />
                    <p>刘宇</p>
                    <p>小白健康CEO</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “在码市平台，找到的开发者很靠谱，也很及时；我们项目赶时间，码市确实起到了非常大的帮助。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://e.coding.net/static/fruit_avatar/Fruit-20.png"
                      alt=""
                      class="noborder"
                    />
                    <p>罗涛</p>
                    <p>CEO</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “码市是中立的平台，有利于发包方和接包方的对等信息沟通，特别是进度控制和支付控制，流程记录清晰，以理为准，这样可以充分杜绝耍赖或者扯皮的发生。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://dn-coding-net-production-static.codehub.cn/4b602e5f-d1d6-46ea-b6f8-25017303bccf.jpg?imageMogr2/auto-orient/format/jpeg/crop/!492x492a126a0"
                      alt=""
                      class="noborder"
                    />
                    <p>菲基</p>
                    <p>创始人</p>
                  </div>
                </div>
                <div class="codersay-list-tab bx-clone">
                  <div class="codersay-list-tab-body">
                    <a>
                      <p>
                        “跟码市的合作是一次意外之喜。这个过程中重拾了对外包的信心，也感觉到了码市的专业性。”
                      </p>
                    </a>
                  </div>
                  <div class="codersay-list-tab-user">
                    <img
                      src="https://dn-coding-net-production-static.codehub.cn/ab155e71-748f-4242-b87d-103a4543cbcf.jpg?imageMogr2/auto-orient/format/jpeg/crop/!500x500a0a0"
                      alt=""
                      class="noborder"
                    />
                    <p>邵明鉴</p>
                    <p>产品经理</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bx-controls bx-has-pager">
              <div class="bx-pager bx-default-pager">
                <div class="bx-pager-item">
                  <a href="" class="bx-pager-link active" data-slide-index="0"
                    >1</a
                  >
                </div>
                <div class="bx-pager-item">
                  <a href="" class="bx-pager-link" data-slide-index="1">2</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="start-page">
          <div class="start-head-container page-head-container">
            <p class="start-head page-head">心动了吗？立刻开始吧！</p>
          </div>
          <a href="" class="publish-button needLogin">发布需求</a>
        </div>
      </div>
    </div>
    <footer id="mart-footer">
      <div id="detailed-footer">
        <div class="footer-container">
          <section class="footer-section section-left">
            <div class="footer-list-menu-container">
              <p class="footer-list-menu-head">关于码市</p>
              <ul class="footer-list-menu">
                <li><a href="">码市介绍</a></li>
                <li><a href="">媒体报道</a></li>
                <li><a href="">码市案例</a></li>
              </ul>
            </div>
            <div class="footer-list-menu-container">
              <a href="">
                <p class="footer-list-menu-head">帮助</p>
              </a>
              <ul class="footer-list-menu">
                <li><a href="">如何发布项目需求？</a></li>
                <li><a href="">如何为发布的项目需求定价？</a></li>
                <li><a href="">查看更多>></a></li>
              </ul>
            </div>
          </section>
          <section class="footer-section section-right">
            <div class="footer-list-contact">
              <p>
                <img src="../assets/mart-logo-white.png" alt="" class="logo" />
              </p>
              <p>1234-123456789</p>
              <p>
                <a href="">support@codemart.com</a>
              </p>
              <p>周一至周五 9:30 - 19:00</p>
            </div>
          </section>
        </div>
      </div>
      <div id="simple-footer">
        <div class="footer-container">
          <div class="site">
            <div class="brand">
              <a href="">
                <img src="../assets/mart-logo-white.png" alt="" />
              </a>
            </div>
            <div>
              Copyright ⓒ -------------
              <a href="">-----</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#top-menu {
  height: 5rem;
  background: 0 0;
  border-bottom: 0;
  transition: 0.1s;
  box-shadow: none;
  width: 100%;
}
.contair {
  padding: 0 28px;
  display: flex;
  position: relative;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.box {
  float: none;
  background: rgba(0, 0, 0, 0)
    url("https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1599901907553.png")
    no-repeat scroll center center / cover;
  width: 100%;
  // position: absolute;
  // top: 2rem;
}
.logo img {
  height: 30px;
  display: block;
  margin: 17px 0;
  padding: 10px;
}
.leftmenu li {
  float: left;
  text-align: center;
  height: 64px;
  width: 84px;
  list-style: none;
  a,
  span {
    text-decoration: none;
    color: white;
    font-size: 14px;
    line-height: 64px;
  }
}
.rightmenu {
  float: right;
  height: 64px;
  line-height: 64px;
  margin-left: 30rem;
  margin-top: 1rem;
  .login-zone {
    line-height: 64px;
    text-align: center;
    float: left;
    .btns {
      display: inline-block;
      .user {
        color: white;
        width: 7em;
        margin-left: 0.5rem;
        font-size: 1rem;
        display: inline-block;
        height: 3rem;
        padding: 0;
        border: none;
        line-height: 3rem;
        text-align: center;
      }
      .user:hover {
        box-sizing: border-box;
        border: 1px solid #e0e6ed;
        color: #e0e6ed;
        border-radius: 5px;
        height: 42px;
      }
      .button {
        text-decoration: none;
        background-image: none;
        vertical-align: middle;
      }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
}
.el-dropdown-menu {
  background-color: #000;
  color: #fff;
  width: 100px;
  text-align: center;
}
.index-top {
  position: relative;
  display: flex;
  padding: 91px 0 39px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.motto-contair {
  display: flex;
  width: 85%;
  max-width: 900px;
  align-items: center;
  justify-content: center;
}
.top-motto {
  font-size: 42px;
  color: white;
}
.start-button {
  color: white;
  text-align: center;
  border: 1px solid white;
  cursor: pointer;
  display: block;
  text-decoration: none;
  margin-top: 20px;
  width: 130px;
  height: 42px;
  line-height: 42px;
}
.spacer {
  width: 18%;
  max-width: 160px;
}
.sub-motto-contair img {
  width: 333px;
  min-width: 333px;
}
.figure-grid {
  color: #8796a8;
  margin: 0 auto;
  max-width: 980px;
}
.figure-tab {
  width: 33%;
  text-align: center;
}
.col {
  display: inline-block;
  min-height: 2em;
}
.process-page {
  text-align: center;
  padding-top: 56px;
  .process-title {
    font-size: 35px;
    color: #2d3238;
  }
}
.figure-page {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(151, 159, 168, 0.2);
  .figure-number {
    font-size: 3rem;
    display: inline-block;
    width: 100%;
    margin: 0 auto;
  }
}

.process-content {
  width: 980px;
  height: 420px;
  text-align: center;
  display: table;
  table-layout: fixed;
  border-bottom: 1px solid rgba(151, 159, 168, 0.2);
  margin: 0 auto;
  .content-text {
    width: 40%;
    display: table-cell;
    vertical-align: middle;
    .publish-num {
      text-align: left;
      margin-bottom: 7px;
      color: #2d3238;
    }
    .publish-title {
      font-size: 42px;
      text-align: left;
      color: #2d3238;
      letter-spacing: 0;
    }
    .publish-desc {
      color: #979fa8;
      line-height: 21px;
      margin: 14px 0;
      text-align: left;
    }
    .publish-link {
      color: #4289db;
      text-align: left;
      letter-spacing: 0;
      margin-bottom: 0;
      a {
        text-decoration: none;
        color: #4289db;
      }
    }
  }
  .content-img {
    width: 60%;
    display: table-cell;
    vertical-align: middle;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
.view-container {
  padding-bottom: 366px;
  padding-top: 0;
}
.codersay-page {
  background: #dde3eb;
  padding: 70px;
  box-sizing: border-box;
  position: relative;
  .page-head-container {
    margin: 0 auto;
    text-align: center;
    max-width: 900px;
    .page-head {
      font-size: 35px;
      line-height: 70px;
      color: #2d3238;
    }
  }
  .bx-wrapper {
    margin: 0 auto;
    max-width: 980px;
    .bx-viewport {
      width: 100%;
      overflow: hidden;
      position: relative;
      height: 350px;
      .codersay-list-grid {
        width: 6215%;
        transition-duration: 0s;
        transform: translate3d(-999px, 0px, 0px);
        margin: 0 auto;
        .codersay-list-tab {
          float: left;
          list-style: outside none none;
          position: relative;
          width: 316px;
          margin-right: 16px;
          border-radius: 5px;
          background-color: white;
          padding: 28px;
          box-sizing: border-box;
          height: 350px;
          box-shadow: 0 1px 1px 0 rgba(45, 51, 56, 0.2);
          margin: 14px 16px 1px 1px;
          .codersay-list-tab-body {
            height: 50%;
            width: 100%;
            display: flex;
            align-content: center;
            align-items: center;
            a {
              cursor: default;
              display: inline-block;
              height: 100%;
              width: 100%;
              p {
                color: #979fa8;
                line-height: 28px;
                font-weight: 300;
                height: 100%;
                flex-wrap: wrap;
              }
            }
          }
          .codersay-list-tab-user {
            height: 50%;
            display: flex;
            align-content: center;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 42px;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 14px;
            img {
              height: 49px;
              width: 49px;
              margin-bottom: 14px;
              border-radius: 50%;
              display: block;
              max-width: 100%;
            }
            p {
              margin: 0 auto;
            }
          }
        }
      }
    }
    .bx-controls {
      .bx-pager {
        text-align: center;
        font-size: 0.85em;
        font-family: Arial;
        color: #666;
        font-weight: 700;
        padding-top: 20px;
        position: absolute;
        bottom: 30px;
        width: 100%;
        max-width: 980px;
        box-sizing: border-box;
        .bx-pager-item {
          font-size: 0;
          line-height: 0;
          display: inline-block;
          .active {
            background-color: #4289db;
          }
        }
      }
    }
  }
}
.bx-pager-link {
  background-color: gray;
}
.bx-default-pager a {
  text-indent: -9999px;
  display: block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  outline: 0;
  border-radius: 5px;
  text-decoration: none;
}
.bx-default-pager a:hover {
  background-color: #000;
}
#mart-index {
  box-sizing: border-box;
}
.start-page {
  padding: 5rem;
  background: #2b3747;
  border-bottom: 1px solid rgba(151, 159, 168, 0.2);
  .page-head-container {
    margin: 0 auto;
    text-align: center;
    max-width: 980px;
    .start-head {
      color: #fff !important;
    }
    .page-head {
      font-size: 2.5rem;
      line-height: 5rem;
    }
  }
  a {
    display: block;
    background: #4289db;
    box-shadow: 0 3px 3px 0 rgba(45, 51, 56, 0.2);
    text-shadow: 0 1px 2px rgba(46, 52, 56, 0.5);
    border-radius: 5px;
    width: 25rem;
    height: 5rem;
    color: #fff;
    font-size: 1.5rem;
    line-height: 5rem;
    text-align: center;
    margin: 3rem auto 0;
    text-decoration: none;
  }
}
.main-container {
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
}
#mart-footer {
  width: 100%;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  #detailed-footer {
    background: #273444;
    .footer-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1140px;
      padding: 56px 1rem 70px 1rem;
      margin: 0 auto;
      .section-left {
        display: flex;
        .footer-list-menu-container {
          margin-right: 70px;
        }
      }
      .section-right {
        .footer-list-contact {
          display: inline-block;
          vertical-align: top;
          p:first-child {
            margin-top: 0;
          }
          p {
            color: #8796a8;
            font-size: 1rem;
            margin-top: 1rem;
            .logo {
              height: 30px;
            }
          }
        }
      }
    }
  }
  #simple-footer {
    background: #1f2d3d;
    color: #8796a8;
    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      max-width: 1140px;
      padding: 17.5px 1rem;
      margin: auto;
      .site {
        display: flex;
        align-items: center;
        .brand {
          display: flex;
          margin-right: 1rem;
          align-items: center;
          a {
            margin-right: 1rem;
            display: inline-block;
            font-size: 0;
            color: #8796a8;
            text-decoration: none;
            img {
              height: 20px;
            }
          }
        }
      }
    }
  }
}
#mart-footer a {
  color: #8796a8;
  text-decoration: none;
}
.footer-list-menu-head {
  opacity: 0.9;
  color: #eff2f7;
  font-size: 16px;
  line-height: 24px;
}
.footer-list-menu {
  margin-top: 1.5rem;
  li {
    margin-top: 1rem;
    a {
      color: #8796a8;
      font-size: 1rem;
      margin-top: 1rem;
      text-decoration: none;
    }
  }
}
li,
ul {
  list-style: none;
  padding: 0;
}
</style>