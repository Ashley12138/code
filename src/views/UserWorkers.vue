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
                <div class="section workers-wrapper clearfix">
                  <p class="header">
                    <span style="float: right"></span>
                  </p>
                  <hr class="hr" />
                  <div class="ui-help-text undefined">
                    <span class="help">
                      上传历史案例作品图片，从视觉层面让您的资料更有说服力
                    </span>
                  </div>
                  <div class="section clearfix">
                    <p class="header">
                      案例作品
                      <span style="float: right"></span>
                    </p>
                    <hr class="hr" />
                    <button class="button add-button">+ 添加更多作品</button>
                    <div class="workers-box">
                      <div v-if="!workersList" class="empty">
                        <img
                          src="https://assets.codemart.com/scripts/2aa23a61bc054c89cd83a87d56c4b66b.png"
                          alt=""
                        />
                        <p>暂无案例作品</p>
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
      // 上传作品的列表
      WorkersList: [],
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
          .workers-wrapper {
            padding: 0 2.9rem;
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
            .ui-help-text {
              font-size: 12px;
              color: #8796a8;
              line-height: 1.5rem;
              margin-bottom: 2rem;
              .help {
                font-size: 14px;
              }
            }
          }
          .section {
            margin-bottom: 2.6rem;
            .add-button {
              display: block;
              padding: 0.06rem 0.05rem;
              margin-left: auto;
              color: #4289db;
              border: none;
              font-size: 1.06rem;
            }
            .workers-box {
              margin: 1.5rem 0 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              .empty{
                margin: 0 auto;
                img{
                  margin: 1rem 0;
                  width: 100px;
                }
              }
            }
          }
          .button {
            outline: none;
            display: inline-block;
            background: #fff;
            border-radius: 4px;
            font-size: 1rem;
            color: #8796a8;
            padding: 1rem 1.6rem;
            cursor: pointer;
            transition: background 0.25s cubic-bezier(0.1, 0.56, 0.81, 0.41);
            border: 1px solid #cad4de;
            min-width: 8rem;
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
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
</style>