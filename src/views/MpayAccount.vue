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
              <li style="color: #8e9297">账户概览</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="content-box flex-auto-justify">
              <div class="box">
                <div class="account-balance-page">
                  <div class="account-wrapper-box">
                    <div class="wrapper-body">
                      <div class="left-wrapper">
                        <div class="account-box">
                          <img
                            src="../assets/protect.png"
                            alt=""
                            style="width: 3.3rem; height: 3.6rem"
                          />
                          <h2>开发宝余额</h2>
                          <div class="account-balance">
                            <div>
                              <span>
                                <em>{{ price }}</em>
                                元
                              </span>
                              <div class="withdraw-balance">
                                可提现余额：{{ balance }}元
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="right-wrapper">
                        <div class="btn-box">
                          <a href="/mpay/deposit">
                            <button class="deposit-btn">充值</button>
                          </a>
                          <a href="/mpay/withdraw">
                            <button class="withdraw-btn">提现</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="account-balance-records">
                    <h2 class="header">交易记录</h2>
                    <div class="records">
                      <table class="sheets">
                        <thead>
                          <tr>
                            <th class="align-left" style="width: 7rem">
                              创建时间
                            </th>
                            <th class="align-left">名称</th>
                            <th class="align-right" style="width: 7rem">
                              交易金额
                            </th>
                            <th class="align-right" style="width: 5rem">
                              状态
                            </th>
                            <th class="align-right" style="width: 5rem">
                              余额
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="recordsList.length == 0">
                            <td colspan="4" style="text-align: center">
                              没有找到相关交易记录
                            </td>
                          </tr>
                          <tr
                            v-else
                            v-for="(item, index) in recordsList"
                            :key="index"
                          >
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
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
    return {
      recordsList: [],
      price: "0",
      balance: "0.00",
    };
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
      .flex-auto-justify {
        flex: 1;
      }
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
          .account-wrapper-box {
            background-color: rgba(221, 227, 235, 0.2);
            border-radius: 5px;
            .wrapper-body {
              display: table;
              width: 100%;
              padding-bottom: 2.5rem;
              .left-wrapper {
                .account-box {
                  background-color: transparent;
                  margin-bottom: 0;
                  padding-bottom: 0;
                  img {
                    position: absolute;
                    left: 1rem;
                    top: 0.4rem;
                  }
                  h2 {
                    margin: 2.8rem 0 0;
                  }
                  .account-balance {
                    padding: 1rem 0;
                    color: gray;
                    em {
                      color: #4289db;
                      font-size: 2rem;
                      font-style: normal;
                      margin-right: 0.4rem;
                    }
                    .withdraw-balance {
                      margin-bottom: 0.5rem;
                    }
                  }
                }
              }
              .right-wrapper {
                max-width: 25rem;
                margin: 0 auto;
                border-top: 1px solid #e3e8ed;
                .btn-box {
                  text-align: center;
                  padding: 1em 0;
                  a {
                    color: #108ee9;
                    background: transparent;
                    text-decoration: none;
                    outline: none;
                    cursor: pointer;
                    transition: color 0.3s ease;
                    .deposit-btn {
                      background: #4289db;
                      margin-right: 2em;
                    }
                    .withdraw-btn {
                      background: #f0f1f4;
                      color: #333;
                      border: 1px solid #d3d9e1;
                    }
                  }
                  button {
                    text-decoration: none;
                    font-size: 1rem;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    padding: 0.8em 3.5em;
                    text-align: center;
                    white-space: nowrap;
                    color: #fff;
                    border-radius: 5px;
                    margin: 0.5em 0;
                  }
                }
              }
            }
          }
          .account-balance-records {
            border-bottom: none;
            .header {
              padding: 1.5rem 0 0.5rem;
              margin: 0;
              font-size: 1.5rem;
              font-weight: 400;
              border-bottom: 1px solid hsla(212, 9%, 63%, 0.2);
              color: #2d3238;
            }
            .records {
                box-sizing: border-box;
                padding: 1.5rem;
                border-bottom: 1px solid hsla(212, 9%, 63%, 0.2);
                font-size: 1rem;
                border-bottom: none;
                .sheets {
                  border-top: none;
                  width: 100%;
                  color: #474b48;
                  .align-left {
                    text-align: left;
                  }
                  th {
                    height: 3.4rem;
                    font-weight: 400;
                  }
                  .align-right{
                    text-align-last: right;
                  }
                  tbody{
                    font-size: .9rem;
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
form,th {
  margin: 0;
  padding: 0;
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
.account-box {
  position: relative;
  margin: 0.5rem 0 1rem;
  padding: 1rem;
  border-radius: 0.4rem;
  text-align: center;
}
h2 {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
</style>