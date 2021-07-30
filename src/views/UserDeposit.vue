<template>
  <div class="container">
    <top-nav></top-nav>
    <div class="content-wrapper">
      <div class="content">
        <div style="width: 100%; height: 100%">
          <div class="breadcrumb-wrapper">
            <ul class="breadcrumbs clearfix">
              <li>
                <a href="/user/info">个人中心</a>
              </li>
              <li style="color: #8e9297">保证金</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="content-box flex-auto-justify">
              <div class="box">
                <div class="section clearfix">
                  <p class="header">
                    保证金计划
                    <span class="subtitle">
                      <svg
                        t="1627266712500"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3508"
                        width="10"
                        height="10"
                      >
                        <path
                          d="M512 0a512 512 0 1 0 512 512 509.878857 509.878857 0 0 0-507.830857-512H512z"
                          fill="#FFFFFF"
                          p-id="3509"
                          data-spm-anchor-id="a313x.7781069.0.i4"
                          class=""
                        ></path>
                        <path
                          d="M512 0a512 512 0 1 0 512 512 509.878857 509.878857 0 0 0-507.830857-512H512z m76.8 278.308571a69.851429 69.851429 0 1 1-139.702857 0 69.851429 69.851429 0 0 1 139.702857 0zM449.097143 813.348571a46.811429 46.811429 0 1 1 0-92.891428h22.966857V510.902857H449.097143a46.811429 46.811429 0 1 1 0-92.891428h69.851428c25.6 0 46.445714 20.48 46.811429 46.08V720.457143h23.04a46.811429 46.811429 0 1 1 0 92.891428H449.097143z"
                          fill="#727f8f"
                          p-id="3510"
                          data-spm-anchor-id="a313x.7781069.0.i3"
                          class="selected"
                        ></path>
                      </svg>
                      <span
                        >缴纳保证金，将有助于获得需求方的信任，获取更多项目机会。</span
                      >
                    </span>
                    <span style="float: right"></span>
                  </p>
                  <hr class="hr" />
                  <div class="reliance-box">
                    <div>
                      <div class="content payment">
                        <div class="left">
                          <div class="title">当前保证金余额</div>
                          <div class="tip"></div>
                          <div class="amount">
                            <b>
                              <span>0</span>
                            </b>
                            <small>元</small>
                          </div>
                        </div>
                        <div class="right">
                          <div class="title">需缴纳保证金金额</div>
                          <div class="tip">
                            保证金会托管到码市平台，可随时申请退回至开发宝，开发宝提现至支付宝在七个工作日内到账。
                          </div>
                          <div class="amount">
                            <b>
                              <span>1,000</span>
                            </b>
                            <small>元</small>
                            <button class="button small primary">缴纳</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui-help-text underfined">
                    加入码市保证金计划，将自动获得由 AIG 美亚保险承保的 1000
                    万元开发宝保险。
                    如因开发宝被盗导致的开发宝资金或者保证金的损失将获得全额的赔付。
                  </div>
                </div>
                <div class="section clearfix">
                  <p class="header">
                    保证金记录
                    <span style="float: right"></span>
                  </p>
                  <hr class="hr" />
                  <div class="reliance-log">
                    <div class="table">
                      <div class="row header">
                        <div class="col">创建时间</div>
                        <div class="col">名称</div>
                        <div class="col">交易金额</div>
                        <div class="col">状态</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topNav from "../components/TopNav.vue";
import leftMenu from "../components/LeftMenu.vue";
export default {
  components: {
    topNav,
    leftMenu,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.content-wrapper {
  padding-top: 64px;
  padding-bottom: 56px;
  min-height: 600px;
  background-color: #f0f2f5;
  .content {
    height: 100%;
    max-width: 980px;
    margin: auto;
    .breadcrumb-wrapper {
      display: block;
      width: 100%;
      padding: 35px 0 21px;
      box-sizing: border-box;
      .breadcrumbs {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          float: left;
          font-size: 1rem;
          line-height: 1.4rem;
          color: #474b48;
          padding-right: 1rem;
          a {
            color: #2d3238;
            text-decoration: none;
          }
        }
        li:first-child::after {
          position: relative;
          right: -0.5rem;
          content: "\2192";
          font-size: 1rem;
          color: #979fa8;
        }
      }
    }
    .flex-direction-row {
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      flex-direction: row;
    }
    .flex-box {
      display: flex;
    }
    .wrapper {
      width: 100%;
      .content-box {
        margin-left: 10px;
        margin-bottom: 40px;
        padding-bottom: 30px;
        background: #fff;
        min-height: 40rem;
        box-shadow: 0 1px 2px hsla(165, 9%, 74%, 0.95);
        font-size: 14px;
        color: #333;
        border-radius: 4px;
        .box {
          margin: 0 auto;
          padding: 3rem 6rem 0;
          .section {
            margin-bottom: 2.6rem;
            .header {
              font-size: 1.5rem;
              color: #2d3238;
              line-height: 2.25rem;
              .subtitle {
                font-size: 12px;
                color: #727f8f;
                line-height: 2.25rem;
                span {
                  margin-left: 3px;
                }
              }
            }
            .hr {
              border: none;
              border-top: 1px solid hsla(212, 9%, 63%, 0.2);
              margin: 0.8rem 0 1.5rem;
            }
            .reliance-box {
              margin: 1.2rem 0;
              background: rgba(221, 227, 235, 0.2);
              border-radius: 5px;
              .content.payment {
                display: table;
                width: 100%;
                .left {
                  padding-left: 0;
                  padding-right: 3rem;
                  border-right: 1px solid hsla(212, 9%, 63%, 0.2);
                  .title {
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                  }
                  .tip {
                    font-size: 12px;
                    color: #8796a8;
                  }
                  .amount {
                    margin-top: 0.3rem;
                    b {
                      color: #8796a8;
                    }
                    small {
                      color: #8796a8;
                    }
                  }
                }
                .right {
                  padding-left: 3.5rem;
                  display: table-cell;
                  text-align: left;
                  .title {
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                    color: #2d3238;
                  }
                }
                .tip {
                  font-size: 12px;
                  color: #8796a8;
                }
                .amount {
                  margin-top: 0.5rem;
                  b {
                    color: #4289db;
                    font-size: 2rem;
                    line-height: 2.86rem;
                    margin-right: 0.5rem;
                  }
                  small {
                    color: #00141a;
                    font-size: 1rem;
                    line-height: 2.86rem;
                  }
                  button {
                    margin-left: 2.5rem;
                    width: 6rem;
                  }
                  .button.small {
                    padding: 0.3rem 1.5rem;
                    font-size: 12px;
                  }
                  .button.primary {
                    border: 1px solid #4289dc;
                    background: #4289db;
                    color: #fff;
                  }
                  .button {
                    outline: none;
                    border-radius: 4px;
                    font-size: 1rem;
                    border: 1px solid #dde3eb;
                    background: #fff;
                    color: #273444;
                    line-height: 1.5rem;
                    padding: 0.6rem 1rem;
                    box-sizing: border-box;
                    text-align: center;
                    cursor: pointer;
                  }
                }
              }
              .content {
                padding: 2.5rem;
                text-align: center;
                .left {
                  display: table-cell;
                  text-align: left;
                  .title {
                    color: #2d3238;
                  }
                  .amount {
                    b {
                      color: #4289db;
                      font-size: 2rem;
                      line-height: 2.86rem;
                      margin-right: 0.5rem;
                    }
                    small {
                      font-size: 1rem;
                      line-height: 2.86rem;
                      color: #00141a;
                    }
                  }
                }
              }
            }
            .ui-help-text {
              font-size: 12px;
              color: #8796a8;
              line-height: 1.5rem;
              margin-bottom: 2rem;
            }
            .reliance-log {
              .table {
                display: table;
                width: 100%;
                .row {
                  display: table-row;
                  .col {
                    color: #474b48;
                    font-size: 1rem;
                    display: table-cell;
                    padding: 0.5rem 0.6rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
* {
  box-sizing: border-box;
}
div,
li,
input,
p,
hr,
form {
  margin: 0;
  padding: 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
b {
  font-weight: bolder;
}
.flex-auto-justify {
  flex: 1;
}
.clearfix::after,
.clearfix::before {
  content: " ";
  display: table;
}
.clearfix::after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}
::after,
::before {
  box-sizing: border-box;
}
</style>