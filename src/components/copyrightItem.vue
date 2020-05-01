<template>
  <div class="pageWrapper">
    <copyrightItemHead :itemImage="dataModule.itemImage"></copyrightItemHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <!--        <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>-->
        <!--        <van-action-sheet v-model="show_1" :actions="actions_1" @select="onChoose"/>-->
        <!--        <van-action-sheet v-model="show_2" :actions="actions_2" @select="onOption"/>-->
        <!--        <van-action-sheet v-model="show" :actions="dataModule.actions" @select="onSelect" />-->
        <van-field v-model="data.busiName" placeholder="选择服务类型" disabled readonly/>
        <!--        right-icon="play" readonly="" @click="handelEvent('kinds')" />-->
        <van-field v-model="data.enterpriseName" placeholder="请输入您的企业名称或姓名"/>
        <div v-if="dataModule.type === 'finance'">
          <van-field v-model="data.iprCount" placeholder="请选择知识产权拥有数量" right-icon="play" readonly=""
                     @click="handelEvent('num')"/>
          <van-field v-model="data.financialDemandLimit" placeholder="请选择金融需求额度" right-icon="play" readonly=""
                     @click="handelEvent('limit')"/>
        </div>
        <van-field v-model="data.mobile" placeholder="请输入手机号"/>
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn" :style="{background: dataModule.color}">提交申请</div>
    <div v-if="data.busiName === '软件著作权'">
      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 软件著作权 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="text-indent: 20px;font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;">
          <div style="margin-top: 0px;">
            计算机软件是指计算机程序及其有关文档。计算机程序是指能实现一定功能的代码化指令序列，或者符号化语句序列。文档指用来描述程序的内容、组成、设计、功能规格、开发情况、测试结果及使用方法的文字资料和图表，如程序设计说明书、流程图、用户手册等。
          </div>
          <div style="margin-top: 20px;">
            自然人的软件著作权，保护期为自然人终生及其死亡后50年；软件是合作开发的，截止于最后死亡的自然人死亡后第50年的12月31日。法人或者其他组织的软件著作权，保护期为软件首次发表之后50年，但软件自开发完成之日起50年内未发表的，不再保护。
          </div>
          <div style="margin-top: 20px;">
            国家著作权行政管理部门鼓励著作权人进行计算机软件著作权登记，并对已登记的软件给予重点保护。软件著作权登记证书是对登记事项的初步证明，可以帮助持有者在诉讼中起到减轻举证责任的作用。根据国务院颁发的《鼓励软件产业和集成电路产业发展的若干政策》的有关规定，证书可以作为软件企业申请减免税收的证明。
          </div>
        </div>
      </div>

      <div class="advantageSection" style="margin-top: 20px;">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 登记流程 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="" style="font-size: 12px;line-height: 20px;">
          <img style="width: 100%" :src="require('@/assets/images/ruanjianzhuzuoquan.png')" class="flowImg"/>
          <div style="margin-top: 20px;">1、填写申请表<br/>
            <div style="text-indent: 20px;">
              在中心网站上，首先进行用户注册，然后用户登陆，在线按要求填写申请表后，确认、提交并在线打印。
            </div>
          </div>
          <div style="margin-top: 20px;">2、提交申请文件<br/>
            <div style="text-indent: 20px;">请人或代理人按照要求提交纸质登记申请文件。</div>
          </div>
          <div style="margin-top: 20px;">3、登记机构受理申请<br/>
            <div style="text-indent: 20px;">申请文件符合受理要求的，登记机构在规定的期限内予以受理，并向申请人或代理人发出受理通知书；不符合受理要求的，发放补正通知书。</div>
          </div>
          <div style="margin-top: 20px;">4、审查<br/>
            <div style="text-indent: 20px;">经审查符合《计算机软件保护条例》和《计算机软件著作权登记办法》规定的，予以登记；不符合规定的，发放补正通知书。</div>
          </div>
          <div style="margin-top: 20px;">5、获得登记证书<br/>
            <div style="text-indent: 20px;">申请受理之日起30个工作日 收费标准：官费 0元 加急费
              20000元后，申请人或代理人可登录中心网站，查阅软件著作权登记公告。北京地区的申请人或代理人在查阅到所申请软件的登记公告后，可持受理通知书原件在该软件登记公告发布3个工作日 收费标准：官费 0元 加急费
              20000元后，到中心版权登记大厅领取证书。申请人或代理人的联系地址是外地的，中心将按照申请表中所填写的地址邮寄证书，请务必在申请表中填写正确的联系地址。
            </div>
          </div>
        </div>
      </div>

      <div class="advantageSection" style="margin-top: 20px;">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 登记材料清单 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="">
          <div class="" style="font-size: 12px;line-height: 20px;">
            <div>1、软件著作权登记申请表</div>
            <div>2、软件（程序文档）的鉴别材料</div>
            <div>3、代理人身份证明文件</div>
            <div>4、申请人有效身份证明文件（单位的需盖公章）</div>
            <div>5、权利归属的证明文件</div>
            <div>6、其他证明文件</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="data.busiName === '作品著作权'">
      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 作品著作权 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 20px;">我国著作权法所称的作品，是指文学、艺术和科学领域内具有独创性并能以某种有形形式复制的智力成果。作品应当具备以下条件： </div>
            <div style="margin-top: 5px;">（1）独创性，即作品必须是由作者通过独立构思和创作而产生。具有独创性的作品才受著作权法的保护。 </div>
            <div style="margin-top: 5px;">（2）可复制性，即指可以通过印刷、复印、临摹、拓印、录音、录像、翻录、反拍等方式将作品制作一份或多份，但无论采用什么复制方式以及复制多少作品，均不会改变作品的内容。</div>
          </div>
          <div style="margin-top: 20px;">
            <div style="text-indent: 20px;">根据著作权法实施条例第四条的规定，上述作品的含义是指： </div>
            <div style="margin-top: 5px;">(1) 文字作品：是指小说、诗词、散文、论文等以文字形式表现的作品；</div>
            <div style="margin-top: 5px;">(2)口述作品：是指即兴的演说、授课、法庭辩论等以口头语言形式表现的作品；</div>
            <div style="margin-top: 5px;">(3)音乐作品，是指歌曲、交响乐等能够演唱或者演奏的带词或者不带词的作品；</div>
            <div style="margin-top: 5px;">(4)戏剧作品，是指话剧、歌剧、地方戏等供舞台演出的作品；</div>
            <div style="margin-top: 5px;">(5)曲艺作品，是指相声、快书、大鼓、评书等以说唱为主要形式表演的作品；</div>
            <div style="margin-top: 5px;">(6)舞蹈作品，是指通过连续的动作、姿势、表情等表现思想、情感的作品；</div>
            <div style="margin-top: 5px;">(7)杂技艺术作品，是指杂技、魔术、马戏等通过形体动作和技巧表现的作品；</div>
            <div style="margin-top: 5px;">(8)美术作品，是指绘画、书法、雕塑等以线条、色彩或者其他方式构成的有审美意义的平面或者立体的造型艺术作品；</div>
            <div style="margin-top: 5px;">(9)建筑作品，是指以建筑物或者构筑物形式表现的有审美意义的作品；</div>
            <div style="margin-top: 5px;">(10)摄影作品，是指借助器械在感光材料或者其他介质上记录客观物体形象的艺术作品；</div>
            <div style="margin-top: 5px;">(11)电影作品和以类似摄制电影的方法创作的作品，是指摄制在一定介质上，由一系列有伴音或者无伴音的画面组成，并且借助适当装置放映或者以其他方式传播的作品；</div>
            <div style="margin-top: 5px;">(12)图形作品，是指为施工、生产绘制的工程设计图、产品设计图，以及反映地理现象、说明事物原理或者结构的地图、示意图等作品；</div>
          <div style="margin-top: 5px;">(13)模型作品，是指为展示、试验或者观测等用途，根据物体的形状和结构，按照一定比例制成的立体作品。</div>
          </div>
        </div>
      </div>

      <div class="advantageSection" style="margin-top: 20px;">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 登记材料清单 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="">
          <div class="" style="font-size: 12px;line-height: 20px;">
            <div>1、《作品著作权登记申请表》；</div>
            <div>2、申请人身份证明文件复印件：</div>
            <div>3、权利归属证明文件；</div>
            <div>4、作品的样本（可以提交纸介质或者电子介质作品样本）；</div>
            <div>5、作品说明书（请从创作目的、创作过程、作品独创性三方面写，并附申请人签章，标明签章日期）；</div>
            <div>6、委托他人代为申请时，代理人应提交申请人的授权书（代理委托书）及代理人身份证明文件复印件。</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="data.busiName === 'DCI服务'">

      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· DCI ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 20px;">基于数字网络环境下，为互联网环境中的创作者，为数字网络化作品版权颁发永久的DCI标（数字版权唯一标识符）及作品登记证书（电子版），提供国家法律认可的版权确权、侵权申诉服务，帮助用户结算版税。 </div>
          </div>
          <div style="margin-top: 20px;">
            <div style="text-indent: 20px;">当数字作品创作完成之后，权利人即可通过第三方合作平台向中国版权保护中心申请办理DCI登记。完成DCI登记后，为每一数字版权分配唯一的DCI码（C类）、DCI标和作品登记证书（电子版），并利用电子签名身份认证建立起可信赖、可查验的认证体系，从而实现数字版权的确权，并为版权授权和维权等提供公共服务基础支撑。 </div>
          </div>
        </div>
      </div>

      <div class="advantageSection" style="margin-top: 20px;">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· DCI登记特点 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="">
          <div class="" style="font-size: 12px;line-height: 20px;">
            <div style="margin-top: 5px;">（一）第三方平台用户通过DCI体系的合作平台在线提交申请，在线获得反馈，办理方便快捷，节省材料成本、沟通成本和时间成本；</div>
            <div style="margin-top: 5px;">（二）登记完成后的权利人除获得作品登记证书（电子版）外，还被赋予DCI码和DCI标，可以实现传统模式不具备的互联网标识、验证等功能；</div>
            <div style="margin-top: 5px;">（三）以DCI体系为支撑，除DCI登记外，集成了版权费用结算和版权监测维权功能，是数字网络环境下版权服务的体系化创新。</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="data.busiName === '软件测试'">

      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 软件测试 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 20px;">检测机构按照委托方提供的测试功能点，对 其指定的软件产品进行功能性的检测和验证，确保这些功能都得以实现并能正常运行，可作为国家高新、双软评估、首套软件的证明依据 </div>
          </div>
        </div>
      </div>

      <div class="advantageSection">
        <div style="width: 4.5rem; margin: 0 auto .3rem auto;margin-bottom: 0;">
          <van-divider slot :style="styleObj">
            ··· 软件产品检验 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 20px;">一种作为软件产品的功能符合性、真实有效性进 行的检验，可作为软件产品评估的证明依据。 </div>
          </div>
        </div>
      </div>
      <div class="advantageSection">
        <div style="width: 4.5rem; margin: 0 auto .3rem auto;margin-bottom: 0;">
          <van-divider slot :style="styleObj">
            ··· 验收测试/委托测试 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 20px;">面向企、事业单位、政府及科研机构，提供 项目验收、投标咨询等服务业务，具备验收评测、产品确认评测、性能评测等全方位的评测服务能力。出具的测试报告不但可用于对开发完成的工程项目进行全面工程验收、项目验收，还可用于政府资助项目的证明依据，也可作为判断软件工程项目是否按规定完成的依据之一。而测试的种类还可包括：软件的功能性测试、易用性测试、可靠性测试、可移植性测试、性能效率测试和用户文档测试</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="data.busiName === '政府项目申报'">

      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 政府项目申报 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 0px;">
              <div style="margin-top: 5px;">一、国家部委、业务所及部分地区地方政府相关部门财政资金补贴政策咨询：</div>
              <div style="margin-top: 5px;">如：财政部／文化部／科技部／工信部／国家发改委／环保部等国家部委资金补贴政策咨询</div>
              <div style="margin-top: 5px;">二、深圳市委宣传部／深圳市文体旅游局／深圳市发改委／深圳市经信委／深圳市科创委／深圳市各区文化及科技政策咨询；</div>
              <div style="margin-top: 5px;">三、广州市及各区文化科技政策咨询；</div>
            </div>
          </div>
        </div>
      </div>

      <div class="advantageSection">
        <div style="width: 4.5rem; margin: 0 auto .3rem auto;margin-bottom: 0;">
          <van-divider slot :style="styleObj">
            ··· 项目申报服务 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 20px;">中心为您提供贴身式管家服务，给企业提供政策咨询、协助企业获得政府补贴资金，这仅仅是中心服务的开始而不是结束。从服务流程上，中心秉承的是全流程服务，在企业提供充足素材的基础上，“企业只需盖章”是中心的服务追求。在服务深度上，中心提供贴身式管家服务，我们为每一个企业建立专项服务团队，随时提供力所能及的政策咨询：</div>
            <div style="margin-top: 5px;">（1）项目申报前期：中心根据企业提供的基本数据等进行评估，对企业的政府资金项目申报给予科学规划；</div>
            <div style="margin-top: 5px;">（2）项目申报期间：企业只需提供基本项目素材，其他包括项目书的撰写（重大项目须有中心兼职专家团队进行技术及政策把关）、网上系统填报乃至项目书纸质材料的打印装订等均由中心完成；</div>
            <div style="margin-top: 5px;">（3）项目评审和现场考察期间：中心对每个项目均做好包括PPT制作及评审或考察注意事项等在内的充足准备工作；</div>
            <div style="margin-top: 5px;">（4）政府资金支出期间：政府扶持资金大都是在政府指定监管银行的企业监管账户中专款专用，中心会给予企业做好相应的资金支出培训和指导，协助解决企业在支出政府扶持资金时出现的问题；</div>
            <div style="margin-top: 5px;">（5）项目验收期间：中心对辅导成功的每个项目均会做好相应的后期跟踪机制和专门档案，至少提前半年协助企业做好相应的验收准备直至项目验收成功。</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="data.busiName === '专利'">

      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 专利申请 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="text-indent: 20px;">
              <div style="margin-top: 5px;">专利申请是发明人、设计人或者其他有申请权的主体向中华人民共和国国家知识产权局提出专利申请，经中华人民共和国国家知识产权局依照法定程序审查批准后，才能取得专利权。</div>
              <div style="margin-top: 5px;">申请专利并获得专利权后，既可以保护自己的发明成果，防止科研成果流失，获取垄断利润来弥补研发投入，同时也有利于科技进步和经济发展。可以通过申请专利的方式占据新技术及其产品的市场空间，获得相应的经济利益。</div>
            </div>
          </div>
        </div>
      </div>

      <div class="advantageSection">
        <div style="width: 4.5rem; margin: 0 auto .3rem auto;margin-bottom: 0;">
          <van-divider slot :style="styleObj">
            ··· 申请专利的意义 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="margin-top: 2px;">1、可有效保护发明创造成果，独占市场；</div>
            <div style="margin-top: 2px;">2、国家对专利申请有一定的扶持政策；</div>
            <div style="margin-top: 2px;">3、未经专利权人同意许可，任何单位或个人都不能使用；</div>
            <div style="margin-top: 2px;">4、可促进产品的更新换代，亦提高产品的技术含量及质量、降低成本;</div>
            <div style="margin-top: 2px;">5、是一种无形资产和无形宣传,是实力的体现；</div>
            <div style="margin-top: 2px;">6、可以作为商品出售（转让）；</div>
            <div style="margin-top: 2px;">7、是企业上市和其他评审中的一项重要指标。</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="data.busiName === '商标'">

      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 商标注册 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="">
              <div style="margin-top: 5px;text-indent: 20px;">商标是用来区别一个经营者的品牌或服务和其他经营者的商品或服务的标记，商标是企业的财富，如何运用商标权利发展生产、开拓市场，是每一个企业必须研究的重要课题。我国商标法规定，经商标局核准注册的商标，包括商品商标、服务商标和集体商标、证明商标，商标注册人享有商标专用权，受法律保护。商标分为45大类，1-34类属于商品商标，35-45类属于服务商标。</div>
              <div style="margin-top: 5px;">商标注册，是指商标使用人将其使用的商标依照法律规定的条件和程序，向国家商标主管机关(国家工商总局商标局)提出注册申请 [1] ，经国家商标主管机关依法审查，准予注册登记的法律事实。在中国，商标注册是商标得到法律保护的前提，是确定商标专用权的法律依据。商标使用人一旦获准商标注册，就标志着它获得了该商标的专用权，并受到法律的保护。</div>
            </div>
          </div>
        </div>
      </div>

      <div class="advantageSection">
        <div style="width: 4.5rem; margin: 0 auto .3rem auto;margin-bottom: 0;">
          <van-divider slot :style="styleObj">
            ··· DCI登记特点 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="softCopyRight"
             style="font-size: 12px;line-height: 20px;padding-left: 5px;padding-right: 5px;margin-top: 10px;">
          <div style="margin-top: 0px;">
            <div style="margin-top: 2px;">1、便于消费者认牌购物;</div>
            <div style="margin-top: 2px;">2、商标注册人拥有商标专用权,受法律保护;</div>
            <div style="margin-top: 2px;">3、可以创立品牌，抢先占领市场;</div>
            <div style="margin-top: 2px;">4、商标是一种无形资产，可对其价值进行评估;</div>
            <div style="margin-top: 2px;">5、商标可以通过转让，许可给他人使用，或质押来转换实现其价值;</div>
            <div style="margin-top: 2px;">6、商标还是办理质检、卫检、条码等的必备条件;</div>
            <div style="margin-top: 2px;">7、地方各级工商局通过对商标的管理来监督商品和服务的质量。</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 材料准备 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="materials">
          <div class="" v-for="(item, key) in dataModule.list" :key="key">{{item}}</div>
        </div>
      </div>

      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 登记流程 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="flowItem">
          <img :src="dataModule.flowIcon" class="flowImg"/>
        </div>
      </div>

      <div class="advantageSection">
        <div style="width: 4rem; margin: 0 auto .3rem auto;">
          <van-divider slot :style="styleObj">
            ··· 办理时限 ···
          </van-divider>
          <div class="decorate" :style="{color: dataModule.color}">==</div>
        </div>
        <div class="handleItem">
          <img :src="dataModule.handleDateIcon" class="handleImg"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import copyrightItemHead from '@/components/copyrightItemHead.vue';
  import { WeChatCopyrightFinance } from '../api/wechat';
  import { Dialog } from 'vant';

  export default {
    props: {
      dataModule: {
        type: Object,
        default: {},
      },
      selectBusiType: {
        type: Object,
        default: {},
      },
    },
    components: {
      copyrightItemHead,
    },
    data() {
      return {
        actions_1: [{
          name: '10以下',
        }, {
          name: '10-30',
        }, {
          name: '30-50',
        }, {
          name: '50以上',
        }],
        actions_2: [{
          name: '200万以下',
        }, {
          name: '200-500万',
        }, {
          name: '500-2000万',
        }, {
          name: '2000万以上',
        }],
        styleObj: {
          margin: 0,
          color: '',
          borderColor: '',
          fontSize: '.32rem',
          fontFamily: 'PingFangSC-Thin',
          fontWeight: 600,
        },
        show: false,
        show_1: false,
        show_2: false,

        data: {
          'busiType': '',
          'enterpriseName': '',
          'financialDemandLimit': '',
          'iprCount': '',
          'mobile': '',
        },
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.styleObj.color = this.dataModule.color;
        this.styleObj.borderColor = this.dataModule.color;
        this.data.busiType = this.selectBusiType.busiType;
        this.data.busiName = this.selectBusiType.busiName;
      });
    },
    computed: {
      actions() {
        if (!this.dataModule || !this.dataModule.busiType) return [];
        let data = [];
        for (const i in this.dataModule.busiType) {
          data.push({
            type: i,
            name: this.dataModule.busiType[i],
          });
        }
        return data;
      },
    },
    methods: {
      handelEvent(type) {
        switch (type) {
          case 'kinds':
            this.show = true;
            break;
          case 'num':
            this.show_1 = true;
            break;
          case 'limit':
            this.show_2 = true;
            break;
          default:
            break;
        }
      },
      onSelect(item) {
        this.show = false;
        this.data.busiType = item.type;
        this.data.busiName = item.name;
      },
      onChoose(item) {
        this.show_1 = false;
        this.data.iprCount = item.name;
      },
      onOption(item) {
        this.show_2 = false;
        this.data.financialDemandLimit = item.name;
      },
      async onSubmit() {
        const datas = { ...this.data };
        const { data } = await WeChatCopyrightFinance(datas) || {};
        console.info(data);
        if (data) {
          Dialog({ message: '申请成功' });
        } else {
          Dialog({ message: '申请失败' });
        }
      },
    },
  };
</script>

<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
    padding-bottom: .6rem;
    line-height: .4rem;

    .advantageSection {
      background: #fff;
      width: 6.9rem;
      padding: .3rem .3rem;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0.2rem auto 0rem auto;

      .worksItem {
        text-align: center;
      }

      .flowItem {
        text-align: center;

        .flowImg {
          width: 100%;
          height: auto;
        }
      }

      .handleItem {
        text-align: center;

        .handleImg {
          width: 100%;
          height: auto;
        }
      }

      .decorate {
        text-align: center;
        color: #fc7c21;
        font-size: .32rem;
      }
    }

    .loginForm {
      .van-field {
        background: #ffffff;
        border-radius: 4px;
        width: 6.9rem;
        height: .86rem;
        margin: 0 auto .3rem auto;
      }
    }

    .submitBtn {
      margin: .6rem auto 0.8rem auto;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 0.36rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      background: #fc7c21;
      border-radius: 4px;
      width: 6.9rem;
      height: 0.96rem;
      line-height: 0.96rem;
    }
  }
</style>
