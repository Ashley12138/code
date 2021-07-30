<template>
  <div>
    <mini-nav></mini-nav>
    <main>
      <header class="main-header">
        <div class="wrap">
          <ul class="breadcrumbs">
            <li>
              <a href="/index">首页</a>
            </li>
            <li><a href="/category">我是需求方</a></li>
            <li><a href="/Publish">发布项目</a></li>
          </ul>
          <form action="" method="get" class="main-header-search">
            <label for="search">
              <input
                type="search"
                id="search"
                name="keyword"
                placeholder="输入问题关键字，找到答案"
              />
              <svg
                style="position: absolute; top: 8px; left: 10px"
                t="1621909625742"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5849"
                width="20"
                height="20"
              >
                <path
                  d="M464.213333 808.96c-88.746667 0-177.493333-34.133333-245.76-102.4-133.12-133.12-133.12-354.986667 0-488.106667 133.12-133.12 354.986667-133.12 488.106667 0 133.12 133.12 133.12 354.986667 0 488.106667-64.853333 68.266667-153.6 102.4-242.346667 102.4z m0-621.226667c-71.68 0-143.36 27.306667-194.56 81.92-109.226667 109.226667-109.226667 283.306667 0 392.533334 109.226667 109.226667 283.306667 109.226667 392.533334 0 109.226667-109.226667 109.226667-283.306667 0-392.533334-54.613333-54.613333-126.293333-81.92-197.973334-81.92z"
                  p-id="5850"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M904.533333 938.666667c-10.24 0-17.066667-3.413333-23.893333-10.24l-191.146667-191.146667c-13.653333-13.653333-13.653333-34.133333 0-47.786667s34.133333-13.653333 47.786667 0l191.146667 191.146667c13.653333 13.653333 13.653333 34.133333 0 47.786667-6.826667 6.826667-13.653333 10.24-23.893334 10.24z"
                  p-id="5851"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </label>
            <input type="submit" value="搜索" />
          </form>
        </div>
      </header>
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
            <nav class="nav-tabs">
              <ul>
                <li :class="all ? 'active' : ''" @click="change">
                  <div>全部</div>
                </li>
                <li :class="all ? '' : 'active'" @click="change">
                  <div href="">最近</div>
                </li>
              </ul>
            </nav>
            <!-- 全部的列表 -->
            <ul v-if="all" class="articles-list">
              <li v-for="(item, index) in postsList" :key="index">
                <div class="posts-item-content">
                  <h3>
                    <a :href="item.url">{{ item.content }}</a>
                  </h3>
                </div>
              </li>
            </ul>
            <!-- 最近的列表 -->
            <ul v-if="!all" class="articles-list">
              <li v-for="(item, index) in recentList" :key="index">
                <div class="posts-item-content">
                  <h3>
                    <a :href="item.url">{{ item.content }}</a>
                  </h3>
                </div>
              </li>
            </ul>
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
      all: true,
      postsList: [
        {
          url:"/article",
          content: "需求方指南",
        },
        {
          url:"",
          content: "如何注册成需求方？",
        },
        {
          url:"",
          content: "如何发布项目需求？",
        },
        {
          url:"",
          content: "需求方项目合作须知",
        },
        {
          url:"",
          content: "如何给项目估价？",
        },
        {
          url:"",
          content: "发布项目后如何取消？",
        },
        {
          url:"",
          content: "招募团队和个人项目有什么区别？",
        },
        {
          url:"",
          content: "需求方在码市做项目的步骤是什么？",
        },
      ],
      recentList: [
        {
          url:"",
          content: "需求方项目合作须知",
        },
        {
          url:"",
          content: "需求方在码市做项目的步骤是什么？",
        },
        {
          url:"",
          content: "如何发布项目需求？",
        },
        {
          url:"",
          content: "如何注册成需求方？",
        },
        {
          url:"",
          content: "招募团队和个人项目有什么区别？",
        },
        {
          url:"",
          content: "发布项目后如何取消？",
        },
        {
          url:"",
          content: "如何给项目估价？",
        },
        {
          url:"",
          content: "需求方指南",
        },
      ],
    };
  },
  methods: {
    change() {
      this.all = !this.all;
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  display: block;
  .main-header {
    height: 88px;
    background: #4a99ed;
    .wrap {
      width: 1080px;
      margin: 0 auto;
      .breadcrumbs {
        float: left;
        margin-bottom: 0;
        li {
          font-size: 16px;
          color: #fff;
          line-height: 88px;
          float: left;
          a {
            margin-right: 5px;
          }
        }
        li::before {
          content: ">";
          float: left;
          margin-right: 5px;
        }
        li:nth-child(1)::before {
          content: "";
        }
        a {
          color: #fff;
        }
      }
      .breadcrumbs::after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .main-header-search {
        float: right;
        margin-top: 25px;
        position: relative;
        input {
          height: 38px;
          vertical-align: middle;
          width: 260px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 40px;
          padding-left: 30px;
          border: none;
          padding-right: 10px;
          -webkit-transition: all ease 0.4s;
          -moz-transition: all ease 0.4s;
          transition: all ease 0.4s;
        }
        input:focus {
          background: #fff;
          color: #374051;
        }
        input[type="submit"] {
          visibility: hidden;
          position: absolute;
          right: 0;
          height: 38px;
          width: 30px;
          display: inline-block;
        }
        input[type="submit"]:focus {
          box-shadow: 0 0 3px rgba(33, 211, 118, 0.35);
        }
        label:focus{
          color:#777
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
      .fr {
        float: right;
      }
      .content-main {
        width: 70%;
        .nav-tabs {
          border-bottom: 1px solid #e2eaec;
          padding: 0 5px;
          margin-bottom: 10px;
          ul {
            float: left;
            li {
              float: left;
              position: relative;
              bottom: -1px;
              margin-left: 6px;
              div {
                display: block;
                border: 1px solid #e2eaec;
                border-radius: 3px 3px 0 0;
                padding: 0 15px;
                height: 34px;
                line-height: 34px;
                font-size: 15px;
                color: #428bca;
                background: #f4f8f9;
                -webkit-transition: all ease 0.4s;
                transition: all ease 0.4s;
              }
            }
            .active {
              div {
                color: #374051;
                background: #fff;
                border-bottom: 1px solid #fff !important;
                text-decoration: none;
              }
            }
          }
        }
        .nav-tabs::after {
          display: block;
          height: 0;
          content: ".";
          clear: both;
          visibility: hidden;
        }
        .articles-list {
          margin-bottom: 30px;
          li {
            position: relative;
            border-bottom: 1px solid #e2eaec;
            padding: 18px 100px 18px 0;
            .posts-item-content {
              padding-left: 10px;
              h3 {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 8px;
                a {
                  color: #3071cd;
                }
                a:hover {
                  color: #448ee1;
                }
              }
            }
          }
          li:hover {
            background: #f9fcff;
          }
        }
      }
    }
  }
}
header,
div,
ul,
li,
form,
label,
section,
h2,
h3,
nav {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  word-break: break-word;
  display: block;
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
label {
  cursor: pointer;
}
input[type="search"] {
  appearance: none;
}
section {
  display: block;
}
ul {
  list-style: none;
}
</style>