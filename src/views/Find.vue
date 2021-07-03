<template>
  <!-- 找项目页面 -->
  <div id="container" style="height: 100%">
    <div style="height: 100%">
      <div class="container">
        <top-nav></top-nav>
        <div class="content-wrapper">
          <div class="projects-container">
            <div class="projects-content">
              <div class="left-container">
                <div class="project-filter-container">
                  <div class="project-filter-content">
                    <div :class="[more ? 'filter-item' : 'show']">
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
                      <span @click="tomore" v-if="!more" class="show-filter"
                        >+ 更多条件筛选</span
                      >
                      <span @click="toless" v-else class="show-filter"
                        >- 更多条件筛选</span
                      >
                    </div>
                    <div v-if="more">
                      <div
                        class="expand"
                        v-for="(item, i) in classifyList"
                        :key="i"
                      >
                        <div class="expand-option-container">
                          <div class="label">{{ item.classifyName }}</div>
                          <div class="option-content">
                            <div class="option-list" :id="i">
                              <div
                                :ref="y"
                                @click="blue"
                                class="option"
                                v-for="(x, y) in item.classify"
                                :key="y"
                              >
                                {{ x }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="list-container">
                  <div class="list-content">
                    <header class="list-header">
                      <span class="search">
                        <input type="text" class="input" />
                        <svg
                          t="1620801062338"
                          class="icon-search"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="3481"
                          width="20"
                          height="20"
                          style="align-item: center"
                        >
                          <path
                            d="M909.632 854.528l-259.712-259.712c40.32-52.096 62.08-115.84 62.08-182.848a298.24 298.24 0 0 0-87.872-212.096A297.792 297.792 0 0 0 411.968 112a298.24 298.24 0 0 0-212.096 87.872A297.6 297.6 0 0 0 112 411.968c0 80.128 31.36 155.52 87.872 212.16a297.6 297.6 0 0 0 212.096 87.872 297.6 297.6 0 0 0 182.72-62.016l259.712 259.584c3.2 3.2 8.384 3.2 11.584 0l43.584-43.52a8.192 8.192 0 0 0 0-11.52z m-339.2-284.16a222.784 222.784 0 0 1-158.464 65.6 222.784 222.784 0 0 1-158.4-65.536 222.784 222.784 0 0 1-65.6-158.464c0-59.776 23.36-116.096 65.664-158.4a222.784 222.784 0 0 1 158.336-65.6c59.84 0 116.16 23.232 158.4 65.664a222.784 222.784 0 0 1 65.6 158.336c0 59.84-23.296 116.16-65.536 158.4z"
                            fill="#000000"
                            fill-opacity=".65"
                            p-id="3482"
                          ></path>
                        </svg>
                      </span>
                    </header>
                    <div>
                      <div class="item-container">
                        <div class="item-content">
                          <div class="icon-content">
                            <a href="" target="_blank">
                              <el-image
                                lazy
                                src="https://dn-coding-net-production-pp.codehub.cn/c80d96c7-b9f1-4763-bfa5-87d81c6386ab.png"
                              ></el-image>
                            </a>
                          </div>
                          <div class="body-content">
                            <div class="info-body">
                              <div class="title">
                                <a href="" class="name" target="_blank">
                                  <span class="no">NO.27191</span>
                                  <span class="name">
                                    <span>订单管理系统</span>
                                  </span>
                                  <a href="" class="status tag-blue"
                                    >产品优化</a
                                  >
                                </a>
                                <span class="price">
                                  <span class="bargain">可议价</span>
                                  <span class="money">
                                    <span>￥3,000</span>
                                  </span>
                                </span>
                              </div>
                              <div>
                                <div class="label">
                                  <label>招募：</label>
                                  <span>开发工程师</span>
                                </div>
                                <div class="label">
                                  <label>类型：</label>
                                  <span>web 网站</span>
                                </div>
                                <div class="label">
                                  <label>周期：</label>
                                  <span>15 天</span>
                                </div>
                              </div>
                              <div class="time">
                                <span>20 小时前发布</span>
                                |
                                <span class="apply">13 人报名</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                          <div style="height: 250px">
                            <el-steps
                              direction="vertical"
                              style="padding: 1rem 0 0 1.5rem"
                            >
                              <el-step
                                v-for="(item, index) in steps"
                                :key="index"
                                style="flex-basis: 20%"
                                :title="item.title"
                              ></el-step>
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
import topNav from "../components/TopNav.vue";
export default {
  components: {
    topNav,
  },
  data() {
    return {
      list: false,
      more: false,
      classifyList: [
        {
          classifyName: "角色领域：",
          classify: [
            "全部",
            "前端开发",
            "后端开发",
            "iOS开发",
            "Android开发",
            "微信应用开发",
            "全栈开发",
          ],
        },
        {
          classifyName: "项目类型：",
          classify: [
            "全部",
            "Web网站",
            "APP开发",
            "微信公众号",
            "HTML5 应用",
            "小程序",
            "其他",
          ],
        },
        {
          classifyName: "项目预算：",
          classify: ["全部", "0-5k", "5k-1万", "1万-5万", "5万以上"],
        },
        {
          classifyName: "项目周期：",
          classify: ["全部", "小于30天", "30天-90天", "90天以上"],
        },
      ],
      classifies: "",
      steps: [
        {
          title: "注册并认证身份",
        },
        {
          title: "报名参与项目",
        },
        {
          title: "确认合作需求方",
        },
        {
          title: "项目阶段划分并启动",
        },
        {
          title: "阶段交付收款",
        },
      ],
    };
  },
  methods: {
    show() {
      this.list = true;
    },
    hidden() {
      this.list = false;
    },
    // 展开更多列表
    tomore() {
      this.more = true;
    },
    // 收起更多列表
    toless() {
      this.more = false;
    },
    blue(e) {
      // this.classifies=JSON.parse(JSON.stringify('more_list'+i))
      // var btns=i.children;
      // btns[y].className="active";
      // console.log(JSON.parse(JSON.stringify('more_list'+i)));
      console.log(e);
      e.explicitOriginalTarget.id = "active";
    },
  },
  created() {
    //   this.axios.get("https://codemart.com/api/project").then(data=>{
    //     console.log(data);
    //   })
    // var btns=more_list1.children;
    // btns[1].id="active";
  },
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
              .show {
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
                }
              }
              .filter-item {
                .expand-option-content {
                  padding-top: 0.5rem;
                }
                height: 48.8667px !important;
                border-bottom: 1px solid #eff2f7;
                margin-bottom: 2rem;
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
              .list-header {
                border-bottom: 1px solid #eff2f7;
                padding: 1rem 0;
                line-height: 2rem;
                .search {
                  position: relative;
                  input {
                    height: 2rem;
                    line-height: 2rem;
                    background: #f9fafc;
                    border: 1px solid #e0e6ed;
                    border-radius: 2px;
                    max-width: 13rem;
                    font-size: 0.9rem;
                    color: #8796a8;
                    min-width: inherit;
                    padding-right: 2rem;
                  }
                  .input {
                    outline: none;
                    padding: 0.6rem 1.6rem 0.6rem 0.6rem;
                    box-sizing: border-box;
                  }
                  svg {
                    height: 20px;
                    line-height: 20px;
                    position: absolute;
                    right: 6px;
                    top: 1px;
                  }
                }
              }
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
              .more {
                font-size: 1rem;
                color: #2d59a2;
                float: right;
              }
              .panel-body {
                padding: 1rem 1.5rem;
                font-size: 1rem;
                color: #273444;
                text-align: center;
                .el-step__title {
                  font-size: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
.item-container {
  border-bottom: 1px solid #eff2f7;
  .item-content {
    padding: 1.5rem 0;
    display: table;
    width: 100%;
    box-sizing: border-box;
    .icon-content {
      width: 10.71rem;
      overflow: hidden;
      position: relative;
      border-radius: 2px;
      display: table-cell;
      vertical-align: top;
      a {
        text-decoration: none;
        color: #108ee9;
        background: transparent;
        outline: none;
        cursor: pointer;
        transition: color 0.3s ease;
        .el-image {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          display: block;
        }
      }
    }
    .body-content {
      position: relative;
      display: table-cell;
      vertical-align: top;
      .info-body {
        padding-left: 1.5rem;
        margin-bottom: 1.2rem;
        .title {
          line-height: 1.8rem;
          margin-bottom: 0.5rem;
          word-break: break-all;
          .name {
            color: #273444;
            font-size: 1.2rem;
            font-weight: 400;
            .no {
              margin-right: 0.5rem;
            }
          }
          .tag-blue {
            border: 1px solid #91d5ff;
            background: #e6f7ff;
            color: #1890ff;
          }
          .status {
            border-radius: 2px;
            font-size: 0.84rem;
            padding: 0 0.36rem;
            margin: 0 0.5rem;
            display: inline-block;
            line-height: 1.5rem;
            vertical-align: middle;
          }
          .price {
            float: right;
            .bargain {
              color: #8796a8;
              font-size: 1rem;
              margin: 0 0.5rem;
            }
            .money {
              color: #f75288;
            }
          }
        }
        div {
          .label {
            font-size: 1rem;
            line-height: 1.5rem;
            margin-right: 2rem;
            display: inline-block;
            label {
              color: #727f8f;
            }
            span {
              color: #3c4858;
            }
          }
        }
        .time {
          width: calc(100% - 1.5rem);
          color: #8796a8;
          font-size: 0.9rem;
          line-height: 1.35rem;
          position: absolute;
          bottom: 0;
          span:nth-child(1) {
            padding-left: 0 !important;
          }
          span {
            padding: 0 0.5rem;
          }
          .apply {
            padding-right: 0;
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
.el-step__line {
  height: 2rem;
}
.wcpand-option-content {
  .label {
    float: left;
    font-size: 0.9rem;
    line-height: 1.35rem;
    padding: 0.32rem 1.2rem;
    color: #727f8f;
  }
}
.expand-option-container {
  .label {
    float: left;
    font-size: 0.9rem;
    line-height: 1.35rem;
    padding: 0.32rem 1.2rem;
    color: #727f8f;
  }
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
    #active {
      display: inline-block;
      padding: 0.32rem 1rem;
      color: #273444;
      font-size: 0.9rem;
      line-height: 1.35rem;
      cursor: pointer;
      margin: 0 0.1rem 1rem;
      border-radius: 2px;
      background: #4289dc;
      color: #fff;
    }
  }
}
</style>