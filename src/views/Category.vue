<template>
  <div>
    <mini-nav></mini-nav>
    <main>
      <section class="search-box">
        <form action="" id="form-search-form" class="search">
          <div class="search-match">
            <label for="top-search">
              <svg
                style="position: absolute; top: -6px; left: 8px"
                t="1621909625742"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5849"
                width="30"
                height="30"
              >
                <path
                  d="M464.213333 808.96c-88.746667 0-177.493333-34.133333-245.76-102.4-133.12-133.12-133.12-354.986667 0-488.106667 133.12-133.12 354.986667-133.12 488.106667 0 133.12 133.12 133.12 354.986667 0 488.106667-64.853333 68.266667-153.6 102.4-242.346667 102.4z m0-621.226667c-71.68 0-143.36 27.306667-194.56 81.92-109.226667 109.226667-109.226667 283.306667 0 392.533334 109.226667 109.226667 283.306667 109.226667 392.533334 0 109.226667-109.226667 109.226667-283.306667 0-392.533334-54.613333-54.613333-126.293333-81.92-197.973334-81.92z"
                  p-id="5850"
                  fill="#BABABA"
                ></path>
                <path
                  d="M904.533333 938.666667c-10.24 0-17.066667-3.413333-23.893333-10.24l-191.146667-191.146667c-13.653333-13.653333-13.653333-34.133333 0-47.786667s34.133333-13.653333 47.786667 0l191.146667 191.146667c13.653333 13.653333 13.653333 34.133333 0 47.786667-6.826667 6.826667-13.653333 10.24-23.893334 10.24z"
                  p-id="5851"
                  fill="#BABABA"
                ></path>
              </svg>
              <input
                type="search"
                id="search"
                name="keyword"
                placeholder="输入问题关键字，找到答案"
              />
            </label>
          </div>
          <input
            type="submit"
            value="搜索"
            style="
              font-size: 18px;
              position: absolute;
              left: 736px;
              top: 60px;
              background: rgba(225, 225, 225, 0);
              border: none;
            "
          />
        </form>
      </section>
      <section class="content">
        <div class="wrap clearfix">
          <div class="category-section-list">
            <div class="category-section category">
              <h2>
                <a href="/">我是需求方</a>
              </h2>
              <ul>
                <li class="section">
                  <h3>
                    <a href="/ListMenu">发布项目</a>
                  </h3>
                </li>
                <li class="section">
                  <h3>
                    <a href="">招募开发</a>
                  </h3>
                </li>
                <li class="section">
                  <h3>
                    <a href="">支付款项</a>
                  </h3>
                </li>
                <li class="section">
                  <h3>
                    <a href="">开发项目</a>
                  </h3>
                </li>
                <li class="section">
                  <h3>
                    <a href="">验收项目</a>
                  </h3>
                </li>
              </ul>
            </div>
            <div class="category-section category">
              <h2>
                <a href="">我是开发者</a>
              </h2>
              <ul>
                <li class="section">
                  <h3>
                    <a href="">注册认证</a>
                  </h3>
                </li>
                <li class="section">
                  <h3>
                    <a href="">报名接单</a>
                  </h3>
                </li>
                <li class="section">
                  <h3>
                    <a href="">开发项目</a>
                  </h3>
                </li>
                <li class="section">
                  <h3>
                    <a href="">验收项目</a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <section class="content-main fr">
            <h2>我是需求方</h2>
            <p class="description"></p>
            <div class="section-tree">
              <div
                class="section section-51129"
                v-for="(item, index) in sectionList"
                :key="index"
              >
                <h3>
                  <a href="">{{ item.title }}</a>
                </h3>
                <ul class="article-list">
                  <li
                    :class="x.star ? 'promoted' : ''"
                    v-for="(x, y) in item.articleList"
                    :key="y"
                  >
                    <a href="" :title="x">{{ x.content }}</a>
                  </li>
                </ul>
                <a href="" class="more">查看全部{{ item.all }}篇文档</a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import miniNav from "../components/MiniNav.vue";
export default {
  components: {
    miniNav,
  },
  data() {
    return {
      sectionList: [
        {
          title: "发布项目",
          articleList: [
            { content: "需求方指南" },
            { content: "如何注册成需求方？" },
            { content: "如何发布项目需求？" },
            { content: "需求方项目合作须知" },
            { star: true, content: "如何给项目估价？" },
            { content: "发布项目后如何取消？" },
          ],
          all: "8",
        },
        {
          title: "招募开发",
          articleList: [
            { content: "项目发布后如何查看报名者信息？" },
            { content: "如何选择开发者确定合作？" },
            { content: "如何联系开发者？" },
          ],
          all: "3",
        },
        {
          title: "支付款项",
          articleList: [
            { content: "如何托管项目款？" },
            { star: true, content: "如何在开发宝里充值或提现？" },
            { content: "如何申请开具发票？" },
            { content: "支付遇到问题怎么办？" },
            { content: "如何一键支付项目所有阶段款项？" },
          ],
          all: "8",
        },
        {
          title: "开发项目",
          articleList: [
            { star: true, content: "需求方确定人选后如何启动项目？" },
            { content: "是否可以跟开发者进行线下交易？" },
            { content: "如何申请修改项目阶段计划？" },
          ],
          all: "3",
        },
        {
          title: "验收项目",
          articleList: [
            { content: "如何验收项目？" },
            { content: "项目能否提供质保期？发现bug谁来修复？" },
            { content: "项目的源码等产出所有权归谁？" },
            { content: "项目验收后如何对开发者进行评价？" },
            { star: true, content: "如何申请中止项目？" },
            { content: "双方无法达成一致验收意见时如何处理？" },
          ],
          all: "7",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
div,
h1,
img,
section,
form,
label,
h2,
h3,
ul,
li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  background: 0 0;
  word-break: break-word;
}
a {
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
  text-decoration: none;
  padding: 0;
  margin: 0;
}
a:hover {
  text-decoration: underline;
}
ul {
  list-style: none;
}
main {
  display: block;
  .search-box {
    height: 150px;
    text-align: center;
    background: #4a99ed;
    .search {
      padding-top: 50px;
      display: inline-block;
      position: relative;
      .search-match {
        float: left;
        position: relative;
        label {
          position: relative;
          cursor: pointer;
          #search {
            background: #fff;
            height: 48px;
            width: 800px;
            padding-left: 45px;
            padding-right: 20px;
            border-radius: 40px;
            border: none;
            font-size: 16px;
            box-shadow: 0 4px 0px rgba(0, 0, 0, 0.05);
          }
        }
      }
    }
  }
  .content {
    padding-top: 40px;
    padding-bottom: 50px;
    .wrap {
      width: 1080px;
      margin: 0 auto;
      .category-section-list {
        float: left;
        width: 25%;
        .category-section {
          width: 100%;
          padding: 0;
          margin-bottom: 25px;
          h2 {
            padding-left: 8px;
            border-left: 3px solid #21d376;
            font-size: 16px;
            margin-bottom: 15px;
            border-bottom: none;
            padding-bottom: 0;
            font-weight: bold;
            a {
              color: #374051 !important;
            }
          }
          .section {
            background: #f7f7f6;
            border-radius: 3px;
            margin-bottom: 6px;
            h3 {
              position: relative;
              a {
                padding: 0 15px;
                color: #307acd;
                display: block;
                height: 36px;
                line-height: 36px;
                font-size: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                border-radius: 3px;
              }
              a:hover {
                color: #448ee1;
              }
            }
          }
        }
      }
      .content-main {
        width: 70%;
        .section {
          display: inline-block;
          vertical-align: top;
          width: 48%;
          padding-right: 30px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          margin-bottom: 50px;
          h3 {
            font-size: 18px;
            padding-left: 10px;
            border-left: 2px solid #21d376;
            line-height: 1;
            margin-bottom: 20px;
            a {
              color: #374051;
            }
          }
          .article-list {
            margin-bottom: 10px;
            li {
              margin-bottom: 8px;
              line-height: 1.5em;
              padding-left: 12px;
              position: relative;
            }
            li::before {
              content: "";
              position: absolute;
              left: 0;
              top: 7px;
              height: 4px;
              width: 4px;
              border-radius: 100%;
              background-color: #d0d3dc;
            }
            a {
              color: #307acd;
              font-size: 16px;
            }
            .promoted::before {
              content: "★";
              font-family: "kf5-help";
              font-size: 14px;
              background: none;
              height: auto;
              width: auto;
              left: -5px;
              top: 0;
              color: #ffa900;
            }
          }
          .more {
            font-size: 12px;
            margin-left: 12px;
            color: #777777;
          }
        }
      }
      .content-main,
      .fr {
        float: right;
      }
    }
    h2 {
      font-size: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e2eaec;
      padding-left: 4px;
      margin-bottom: 30px;
      font-weight: bold;
    }
    h2 + .description {
      margin: -24px 0 24px 0;
      min-height: 1px;
    }
  }
}
</style>