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
                <a href="/category">我是需求方</a>
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
            <div class="home-article">
              <div class="widget-column promoted-articles">
                <h3>被推荐的文档</h3>
                <ul>
                  <li v-for="(item, index) in fileList" :key="index">
                    <a :href="item.url" :title="item.title">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
    <footer class="footer"></footer>
    <div
      class="kf5-support-chat kf5-chatSupport-right-bottom"
      style="position: relative; z-index: 999"
    >
      <div
        id="kf5-support-btn"
        class="kf5-chatSupport-btn kf5-chatSupport-style kf5-waves"
        style="color: #fff; background: #4677c1"
      >
        <svg
          t="1621926453587"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6816"
          width="25"
          height="25"
          style="padding-top:5px;box-sizing:border-box"
        >
          <path
            d="M485.734 76.86c-235.218 0-425.578 165.593-425.578 369.859 0 125.328 72.735 236.765 182.61 304.828v114.531c0 15.469 10.828 24.75 23.218 24.75 4.641 0 9.297-1.531 12.375-3.094l116.063-77.375c29.422 6.188 58.812 7.75 89.765 7.75 235.22 0 425.563-165.593 425.563-369.859 1.566-205.797-188.778-371.39-424.016-371.39z m0 679.346c-26.312 0-52.625-3.094-78.921-7.75l-12.391-3.094c-7.735-1.53-15.469 0-23.219 4.657l-10.812 7.718-55.72 37.157V734.55c0-10.844-6.187-21.688-15.468-26.313l-15.484-9.28C177.766 641.674 120.516 547.3 120.516 448.252c0-170.219 162.5-307.937 363.671-307.937 201.188 0 363.657 137.718 363.657 307.937 1.565 168.672-162.466 307.953-362.11 307.953zM244.313 457.531c0 28.219 22.859 51.078 51.078 51.078 28.203 0 51.062-22.859 51.062-51.078 0-28.172-22.86-51.047-51.062-51.047-28.22 0-51.079 22.875-51.079 51.047z m193.453 0c0 28.219 22.859 51.078 51.062 51.078s51.078-22.859 51.078-51.078c0-28.172-22.875-51.047-51.078-51.047s-51.062 22.875-51.062 51.047z m187.234 0c0 28.219 22.875 51.078 51.063 51.078 28.218 0 51.093-22.859 51.093-51.078 0-28.172-22.875-51.047-51.093-51.047-28.188 0-51.063 22.875-51.063 51.047z m293.128 79.957c-0.912-1.152-1.872-2.256-2.816-3.408-6.656 25.28-16.16 49.632-28.128 72.752 0.496 1.12 1.12 2.192 1.6 3.312 8.096 18.624 12.496 38.752 12.496 59.744 0 55.664-32.16 108.688-86.064 140.848l-8.688 5.216c-5.216 2.592-8.72 8.688-8.72 14.784v33.904l-31.28-20.88-6.096-4.336c-4.336-2.592-8.688-3.472-13.024-2.592l-6.944 1.712c-14.816 2.656-29.6 4.336-44.336 4.336-35.44 0-68.816-7.84-97.936-21.504-28.912 6.752-58.912 11.008-89.808 12.464 48.4 41.712 115.008 67.504 188.592 67.504 19.504 0 38-0.976 56.496-4.848l73.056 48.688c1.936 0.976 4.848 1.936 7.744 1.936 7.808 0 14.624-5.84 14.624-15.568v-72.096c69.152-42.848 114.944-112.976 114.944-191.84 0-48.192-16.848-92.976-45.712-130.128z"
            fill="#ffffff"
            p-id="6817" 
          ></path>
        </svg>
        <span>在线客服</span>
      </div>
    </div>
  </div>
</template>
<script>
import miniNav from '../components/MiniNav.vue'
export default {
  components:{
    miniNav
  },
  data() {
    return {
      fileList: [
        {
          url: "",
          title: "开发者如何建立阶段划分？",
        },
        {
          url: "",
          title: "码市会员是什么？",
        },
        {
          url: "",
          title: "需求方确定人选后如何启动项目？",
        },
        {
          url: "",
          title: "需求方在码市做项目步骤是什么？",
        },
        {
          url: "",
          title: "如何申请中止项目？",
        },
        {
          url: "",
          title: "如何在开发宝里充值或提现？",
        },
        {
          url: "",
          title: "如何给项目估价？",
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
        .widget-column {
          margin-bottom: 40px;
          h3 {
            font-size: 16px;
            margin-bottom: 20px;
            font-weight: bold;
          }
          ul {
            li {
              margin-bottom: 16px;
              position: relative;
              padding-left: 12px;
              a {
                color: #307acd;
                font-size: 15px;
              }
              a:hover {
                color: #448ee1;
              }
            }
            li::before {
              content: "";
              height: 4px;
              width: 4px;
              border-radius: 100%;
              background: #ced6d8;
              position: absolute;
              left: 0;
              top: 5px;
            }
          }
        }
      }
      .content-main,
      .fr {
        float: right;
      }
    }
  }
}
.kf5-support-chat{
  position: fixed !important;
  margin: 0;
  .kf5-chatSupport-style{
    right: 50px;
    bottom: 0;
    font-size: 16px;
    padding: 0 15px 0 12px;
    line-height: 40px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, .05);;
    transform-origin: center bottom;
  }
  .kf5-chatSupport-btn{
    position: fixed;
    cursor: pointer;
    overflow: visible;
    z-index: 100;
  }
}
</style>