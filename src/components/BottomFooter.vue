<template>
  <footer id="mart-footer">
    <div id="detailed-footer">
      <div class="footer-container">
        <section class="footer-section section-left">
          <div class="footer-list-menu-container">
            <p class="footer-list-menu-head">关于汉迅</p>
            <ul class="footer-list-menu">
              <li><a href="/about">汉迅介绍</a></li>
              <li><a href="/cases">汉迅案例</a></li>
              <li><a href="/">内容中心</a></li>
            </ul>
          </div>
          <div class="footer-list-menu-container">
            <a href="/help" target="_blank">
              <p class="footer-list-menu-head">帮助</p>
            </a>
            <ul class="footer-list-menu">
              <li><a href="" target="_blank">如何发布项目需求？</a></li>
              <li><a href="" target="_blank">如何为发布的项目需求定价？</a></li>
              <li><a href="" target="_blank">查看更多>></a></li>
            </ul>
          </div>
        </section>
        <section class="footer-section section-right">
          <div class="footer-list-contact">
            <p
              style="
                font-size: 30px;
                font-weight: 400;
                color: #fff;
                margin-top: 0;
              "
            >
              汉迅
            </p>
            <p>0123-11290511</p>
            <p>
              <a href="">yigedizhi@yigeyouxiang.com</a>
            </p>
            <p>周一至周五 9:30-19:00</p>
          </div>
        </section>
      </div>
    </div>
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
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#mart-footer {
  width: 100%;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  #detailed-footer {
    background: #273444;
    .footer-container {
      padding-top: 56px;
      padding-bottom: 70px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      .section-left {
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        .footer-list-menu-container {
          margin-right: 70px;
          .footer-list-menu-head {
            opacity: 0.9;
            color: #eff2f7;
            font-size: 16px;
            line-height: 24px;
          }
          .footer-list-menu {
            margin-top: 1.5rem;
            li {
              margin-top: 1rem;
              a {
                color: #8796a8;
                font-size: 1rem;
                margin-top: 1rem;
              }
            }
          }
        }
      }
      .section-right {
        .footer-list-contact {
          display: inline-block;
          vertical-align: top;
          p {
            color: #8796a8;
            font-size: 1rem;
            margin-top: 1rem;
            a {
              color: #8796a8;
            }
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
  }
}
p {
  padding: 0;
  margin: 0;
}
li,
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>