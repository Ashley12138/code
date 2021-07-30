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
              <li style="color: #8e9297">交易密码</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="content-box flex-auto-justify">
              <div class="box">
                <div class="password">
                  <div class="account-notice-box important">
                    <div class="box-content">
                      <div class="title">您还没设置交易密码！</div>
                      <div class="content-container">
                        在提现、使用账户余额进行支付时需要输入交易密码，请妥善保管。
                      </div>
                    </div>
                  </div>
                  <div class="password-box">
                    <h2>设置交易密码</h2>
                    <hr class="hr" />
                    <div class="body">
                      <span>* 请确保交易密码与登录密码不同！</span>
                      <span>* 密码必须为 6-16位，数字或字符的组合。</span>
                      <span
                        >* 如果您收不到手机验证码，请先去<a href="/user/info"
                          >个人信息</a
                        >页面验证工作手机。</span
                      >
                      <form class="password-form">
                        <div class="item">
                          <label for="">手机号码</label>
                          <div class="input-box">
                            <span class="phone-number"> +86{{ phone }} </span>
                          </div>
                        </div>
                        <div class="item">
                          <label for="">交易密码</label>
                          <div class="input-box">
                            <div class="input">
                              <div name="password" contenteditable="true"></div>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <label for="">确认交易密码</label>
                          <div class="input-box">
                            <div class="input">
                              <div name="password" contenteditable="true"></div>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <label for="">短信验证码</label>
                          <div class="input-box">
                            <div class="verify-input">
                              <div class="ui-message-code-input">
                                <input
                                  type="text"
                                  name="verifyCode"
                                  placeholder="验证码"
                                  maxlength="6"
                                  autocomplete="off"
                                />
                                <div class="ui-button">
                                  <div>
                                    <div>
                                      <span>获取验证码</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <button type="submit">确认</button>
                        </div>
                      </form>
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
      phone: "18888888888",
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
          .account-notice-box {
            margin-bottom: 3rem;
            .box-content {
              border: 1px solid rgba(230, 30, 11, 0.5);
              box-shadow: 0 0 5px 0 rgba(230, 30, 11, 0.5);
              background-color: rgba(221, 227, 235, 0.2);
              color: #2d3238;
              padding: 1rem 1.5rem;
              border-radius: 5px;
              .title {
                font-size: 1.3rem;
                padding: 0.5rem 0;
                margin-bottom: 1rem;
                border-bottom: 1px solid hsla(212, 9%, 63%, 0.2);
              }
              .content-container {
                font-size: 1rem;
                color: #979fa8;
              }
            }
          }
          .password-box {
            h2 {
              color: #474b48;
              font-size: 1.7rem;
              font-weight: 400;
              margin: 0 0 0.7rem;
            }
            hr {
              margin: 0 0 2rem;
              border-color: hsla(212, 9%, 63%, 0.2) !important;
            }
            .hr {
              display: block;
              height: 1px;
              border: 0;
              border-top: 1px solid #979fa8;
              padding: 0;
            }
            .body {
              span {
                display: block;
                color: gray;
                a {
                  color: #108ee9;
                  background: transparent;
                  text-decoration: none;
                  outline: none;
                  cursor: pointer;
                  transition: color 0.3s ease;
                }
              }
              .password-form {
                margin-top: 2rem;
                .item {
                  display: flex;
                  flex-direction: row;
                  margin: 1rem 0;
                  label {
                    flex-grow: 1;
                    text-align: right;
                    flex-basis: 0;
                    color: #474b48;
                    line-height: 3rem;
                  }
                  .input-box {
                    flex-grow: 3;
                    flex-basis: 0;
                    margin-left: 1.5rem;
                    .phone-number {
                      line-height: 3rem;
                      color: gray !important;
                    }
                    .input {
                      border-radius: 0.4rem;
                      border: 1px solid #cad3de;
                      background-color: #edf1f5;
                      font-size: 1rem;
                      padding: 0 0.6rem;
                      display: inline-block;
                      width: 16rem;
                      div[contenteditable="true"] {
                        padding: 0.8rem 0;
                        outline: none;
                        border: none;
                        border-radius: 0.4rem;
                        width: 100%;
                        background-color: #edf1f5;
                        color: #555;
                        font-size: 1rem;
                        min-height: 1.5rem;
                      }
                    }
                    .verify-input {
                      display: inline-block;
                      background-color: #edf1f5;
                      div {
                        background-color: #edf1f5;
                        input {
                          color: #555;
                          font-size: 1rem;
                        }
                      }
                      .ui-message-code-input {
                        border-radius: 0.4rem;
                        border: 1px solid #cad3de;
                        font-size: 1rem;
                        position: relative;
                        input {
                          padding: 0.8rem 0.6rem;
                          outline: none !important;
                          border: none !important;
                          border-radius: 0.4rem;
                          background: transparent !important;
                          width: 100%;
                          min-width: 16rem;
                        }
                        .ui-button {
                          cursor: pointer;
                          position: absolute;
                          top: 0;
                          right: 0.8rem;
                          bottom: 0;
                          div {
                            display: table;
                            height: 100%;
                            div {
                              display: table-cell;
                              vertical-align: middle;
                            }
                          }
                          span {
                            font-size: 0.9rem;
                            background-color: #2d3238;
                            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.34);
                            color: #fff;
                            padding: 0.2rem 0.8rem;
                            border-radius: 2.8rem;
                          }
                        }
                      }
                    }
                  }
                  button {
                    font-size: 1.3rem;
                    width: 20rem;
                    height: 3.5rem;
                    line-height: 2rem;
                    margin: 4rem auto 0;
                    color: #fff;
                    float: none;
                    cursor: pointer;
                    border-radius: 4px;
                    box-sizing: border-box;
                    border: 0;
                    box-shadow: 0 3px 3px rgba(45, 51, 56, 0.2);
                    background-color: #4289db;
                    outline: none;
                    font-weight: 500;
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
hr {
  box-sizing: content-box;
  overflow: visible;
}
</style>