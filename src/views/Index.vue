<template>
  <div class="main-container" ref="viewbox">
    <header
      :class="searchBarFixed == true ? 'fixed mart-header' : 'mart-header'"
      id="mart-header"
      style="opacity: 1"
    >
      <!-- 顶部导航条 -->
      <div id="top-menu">
        <div class="container clearfix">
          <a class="logo" href="/">
            <div
              style="
                display: inline-block;
                font-size: 32px;
                font-weight: 400;
                float: left;
                color: tomato;
              "
            >
              汉迅
            </div>
          </a>
          <div class="leftmenu">
            <ul class="nav">
              <li><a href="/Find">找项目</a></li>
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
                    ></path></svg
                ></a>
              </li>
              <li
                @mouseover="show"
                @mouseout="hidden"
                class="value-add-service-web"
              >
                <a>帮助中心</a>
                <!-- 帮助中心的下拉列表 -->
                <div :class="enter ? 'child-menu' : 'hidden'">
                  <div class="menu-item">
                    <a href="/Question" target="_blank">常见问题</a>
                  </div>
                  <div class="menu-item">
                    <a href="/category" target="_blank">我是需求方</a>
                  </div>
                  <div class="menu-item">
                    <a href="" target="_blank">我是开发方</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div v-show="!token" class="rightmenu">
            <div class="login-zone">
              <div class="btns">
                <a href="/becomePioneer" class="user button">成为开发者</a>
                <a href="/Login" class="user button">登录</a>
                <a href="/Register" class="user button">注册</a>
                <a href="" class="kuang user button">发布项目</a>
              </div>
            </div>
          </div>
          <div v-show="token" class="rightmenu">
            <div class="login-zone">
              <div class="btns">
                <a href="/user/joined" target="_self" class="top_button">
                  我参与的项目
                </a>
              </div>
              <a
                id="notification-zone"
                class="notify-zone"
                @mouseover="showNoticef"
                @mouseout="hiddenNotice"
              >
                <img src="../assets/folder-w.png" alt="" />
              </a>
              <div
                @mouseover="showNoticef"
                @mouseout="hiddenNotice"
                id="notification-menu"
                :class="showNotice ? 'menu-zone hidden' : 'menu-zone'"
              >
                <div class="menu-ul">
                  <div class="menu-header">
                    <span class="menu-title">通知</span>
                    <a href="/user/notification" class="menu-button">
                      查看全部》
                    </a>
                  </div>
                  <div id="notification-list">
                    <div class="notification-section read none">
                      <div class="notification-content">无未读通知</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="user" @mouseover="showInfof" @mouseout="hiddenInfo">
                <a href="/" class="ui avatar image">
                  <img
                    src="https://dn-coding-net-production-pp.codehub.cn/29402486-bf33-4cb4-9ea2-ab4bae89bee2.png"
                    alt=""
                  />
                </a>
                <i class="cursor">﹀</i>
              </div>
            </div>
            <div
              @mouseover="showInfof"
              @mouseout="hiddenInfo"
              id="user-info-menu"
              :class="showInfo ? 'menu-zone hidden' : 'menu-zone'"
              style="overflow: visible"
            >
              <div class="menu-ul">
                <div class="menu-header">Hello,{{ username }}</div>
                <div class="menu-gap"></div>
                <div :class="hovered1?'blue menu-section userinfo':'menu-section userinfo'" @mouseover="blue1" @mouseout="white1">
                  <a href="/user/info" class="menu-li" target="_self">
                    <img :src="hovered1 ? userw : user" alt="" />
                    个人中心
                  </a>
                </div>
                <div class="menu-gap"></div>
                <div :class="hovered2?'blue menu-section':'menu-section'" @mouseover="blue2" @mouseout="white2">
                  <a
                    href="/user/account"
                    class="menu-li svg-mouse"
                    target="_self"
                  >
                    <span class="svg-pack">
                      <img :src="hovered2 ? shieldw : shield" alt="" />
                    </span>
                    <span>我的开发宝</span>
                  </a>
                </div>
                <div class="menu-gap"></div>
                <div :class="hovered3?'blue menu-section':'menu-section'" @mouseover="blue3" @mouseout="white3">
                  <div class="menu-li">
                    <a @click="signout" class="signout">
                      <img :src="hovered3 ? outw : out" alt="" />
                      退出登录
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="view-container detailed-footer transparent">
      <div id="mart-index">
        <div class="first-page">
          <!-- 头部菜单和轮播图 -->
          <div class="bx-wrapper" style="max-width: 100%">
            <div
              class="bx-viewport"
              style="width: 100%; overflow: hidden; position: relative"
            >
              <div id="banner" style="width: auto; position: relative">
                <transition :name="isFirst ? 'two' : 'one'">
                  <div v-show="first" class="banner-one">
                    <div class="index-grid index-top">
                      <div class="top-motto-container">
                        <p class="top-motto">互联网软件外包服务平台</p>
                      </div>
                      <div class="sub-motto-container">
                        <p class="sub-motto">
                          提供您所需的全套软件开发服务
                          <br />
                        </p>
                      </div>
                      <div class="btn-list">
                        <a href="" class="start-button needLogin"
                          >发布您的需求</a
                        >
                        <a href="/find" class="start-button project-list-btn"
                          >查看项目列表</a
                        >
                      </div>
                    </div>
                  </div>
                </transition>
                <transition :name="isFirst ? 'one' : 'two'">
                  <div v-show="!first" class="banner-project">
                    <div class="index-grid index-top">
                      <div class="motto-container">
                        <div class="top-motto-container">
                          <div class="top-motto">
                            新版阶段划分
                            <br />
                            自助验收,轻松交付
                          </div>
                          <a class="start-button" href="/help">了解详情</a>
                        </div>
                        <div class="spacer"></div>
                        <div class="sub-motto-container">
                          <img
                            src="https://codemart.com/images/index/banner-project.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
              <div class="bx-controls bx-has-controls-direction bx-has-pager">
                <div class="bx-controls-direction">
                  <a class="bx-prev" @click="touch">Prev</a>
                  <a class="bx-next" @click="touch">Next</a>
                </div>
                <div class="bx-pager bx-default-pager">
                  <div class="bx-pager-item">
                    <a
                      :class="first ? 'bx-pager-link active' : 'bx-pager-link'"
                      @click="point(0)"
                      data-slide-index="0"
                      >1</a
                    >
                  </div>
                  <div class="bx-pager-item">
                    <a
                      :class="first ? 'bx-pager-link' : 'bx-pager-link active'"
                      @click="point(1)"
                      data-slide-index="1"
                      >2</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <div
                id="banner"
                :class="
                  page ? 'codersay-list-grid' : 'codersay-list-grid second-list'
                "
              >
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
                <div class="bx-pager-item" @click="turn($event)">
                  <a
                    href="##"
                    :class="page ? 'bx-pager-link active' : 'bx-pager-link'"
                    data-slide="0"
                    >1</a
                  >
                </div>
                <div class="bx-pager-item" @click="turn($event)">
                  <a
                    href="##"
                    :class="page ? 'bx-pager-link' : 'bx-pager-link active'"
                    data-slide="1"
                    >2</a
                  >
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
          style="padding-top: 5px; box-sizing: border-box"
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
import { mapState } from "vuex";
import bottomFooter from "../components/BottomFooter.vue";
export default {
  components: {
    bottomFooter,
  },
  data() {
    return {
      list: false,
      first: true,
      top,
      searchBarFixed: false,
      isFirst: true,
      enter: false,
      timer: "",
      page: true,
      // 是否登录（临时）
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
      this.enter = true;
    },
    hidden() {
      this.enter = false;
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
    blue1(){
      this.hovered1=true
    },
    blue2(){
      this.hovered2=true
    },
    blue3(){
      this.hovered3=true
    },
    white1(){
      this.hovered1=false
    },
    white2(){
      this.hovered2=false
    },
    white3(){
      this.hovered3=false
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      var offsetTop = document.querySelector("#mart-header").offsetTop;
      // console.log(offsetTop); //28
      // 页面滚动高度超过头部导航条的高度时
      if (scrollTop > offsetTop * 1 + 300) {
        // 头部导航条固定在头部
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    },
    // 点击轮播图上两边的箭头
    touch() {
      this.first = !this.first;
      this.isFirst = !this.isFirst;
    },
    point(i) {
      if (i == 0) {
        this.first = true;
      } else {
        this.first = false;
      }
      this.isFirst = !this.isFirst;
    },
    // fanye(){
    //   this.page=!page;
    // },
    // 点击“看看他们怎么说”下面的点进行翻页
    turn(e) {
      if (e.target.dataset.slide == 0) {
        this.page = true;
      } else {
        this.page = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.timer = setInterval(this.touch, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapState(["token"]),
  },
};
</script>
<style lang="scss" scoped>
::after,
::before {
  box-sizing: border-box;
}
.one-enter-active,
.one-leave-active,
.two-enter-active,
.two-leave-active {
  transition: opacity 0.5s;
}
.one-enter {
  opacity: 0;
}
.one-leave-to {
  opacity: 0;
}
.two-enter {
  opacity: 1;
}
.two-leave-to {
  opacity: 1;
}
.clearfix::after {
  content: "";
  display: table;
  overflow: hidden;
  clear: both;
}
.clearfix::before {
  content: "";
  display: table;
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
  height: 70px;
  width: 84px;
  list-style: none;
  margin-top: 0;
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
  height: 70px;
  line-height: 70px;
  margin-top: 1rem;
  margin-left: 25rem;
  margin-top: 0;
  .login-zone {
    line-height: 70px;
    // text-align: center;
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
      .top_button {
        color: #fff;
        font-size: 18px;
        margin-right: 15px;
      }
    }
    .notify-zone {
      color: #fff;
      position: relative;
      float: none;
      padding: 0 0 25px 15px;
      text-align: center;
      cursor: pointer;
      line-height: 64px;
      img {
        width: 16px;
        height: 16px;
      }
    }

    #notification-menu {
      right: 96px;
      top: 0;
      margin-right: 0;
      width: 300px;
      max-height: 440px;
      line-height: 18px;
    }
    .user {
      display: inline-block;
      padding: 0 14px;
      .avatar {
        display: inline-block;
        position: relative;
        color: #323a45;
        img {
          width: 40px;
          height: 40px;
          margin-right: 0.5em;
          vertical-align: middle;
          border-radius: 20px;
        }
      }
    }
  }
  .menu-zone {
    border-radius: 4px;
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
    -webkit-transition: 0.3s;
    transition: 0.3s;
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
      #notification-list {
        .notification-section,
        .read {
          padding: 10px;
          text-align: center;
          color: #a9a9a9;
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
    .menu-gap {
      height: 1px;
      background-color: #f7f6f2;
      margin: 0 10px;
    }
    .menu-section {
      padding: 6px 0;
      color: #000;
      .menu-li {
        cursor: pointer;
        padding: 7px 20px;
        display: block;
        line-height: 22px;
        color: inherit;
        img{
          margin-right: 10px;
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}
.blue{
  background: #4289db !important;
  color:#fff !important;
}
.hidden {
  display: none !important;
}
header {
  display: block;
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
.motto-container {
  width: 85%;
  max-width: 900px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
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
.sub-motto-container img {
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
      .second-list {
        transform: translate3d(-1998px, 0px, 0px) !important;
      }
      .codersay-list-grid {
        width: 6215%;
        transition-duration: 0.5s;
        // 控制底部切换
        transform: translate3d(-999px, 0px, 0px);
        // transform: translate3d(-1998px, 0px, 0px);
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
        }
      }
    }
  }
}
.bx-pager-link {
  background-color: gray;
}
.active {
  background-color: #fff !important;
  width: 10px !important;
  height: 10px !important;
}
.bx-default-pager a {
  text-indent: -9999px;
  display: block;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  outline: 0;
  border-radius: 5px;
  text-decoration: none;
}
.bx-default-pager a:hover {
  background-color: #fff;
  width: 10px;
  height: 10px;
}
#mart-index {
  box-sizing: border-box;
  .first-page {
    max-height: 960px;
    position: relative;
    z-index: 10000;
    .bx-wrapper {
      position: relative;
      margin: 0 auto 60px;
      padding: 0;
      touch-action: pan-y;
      #banner {
        z-index: 1000;
        background: #1f2d3d;
        min-height: 640px;
        .banner-one {
          background: rgba(0, 0, 0, 0)
            url("https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1599295739018.png")
            no-repeat scroll center center / cover;
          float: none;
          list-style: outside none none;
          position: absolute;
          width: 1263px;
          z-index: 50;
          display: block;
        }
        .index-top {
          position: relative;
          background: 0 0;
          border: 0;
          max-height: 640px;
          height: calc(100vh - 115px);
          min-height: 41rem;
          padding-top: 6.5rem;
          padding-bottom: 39px;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          z-index: 1;
          .top-motto-container {
            width: 100%;
            z-index: 999;
            .top-motto {
              text-align: center;
              font-size: 3rem;
              line-height: 4rem;
              color: #fff;
            }
          }
          .sub-motto-container {
            margin-left: 0;
            width: 100%;
            margin-top: 1.5rem;
            .sub-motto {
              line-height: 1.8rem;
              text-align: center;
              font-size: 1.3rem;
              color: #fff;
              font-weight: 200;
            }
          }
          .btn-list {
            text-align: center;
            .start-button {
              margin: 53px auto 0;
              border: none;
              width: 13.8rem;
              line-height: 49px;
              display: inline-block;
              height: 49px;
              text-align: center;
              background-color: #4187db;
              color: #fff;
              border-radius: 5px;
              font-size: 1.3rem;
              cursor: pointer;
              transition: 0.3s linear;
            }
            .project-list-btn {
              background: 0 0;
              border: 1px solid #fff !important;
              margin-left: 40px;
            }
          }
        }
        .index-grid {
          margin: 0 auto;
          max-width: 980px;
        }
        .banner-project {
          background: rgba(0, 0, 0, 0)
            url("https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1599901907553.png")
            no-repeat scroll center center / cover;
          float: none;
          list-style: outside none none;
          position: absolute;
          width: 1263px;
          z-index: 50;
          display: block;
        }
      }
      .bx-controls-direction {
        a {
          position: absolute;
          top: 50%;
          margin-top: -16px;
          outline: 0;
          width: 32px;
          height: 32px;
          text-indent: -9999px;
          z-index: 9999;
        }
        .bx-prev {
          left: 10px;
          background: url("https://assets.codemart.com/images/index/index-banner-next@2x.png");
          background-size: auto;
          width: 1.2rem;
          height: 3rem;
          background-size: cover;
          opacity: 0.6;
        }
        .bx-next {
          right: 10px;
          background: url("https://assets.codemart.com/images/index/index-banner-next@2x.png");
          background-size: auto;
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
          width: 1.2rem;
          height: 3rem;
          background-size: cover;
          opacity: 0.6;
        }
      }
      .bx-pager {
        bottom: 21px;
        z-index: 1000;
        text-align: center;
        font-size: 0.85em;
        font-family: Arial;
        font-weight: 700;
        color: #666;
        padding-top: 20px;
        position: absolute;
        width: 100%;
        .bx-pager-item {
          vertical-align: middle;
        }
        .bx-default-pager {
          // .active {
          //   background: #fff;
          //   width: 10px;
          //   height: 10px;
          // }
          a {
            margin: 0 9px;
            background: rgba(221, 227, 235, 0.8);
            // height: 6px;
            // width: 6px;
            margin: 0 9px;
          }
        }
      }
      .bx-pager-item {
        display: inline-block;
        font-size: 0;
        line-height: 0;
      }
    }
  }
}
p {
  padding: 0;
  margin: 0;
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
  li {
    float: left;
    width: 6rem;
    text-align: center;
    margin-right: 0.5rem;
    position: relative;
    a {
      cursor: pointer;
      // color: #fff;
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
  .fixed {
    position: fixed !important;
    top: 0 !important;
    background: #fff !important;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    .leftmenu {
      ul {
        li {
          a {
            color: black;
          }
          a:hover {
            color: #4289dc;
          }
        }
      }
    }
    .rightmenu {
      .login-zone {
        .btns {
          .user {
            color: black;
          }
          .user:hover {
            color: #4289dc;
            border: none;
          }
          .kuang {
            border: 1px solid black;
            border-radius: 5px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .mart-header {
    z-index: 10002;
    background: 0 0;
    top: 2rem;
    position: absolute;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    #top-menu {
      height: 5rem;
      background: 0 0;
      border-bottom: 0;
      transition: 0.1s;
      box-shadow: none;
      width: 100%;
      .container {
        padding: 0 28px;
        box-sizing: border-box;
        // display: flex;
        position: relative;
        width: 100%;
        height: 70px;
      }
      .nav {
        float: left;
        height: 70px;
        line-height: 70px;
        margin-left: 2rem;
        margin-top: 0;
        .value-add-service-web {
          .child-menu {
            background: #2d3236;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
            border-radius: 0.4rem;
            width: 6rem;
            margin-top: -1rem;
            .menu-item:first-child {
              border-bottom: 0.1rem solid hsla(212, 9%, 63%, 0.2);
            }
            .menu-item {
              line-height: 3rem;
              height: 3rem;
              text-align: center;
              a {
                color: #fff;
                line-height: 3rem;
              }
            }
          }
          .hidden {
            display: none;
          }
        }
      }
    }
  }
}
a {
  text-decoration: none;
}
li,
ul {
  list-style: none;
  padding: 0;
}
.kf5-support-chat {
  position: fixed !important;
  margin: 0;
  .kf5-chatSupport-style {
    right: 50px;
    bottom: 0;
    font-size: 16px;
    padding: 0 15px 0 12px;
    line-height: 40px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transform-origin: center bottom;
  }
  .kf5-chatSupport-btn {
    position: fixed;
    cursor: pointer;
    overflow: visible;
    z-index: 100;
  }
}
</style>