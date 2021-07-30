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
              <li style="color: #8e9297">汉迅测试</li>
              <!-- <li></li> -->
            </ul>
          </div>
          <div class="wrapper flex-box flex-direction-row">
            <left-menu></left-menu>
            <div class="info form-container">
              <div class="box">
                <hr class="head-line" />
                <div class="label">
                  <p class="head">
                    请您认真阅读
                    <a href="">《汉迅帮助中心》</a>
                    ，了解作为开发者如何规范地在码市平台上参与项目，然后完成以下测试问卷
                  </p>
                  <p class="head">
                    说明：测试中所指的“开发者”包括产品经理、项目顾问、UI
                    设计师、软件工程师、测试工程师。“开发者”是一个统称。
                  </p>
                </div>
                <form action="" class="submit-form" method="POST" size="10">
                  <input type="hidden" name="answer" />
                  <section
                    v-for="(item, index) in questionList"
                    :key="index"
                    class="question"
                    data-question-id="item.id"
                  >
                    <p class="question-title">
                      <em>{{ index * 1 + 1 }}.</em>
                      {{ item.title }}
                    </p>
                    <ul class="question-options enable-answer">
                      <li @click="chose"
                        v-for="(x, y) in item.answerList"
                        :key="y"
                        :class="touch ? 'answered' : ''"
                        :data-question="item.id"
                        :data-option="x.option"
                        :data-question-type="item.type"
                      >
                        {{ x.content }}
                      </li>
                    </ul>
                  </section>
                  <div id="result">
                    <section class="form item align-center">
                      <button
                        class="sub-button mart-button btn-with-shadow"
                        style="submit"
                      >
                        提交答案
                      </button>
                    </section>
                  </div>
                </form>
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
      questionList: [
        {
          title: "（多选）以下哪些描述是正确的？",
          id: "23",
          type: "1",
          answerList: [
            {
              content:
                "A．开发者碰到自身加班或个人事务，可以随意地延期项目交付",
              option: "91",
            },
            {
              content:
                "B．开发者作为服务方，跟需求方沟通应该态度友好，专业，并且对需求方的反馈及时响应",
              option: "94",
            },
            {
              content:
                "C．开发者应该尊重参与项目的承诺，个人因素导致的延期应该尽量克服",
              option: "97",
            },
            {
              content: "D．兼职开发者有义务适当地加班以完成承诺任务",
              option: "100",
            },
          ],
        },
        {
          title:
            "（多选）当开发者在码市上接单成功，开发者以下哪些行为是正确的？",
          id: "24",
          type: "1",
          answerList: [
            { content: "A．快速理解并与需求方确认项目需求文档", option: "103" },
            {
              content: "B．主动联系需求方，共同商讨划分项目排期",
              option: "106",
            },
            {
              content: "C．协助需求方审核项目排期，并完成阶段资金的托管",
              option: "109",
            },
            { content: "D．等待需求方推动项目", option: "112" },
          ],
        },
        {
          title: "项目进入开发中，下述哪一项行为是正确的？",
          id: "25",
          type: "0",
          answerList: [
            {
              content:
                "A．只要跟需求方谈好了，不管有没有托管项目款都可以开始开发",
              option: "115",
            },
            { content: "B．需求方不问不需要主动沟通更新进度", option: "118" },
            {
              content:
                "C．开发者每天将代码提交至 Coding 代码仓库，或者将文档，设计稿等产出物上传至 Coding 文件",
              option: "121",
            },
            {
              content: "D．不需测试即可提交验收，让需求方自己测",
              option: "124",
            },
          ],
        },
        {
          title: "以下关于项目流程中阶段划分功能的使用，正确的是？",
          id: "26",
          type: "0",
          answerList: [
            {
              content:
                "A．项目排期更新至码市后，不管阶段资金是否托管，直接开始实质的开发工作",
              option: "127",
            },
            {
              content: "B．直接在 QQ 聊天里让需求方确认排期即开始动工",
              option: "130",
            },
            {
              content:
                "C．和需求方沟通好需求并划分项目阶段计划，更新在码市的项目状态中",
              option: "133",
            },
            {
              content:
                "D．当完成某个阶段后，直接 QQ / 电话告诉需求方即可，不需要在码市上点击交付",
              option: "136",
            },
          ],
        },
        {
          title: "（多选）在码市接项目，关于收费问题以下说法正确的是？",
          id: "27",
          type: "1",
          answerList: [
            {
              content: "A．码市对个人开发者收取总项目金额的 10% 服务费",
              option: "139",
            },
            {
              content:
                "B．码市对团队开发方实行会员等级不同享受免费或者减免服务费措施",
              option: "142",
            },
            { content: "C．开发者/团队报名项目不需要收取费用", option: "145" },
            { content: "D．将代码托管至 Coding 代码库", option: "148" },
          ],
        },
        {
          title: "（多选）以下哪些有利于在码市中提高项目接单成功率？",
          id: "28",
          type: "1",
          answerList: [
            {
              content: "A．看到项目招募，没必要看相关信息，先报名再说",
              option: "151",
            },
            {
              content:
                "B．完善个人资料，梳理个人工作经历和项目经验亮点，认真填写报名信息",
              option: "154",
            },
            {
              content: "C．认真挑选合适的项目，确定与自己的技能匹配再报名项目",
              option: "157",
            },
            {
              content:
                "D．根据项目内容提前梳理项目需求，以便于需求方沟通时有的放矢",
              option: "160",
            },
          ],
        },
        {
          title:
            "（多选）在开发过程中，需求方提出新增需求，开发者做法正确的是？",
          id: "29",
          type: "1",
          answerList: [
            {
              content:
                "A．评估工作量和合理性后，与需求方沟通确认是否需要增加预算和延长工期",
              option: "163",
            },
            {
              content: "B．在 Coding 项目中记录需求更改的内容，留存文档",
              option: "166",
            },
            {
              content:
                "C．与需求方达成一致意见后，请需求方在平台订单上提出修改的请求",
              option: "169",
            },
            { content: "D．含糊对待需求方的要求，能拖就拖", option: "172" },
          ],
        },
        {
          title: "对于需求方在验收时提出的反馈，错误的是？",
          id: "30",
          type: "0",
          answerList: [
            {
              content: "A．必要时，逐条列出反馈点并与需求方沟通",
              option: "175",
            },
            {
              content:
                "B．对反馈点汇总整理，并在 Coding 项目中建立任务并设定截止日期",
              option: "178",
            },
            {
              content: "C．随便看看就确定，到时排期计划对不上再提反馈",
              option: "181",
            },
            { content: "D．对反馈点分类整理，并划分优先级", option: "184" },
          ],
        },
        {
          title:
            "（多选）当开发者与需求方确定排期计划时，以下哪些做法是正确的？",
          id: "31",
          type: "1",
          answerList: [
            {
              content: "A．认真评估排期的可行性，并与需求方主动沟通",
              option: "187",
            },
            {
              content: "B．根据项目类型，划分排期时考虑是否易于验收",
              option: "190",
            },
            {
              content: "C．随便看看就确定，到时排期计划对不上再提反馈",
              option: "193",
            },
            { content: "D．排期中列明每一阶段的内容和截止日期", option: "196" },
          ],
        },
        {
          title:
            "碰到需求不明确、资源没到位或个人原因可能导致的交付延期，开发者需要怎么做？",
          id: "32",
          type: "0",
          answerList: [
            { content: "A．提前与需求方沟通申请延期", option: "199" },
            {
              content: "B．等到需求方问起成果，才告知需要延期交付",
              option: "202",
            },
            {
              content: "C．把这阶段的任务直接并到下阶段一起提交",
              option: "205",
            },
            {
              content: "D．资源没到位不是自身的问题，被动响应等资源",
              option: "208",
            },
          ],
        },
      ],
      touch: false,
    };
  },
  methods:{
    chose(e){
      console.log(e.target);
    }
  }
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
      .info {
        margin-left: 10px;
        margin-bottom: 40px;
        padding-bottom: 30px;
        background: #fff;
        min-height: 40rem;
        box-shadow: 0 1px 2px rgba(183, 195, 192, 0.95);
        font-size: 14px;
        color: #333;
        .box {
          padding-top: 60px;
          // max-width: 540px;
          padding: 60px 6rem 0;
          margin: 0 auto;
          hr.head-line {
            height: 1px;
            width: 100%;
            box-sizing: border-box;
            border: 0;
            margin-bottom: 20px;
            padding: 0;
            border-top: 1px solid #d7d8d7;
            display: inline-block;
          }
          div.label {
            margin-bottom: 20px;
          }
          p.head {
            color: grey;
            margin-bottom: 20px;
            a {
              color: #2d59a2;
            }
          }
          .form {
            position: relative;
          }
        }
        .question {
          margin-bottom: 30px;
          padding-bottom: 30px;
          .question-title {
            font-size: 13px;
            line-height: 1.5;
            margin-bottom: 14px;
            color: #474b48;
            font-weight: 700;
            em {
              font-style: normal;
              margin-right: 8px;
            }
          }
          .question-options {
            li {
              font-size: 13px;
              color: grey;
              line-height: 26px;
              background: #f5f5f5;
              padding: 8px 20px;
              border: 1px solid #e8e8e8;
              border-top: 1px inset rgba(232, 232, 232, 0.16);
              border-radius: 3px;
              margin-bottom: 7px;
              box-shadow: 0 1px 0 0 #f1e8e8, inset 0 2px 0 0 #fff;
              cursor: pointer;
              -webkit-transition: all 0.5s cubic-bezier(0, 1.06, 0.92, 0.92);
              transition: all 0.5s cubic-bezier(0, 1.06, 0.92, 0.92);
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
form,
.mart-button {
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
.form {
  overflow: hidden;
  border-radius: 4px;
  max-width: 980px;
  margin: 0 auto;
  section {
    padding-bottom: 30px;
  }
}
li,
ul {
  list-style: none;
  padding: 0;
}
.align-center {
  text-align: center;
}
.btn-with-shadow {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
}
.sub-button {
  padding: 9px 27px;
  font-size: 18px;
  background: #4289db;
  border-radius: 30px;
  color: #fff;
}
.mart-button {
  border: none;
  outline: 0;
  transition: background 0.5s cubic-bezier(0, 0.98, 0.68, 0.92);
}
</style>