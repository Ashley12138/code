<template>
  <div class="main-container">
    <header id="mart-header" class="transparent">
      <div id="top-menu">
        <div class="container clearfix">
          <a href="/" class="logo clearfix">
            <div
              style="
                display: inline-block;
                font-size: 35px;
                font-weight: bold;
                float: left;
                line-height: 64px;
                padding-left: 15px;
                color: #fff;
              "
            >
              汉迅
            </div>
          </a>
          <div style="position: relative">
            <ul class="nav">
              <li>
                <a href="/find">找项目</a>
              </li>
              <li>
                <a href="/Proto"
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
                    <a href="/Question" target="_blank">常见问题</a>
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
      </div>
    </header>
    <div class="view-container detailed-footer transparent">
      <div id="mart-developers">
        <div class="bx-wrapper" style="max-width: 100%">
          <div
            class="bx-viewport"
            style="
              width: 100%;
              overflow: hidden;
              position: relative;
              height: 574px;
            "
          >
            <section id="banner" style="width: auto; position: relative">
              <div class="banner-deposit">
                <div class="index-grid index-top">
                  <div class="deposit-content">
                    <div class="left-zone">
                      <h2 class="title">
                        汉迅保证金计划，
                        <br />
                        诚信交易，百分保障！
                      </h2>
                      <div class="desc">选择保证金标识服务方，获得更高保障</div>
                      <div class="btn">
                        <a href="">
                          <button>了解更多</button>
                        </a>
                      </div>
                    </div>
                    <div class="right-zone">
                      <img
                        src="https://dn-coding-net-production-pp.codehub.cn/d5362461-cffc-42d9-8fbc-f236db2ac12c.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section id="step">
          <div class="section-container">
            <div class="header">
              <div class="title">来汉迅，开启自由职业之路</div>
            </div>
            <div class="steps">
              <div class="step">
                <div class="step-image">
                  <img
                    src="https://codemart.com/images/developers/step-1.svg"
                    alt=""
                  />
                </div>
                <div class="step-title">认证成为开发者</div>
                <div class="step-desc">
                  <p>
                    <span class="highlight">5</span>
                    分钟完善技能与经验
                  </p>
                  <p>
                    <span class="highlight">1</span>
                    分钟完成身份认证
                  </p>
                </div>
              </div>
              <div class="line"></div>
              <div class="step">
                <div class="step-image">
                  <img
                    src="https://codemart.com/images/developers/step-2.svg"
                    alt=""
                  />
                </div>
                <div class="step-title">报名项目</div>
                <div class="step-desc">
                  <p>
                    项目均价
                    <span class="highlight">1.53</span>
                    万元
                  </p>
                  <p>每日百余个项目正在招募</p>
                </div>
              </div>
              <div class="line"></div>
              <div class="step">
                <div class="step-image">
                  <img
                    src="https://codemart.com/images/developers/step-3.svg"
                    alt=""
                  />
                </div>
                <div class="step-title">确认合作</div>
                <div class="step-desc">
                  <p>
                    平均耗时
                    <span class="highlight">6.78</span>
                    天
                  </p>
                  <p>即可进入开发阶段</p>
                </div>
              </div>
              <div class="line"></div>
              <div class="step">
                <div class="step-image">
                  <img
                    src="https://codemart.com/images/developers/step-4.svg"
                    alt=""
                  />
                </div>
                <div class="step-title">获取收益</div>
                <div class="step-desc">
                  <p>2016收益排行榜第一的开发者</p>
                  <p>
                    在码市赚取了
                    <span class="highlight">15.21</span>
                    万元！
                  </p>
                </div>
              </div>
            </div>
            <div class="button-container">
              <a href="" class="start-button">开启自由职业之路</a>
            </div>
          </div>
        </section>
        <section class="developer-vip">
          <div class="developer-vip-content">
            <div class="title">保证金计划和会员体系</div>
            <div class="compare">
              <div class="compare-content">
                <div
                  class="compare-box"
                  v-for="(item, index) in compareList"
                  :key="index"
                >
                  <div class="compare-box-content">
                    <div class="compare-header clearfix">
                      <div class="icon" v-for="(x, y) in item.imgs" :key="y">
                        <img :src="x.img" alt="" />
                        <span>{{ x.note }}</span>
                      </div>
                      <strong>{{ item.title }}</strong>
                    </div>
                    <div class="compare-diff">
                      <ul>
                        <li v-for="(a, b) in item.list" :key="b">
                          <svg
                            t="1624073737160"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2393"
                            width="18"
                            height="18"
                          >
                            <path
                              d="M221.866667 467.7632A57.002667 57.002667 0 0 1 303.786667 467.626667l139.4688 142.677333 276.821333-285.832533a57.070933 57.070933 0 0 1 81.851733-0.2048 60.279467 60.279467 0 0 1 0.2048 84.104533l-314.026666 324.4032a62.0544 62.0544 0 0 1-88.951467 0.2048l-176.9472-180.906667a60.416 60.416 0 0 1-0.2048-84.241066z"
                              p-id="2394"
                            ></path>
                          </svg>
                          {{ a }}
                        </li>
                      </ul>
                    </div>
                    <div class="compare-footer">
                      <a href="">
                        <button>马上加入</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ranking">
          <div class="section-container clearfix">
            <h1>码士排行榜</h1>
            <div class="types">
              <a href="#income" :class="income?'type active':'type'" data-index="0" @click="changeTab($event)">收入榜</a>
              <a href="#evalution" :class="evalution?'type active':'type'" data-index="1" @click="changeTab($event)">好评榜</a>
              <a href="#diligent" :class="diligent?'type active':'type'" data-index="2" @click="changeTab($event)">勤奋榜</a>
            </div>
            <ul
              id="income"
              class="ranking-list income clearfix"
              style="display: flex"
            >
              <ol
                class="ranking-item"
                v-for="(item, index) in incomeList"
                :key="index"
              >
                <div class="ranking-content">
                  <div class="order">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="avatar">
                    <img :src="item.avatar" alt="" />
                  </div>
                  <div class="intro">
                    <div class="name">{{ item.name }}</div>
                    <div class="info">
                      <span>最擅长：</span>
                      <span>参与项目：{{ item.pronum }}</span>
                      <span>城市：{{ item.city }}</span>
                    </div>
                    <div class="detail">
                      总收入
                      <strong class="detail-pink">￥{{ item.detail }}</strong>
                    </div>
                  </div>
                </div>
              </ol>
            </ul>
            <!-- <ul
              id="evaluation"
              class="ranking-list evaluation clearfix"
              style="display: flex"
            >
              <ol
                class="ranking-item"
                v-for="(item, index) in incomeList"
                :key="index"
              >
                <div class="ranking-content">
                  <div class="order">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="avatar">
                    <img :src="item.avatar" alt="" />
                  </div>
                  <div class="intro">
                    <div class="name">{{ item.name }}</div>
                    <div class="info">
                      <span>最擅长：</span>
                      <span>参与项目：{{ item.pronum }}</span>
                      <span>城市：{{ item.city }}</span>
                    </div>
                    <div class="detail">
                      总收入
                      <strong class="detail-pink">￥{{ item.detail }}</strong>
                    </div>
                  </div>
                </div>
              </ol>
            </ul> -->
          </div>
        </section>
        <section id="region">
          <div class="section-container">
            <h1>开发者地域分布</h1>
            <h3>（单位：人）</h3>
            <div class="region-container">
              <div id="region-map">
                <img
                  src="https://codemart.com/images/developers/region-map.svg"
                  alt=""
                />
              </div>
              <div id="region-chart">
                <div class="count-title">区域人数分布</div>
                <div class="regions">
                  <div
                    class="region"
                    v-for="(item, index) in regionList"
                    :key="index"
                  >
                    <span>
                      <svg
                        t="1624092147317"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3194"
                        width="15"
                        height="15"
                      >
                        <path
                          d="M192 512a320 320 0 1 0 640 0 320 320 0 1 0-640 0z"
                          fill="#2280EE"
                          p-id="3195"
                        ></path>
                      </svg>
                      {{ item.area }} </span
                    >{{ item.number }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- <section id="technique">
          <div class="section-container border-bottom">
            <h1>开发者擅长技术分析</h1>
            <h3>（单位：人）</h3>
            <div class="chart-container">
              <div
                id="technique-chart"
                style="
                  user-select: none;
                  position: relative;
                  background: transparent none repeat scroll 0% 0%;
                "
              >
                <div
                  style="
                    position: relative;
                    overflow: hidden;
                    width: 946px;
                    height: 390px;
                    padding: 0px;
                    margin: 0px;
                    border-width: 0px;
                    cursor: default;
                  "
                >
                <line-echarts></line-echarts>
                  <div id="charts1"></div>
                </div>
              </div> 
            </div>
          </div>
        </section> -->
        <section id="type">
          <div class="section-container">
            <h1>项目类型资源分布</h1>
            <h3>（单位：人）</h3>
            <div class="types">
              <div class="type" v-for="(item, index) in typeList" :key="index">
                <div class="type-image">
                  <img :src="item.imgurl" alt="" />
                </div>
                <div class="type-number">{{ item.number }}</div>
                <div class="type-name">{{ item.type }}</div>
              </div>
            </div>
          </div>
        </section>
        <section id="join">
          <div class="section-container">
            <div class="header">
              <div class="title">成为开发者，即可赚取收益！</div>
            </div>
            <div class="button-container">
              <a href="/login" class="start-button">加入码市</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script>
// import LineEcharts from '../components/Echarts'
import bottomFooter from "../components/BottomFooter.vue";
export default {
  components: {
    // LineEcharts
    bottomFooter,
  },
  data() {
    return {
      list: false,
      compareList: [
        {
          imgs: [
            {
              img: "https://dn-coding-net-production-pp.codehub.cn/76d5d00d-d5d0-47f4-aaea-43c36c48094e.png",
              note: "保证金计划",
            },
          ],

          title: "加入保证金计划可享有：",
          list: [
            "诚信开发者专属icon 高亮置顶",
            "提高信誉度，更直接的获得需求方的信任",
            "保证金可随时缴纳随时退回",
          ],
        },
        {
          imgs: [
            {
              img: "https://dn-coding-net-production-pp.codehub.cn/4028dbed-526e-4946-968f-0f325a53fc0b.png",
              note: "金牌团队",
            },
            {
              img: "https://dn-coding-net-production-pp.codehub.cn/05c5c0e4-661c-4577-9662-8a855cddf098.png",
              note: "银牌团队",
            },
            {
              img: "https://dn-coding-net-production-pp.codehub.cn/36337fd4-db83-4be2-ab8f-582a7eb831d8.png",
              note: "普通团队",
            },
          ],

          title: "加入会员体系可获得：",
          list: [
            "平台服务费全免",
            "不限报名项目数量",
            "可主动查看需求方联系方式",
          ],
        },
      ],
      incomeList: [
        {
          img: "https://codemart.com/images/number/1.png",
          avatar:
            "http://coding-net-public-file.codehub.cn/bb369326-2eb6-48b7-ba33-ddfd77aec690.",
          name: "优枫科技",
          pronum: "39",
          city: "北京市",
          detail: "1,419504.00",
        },
        {
          img: "https://codemart.com/images/number/2.png",
          avatar:
            "https://dn-coding-net-production-pp.codehub.cn/29402486-bf33-4cb4-9ea2-ab4bae89bee2.png",
          name: "拼码",
          pronum: "36",
          city: "南京市",
          detail: "1,155,500.00",
        },
        {
          img: "https://codemart.com/images/number/3.png",
          avatar:
            "https://dn-coding-net-public-file.codehub.cn/d8defb64-2710-4d0b-ab75-9c7487626220.",
          name: "张剑锋",
          pronum: "14",
          city: "上海市",
          detail: "946,200.00",
        },
        {
          img: "https://codemart.com/images/number/4.png",
          avatar:
            "http://assets.codemart.com/uploads/e65f6fe8e7db96c4c11881c25fe93436.png",
          name: "花鲤在线(深圳)信息技术服务有限公司",
          pronum: "7",
          city: "深圳市",
          detail: "910,443.00",
        },
        {
          img: "https://codemart.com/images/number/5.png",
          avatar:
            "http://coding-net-public-file.codehub.cn/6cb6096f-ed69-43dd-b757-845be640bfaf.",
          name: "零云lyunweb.com",
          pronum: "28",
          city: "南京市",
          detail: "659,130.00",
        },
        {
          img: "https://codemart.com/images/number/6.png",
          avatar:
            "https://dn-coding-net-production-static.codehub.cn/cb6b9c4c-2f22-4aec-a1db-7d373371c570.jpg?imageMogr2/auto-orient/format/jpeg/crop/!128x128a0a0",
          name: "良码科技WeChat: MeIsLZHua",
          pronum: "11",
          city: "广州市",
          detail: "606,500.00",
        },
        {
          img: "https://codemart.com/images/number/7.png",
          avatar: "https://coding.net/static/fruit_avatar/Fruit-20.png",
          name: "霍华明",
          pronum: "10",
          city: "上海市",
          detail: "434,500.00",
        },
        {
          img: "https://codemart.com/images/number/8.png",
          avatar:
            "https://coding-net-public-file.codehub.cn/010dfc6b-eef8-4f41-be63-074d817a2fc7.",
          name: "犇梦科技",
          pronum: "10",
          city: "石家庄市",
          detail: "408,810.00",
        },
        {
          img: "https://codemart.com/images/number/9.png",
          avatar:
            "https://coding-net-public-file.codehub.cn/59cdf88c-1e68-44e5-a40a-91714c26df06.",
          name: "河北全众科技有限公司",
          pronum: "2",
          city: "石家庄市",
          detail: "364,200.00",
        },
        {
          img: "https://codemart.com/images/number/10.png",
          avatar:
            "http://coding-net-public-file.codehub.cn/4971bcbc-6d35-4b6a-b19f-fee126e9ff40.",
          name: "鲸奇网络",
          pronum: "10",
          city: "常州市",
          detail: "363,000.00",
        },
      ],
      regionList: [
        {
          area: "华东地区",
          number: "16,398",
        },
        {
          area: "华南地区",
          number: "9,612",
        },
        {
          area: "华中地区",
          number: "3,573",
        },
        {
          area: "华北地区",
          number: "11,054",
        },
        {
          area: "西北地区",
          number: "1,265",
        },
        {
          area: "西南地区",
          number: "5,201",
        },
        {
          area: "东北地区",
          number: "1,274",
        },
        {
          area: "港澳台地区",
          number: "104",
        },
        {
          area: "海外地区",
          number: "215",
        },
      ],
      option: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      typeList: [
        {
          imgurl: "https://codemart.com/images/developers/type-web.svg",
          number: "21,000+",
          type: "Web网站开发",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-app.svg",
          number: "15,000+",
          type: "APP网站开发",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-wechat.svg",
          number: "12,000+",
          type: "微信应用开发",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-html.svg",
          number: "12,000+",
          type: "HTML5应用开发",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-hardware.svg",
          number: "1,000+",
          type: "开源硬件开发",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-prototype.svg",
          number: "7,000+",
          type: "产品原型设计",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-ui.svg",
          number: "6,000+",
          type: "UI设计",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-data.svg",
          number: "2,800+",
          type: "数据分析开发",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-test.svg",
          number: "3,500+",
          type: "软件测试",
        },
        {
          imgurl: "https://codemart.com/images/developers/type-game.svg",
          number: "1,000+",
          type: "游戏开发",
        },
      ],
      income:true,
      evalution:false,
      diligent:false
    };
  },
  methods: {
    show() {
      this.list = true;
    },
    hidden() {
      this.list = false;
    },
    drawLine() {},
    // 点击不同榜单进行切换
    changeTab(e){
      // console.log(e.target.dataset.index);
      if (e.target.dataset.index==0) {
        this.income=true;
        this.evalution=false;
        this.diligent=false;
      }else if(e.target.dataset.index==1){
        this.income=false;
        this.evalution=true;
        this.diligent=false;
      }else{
        this.income=false;
        this.evalution=false;
        this.diligent=true;
      }
    }
  },
  mounted() {
    // 在mounted中调用初始化函数
    // this.drawLine();
    // // 在函数中获取节点并渲染
    // this.charts1 = this.echarts.init(document.getElementById("charts1"));
    // this.charts1.setOption(this.option);
  },
};
</script>
<style lang="scss" scoped>
* {
  outline: 0;
}
.main-container {
  min-height: 100%;
  position: relative;
  background: #f0f2f5;
  #mart-header {
    position: absolute;
    top: 2rem;
    width: 100%;
    height: 64px;
    z-index: 10002;
    background-color: rgba(0, 0, 0, 0);
    color: #fff !important;
    #top-menu {
      height: 100%;
      padding: 0 28px;
      margin: auto;
      .container {
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
            color: #fff;
            position: relative;
            a {
              cursor: pointer;
              color: #fff;
            }
            a:hover {
              color: #e0e6ed;
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
              font-size: 1rem;
              color: #e0e6ed;
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
              border: 1px solid #fff;
            }
            .publish:hover {
              border: 1px solid #fff;
            }
            .user:hover {
              color: #e0e6ed;
              border: 1px solid #e0e6ed;
              height: 3rem;
              line-height: 3rem;
              text-align: center;
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
  .view-container {
    padding-top: 0;
    min-height: 600px;
  }
  .detailed-footer {
    padding-bottom: 366px;
  }
  #mart-developers {
    .bx-wrapper {
      box-shadow: none;
      border: none;
      background: 0 0;
      margin: 0 auto;
      position: relative;
      padding: 0;
      touch-action: pan-y;
      .bx-viewport {
        max-height: 640px;
        // -webkit-transform: translatez(0);
        #banner {
          max-height: 640px;
          height: calc(100vh - 115px);
          min-height: 41rem;
          z-index: 1000;
          .banner-deposit {
            background: rgba(0, 0, 0, 0)
              url("https://656e-env-iknzbddq-1254055692.tcb.qcloud.la/uploads/1599828218726.png")
              no-repeat scroll center center / cover;
            float: none;
            list-style: outside none none;
            position: absolute;
            width: 1235px;
            z-index: 50;
            display: block;
            max-width: 100%;
            height: 100%;
            padding: 0 1rem;
            .index-grid {
              height: 100%;
              width: 860px;
              max-width: 100%;
              margin: 0 auto;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              .deposit-content {
                padding: 8rem 1rem 2rem 1rem;
                display: table;
                max-width: 100%;
                width: 100%;
                .left-zone {
                  text-align: left;
                  display: table-cell;
                  vertical-align: middle;
                  .title {
                    text-align: left;
                    font-size: 2.5rem;
                    color: #fff;
                    line-height: 3.86rem;
                    margin-bottom: 1.5rem;
                  }
                  .desc {
                    color: #fff;
                    letter-spacing: 0.6px;
                    font-size: 1.2rem;
                    line-height: 1.7rem;
                    margin-bottom: 2.5rem;
                    font-weight: 300;
                  }
                  .btn {
                    padding: 0;
                    border: none;
                    outline: 0;
                    border-radius: 18px;
                    font-size: 13px;
                    transition-property: background;
                    transition-duration: 0.5s;
                    transition-timing-function: cubic-bezier(
                      0,
                      0.98,
                      0.68,
                      0.92
                    );
                    transition-delay: 0s;
                    cursor: pointer;
                    a {
                      color: #2d59a2;
                      text-decoration: none;
                      button {
                        background: #ebba59;
                        border-radius: 4px;
                        padding: 0.6rem 2.5rem;
                        outline: 0;
                        border: none;
                        color: #364151;
                        font-size: 1rem;
                        letter-spacing: 0.5px;
                        cursor: pointer;
                      }
                    }
                  }
                }
                .right-zone {
                  text-align: right;
                  display: table-cell;
                  vertical-align: middle;
                  img {
                    width: 28rem;
                    max-width: 100%;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
        section {
          background: #fff;
        }
      }
    }
    section {
      background: #fff;
    }
    #step {
      .section-container {
        padding: 5rem 0 4rem 0;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 95%;
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
        .header {
          display: flex;
          -webkit-box-direction: normal;
          flex-direction: row;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-orient: horizontal;
          .title {
            color: #273444;
            font-weight: 400;
            text-align: center;
            font-size: 2.5rem;
          }
        }
        .steps {
          margin-top: 4.5rem;
          display: flex;
          -webkit-box-direction: normal;
          flex-direction: row;
          width: 100%;
          max-width: 1009px;
          -webkit-box-pack: justify;
          justify-content: space-between;
          -webkit-box-orient: horizontal;
          .step {
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-direction: normal;
            .step-image {
              height: 130px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .step-title {
              font-size: 1.2rem;
              font-weight: lighter;
              margin: 22.5px auto 7px;
              color: #3c4858;
            }
            .step-desc {
              color: #8796a8;
              text-align: center;
            }
          }
          .line {
            width: 45px;
            height: 74px;
            border: none;
            border-bottom: 2px dashed #cad3de;
          }
        }
        .button-container {
          margin: 4rem auto 0;
          .start-button {
            width: 218px;
            height: 49px;
            line-height: 49px;
            display: block;
            background: #4289dc;
            color: #fff;
            text-align: center;
            border-radius: 4px;
            margin: auto;
          }
        }
      }
    }
    .highlight {
      color: #ff709f;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .developer-vip {
      padding: 5rem 0 4rem;
      .developer-vip-content {
        max-width: 1112px;
        margin: 0 auto;
        .title {
          font-weight: 400;
          text-align: center;
          font-size: 2.5rem;
          color: #273444;
          margin-bottom: 2rem;
        }
        .compare {
          padding: 2rem 0;
          .compare-content {
            display: table;
            table-layout: fixed;
            width: 100%;
            .compare-box {
              display: table-cell;
              vertical-align: top;
              height: 100%;
              width: 50%;
              .compare-box-content {
                margin: 1rem 1rem 1rem 4rem;
                border: 1px solid #e0e6ed;
                border-radius: 8px;
                padding: 1.5rem;
                .compare-header {
                  .icon {
                    text-align: center;
                    float: right;
                    margin: 0 0.2rem;
                    font-family: CodingHome;
                    font-style: normal;
                    font-weight: 400;
                    font-variant: normal;
                    line-height: 1;
                    text-transform: none;
                    img {
                      width: 2.86rem;
                      height: 2.86rem;
                      display: block;
                      margin: 0.14rem auto;
                    }
                    span {
                      display: block;
                      font-size: 12px;
                      color: #727f8f;
                    }
                  }
                  strong {
                    font-size: 1.2rem;
                    line-height: 2rem;
                    font-weight: 400;
                    color: #273444;
                  }
                }
                .compare-diff {
                  ul {
                    padding: 0.5rem 0;
                    margin: 0 0 0.5rem;
                    li {
                      list-style: none;
                      color: #8796a8;
                      font-size: 1rem;
                      line-height: 2rem;
                    }
                  }
                }
                .compare-footer {
                  a {
                    color: #2d59a2;
                    button {
                      font-size: 1rem;
                      padding: 0.4rem 1rem;
                      text-align: center;
                      outline: 0;
                      border: none;
                      background: #4289dc;
                      border-radius: 4px;
                      color: #fff;
                      cursor: pointer;
                      -webkit-transition: background 0.25s
                        cubic-bezier(0.1, 0.56, 0.81, 0.41);
                      transition: background 0.25s
                        cubic-bezier(0.1, 0.56, 0.81, 0.41);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    #ranking {
      background: #f1f2f5;
      padding: 50px 0 70px;
      box-sizing: border-box;
      .section-container {
        width: 95%;
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
        h1 {
          font-size: 2rem;
        }
        .types {
          margin-top: 13px;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-direction: normal;
          .active {
            color: #273444 !important;
          }
          .type {
            font-size: 14px;
            line-height: 21px;
            color: #8796a8;
          }
          .type:not(:first-child) {
            margin-left: 35px;
          }
        }
        .ranking-list {
          margin-top: 30px;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          flex-wrap: wrap;
          align-content: center;
          height: 600px;
          .ranking-item {
            display: inline-flex;
            width: 50%;
            padding: 0 1rem;
            margin: 0 0 0.86rem;
            .ranking-content {
              display: table;
              box-sizing: border-box;
              background: #fff;
              border-radius: 5px;
              width: 100%;
              padding: 1.28rem 1.6rem;
              .order {
                padding-right: 0.7rem;
                width: 3rem;
                text-align: center;
                display: table-cell;
                vertical-align: middle;
                img {
                  display: inline-block;
                  width: 26px;
                  height: 32px;
                }
              }
              .avatar {
                width: 4.57rem;
                padding-right: 0.7rem;
                display: table-cell;
                vertical-align: middle;
                img {
                  width: 4.57rem;
                  height: 4.57rem;
                  border-radius: 100%;
                }
              }
              .intro {
                display: table-cell;
                vertical-align: middle;
                .name {
                  font-size: 1rem;
                  line-height: 1.43rem;
                  margin-bottom: 0.6rem;
                  color: #273444;
                }
                .info {
                  font-size: 12px;
                  color: #8796a8;
                  margin-bottom: 0.3rem;
                  span {
                    margin-right: 1.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal !important;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                  }
                }
                .detail {
                  font-size: 12px;
                  line-height: 17px;
                  color: #8796a8;
                  .detail-pink {
                    color: #ff709f;
                  }
                }
              }
            }
          }
        }
      }
    }
    #region {
      background: #3c4858;
      .section-container {
        padding: 42px 0 35px;
        width: 95%;
        max-width: 1140px;
        margin: 0 auto;
        h1 {
          color: #f9fafc;
        }
        h3 {
          margin-top: 7px;
          color: #cad3de;
        }
        .region-container {
          margin: 2.5rem auto 0;
          width: 100%;
          max-width: 777px;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -webkit-flex-direction: row;
          flex-direction: row;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          -webkit-justify-content: space-around;
          justify-content: space-around;
          #region-map {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            width: 70%;
            max-width: 530px;
            img {
              width: 100%;
            }
          }
          #region-chart {
            width: 154px;
            color: #fff;
            .count-title {
              text-align: center;
              font-weight: 700;
              font-size: 1rem;
            }
            .regions {
              margin-top: 14px;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -webkit-flex-direction: column;
              flex-direction: column;
              .region {
                font-size: 0.9rem;
                margin-top: 7px;
                span {
                  width: 74%;
                  display: inline-block;
                }
              }
            }
          }
        }
      }
    }
    #technique {
      .section-container {
        padding: 3.5rem 0 1rem;
        width: 95%;
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
        h1 {
          color: #3c4858;
          font-size: 2rem;
        }
        h3 {
          margin-top: 7px;
          color: #273444;
          font-size: 1rem;
        }
      }
      .border-bottom {
        border-bottom: 1px solid #e0e6ed;
      }
    }
    #type {
      .section-container {
        padding: 3rem 0;
        width: 92%;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        h1 {
          color: #3c4858;
          font-size: 2rem;
        }
        h3 {
          margin-top: 7px;
          color: #273444;
          font-size: 1rem;
        }
        .types {
          width: 100%;
          margin: 28px auto 0;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -webkit-flex-direction: row;
          flex-direction: row;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          .type {
            width: 20%;
            height: 210px;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            .type-image {
              width: 63px;
              height: 63px;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
            }
            .type-number {
              font-weight: lighter;
              font-size: 2rem;
              color: #4896f0;
              letter-spacing: 1.2px;
              margin: 21px auto 9px;
            }
            .type-name {
              color: #3c4858;
            }
          }
        }
      }
    }
    #join {
      background: #2b3847;
      .section-container {
        padding: 4rem 0;
        width: 95%;
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
        .header {
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          .title {
            color: #fff;
            font-size: 2.5rem;
          }
        }
        .button-container {
          margin-top: 47px;
          .start-button {
            width: 356px;
            height: 56px;
            line-height: 56px;
            box-shadow: 0 3px 3px 0 rgba(45, 51, 56, 0.2);
            border-radius: 5px;
            display: block;
            background: #4289dc;
            color: #fff;
            text-align: center;
            margin: auto;
          }
        }
      }
    }
  }
  #mart-footer {
    width: 100%;
    bottom: 0;
    position: absolute;
    box-sizing: border-box;
    #detailed-footer {
      background: #273444;
      .footer-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1140px;
        padding: 56px 1rem 70px 1rem;
        margin: 0 auto;
        box-sizing: border-box;
        .section-left {
          display: flex;
          .footer-list-menu-container {
            margin-right: 70px;
          }
        }
        .section-right {
          .footer-list-contact {
            display: inline-block;
            vertical-align: top;
            p:first-child {
              margin-top: 0;
            }
            p {
              color: #8796a8;
              font-size: 1rem;
              margin-top: 1rem;
              .logo {
                height: 30px;
              }
            }
          }
        }
      }
    }
    #simple-footer {
      background: #1f2d3d;
      color: #8796a8;
      .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        max-width: 1140px;
        padding: 17.5px 1rem;
        margin: auto;
        .site {
          display: flex;
          align-items: center;
          .brand {
            display: flex;
            margin-right: 1rem;
            align-items: center;
            a {
              margin-right: 1rem;
              display: inline-block;
              font-size: 0;
              color: #8796a8;
              text-decoration: none;
              img {
                height: 20px;
              }
            }
          }
        }
      }
    }
  }
}
h2,
h1,
h3,
.title {
  font-weight: 400;
  text-align: center;
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
#mart-footer a {
  color: #8796a8;
  text-decoration: none;
}
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
      text-decoration: none;
    }
  }
}
</style>