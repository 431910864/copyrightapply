<template>
  <div class="pageWrapper">
    <header class="header">
      <div class="title">{{title}}</div>
      <div class="tip">
        <span class="merchant">南山版权产业服务中心</span>
        <span class="date">{{date}}</span>
      </div>
    </header>
    <div class="content">
      <div class="section">
        南山版权服务中心是中国版权保护中心与南山区人民政府共同打造的国家级版权综合服务平台，由中华版权代理总公司下属企业——深圳华代产业服务有限公司 （英文名称: Shenzhen Huadai Industry Service Co., Ltd.；简称：深圳华代公司）负责运营。在南山知识产权保护中心开设对外服务窗口，工作流程、服务标准、业务类型全面对接中国版权保护中心，致力于为深圳及粤港澳大湾区的文化创意、科技创新企业提供优质、便捷、全面的版权相关服务。<br />
        中心自成立以来，与国内外多家版权运营服务机构建立良好的合作关系，依托中国版权保护中心的专业、人才优势，迅速组建了一支精通版权业务，熟悉法律、金融知识，富有企业管理、研发设计经验的专家队伍，已为深圳及周边地区众多企业、个人、机构提供优质服务。<br />
        南山版权产业服务中心的主要业务包括版权登记、版权维权、版权交易、版权金融四大板块，为深圳及粤港澳大湾区的创新、创意企业提供从确权、维权到交易运营的一站式版权服务，具体服务项包括：软件著作权登记、作品登记、版权维权咨询、版权交易运营、版权质押融资、版权资产管理、版权数据分析、版权鉴定、版权实务培训、版权政策咨询、版权产业园区孵化运营、科技文化产业投资等。
      </div>
      <img style="width: 100%;margin-top: 20px;margin-bottom: 10px;" :src="require('@/assets/images/c3.png')" />
    </div>
    <div class="content" style="background: #fff; margin-top: .2rem;">
      <div class="items">
        <div class="label">· 发展历程 ·</div>
        <img :src="lineIcon" class="images"/>
      </div>
      <img style="width: 100%;margin-top: 10px;margin-bottom: 10px;" :src="require('@/assets/images/c2.png')" />
      <div class="" style="margin-bottom: .6rem;">南2019年10月11日，中国版权保护中心主任段桂鉴莅临南山版权产业服务中心视察指导，勉励现场工作人员把服务工作做精做细，为企业提供优质高效的本地化版权服务。</div>
      <img style="width: 100%;margin-top: 10px;margin-bottom: 10px;" :src="require('@/assets/images/c4.png')" />
      <div class="" style="margin-bottom: .6rem;"> 2019年10月11日，中国版权保护中心主任段桂鉴莅临南山版权产业服务中心视察指导，勉励现场工作人员把服务工作做精做细，为企业提供优质高效的本地化版权服务。</div>
      <img style="width: 100%;margin-top: 10px;margin-bottom: 10px;" :src="require('@/assets/images/c1.png')" />
      <div class="" style="margin-bottom: .6rem;">2019年11月11日，深圳市副市长黄敏，中国版权保护中心副主任魏红，南山区委书记王强，深圳市市场监督管理局局长邝兵，南山区委副书记、区长黄湘岳等领导共同为南山版权产业服务中心揭牌。</div>
    </div>
<!--    <div class="content">-->
<!--      <div class="section">《南山版权服务中心》是中国版权保护中心与南山区人民政府共同打造的一站式版权综合服务平台，致力于为深圳及粤港澳大湾区的文化创意、科技创新企业提供优质、便捷、全面的版权相关服务。</div>-->
<!--      <div class="section">本中心在深圳南山知识产权保护中心开设对外服务窗口，工作流程、服务标准、业务类型全面对接中华版权代理总公司。</div>-->
<!--    </div>-->

<!--    <div class="content" style="background: #fff; margin-top: .4rem;">-->
<!--      <div class="items">-->
<!--        <div class="label">· 发展优势 ·</div>-->
<!--        <img :src="lineIcon" class="images"/>-->
<!--      </div>-->
<!--      <div class="section" style="margin-bottom: .6rem;">南山版权产业服务中心设立目的是向南山区及其关联业务地区的企业提供全方位、专业化、体系化的版权综合服务, 为南山区文化创意及高新技术繁荣发展提供更加便捷高效的综合性版权服务及核心要素支撑, 有效提升南山区区域创造、运用和保护能力。</div>-->
<!--      <div class="section"> 目前南山版权产业服务中心主要业务为版权登记、版权维权、版权交易、版权金融四大版权相关板块。同时，南山版权产业服务中心每年将会承办各种版权相关培训活动，进一步提升版权人才的专业素质，为版权产业的深度研发和平台、跨行业合作提供人才储备。</div>-->
<!--    </div>-->

    <div class="content" style="background: #fff;  padding: 0;">
      <div class="items">
        <div class="label">· 中心大厅 ·</div>
        <img :src="lineIcon" class="images"/>
      </div>
      <div style="text-align: center;"><img :src="centerIcon1" class="images" /></div>
      <div style="text-align: center;"><img :src="centerIcon2" class="images" /></div>
    </div>

    <div class="content" style="background: #fff; padding: 0;">
      <div class="items">
        <div class="label">· 联系我们 ·</div>
        <img :src="lineIcon" class="images"/>
      </div>
      <div style="margin-bottom: .2rem; padding: 0 .3rem;">
        <div class="">电话：0755-86952852</div>
        <div class="">邮箱：2689183185@qq.com</div>
        <div class="">地址：深圳市南山区粤海街道深圳湾科技生态园</div>
      </div>
      <div style="text-align: center;"><img :src="localtionIcon" class="images" /></div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '南山版权产业服务中心介绍',
        date: '2020-03-11',
        lineIcon: require('@/assets/images/line.png'),
        localtionIcon: require('@/assets/images/localtion.png'),
        centerIcon1: require('@/assets/images/center_1.png'),
        centerIcon2: require('@/assets/images/center_2.png'),
        list: [{
          title: '如何有效防范商标被撤三的风险',
          subtitle: '商标被提撤三！怎么办？',
          img: require('@/assets/images/news.png'),
          date: '2020-03-11',
          read: 462,
          reading: 100,
          content: '通常注册完拿到商标注册证对于商标申请人来说都可以松口气了，但是事实并非如此，注册过的商标如果使用不当的，也会存在一定的风险，尤其随着商标注册越来越便利化，国民品牌意识的觉醒，商标注册量与日俱增，商标一标难求，注册商标被他人以连续三年不使用为由申请撤销的案件越来越多。'
        }]
      }
    },
    mounted() {

    }
  }
</script>

<style lang="less" scoped="scoped">
  .pageWrapper {
    padding: .6rem .2rem .4rem .2rem;
    font-size: .32rem;
    color:#000000;
    min-height: 100vh;
    background: #fff;
    line-height: .6rem;
    .images{
      width: 100%;
      height: auto;
    }
    .header {
      .title {
        font-family: PingFangSC-Medium;
        font-size: 0.44rem;
        color: #000000;
        letter-spacing: 0;
        text-align: left;
      }

      .tip{
        margin: .4rem 0 0.6rem 0;
        .merchant {
          font-family: PingFangSC-Regular;
          font-size: 0.28rem;
          color: #576b95;
          letter-spacing: 0;
          text-align: left;
        }

        .date {
          font-family: PingFangSC-Regular;
          font-size: 0.28rem;
          color: #888888;
          letter-spacing: 0;
          text-align: left;
          margin-left: .2rem;
        }
      }
    }

    .content{
      width: 6.9rem;
      padding: .3rem .3rem;
      box-sizing: border-box;
      background: #F8F8F9;
      border-radius: 4px;
      margin: 0 auto;
      .section{
        text-indent: 2em;
      }
      .items{
        margin-bottom: .2rem;
      }
      .label{
        text-align: center;
        line-height: initial;
        font-family:PingFangSC-Semibold;
        font-size:.32rem;
        color:#2e4bd4;
        letter-spacing:0;
      }

    }
  }
</style>
