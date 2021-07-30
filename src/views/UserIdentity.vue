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
              <li style="color: #8e9297">汉迅认证</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="content flex-auto-justify">
              <div class="box">
                <div>
                  <div class="section unauthorized clearfix">
                    <p class="header">
                      实名认证
                      <span style="float: right"></span>
                    </p>
                    <hr class="hr" />
                    <div class="ui-help-text undefined">
                      您的信息不会透露给任何第三方，请放心填写。
                      <a href="" class="support-anchor undefined">联系客服</a>
                    </div>
                    <form class="identity-form">
                      <div>
                        <div class="input-group">
                          <label for="name">真实姓名 *</label>
                          <input
                            required
                            type="text"
                            name="name"
                            class="input"
                            placeholder="与身份证姓名一致"
                            v-model="name"
                          />
                        </div>
                        <div class="input-group">
                          <label for="identity">真实姓名 *</label>
                          <input
                            required
                            type="text"
                            name="identity"
                            class="input"
                            placeholder="请填写身份证号"
                            maxlength="18"
                            v-model="identity"
                          />
                        </div>
                        <div class="ui-jumbotron jumbotron">
                          <h2>认证说明</h2>
                          <p class="no-indent">尊敬的汉迅用户：</p>
                          <p>您好！欢迎您使用汉迅平台！</p>
                          <p>
                            基于保障用户资金安全的原则，
                            汉迅平台需要对涉及资金往来的用户进行身份认证。
                            为使您更好地使用汉迅平台，
                            请您认真阅读并遵守《汉迅平台身份认证说明》（以下简称“本说明”）。
                          </p>
                          <p>
                            用户应保证其提供给汉迅平台的所有资料和信息的真实性、合法性、准确性和有效性；
                            否则，汉迅平台有权终止和取消用户通过汉迅平台获取的服务和酬金。
                            因用户提供的资料偏差给汉迅平台或第三方造成损害的，该用户应依法承担相应的责任。
                          </p>
                          <p>
                            保护用户隐私信息是汉迅平台的一项基本原则，
                            汉迅平台会采取合理有效的措施确保用户信息的安全性，请您放心！
                            除法律法规规定的情形外，未经用户许可
                            汉迅平台绝不会向任何第三方泄漏用户的资料和信息。
                          </p>
                          <p>
                            用户理解并同意：
                            授权汉迅平台对其提交的资料和信息进行甄别核实；
                            汉迅平台基于法律法规对已授权的用户提供的资料和信息进行身份审核和认证。
                          </p>
                          <p>感谢您的配合，祝您顺利通过认证！</p>
                          <br />
                          <p class="no-indent">汉迅团队</p>
                        </div>
                        <div class="confirm-group">
                          <label class="checkbox">
                            <input type="radio" />
                          </label>
                          <label>
                            请确认您已仔细阅读上述「认证说明」并同意遵守
                            <a href="">《身份认证授权与承诺书》</a>
                          </label>
                        </div>
                        <div class="input-group">
                          <button
                            :class="
                              agree
                                ? 'button primary'
                                : 'button primary disabled'
                            "
                          >
                            提交认证
                          </button>
                        </div>
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
      agree: false,
      identity:'',
      name:''
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
      .content {
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
            }
            .hr {
              border: none;
              border-top: 1px solid hsla(212, 9%, 63%, 0.2);
              margin: 0.8rem 0 1.5rem;
            }
            hr {
              box-sizing: content-box;
              height: 0;
              overflow: visible;
            }
            .ui-help-text {
              font-size: 12px;
              color: #8796a8;
              line-height: 1.5rem;
              margin-bottom: 2rem;
              a {
                color: #4289db;
                margin: 0 0.1rem;
                cursor: pointer;
                text-decoration: none;
              }
            }
            .identity-form {
              .input-group {
                width: 100%;
                margin: 2rem 0;
                label {
                  width: 20%;
                  margin-right: 1rem;
                  color: #2d3238;
                  display: inline-block;
                  text-align: right;
                }
                .input {
                  outline: none;
                  border: 1px solid #cad3de;
                  border-radius: 4px;
                  font-size: 1rem;
                  line-height: 1.5rem;
                  min-width: 16rem;
                  padding: 0.6rem 1rem;
                  box-sizing: border-box;
                  color: #273444;
                }
                .button.disabled {
                  border: 1px solid #eff2f7;
                  background-color: #eff2f7;
                  color: #b3bbc5;
                  cursor: not-allowed;
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
              .ui-jumbotron {
                background: #f0f2f5;
                border-radius: 0.29rem;
                width: 100%;
                padding: 1.5rem;
                margin: 1.5rem 0;
                box-sizing: border-box;
                h2 {
                  margin-top: 0;
                  text-align: center;
                }
                .no-indent {
                  text-indent: 0;
                }
                p {
                  text-indent: 2rem;
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
  line-height: 1.5;
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
h2 {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
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
a {
  color: #108ee9;
  background: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease;
}
button,
input {
  overflow: visible;
}
</style>