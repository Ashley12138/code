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
              <li style="color: #8e9297">交易记录</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="content-box flex-auto-justify">
              <div class="box">
                <div style="width: 100%; height: 100%">
                  <h2 class="header">交易记录</h2>
                  <div class="records">
                    <div class="filters">
                      <div class="filter">
                        <em class="filter-title">创建时间</em>
                        <div class="filter-content">
                          <div>
                            <label for="" class="selector">
                              <select name="createdAt" id="createdAt">
                                <option
                                  v-for="(item, index) in timeList"
                                  :key="index"
                                  :value="item.value"
                                >
                                  {{ item.title }}
                                </option>
                              </select>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        class="filter"
                        v-for="(item, index) in touchList"
                        :key="index"
                      >
                        <em class="filter-title">{{ item.title }}</em>
                        <div class="filter-content">
                          <div>
                            <div
                              class="checkbox check-box"
                              v-for="(x, y) in item.checkList"
                              :key="y"
                            >
                              <label for="" class="checklabel">
                                <div
                                  class="check-icon"
                                  style="display: inline-block"
                                >
                                  <input
                                    type="checkbox"
                                    name="tradeType"
                                    value="income"
                                  />
                                </div>
                                {{ x }}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                          <th class="align-right" style="width: 5rem">状态</th>
                          <th class="align-right" style="width: 5rem">余额</th>
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
      timeList: [
        {
          value: "all",
          title: "全部",
        },
        {
          value: "week",
          title: "一周内",
        },
        {
          value: "3-weeks",
          title: "三周内",
        },
        {
          value: "month",
          title: "一个月内",
        },
        {
          value: "3-months",
          title: "三个月内",
        },
        {
          value: "6-months",
          title: "半年内",
        },
      ],
      touchList: [
        {
          title: "交易类型",
          checkList: ["入账", "付款", "提现", "其他"],
        },
        {
          title: "交易状态",
          checkList: ["处理中", "已完成", "已取消", "已失败"],
        },
      ],
      recordsList: [],
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
            .filters {
              list-style: none;
              font-size: 1em;
              .filter {
                position: relative;
                margin: 0 0 1.5em;
                color: #2d3238;
                em {
                  font-style: normal;
                }
                .filter-title {
                  position: absolute;
                  top: 50%;
                  margin-top: -0.8em;
                }
                .filter-content {
                  margin-left: 6em;
                  .selector {
                    position: relative;
                    width: 10rem;
                    height: 2.4rem;
                    display: inline-block;
                    box-sizing: border-box;
                    border: 1px solid #cad3de;
                    border-radius: 0.4rem;
                    background: #edf1f5;
                    overflow: hidden;
                    select {
                      height: 100%;
                      width: 100%;
                      border: none;
                      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAMAAAAM9FwAAAAAM1BMVEXl6Ozl6e3n6u7o6u/p7PHu8fWnrraorraqsLirsLissbmutLyYn6ikqrOkq7Omq7T///+DtCS6AAAADHRSTlP8/Pz8/Pz+/v7+/v6dIvmaAAAAAWJLR0QQlbINLAAAAEtJREFUCNc9zjsCACEIA9EoRFGzev/bbuGH7k0aMLrxXe4DoZqfqxo89KXtNBUOemimZ4K3bBM8BdsESVrRWirGG+ihvd9Ai3be+QEWkwOYnpvg0QAAAABJRU5ErkJggg==)
                        no-repeat 90% 0.8rem;
                      font-size: inherit;
                      text-overflow: ellipsis;
                      text-indent: 1rem;
                      white-space: nowrap;
                      -webkit-appearance: none;
                      -moz-appearance: none;
                      appearance: none;
                    }
                  }
                  .check-box {
                    width: 6rem;
                    display: inline-block;
                    vertical-align: middle;
                    .check-label {
                      cursor: pointer;
                      outline: none;
                    }
                  }
                }
              }
            }
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
              .align-right {
                text-align-last: right;
              }
              tbody {
                font-size: 0.9rem;
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
</style>