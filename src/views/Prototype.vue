<template>
  <div id="container" style="height: 100%">
    <div style="height: 100%">
      <div class="container">
        <header id="header">
          <div class="content">
            <div class="header">
              <a href="/">
                <div style="display:inline-block;font-size:35px;font-weight: bold;float: left;line-height:64px;padding-left:15px;">汉迅</div>
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
                    <a href="/becomePioneer" class="user button">成为开发者</a>
                    <a href="/login" class="user button">登录</a>
                    <a href="/register" class="user button">注册</a>
                    <a href="" class="publish user button">发布项目</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="content-wrapper">
          <div class="square-page">
            <main class="main">
              <div class="top-banner">
                <div class="bg-item-container">
                  <img
                    src="https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596593544088.png"
                    alt=""
                  />
                  <h2 class="banner-title">
                    <p>汉迅原型广场</p>
                    <p class="subtitle">「码市x墨刀」</p>
                  </h2>
                </div>
              </div>
              <div class="input-search">
                <input
                  type="text"
                  class="ant-input ant-input-lg"
                  placeholder="搜索素材"
                />
                <svg
                  v-if="del"
                  t="1621308848113"
                  class="antion"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1895"
                  width="20"
                  height="20"
                >
                  <path
                    d="M512 0.011C229.23 0.011 0.011 229.23 0.011 512S229.23 1023.989 512 1023.989 1023.989 794.77 1023.989 512 794.77 0.011 512 0.011z m217.23 343.033L560.272 512 729.23 680.956a34.136 34.136 0 0 1-48.273 48.273L512 560.273 343.044 729.23a34.136 34.136 0 0 1-48.273-48.273L463.727 512 294.77 343.044a34.136 34.136 0 0 1 48.273-48.273L512 463.727 680.956 294.77a34.136 34.136 0 0 1 48.273 48.273z"
                    p-id="1896"
                  ></path>
                </svg>
                <button
                  class="ant-btn search-button ant-btn-primary ant-btn-lg"
                  type="button"
                >
                  <span>搜索</span>
                </button>
              </div>
              <div class="main-container">
                <section class="template-filter-container">
                  <div class="filter-detail-container">
                    <section class="filter-bar flex-row">
                      <header class="filter-name">平台</header>
                      <div class="filter-bar industry-list flex-row">
                        <div class="filter-option active">全部</div>
                        <div class="filter-option">官网</div>
                        <div class="filter-option">后台</div>
                        <div class="filter-option">APP</div>
                        <div class="filter-option">小程序</div>
                      </div>
                    </section>
                  </div>
                </section>
                <section class="template-container">
                  <a
                    href=""
                    class="template-box"
                    v-for="(item, index) in showList"
                    :key="index"
                  >
                    <div class="template-cover">
                      <img
                        :src="item.img"
                        alt=""
                        class="template-cover-image"
                      />
                    </div>
                    <div class="template-info">
                      <h3 class="template-title" :title="item.title">
                        {{ item.title }}
                      </h3>
                      <div class="view-and-favorite flex-row">
                        <svg
                          t="1621676149986"
                          class="icon"
                          viewBox="0 0 1536 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="2520"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M763.221333 332.288c-85.418667 0-154.624 71.68-154.624 160.170667 0 88.405333 69.12 161.024 154.624 161.024 85.333333 0 153.6-72.533333 153.6-161.024s-68.266667-160.170667-153.6-160.170667zM767.146667 0C343.637333 0 0 298.666667 0 512.853333 0 727.210667 343.637333 1024 767.061333 1024 1192.277333 1024 1536 720.384 1536 512.853333 1536 305.493333 1192.277333 0 767.061333 0z m-2.901334 844.288c-179.541333 0-324.522667-152.576-324.522666-339.797333 0-188.928 144.981333-340.650667 324.522666-340.650667 180.48 0 326.4 151.722667 326.4 340.650667 0 187.221333-145.92 339.797333-326.4 339.797333z"
                            p-id="2521"
                            fill="#8d9ea7"
                          ></path>
                        </svg>
                        <span class="view-count">{{ item.view }}</span>
                        <svg
                          t="1621676260552"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="4984"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M139.636364 418.909091h744.727272v465.454545H139.636364V418.909091z m0-311.854546h372.363636l139.636364 97.745455h232.727272v134.981818H139.636364v-232.727273z"
                            p-id="4985"
                            fill="#8d9ea7"
                          ></path>
                        </svg>
                        <span class="favorite-count">{{ item.favorite }}</span>
                      </div>
                    </div>
                  </a>
                </section>
                <!-- <ul class="ant-pagination">
                  <li class="ant-pagination-disabled ant-pagination-prev" title="上一页" tabindex="0">
                    <a href="" class="ant-pagination-item-link">
                      &lt;
                    </a>
                  </li>
                  <li v-for=""></li>
                  <li class="ant-pagination-disabled ant-pagination-next" title="上一页" tabindex="0">
                    <a href="" class="ant-pagination-item-link">
                      &gt;
                    </a>
                  </li>
                </ul> -->
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="protoList.length"
                  page-size="12"
                  style="text-align:center"
                >
                </el-pagination>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: false,
      del: false,
      protoList: [
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681942278.png",
          title: "点餐小程序原型",
          view: "1303",
          favorite: "小程序",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681929995.png",
          title: "电影演出票务原型",
          view: "617",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681916674.png",
          title: "租房原型",
          view: "443",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681905998.png",
          title: "二手车交易原型",
          view: "341",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681894909.png",
          title: "外卖原型",
          view: "441",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681881735.png",
          title: "综合电商原型",
          view: "147",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681866930.png",
          title: "二手电商原型",
          view: "3142",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681838717.png",
          title: "智能家居原型",
          view: "138",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681854188.png",
          title: "智能家居原型",
          view: "209",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681820846.png",
          title: "生鲜电商原型",
          view: "147",
          favorite: "APP",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596878156638.png",
          title: "电商管理后台",
          view: "199",
          favorite: "后台",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596878220406.png",
          title: "教育管理后台",
          view: "296",
          favorite: "后台",
        },
        {
          img:
            "https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1596681694663.png",
          title: "财务报销管理后台",
          view: "443",
          favorite: "后台",
        }
      ],
      showList:''
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
  created(){
    this.showList=this.protoList.slice(0,12)
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
div {
  margin: 0;
  padding: 0;
}
.container {
  min-height: 100%;
  position: relative;
  background: #f0f2f5;
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
  .content-wrapper {
    padding-top: 64px;
    padding-bottom: 56px;
    min-height: 600px;
    .square-page {
      padding-bottom: 46px;
      min-width: 768px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
        Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
        sans-serif;
      background: #fff;
      .main {
        position: relative;
        width: 100%;
        min-width: 768px;
        box-sizing: border-box;
        margin: 0 auto;
        .bg-item-container {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 320px !important;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          cursor: pointer;
          border-radius: 7px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
          }
          .banner-title {
            position: absolute;
            width: 683px;
            white-space: nowrap;
            top: 105px;
            left: 35%;
            transform: translateX(-50%);
            color: #fff;
            font-size: 32px;
            font-weight: 600;
            line-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .subtitle {
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
              color: #fff;
              transform: translateY(3px);
              padding: 2px 8px;
              background: linear-gradient(to right top, #fd4472, #f71e4d);
              border-radius: 2px;
            }
          }
        }
        .input-search {
          margin-top: -100px;
          left: 50%;
          transform: translateX(-50%);
          cursor: auto;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          width: 683px;
          position: relative;
          z-index: 3;
          box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
          font-size: 15px;
          .ant-input {
            padding: 12px 0 14px 16px;
            height: 48px;
            outline: none;
            border-radius: 0;
            border-width: 0;
            box-shadow: none;
            font-size: 15px;
            width: 100%;
            position: relative;
            display: inline-block;
            line-height: 1.5;
            color: #333;
            background-color: #fff;
            background-image: none;
            border: 1px solid #d9d9d9;
            transition: all 0.3s;
          }
          .ant-btn {
            padding: 12px 26px 14px;
            height: 48px;
            outline: none;
            border-radius: 0;
            border-width: 0;
            box-shadow: none;
            font-weight: 600;
          }
          .search-button {
            color: #fff;
            position: absolute;
            right: -1px;
            font-size: 17px;
            background: #1890ff;
          }
        }
        .main-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          min-width: 768px;
          box-sizing: border-box;
          margin: 59px auto 0;
          padding: 10px 20px 0;
          .template-filter-container {
            max-width: 1200px;
            padding: 34px 20px 0 20px;
            width: 100%;
            .filter-detail-container {
              font-size: 14px;
              padding-bottom: 33px;
              margin-bottom: 20px;
              user-select: none;
              border-bottom: 1px solid #c8cdd0;
              .filter-bar:first-of-type {
                margin-top: 0;
              }
              .filter-bar {
                white-space: nowrap;
                align-items: flex-start;
                .filter-name {
                  height: 32px;
                  color: #7d8694;
                  line-height: 32px;
                  width: 76px;
                  padding-left: 5px;
                  flex-shrink: 0;
                }
                .industry-list {
                  flex-wrap: wrap;
                }
                .filter-bar:first-of-type {
                  margin-top: 0;
                  .filter-option {
                    text-align: center;
                    height: 32px;
                    line-height: 20px;
                    margin-right: 4px;
                    cursor: pointer;
                    padding: 6px 10px;
                    border-radius: 2px;
                    color: #415058;
                  }
                  .active {
                    color: #298df8 !important;
                    font-weight: 500;
                    background: #f0f6ff;
                  }
                }
              }
            }
          }
          .template-container {
            padding-top: 20px;
            padding-bottom: 40px;
            display: flex;
            flex-flow: row wrap;
            .template-box {
              position: relative;
              top: 0;
              width: 266px;
              padding-bottom: 12px;
              margin-bottom: 20px;
              margin-right: 32px;
              background: #fff;
              overflow: hidden;
              border-bottom: 1px solid #dcdcdc;
              transition: top 0.3s ease 0s, box-shadow 0.3s ease 0s;
              text-decoration: none;
              .template-cover {
                position: relative;
                height: 200px;
                overflow: hidden;
                background: #f7f7f7;
                .template-cover-image {
                  width: 100%;
                  height: auto;
                }
              }
              .template-info {
                padding-top: 12px;
                padding-left: 12px;
                .template-title {
                  color: #415058;
                  font-size: 14px;
                  line-height: 20px;
                  font-weight: 500;
                  margin-bottom: 7px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
                .view-and-favorite {
                  svg {
                    margin-right: 3px;
                    text-align: center;
                    text-transform: none;
                    line-height: 1;
                  }
                  .view-count {
                    color: #7d8b94;
                    font-size: 12px;
                    margin-right: 8px;
                  }
                  .favorite-count {
                    color: #7d8b94;
                    font-size: 12px;
                  }
                }
              }
            }
            .template-box:hover {
              box-shadow: 0 2px 2px 0 rgba(45, 45, 45, 0.05),
                0 8px 8px 0 rgba(42, 42, 42, 0.05),
                0 16px 16px 0 rgba(32, 32, 32, 0.05),
                0 32px 32px 0 rgba(49, 49, 49, 0.05),
                0 64px 64px 0 rgba(35, 35, 35, 0.05);
              top: -4px;
            }
            .template-box:nth-child(4n) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
main {
  display: block;
}
a:hover {
  color: #49a9ee !important;
}
</style>