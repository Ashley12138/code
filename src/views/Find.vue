<template>
  <!-- 找项目页面 -->
  <div id="container" style="height: 100%">
    <div style="height: 100%">
      <div class="container">
        <header id="header">
          <div class="content">
            <div class="header">
              <a href="/">
                <img
                  class="logo-image"
                  src="../assets/mart-logo.png"
                  alt="码市"
                />
              </a>
              <ul class="nav">
                <li>
                  <a href="/find">找项目</a>
                </li>
                <li>
                  <a href="/square"
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
                      <a href="" target="_blank">常见问题</a>
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
                    <a href="" class="user button">成为开发者</a>
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
          <div class="projects-container">
            <div class="projects-content">
              <div class="left-container">
                <div class="project-filter-container">
                  <div class="project-filter-content">
                    <div class="filter-item show">
                      <div class="expand-option-container">
                        <div class="expand-option-content">
                          <div class="label">角色：</div>
                          <div class="option-content">
                            <div class="option-list">
                              <div class="option active">全部</div>
                              <div class="option">开发团队</div>
                              <div class="option">开发工程师</div>
                              <div class="option">设计师</div>
                              <div class="option">产品经理</div>
                              <div class="option">测试工程师</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span class="show-filter">+ 更多条件筛选</span>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="list-content">
                    <header class="list-header">
                      <span class="search">
                        <input type="text" class="input" />
                        <span class="fa fa-search"></span>
                      </span>
                    </header>
                  </div>
                </div>
              </div>
              <div class="right-container">
                <div class="sticky-outer-wrapper" style="height: 326.033px">
                  <div
                    class="sticky-inner-wrapper"
                    style="position: fixed; top: 85px; width: 266px"
                  >
                    <div class="panel-container">
                      <div>
                        <div class="panel-header">
                          开发者工作指南
                          <a href="" class="more" target="_blank">了解更多</a>
                        </div>
                        <div class="panel-body">
                          <div style="height: 300px">
                            <el-steps direction="vertical">
                              <el-step title="注册并认证身份"></el-step>
                              <el-step title="报名参与项目"></el-step>
                              <el-step title="确认合作需求方"></el-step>
                              <el-step title="项目阶段划分并启动"></el-step>
                              <el-step title="阶段交付收款"></el-step>
                            </el-steps>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: false,
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
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
body html{
  background: #f0f2f5;
}
div {
  margin: 0;
  padding: 0;
}
.container {
  min-height: 100%;
  position: relative;
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
    .projects-container {
      max-width: 1112px;
      margin: 0 auto;
      min-height: 1200px;
      padding: 1.5rem 1rem;
      .projects-content {
        position: relative;
        .left-container {
          margin-right: 20rem;
          .project-filter-container {
            background: #fff;
            box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.1);
            border-radius: 4px;
            margin-bottom: 1rem;
            .project-filter-content {
              padding: 2rem;
              .filter-item {
                border-bottom: none;
                margin-bottom: 0;
                .expand-option-content {
                  padding-top: 0.5rem;
                  .label {
                    float: left;
                    font-size: 0.9rem;
                    line-height: 1.35rem;
                    padding: 0.32rem 1.2rem;
                    color: #727f8f;
                  }
                  .option-content {
                    margin-left: 8rem;
                    position: relative;
                    .option-list {
                      padding-right: 2rem;
                      .option {
                        display: inline-block;
                        padding: 0.32rem 1rem;
                        color: #273444;
                        font-size: 0.9rem;
                        line-height: 1.35rem;
                        cursor: pointer;
                        margin: 0 0.1rem 1rem;
                      }
                      .active {
                        border-radius: 2px;
                        background: #4289dc;
                        color: #fff;
                      }
                    }
                  }
                }
              }
              .show-filter {
                position: relative;
                float: right;
                margin-top: -38px;
                color: #2d59a2;
                font-size: 1rem;
                cursor: pointer;
              }
            }
          }
          .list-container {
            background: #fff;
            box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.1);
            border-radius: 4px;
            .list-content {
              padding: 1rem 2.5rem;
              position: relative;
            }
          }
        }
        .right-container {
          width: 19rem;
          position: absolute;
          top: 0;
          right: 0;
          .panel-container {
            background: #fff;
            box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.1);
            border-radius: 4px;
            margin-bottom: 1rem;
            .panel-header {
              border-bottom: 1px solid #eff2f7;
              padding: 1rem 1.5rem;
              font-size: 1.2rem;
              line-height: 1.8rem;
              color: #273444;
              .panel-body {
                padding: 1rem 1.5rem;
                font-size: 1rem;
                color: #273444;
              }
            }
          }
        }
      }
    }
  }
}
a {
  color: #108ee9;
  background: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease;
}
a:hover {
  color: #49a9ee !important;
}
</style>