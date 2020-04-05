
const Home = () => import('@/views/Home');
const Service = () => import('@/views/Service');
const Mine = () => import('@/views/Mine');
const IndexList = () => import('@/views/KnowledgeAssemble/IndexList');
const Detail = () => import('@/views/KnowledgeAssemble/Detail');
const CopyrightRegister = () => import('@/views/CopyrightRegister');
const CopyrightFinance = () => import('@/views/CopyrightFinance');
const CopyrightService = () => import('@/views/CopyrightService');
const copyrightTypes = () => import('@/views/copyrightTypes');
const CenterIntroduction = () => import('@/views/KnowledgeAssemble/CenterIntroduction');
const CenterNews = () => import('@/views/KnowledgeAssemble/CenterNews');
const Login = () => import('@/views/Login');
const NotFund = () => import('@/components/NotFund');
const EditPassword = () => import('@/views/EditPassword');
const Register = () => import('@/views/Register');
const CopyrightName = () => import('@/views/CopyrightName');
const HandlingStatus = () => import('@/views/HandlingStatus');
const MyService = () => import('@/views/MyService');
const Setting = () => import('@/views/Setting');

export default [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    meta: {
      title: '首页',
      showBar: true
    },
    component: Home
  },
  {
    path: '/service',
    name: '服务',
    meta: {
      title: '服务',
      showBar: true
    },
    component: Service
  },
  {
    path: '/mine',
    name: '我的',
    meta: {
      title: '我的',
      showBar: true
    },
    component: Mine
  },
  {
    path: '/indexList',
    name: '知识荟萃',
    meta: {
      title: '知识荟萃'
    },
    component: IndexList
  },
  {
    path: '/detail',
    name: '详情',
    meta: {
      title: '详情'
    },
    component: Detail
  },
  {
    path: '/copyrightRegister',
    name: '版权登记',
    meta: {
      title: '版权登记'
    },
    component: CopyrightRegister
  },
  {
    path: '/copyrightFinance',
    name: '版权金融',
    meta: {
      title: '版权金融'
    },
    component: CopyrightFinance
  },
  {
    path: '/copyrightService',
    name: '相关服务',
    meta: {
      title: '相关服务'
    },
    component: CopyrightService
  },
  {
    path: '/copyrightTypes',
    name: '软件著作权登记',
    meta: {
      title: '软件著作权登记'
    },
    component: copyrightTypes
  },
  {
    path: '/centerIntroduction',
    name: '中心简介',
    meta: {
      title: '中心简介'
    },
    component: CenterIntroduction
  },
  {
    path: '/centerNews',
    name: '中心资讯',
    meta: {
      title: '中心资讯'
    },
    component: CenterNews
  },
  {
    path: '/login',
    name: '登录',
    meta: {
      title: '会员登录'
    },
    component: Login
  },
  {
    path: '/editPassword',
    name: '修改密码',
    meta: {
      title: '修改密码'
    },
    component: EditPassword
  },
  {
    path: '/register',
    name: '会员注册',
    meta: {
      title: '会员注册'
    },
    component: Register
  },
  {
    path: '/copyrightName',
    name: '版权名称',
    meta: {
      title: '版权名称'
    },
    component: CopyrightName
  },
  {
    path: '/handlingStatus',
    name: '办理状态',
    meta: {
      title: '办理状态'
    },
    component: HandlingStatus
  },
  {
    path: '/myService',
    name: '我的服务',
    meta: {
      title: '我的服务'
    },
    component: MyService
  },
  {
    path: '/setting',
    name: '设置',
    meta: {
      title: '设置'
    },
    component: Setting
  },
  {
    path: '/notFund',
    component: NotFund,
    name: '页面不存在',
  },
  {
    path: '*',
    redirect: {
      path: '/notFund'
    }
  }
]
