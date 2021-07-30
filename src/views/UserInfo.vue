<template>
  <div>
    <top-nav></top-nav>
    <div class="content-wrapper">
      <div class="content">
        <div style="width: 100%; height: 100%">
          <div class="breadcrumb-wrapper">
            <ul class="breadcrumbs clearfix">
              <li>
                <a href="/user/info">个人中心</a>
              </li>
              <li style="color: #8e9297">账户信息</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="contents flex-auto-justify">
              <div class="box">
                <div class="info-wrapper">
                  <div class="tip">
                    <div>
                      提示：您需要完善
                      <span class="orange">基本信息</span>
                      和
                      <span class="orange">开发者信息</span>
                      才能参与项目
                    </div>
                    <div class="close">
                      <span>×</span>
                    </div>
                  </div>
                  <div class="info-header">
                    <div class="avatar">
                      <div class="avatar-modal">
                        <svg
                          t="1626660940580"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="6603"
                          width="17.6"
                          height="17.6"
                        >
                          <path
                            d="M984.857008 232.441718l-101.481831 102.931571c-0.483247 0.483247 0 0.966494-0.483247 1.449741-0.483247 0.483247-0.966494 0-1.44974 0.483247L502.576687 720.521c-1.44974 2.416234-0.966494 5.798962-3.382728 7.73195-1.932987 1.932987-5.315715 1.932987-7.731949 3.382727l-16.913638 17.396886-273.03445 69.587541 71.520528-268.685229L792.041529 39.626239c53.15715-52.673903 139.175083-52.190656 191.848985 0.483247 53.15715 53.15715 53.640396 138.691836 0.966494 192.332232zM269.168476 752.898537l152.222746-54.123643-96.166116-96.166116-56.05663 150.289759z m159.471448-253.704578c-1.932987 1.932987-2.416234 3.865975-3.865974 5.798962L375.482775 555.733837l95.199622 95.199622 71.037282-72.003775 267.718735-267.718735-96.166116-96.166117-284.632374 284.149127z m507.892403-411.726286c-26.578575-26.578575-69.587541-26.578575-96.166117 0l-79.252477 79.252478 96.166116 96.166116L936.532327 183.63379c12.564417-12.564417 19.813119-29.961303 19.813119-48.324682s-7.248702-34.793771-19.813119-47.841435z m-493.394998 48.324682H136.275602c-37.693252 0-68.137801 30.444549-68.137801 68.137801v681.861255c0 17.880132 7.248702 35.277017 19.813119 48.324681 12.564417 12.564417 29.961303 19.813119 48.324682 19.81312h681.378008c17.880132 0 35.277017-7.248702 48.324682-19.81312 12.564417-12.564417 19.813119-29.961303 19.813119-48.324681v-374.999528c0-12.08117 6.282209-23.195847 16.913639-29.478056 10.63143-6.282209 23.679094-6.282209 34.310523 0 10.63143 6.282209 16.913639 17.396885 16.913639 29.478056v374.999528c0 75.386503-60.889099 136.275602-136.275602 136.275602h-681.378008C60.889099 1022.067013 0 960.694667 0 885.791411V203.930156C0 128.543653 60.889099 67.654554 136.275602 67.654554h306.861727c12.08117 0 23.195847 6.282209 29.478056 16.913639 6.282209 10.63143 6.282209 23.679094 0 34.310523-6.282209 10.63143-17.396885 16.913639-29.478056 16.913639z"
                            fill="#ffffff"
                            p-id="6604"
                          ></path>
                        </svg>
                      </div>
                      <img class="avatar-img" :src="defaultAvatar" alt="" />
                      <div>
                        <div class="avatar-upload">
                          <input />
                        </div>
                      </div>
                    </div>
                    <div class="info">
                      <span>柑橘栀子花</span>
                      <span>
                        <label>
                          <img
                            src="../assets/shield-l.png"
                            alt=""
                            style="width: 18px; height: 18px"
                          />
                        </label>
                      </span>
                      <div class="vip-info">
                        <div>
                          <button class="button small pink">升级成团队</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section clearfix">
                    <p class="header">
                      账户信息
                      <span style="float: right"></span>
                    </p>
                    <hr class="hr" />
                    <div>
                      <div class="tips">
                        <p>
                          标有星号（*）的栏目为必填栏目，并请验证邮箱和手机。
                        </p>
                        <p>您的个人信息不会透露给任何第三方，请放心填写。</p>
                      </div>
                      <div
                        class="account-item"
                        v-for="(item, index) in accountList"
                        :key="index"
                      >
                        <div class="item-header">
                          <span>{{ item.header }}</span>
                          <span v-if="item.must">*</span>
                          <span v-if="item.checked" class="validation has-been"
                            >已验证</span
                          >
                          <span v-else class="validation has-not">未验证</span>
                        </div>
                        <div v-if="!change" class="item-content">
                          <div class="input-wrapper">
                            <span>{{ item.content }}</span>
                          </div>
                          <div class="operation" @click="change($index)">
                            <a>
                              <img src="../assets/edit.png" alt="" />
                              修改
                            </a>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <!-- 点击修改后出现的输入框 -->
                        <div v-else class="form-content">
                          <form action="">
                            <div class="item-content">
                              <div class="input-wrapper">
                                <input
                                  type="text"
                                  class="input input-width"
                                  placeholder="邮箱"
                                  name="email"
                                  :value="item.content"
                                />
                              </div>
                              <div class="operation editing"></div>
                              <div class="clearfix"></div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section clearfix">
                    <p class="header">
                      个人资料
                      <span style="float: right"></span>
                    </p>
                    <hr class="hr" />
                    <div class="form-wrapper">
                      <form action="">
                        <div
                          class="form-item"
                          v-for="(item, index) in formList"
                          :key="index"
                        >
                          <label class="form-header">
                            <span>{{ item.name }}</span>
                            <span v-if="item.must">*</span>
                          </label>
                          <div class="form-content">
                            <div>
                              <span>{{ item.content }}</span>
                              <div class="edit-right" v-if="item.edit">
                                <button class="button link" type="button">
                                  <img
                                    style="width: 14px; height: 14px"
                                    src="../assets/edit.png"
                                    alt=""
                                  />
                                  修改
                                </button>
                              </div>
                            </div>
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
      defaultAvatar:
        "https://dn-coding-net-production-pp.codehub.cn/29402486-bf33-4cb4-9ea2-ab4bae89bee2.png",
      accountList: [
        {
          header: "工作邮箱",
          must: true,
          checked: true,
          content: "zheshiyigeyouxiang@163.com",
        },
        {
          header: "工作手机",
          must: true,
          checked: true,
          content: "18888888888",
        },
        {
          header: "绑定微信",
          must: false,
          checked: false,
          content: "",
        },
      ],
      change: false,
      formList: [
        {
          name: "姓名",
          must: true,
          content: "龚喜发财",
          edit: true,
        },
        {
          name: "微信",
          content: "-",
        },
        {
          name: "QQ",
          content: "-",
        },
        {
          name: "所在地",
          must: true,
          content: "上海",
        },
      ],
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
      .contents {
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
          .info-wrapper {
            width: 100%;
            .tip {
              font-size: 1rem;
              background: #fff6de;
              color: #979fa8;
              padding: 0.6rem 2.5rem 0.5rem 1.5rem;
              position: relative;
              margin-bottom: 1rem;
              border-radius: 4px;
              .orange {
                color: #f68435;
              }
              .close {
                position: absolute;
                font-size: 1.2rem;
                top: 0.55rem;
                right: 0.85rem;
                cursor: pointer;
                display: inline-block;
                width: 1.5rem;
                height: 1.5rem;
                text-align: center;
                line-height: 1.5rem;
                span {
                  display: inline-block;
                  font: normal normal normal 14px/1 FontAwesome;
                  font-size: inherit;
                  text-rendering: auto;
                }
              }
            }
            .info-header {
              font-size: 1rem;
              display: flex;
              padding: 1.5em;
              border: 1px solid #dde3eb;
              border-radius: 4px;
              margin-bottom: 2.5rem;
              .avatar {
                position: relative;
                width: 7em;
                height: 7em;
                flex: 1;
                .avatar-modal {
                  display: none;
                  width: 7em;
                  height: 7em;
                  background: #1b3649;
                  position: absolute;
                  border-radius: 50%;
                  opacity: 0.7;
                  text-align: center;
                  svg {
                    line-height: 7em;
                  }
                }
                .avatar-img {
                  width: 7em;
                  border-radius: 50%;
                }
                img {
                  border-style: none;
                }
                .avatar-upload {
                  font-size: 1rem;
                  position: absolute;
                  height: 7em;
                  width: 7em;
                  left: 0;
                  top: 0;
                  z-index: 100;
                  overflow: hidden;
                  opacity: 0;
                  input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    cursor: pointer;
                  }
                }
              }
              .info {
                font-size: 1.5rem;
                flex: 4;
                font-weight: 400;
                margin-left: 0.5em;
                position: relative;
                span {
                  display: block;
                  margin-top: 0.2em;
                  label {
                    display: inline-block;
                    margin-right: 0.4em;
                    margin-left: 0.07em;
                    position: relative;
                  }
                }
                .vip-info {
                  position: absolute;
                  top: 0;
                  right: 0;
                  .button.pink {
                    background: #f75288;
                    color: #fff;
                    border: 1px solid #f75288;
                  }
                  .button.small {
                    padding: 0.3rem 1.5rem;
                    font-size: 12px;
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
            }
            .section {
              margin-bottom: 2.6rem;
              p {
                padding: 0;
                margin: 0;
              }
              .header {
                font-size: 1.5rem;
                color: #2d3238;
                line-height: 2.25rem;
              }
              hr {
                margin: 0.8em 0 1em;
                border-color: #dde3eb;
                box-sizing: content-box;
                height: 0;
                overflow: visible;
              }
              .hr {
                border: none;
                border-top: 1px solid hsla(212, 9%, 63%, 0.2);
              }
              .tips {
                p {
                  font-size: 1rem;
                  color: #8796a8;
                  margin-bottom: 0.6em;
                }
              }
              .account-item {
                display: flex;
                margin-top: 1.5em;
                .item-header {
                  position: relative;
                  margin-bottom: 1em;
                  padding-top: 0.75em;
                  flex: 2;
                  .has-been {
                    color: #65c279;
                    background: rgba(100, 194, 120, 0.1);
                  }
                  .has-not {
                    color: #e61e0b;
                    background: rgba(229, 30, 10, 0.1);
                  }
                  .validation {
                    font-size: 0.88rem;
                    line-height: 16.79px;
                    border-radius: 4px;
                    padding: 4px 7px 4px 6px;
                    margin-left: 5px;
                  }
                }
                .item-content {
                  flex: 6;
                  padding-left: 5em;
                  .input-wrapper {
                    float: left;
                    min-width: 18em;
                    span {
                      display: block;
                      padding-top: 0.65em;
                    }
                  }
                  .operation {
                    float: right;
                    padding-top: 0.75em;
                    a {
                      font-size: 1rem;
                      display: inline-block;
                      text-decoration: none;
                      background: none;
                      border: none;
                      color: #4289dc;
                      cursor: pointer;
                      outline: none;
                      img {
                        width: 14px;
                        height: 14px;
                      }
                    }
                  }
                }
              }
              .form-wrapper {
                margin-top: 1.5em;
                .form-item {
                  display: flex;
                  margin: 1em 0;
                  .form-header {
                    flex: 2;
                    line-height: 40px;
                  }
                  .form-content {
                    flex: 6;
                    min-width: 18em;
                    line-height: 40px;
                    .edit-right {
                      float: right;
                      .button.link {
                        border: none;
                        padding: 0;
                        margin: 0;
                        color: #2d59a2;
                        background: transparent;
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
                      button {
                        text-transform: none;
                        overflow: visible;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .flex-auto-justify {
        flex: 1;
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
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}
</style>