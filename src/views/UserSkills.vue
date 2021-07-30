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
              <li style="color: #8e9297">技能展示</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="info form-container">
              <div class="box">
                <hr class="head-line" />
                <div class="role-skill-container clearfix">
                  <div class="label">
                    <label for="" class="head"
                      >让「码市」了解您擅长的技能，为您推荐最合适的项目</label
                    >
                  </div>
                  <header>
                    <h2 style="margin-bottom: 0">一句话描述您的工作能力 *</h2>
                  </header>
                  <div class="one_sentence_div">
                    <textarea
                      name="one_sentence_descri"
                      rows="3"
                      placeholder="一句话简单介绍下您的工作能力，可突出优势"
                      maxlength="200"
                      class="one_sentence_descri"
                    ></textarea>
                    <div class="right">
                      字数限制：
                      <i class="inputed">0</i>
                      -
                      <span>200</span>
                    </div>
                  </div>
                  <header>
                    <h2>能胜任的角色类型 *</h2>
                  </header>
                  <label for="" class="sub-add-btn">
                    <a href="" class="modal-open"> +添加角色类型 </a>
                  </label>
                  <div class="role-skill-tab-box">
                    <div class="tabbox-content">
                      <div class="tab-header clearfix">
                        <div class="tab active" tab="1">
                          <span class="tab-hint"> 待完成 </span>
                          <span>开发工程师</span>
                        </div>
                      </div>
                      <div class="tab-body active">
                        <div class="form">
                          <div class="form-row input">
                            <div class="form-label">
                              <label for="">
                                <b>技能领域 *</b>
                              </label>
                            </div>
                            <div class="form-item clearfix checkbox-list">
                              <label
                                for=""
                                class="checkbox-item"
                                v-for="(item, index) in skillList"
                                :key="index"
                              >
                                <div
                                  class="icheckbox_square-mart role-skill-check"
                                  style="position: relative"
                                >
                                  <input
                                    type="checkbox"
                                    name="skill"
                                    :value="index"
                                    style="position: absolute; opacity: 0"
                                  />
                                  <ins
                                    class="iCheck-helper"
                                    style="
                                      position: absolute;
                                      top: 0%;
                                      left: 0%;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                      margin: 0px;
                                      padding: 0px;
                                      background: rgb(255, 255, 255) none repeat
                                        scroll 0% 0%;
                                      border: 0px none;
                                      opacity: 0;
                                    "
                                  ></ins>
                                </div>
                                {{ item.name }}
                              </label>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-label">
                              <label>
                                <b>擅长的技术 *</b>
                              </label>
                            </div>
                            <div class="form-item">
                              <div class="selectize-control form-input multi">
                                <div
                                  class="
                                    selectize-input
                                    items
                                    not-full
                                    has-options
                                  "
                                  :class="table ? '' : ''"
                                >
                                  <input
                                    type="text"
                                    autocomplete="off"
                                    placeholder="如 Java，JavaScript，PHP"
                                    style="width: 156px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-label">
                              <label>
                                <b>特殊技能</b>
                              </label>
                            </div>
                            <div class="form-item">
                              <div class="selectize-control form-input multi">
                                <div
                                  class="
                                    selectize-input
                                    items
                                    not-full
                                    has-options
                                  "
                                  :class="table ? '' : ''"
                                >
                                  <input
                                    type="text"
                                    autocomplete="off"
                                    placeholder="用逗号隔开，如React，Angular，Spring"
                                    style="width: 156px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="project_exp" class="input project_exp">
                  <header class="project-header">
                    <h2>
                      项目经验 *
                      <span>
                        （为了更好地展示您的实力，请至少添加2个项目经验）
                      </span>
                    </h2>
                  </header>
                  <label for="" class="sub-add-btn">
                    <span class="tab-hint">待完成</span>
                    <a href="" class="experience-add-button font-size-13"
                      >+ 添加项目经验</a
                    >
                  </label>
                  <div class="exp-list">
                    <div class="empty-container">
                      <button class="experience-add-button">
                        + 添加项目经验
                      </button>
                    </div>
                  </div>
                </div>
                <div class="skills-section">
                  <div class="skills-section-title">接单信息</div>
                  <div class="skills-section-content">
                    <div class="skills-section-helper">
                      当接单状态为“开启”，有合适您的悬赏会自动推送给您。
                    </div>
                    <div class="skills-section-item">
                      接单状态
                      <div class="switcher">
                        <label class="switcher-on active"> 开启 </label>
                        <label class="switcher-off"> 关闭 </label>
                      </div>
                    </div>
                    <div class="skills-section-item">
                      <p>空闲时间 *</p>
                      <div
                        class="skills-section-option inline"
                        v-for="(item, index) in freeList"
                        :key="index"
                      >
                        <label for="">
                          <div
                            class="iradio_square-mart"
                            style="position: relative"
                          >
                            <input
                              type="radio"
                              value="index"
                              style="
                                position: absolute;
                                top: 0%;
                                left: 0%;
                                display: block;
                                width: 100%;
                                height: 100%;
                                margin: 0px;
                                padding: 0px;
                                background: rgb(255, 255, 255) none repeat
                                  scroll 0% 0%;
                                border: 0px none;
                                opacity: 0;
                              "
                            />
                          </div>
                          {{ item }}
                        </label>
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
    return {
      skillList: [
        {
          name: "前端开发",
        },
        {
          name: "后端开发",
        },
        {
          name: "iOS开发",
        },
        {
          name: "Android开发",
        },
        {
          name: "微信应用开发",
        },
        {
          name: "全栈开发",
        },
      ],
      table: true,
      freeList: ["较少时间兼职", "较多时间兼职", "全职SOHO"],
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
      .info {
        width: 750px;
        margin-left: 10px;
        padding-bottom: 50px;
        margin-bottom: 40px;
        background: #fff;
        min-height: 40rem;
        box-shadow: 0 1px 2px rgba(183, 195, 192, 0.95);
        font-size: 14px;
        color: #333;
        .box {
          padding-top: 60px;
          max-width: 500px;
          margin: 0 auto;
          hr.head-line {
            height: 1px;
            width: 100%;
            box-sizing: border-box;
            border: 0;
            margin-bottom: 20px;
            padding: 0;
            border-top: 1px solid #d7d8d7;
          }
          .label {
            margin-bottom: 20px;
            .head {
              color: grey;
            }
          }
          .one_sentence_div {
            margin-bottom: 30px;
            .one_sentence_descri {
              width: 500px;
              height: 104px;
              margin-top: 10px;
              padding: 5px 8px;
              font-size: 14px;
              resize: none;
              border: 1px solid #cad3de;
              border-radius: 4px;
            }
            .right {
              font-size: 12px;
              color: #9b9b9b;
              i {
                font-style: normal;
              }
            }
          }
          .sub-add-btn {
            display: block;
            text-align: right;
            margin: 1rem 0;
            .modal-open {
              color: #4289db;
            }
          }
          .role-skill-tab-box {
            background: #f5f5f5;
            border-radius: 3px;
            padding: 1rem;
            .tabbox-content {
              .tab-header {
                color: #474b48;
                .tab.active {
                  background: #fafafa;
                  border: 1px solid #e8e8e8;
                  border-top-left-radius: 0.3rem;
                  border-top-right-radius: 0.3rem;
                  border-bottom: none;
                }
                .tab {
                  float: left;
                  padding: 0.6rem 0.8rem;
                  cursor: pointer;
                  font-size: 0.9rem;
                  position: relative;
                  .tab-hint {
                    font-size: 0.9rem;
                    width: 5em;
                    display: inline-block;
                    color: #fff;
                    position: absolute;
                    top: -2.4em;
                    left: calc((100% - 5em) / 2);
                    background: #eaa838;
                    border-radius: 0.5em;
                    text-align: center;
                    padding: 0.53em 0;
                  }
                  .tab-hint::before {
                    font-size: 0.8rem;
                    content: " ";
                    position: absolute;
                    top: 2.6em;
                    right: 2.1em;
                    border: 0.5em solid;
                    border-color: #eaa838 transparent transparent;
                  }
                }
              }
              .tab-body.active {
                display: block;
              }
              .tab-body {
                padding: 1rem;
                background: #fff;
                border: 1px solid #e8e8e8;
                border-radius: 0 3px 3px;
                display: none;
                .form {
                  max-width: 980px;
                  margin: 0 auto;
                  position: relative;
                  .input {
                    margin-bottom: 1.5rem;
                    box-sizing: border-box;
                    label {
                      font-size: 0.9rem;
                      color: #474b48;
                      margin-bottom: 10px;
                      display: block;
                    }
                    .checkbox-item {
                      float: left;
                      line-height: 24px;
                      padding-right: 1.1rem;
                      .role-skill-check {
                        margin-right: 1.1rem !important;
                      }
                      .icheckbox_square-mart {
                        display: inline-block;
                        vertical-align: middle;
                        margin: 0;
                        padding: 0;
                        width: 24px;
                        height: 24px;
                        background: url(../assets/ICONS.png) no-repeat;
                        border: none;
                        cursor: pointer;
                      }
                    }
                  }
                  b {
                    font-weight: 400 !important;
                  }
                  .selectize-control {
                    position: relative;
                    .selectize-input {
                      background-color: #edf1f5;
                      border: 1px solid #cad3de;
                      font-size: 14px;
                      line-height: 1.42857143;
                      color: #555;
                      background-image: none;
                      border-radius: 4px;
                      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                      -webkit-transition: border-color ease-in-out 0.15s,
                        box-shadow ease-in-out 0.15s;
                      transition: border-color ease-in-out 0.15s,
                        box-shadow ease-in-out 0.15s;
                      box-sizing: border-box;
                      padding: 8px;
                      width: 100%;
                      overflow: hidden;
                      z-index: 1;
                      cursor: text;
                      display: inline-block;
                      position: relative;
                      input {
                        display: inline-block !important;
                        padding: 0 !important;
                        min-height: 0 !important;
                        max-height: none !important;
                        max-width: 100% !important;
                        margin: 0 1px !important;
                        text-indent: 0 !important;
                        border: 0 !important;
                        background: 0 0 !important;
                        line-height: inherit !important;
                        // -webkit-user-select: auto !important;
                        box-shadow: none !important;
                        color: #303030;
                        font-family: inherit;
                        font-size: 13px;
                      }
                      input:focus {
                        outline: 0 !important;
                      }
                      * {
                        vertical-align: baseline;
                      }
                    }
                    .selectize-input::after {
                      content: " ";
                      display: block;
                      clear: left;
                    }
                  }
                  .form-row {
                    margin-bottom: 1.5rem;
                  }
                }
              }
            }
          }
          .project_exp {
            margin-top: 28px;
            margin-bottom: 30px;
            box-sizing: border-box;
            span {
              font-size: 1rem;
            }
            .sub-add-btn {
              position: relative;
              font-size: 14px;
              color: #555;
              margin-bottom: 10px;
              display: block;
              text-align: right;
              margin: 1rem 0;
              .tab-hint {
                font-size: 0.9rem;
                width: 5em;
                display: inline-block;
                color: #fff;
                position: absolute;
                top: -3em;
                right: 0;
                background: #eaa838;
                border-radius: 0.5em;
                text-align: center;
                padding: 0.53em 0;
              }
              .tab-hint::before {
                font-size: 0.8rem;
                content: " ";
                position: absolute;
                top: 2.6em;
                right: 2.1em;
                border: 0.5em solid;
                border-color: #eaa838 transparent transparent;
              }
              .experience-add-button {
                color: #4289db;
              }
              .font-size-13 {
                font-size: 13px;
              }
            }
            .exp-list {
              .empty-container {
                box-sizing: border-box;
                background: #f5f5f5;
                border: 1px solid #e8e8e8;
                height: 42px;
                border-radius: 4px;
                padding: 9px 11px;
                .experience-add-button {
                  background: #2d3238;
                  box-shadow: 0 0.1rem 0.1rem 0 rgba(0, 0, 0, 0.34);
                  font-size: 0.9rem;
                  color: #fff;
                  border: none;
                  outline: 0;
                  border-radius: 0.4rem;
                  padding: 0.3rem 1rem;
                  cursor: pointer;
                }
              }
            }
          }
          .skills-section {
            margin-top: 28px;
            .skills-section-title {
              font-size: 21px;
              color: #2d3238;
              line-height: 31.5px;
              border-bottom: 1px solid #dde3eb;
              padding: 7px 0;
            }
            .skills-section-content {
              margin-top: 14px;
              padding: 7px 0;
              .skills-section-helper {
                font-size: 14px;
                color: #8796a8;
                line-height: 21px;
                margin: 7px 0;
              }
              .skills-section-item {
                margin: 28px 0;
                .switcher {
                  display: inline-block;
                  height: 28px;
                  width: 118px;
                  background: #f4f4f4;
                  border-radius: 5px;
                  color: #979fa8;
                  font-size: 1rem;
                  line-height: 2rem;
                  .switcher-on {
                    border-radius: 5px 0 0 5px;
                    cursor: pointer;
                  }
                  label.active {
                    color: #fff;
                    background: #4289db;
                  }
                  label {
                    display: inline-block;
                    text-align: center;
                    width: 48%;
                  }
                  .switcher-off {
                    border-radius: 0 5px 5px 0;
                    cursor: pointer;
                  }
                }
                .skills-section-option.inline {
                  margin-right: 14px;
                }
                .skills-section-option {
                  margin: 21px 0;
                  .iradio_square-mart {
                    background-position: -261px -28px !important;
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    background: url(../assets/ICONS.png) no-repeat;
                    border: none;
                    cursor: pointer;
                  }
                }
                .inline {
                  display: inline-block !important;
                }
              }
            }
          }
        }
      }
      .form-container {
        overflow: hidden;
        border-radius: 4px;
      }
    }
  }
}
* {
  box-sizing: border-box;
}
header h2 {
  font-size: 19px;
  color: #2d3238;
  line-height: 31.5px;
  border-bottom: 1px solid #dde3eb;
  padding: 7px 0;
}
.right {
  float: right;
}
.icheckbox_square-mart {
  background-position: -242px 0 !important;
}
.form-label {
  margin-bottom: 10px !important;
}
div,
li,
input,
p,
hr,
form,
textarea {
  margin: 0;
  padding: 0;
}
h2,
section {
  font-weight: 400;
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
hr.head-line {
  display: inline-block;
}
</style>