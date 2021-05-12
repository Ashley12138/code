<template>
  <div id="container" style="height: 100%">
    <div style="height: 100%">
      <div class="layout-container">
        <div class="layout-content">
          <div class="header-container">
            <div class="left-zone">
              <div class="logo">
                <a href="/"> <img src="../assets/mart-logo.png" alt="" /></a>
              </div>
              <div class="title">互联网软件外包服务平台</div>
            </div>
            <div class="right-zone">
              <div>
                <div class="label tip inline">还没注册账号？</div>
                <a href="/Register">
                  <button class="button inline ghost">注册</button>
                </a>
              </div>
            </div>
          </div>
          <div class="login-page-container">
            <div class="login-page-content">
              <div class="login-form-container">
                <form action="">
                  <div v-if="qrcode">
                    <div class="title align-center">微信扫码登录</div>
                    <img
                      src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGh8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAycHFvMUJtVEtleTMxS3BJa3h3MW8AAgSJ3pRgAwQQDgAA"
                      alt=""
                      class="qrcode"
                    />
                    <div class="wechat-tip under-line" @click="change">
                      使用账号密码登录
                    </div>
                  </div>
                  <div v-else>
                    <div class="title align-center">账号密码登录</div>
                    <input
                      type="text"
                      name="account"
                      class="input block margin"
                      placeholder="手机号/用户名/电子邮箱"
                    />
                    <input
                      type="password"
                      name="password"
                      class="input block margin"
                      placeholder="请输入密码"
                    />
                    <div class="label block">
                      <label for="" class="checkbox ant-checkbox-checked">
                        <span class="ant-checkbox">
                          <input
                            type="checkbox"
                            name="remember"
                            value="on"
                            class="ant-checkbox-input"
                          />
                          <span class="ant-checkbox-inner"></span>
                        </span>
                        <span>记住我</span>
                      </label>
                      <a href="/password">
                        <div class="label inline float-right">找回密码</div>
                      </a>
                    </div>
                    <button class="button1 block">登录</button>
                    <div class="wechat-tip" @click="change">
                      <img
                        src="../assets/微信.png"
                        alt=""
                        style="width: 15px; height: 15px"
                      />
                      使用微信扫码登录
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer class="footer"></footer>
        </div>
      </div>
      <form action=""></form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qrcode: false,
    };
  },
  methods: {
    change() {
      this.qrcode = !this.qrcode;
    },
  },
};
</script>
<style lang="scss" scoped>
.layout-container {
  background: #fff;
  height: 100%;
  .layout-content {
    min-height: 100%;
    .header-container {
      height: 5rem;
      padding: 0 2rem;
      line-height: 5rem;
      background: #fff;
      box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.1);
      .left-zone {
        float: left;
        .logo {
          display: inline-block;
          img {
            height: 2rem;
            margin: 1.5rem 2rem 1.5rem 0;
            vertical-align: middle;
          }
        }
        .title {
          display: inline-block;
        }
      }
      .right-zone {
        float: right;
        .label {
          display: inline-block;
          font-size: 1rem;
          color: #727f8f;
        }
        .button {
          padding: 0.3rem 1.5rem;
          font-size: 12px;
          background: #fff;
          border: 1px solid #4289dc;
          color: #4289dc;
          display: inline-block;
          outline: none;
          border-radius: 4px;
          line-height: 1.5rem;
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
          font-family: inherit;
        }
      }
    }
    .login-page-container {
      padding-top: 1rem;
      .login-page-content {
        margin: 0 auto;
        max-width: 28rem;
        box-sizing: border-box;
        .login-form-container {
          max-width: 25rem;
          padding: 1rem;
          margin: 0 auto;
          box-sizing: border-box;
          .align-center {
            text-align: center;
          }
          .title {
            font-size: 1.5rem;
            line-height: 2rem;
            color: #273444;
            display: block;
            margin: 1rem auto;
            padding: 1rem 0;
          }
          .qrcode {
            display: block;
            margin: 0 auto;
            width: 250px;
            height: 250px;
          }
          .wechat-tip {
            text-decoration: underline;
            margin: 2.5rem auto 0;
            color: #9b9b9b;
            font-size: 1rem;
            text-align: center;
            cursor: pointer;
          }
          .input {
            margin: 1rem 0 0.5rem;
            width: 100%;
            display: block;
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
          .label {
            font-size: 1rem;
            color: #727f8f;
            .ant-checkbox {
              margin-right: 8px;
              cursor: pointer;
              font-size: 1rem;
              display: inline-block;
              .ant-checkbox-wrapper {
                margin-right: 8px;
                cursor: pointer;
                font-size: 1rem;
                display: inline-block;
                .ant-checkbox {
                  vertical-align: middle;
                  white-space: nowrap;
                  cursor: pointer;
                  outline: none;
                  display: inline-block;
                  line-height: 1;
                  position: relative;
                  .ant-checkbox-input {
                    position: absolute;
                    left: 0;
                    z-index: 1;
                    cursor: pointer;
                    opacity: 0;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                  }
                }
                span {
                  padding-left: 8px;
                  padding-right: 8px;
                  box-sizing: border-box;
                }
              }
            }
          }
        }
      }
    }
  }
}
a {
  .float-right {
    float: right;
    width: 56px;
  }
  .label {
    display: inline-block;
  }
}
a {
  color: #108ee9;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3 ease;
  outline: none;
}
img {
  border-style: none;
}
input {
  font-family: inherit;
  overflow: visible;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}
.button1:hover{
    background: #3a79c2;
}
.ghost:hover{
    background: #3a79c2 !important;
    color: white !important;
}
.button1{
    margin-top: 1rem;
    background: #4289dc;
    display: block;
    width: 100%;
    border: 1px solid #4289dc;
    color: #fff;
    outline: none;
    border-radius: 4px;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.6rem 1rem;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
}
</style>