<template>
  <div class="main-container">
    <top-nav></top-nav>
    <div class="view-container" v-for="(item, index) in info" :key="index">
      <div id="mart-reward-detail">
        <div class="content">
          <section class="reward-title">
            <div class="title-row">
              <span class="title">{{ item.title }}</span>
              <span class="reward-no">{{ item.number }}</span>
              <span class="status status-2 pull-right">
                {{ item.status }}
              </span>
            </div>
            <div class="desc-row">
              <div class="role-type">
                <span class="type">{{ item.type }}</span>
                <div
                  class="reward-type-skill-top"
                  v-for="(x, y) in item.skills"
                  :key="y"
                >
                  {{ x }}
                </div>
              </div>
            </div>
            <div class="detail-row clearfix">
              <span class="detail-span border-right">
                <span class="darker">金额</span>
                ￥{{ item.money }}
              </span>
              <span class="detail-span border-right">
                <span class="darker">类型</span>
                {{ item.webType }}
              </span>
              <span class="detail-span border-right">
                <span class="darker">周期</span>
                {{ item.circle }}
              </span>
              <span class="detail-span">
                <span class="darker">报名人数</span>
                <span class="number">{{ item.member }}</span>
                人
              </span>
              <button
                class="
                  right
                  mart-button
                  join-button
                  blue
                  btn-with-shadow
                  enable
                "
              >
                参与项目
              </button>
            </div>
          </section>
          <div style="height: 40px"></div>
          <section class="reward-content">
            <div class="content-group">
              <h2>项目描述</h2>
              <div class="description typo fold">
                <p>
                  已有正常使用中的图书管理系统，寻找长期维护和二次开发程序员。
                  <br />
                  一、系统维护：初期上门几天面对面沟通熟悉后，以后可远程，每年5000元。
                  <br />
                  1、系统日常运行维护；
                  <br />
                  2、系统突发事件的诊断、排除；
                  <br />
                  3、咨询服务。帮助解答甲方提出的系统相关的各种业务和技术问题，包括技术咨询、指导和信息提供等；
                  <br />
                  4、数据库维护。
                </p>
                <p>
                    二、二次开发：后端开发，需周末上门工作，每天600-800元（看能力，开发前谈好），8小时。
                    <br>
                    1、因业务发展需要或需求变动引发对系统的新增、完善软件功能等；
                    <br>
                    2、新增功能的维护。
                </p>
              </div>
            </div>
            <div class="content-group">
                <h2>招募要求</h2>
                <div class="content-item">
                    <div class="description typo fold">
                        <p>
                            程序员要求：
                            <br>
                            1、人品好，对系统保密，并签订严格的保密协议；
                            <br>
                            2、技术好，至少三年以上项目开发工作经验，熟练掌握C#，net开发，能独立完成项目，同时掌握JAVA，python等的优先；
                            <br>
                            3、时间稳定，周末能有时间；
                            <br>
                            4、地点近，上门工作地点：上海闵行区紫竹科学园区。
                        </p>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <footer id="mart-footer">
        <div id="simple-footer">
      <div class="footer-container">
        <div class="site">
          <div class="brand">
            <a href="/" target="_blank">
              <div
                style="
                  display: inline-block;
                  font-size: 26px;
                  font-weight: 400;
                  float: left;
                  line-height: 21px;
                  color: #fff;
                "
              >
                汉迅
              </div>
            </a>
          </div>
          <div>
            Copyright
            <span id="foot_current_year">2021</span>
            重庆市汉迅实业
            <a href="">备案号</a>
          </div>
        </div>
      </div>
    </div>
    </footer>
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
import topNav from "../components/TopNav.vue";
export default {
  components: {
    topNav,
  },
  data() {
    return {
      info: [
        {
          title: "图书管理系统长期维护",
          number: "No.27890",
          status: "招募中",
          type: "开发工程师",
          skills: [
            "后端开发",
            "全栈开发",
            "C#",
            "ASP.NET",
            "微信开发",
            "网站开发",
            "硬件驱动",
            "微信小程序",
          ],
          money: "50,000",
          webType: "Web网站",
          circle: "365天",
          member: "9",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
  color: #333;
  background: #f0f2f5;
  line-height: 1.5;
  overflow-x: hidden;
  font-size: 14px;
  .view-container {
    padding-top: 64px;
    min-height: 600px;
    padding-bottom: 70px;
    #mart-reward-detail {
      max-width: 980px;
      margin: 0 auto;
      position: relative;
      .content {
        margin: 28px auto 0;
        padding-bottom: 50px;
        background: #fff;
        min-height: 500px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        font-size: 14px;
        color: #333;
        border-radius: 4px;
        .reward-title {
          padding: 30px 25px;
          background: #f7fafc;
          border-bottom: 1px solid #ededed;
          border-top: 1px solid #fff;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          height: 140px;
          .title-row {
            min-height: 40px;
            display: -webkit-box;
            display: flex;
            display: -webkit-flex;
            .title {
              font-size: 28px;
              color: #2d3238;
              word-break: break-all;
            }
            .reward-no {
              border-radius: 3px;
              background-color: #8796a8;
              color: #fff;
              font-size: 20px;
              padding: 8px;
              margin-left: 26px;
              height: 25px;
              line-height: 25px;
            }
            .status {
              font-size: 16px;
              -webkit-box-flex: 1;
              flex-grow: 1;
              -webkit-flex-grow: 1;
              white-space: nowrap;
              text-align: right;
              margin-top: 4px;
            }
            .pull-right {
              float: right;
            }
          }
          .desc-row {
            margin-top: 15px;
            height: 30px;
            .role-type {
              font-size: 14px;
              line-height: 28px;
              .type {
                float: left;
              }
              .reward-type-skill-top {
                height: 22px;
                border-radius: 2px;
                background-color: #e6f7ff;
                border: 1px solid #91d5ff;
                color: #1890ff;
                font-size: 12px;
                float: left;
                margin-left: 15px;
                text-align: center;
                line-height: 22px;
                padding: 1px 7px;
              }
            }
          }
          .detail-row {
            margin-top: 20px;
            clear: left;
            .detail-span:first-child {
              padding-left: 0;
            }
            .border-right {
              border-right: 1px solid #d9d9d9;
            }
            .detail-span {
              float: left;
              padding: 0 14px;
              color: #2d3238;
              font-size: 14px;
            }
            .darker {
              color: #979fa8;
              margin-right: 8px;
            }
          }
        }
        .reward-content {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
      .mart-button {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin: 0 7px;
      }
      .blue {
        color: #fff;
        background: #4289db;
      }
      .btn,
      .mart-button,
      .mart-status {
        border: none;
        outline: 0;
        padding: 8px 20px;
        font-size: 13px;
        transition: background 0.5s cubic-bezier(0, 0.98, 0.68, 0.92);
      }
      section {
        padding: 0 60px 50px;
        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          padding-top: 2rem;
        }
        .description {
          font-size: 14px;
          color: #333;
          line-height: 23px;
          word-wrap: break-word;
        }
        p {
          margin-bottom: 0.8em;
        }
      }
    }
  }
  #simple-footer {
    background: #1f2d3d;
    color: #8796a8;
    .footer-container {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding-top: 17.5px;
      padding-bottom: 17.5px;
      .site {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        .brand {
          margin-right: 1rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          a{
            margin-right: 1rem;
            display: inline-block;
            font-size: 0;
            color: #8796a8;
          }
        }
      }
    }
  }
  .footer-container {
    box-sizing: border-box;
    width: 100%;
    max-width: 1140px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
  }
  a{
    color: #8796a8;
    text-decoration: none;
  }
}
.typo p{
    color: #464b52;
    line-height: 28px;
}
.status-2 {
  color: #65c279;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: table;
}
::after,
::before {
  box-sizing: border-box;
}
.right {
  float: right;
}
h2 {
  font-weight: 400;
  padding: 0;
  margin: 0;
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