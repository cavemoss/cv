import type { CvMessages } from "./types";

export const zh: CvMessages = {
  header: {
    title: "个人简历",
  },
  sections: {
    skills: "技能",
    hardSkills: "硬技能",
    softSkills: "软技能",
    myStack: "技术栈",
    languages: "语言能力",
    hobbies: "兴趣与成就",
    work: "工作经历",
    education: "教育背景",
  },
  profile: {
    name: "Daniil Sandy",
    profession: "全栈软件工程师，业务分析师",
    location: "美国 佛罗里达州 迈阿密",
  },
  contact: {
    emailLabel: "邮箱",
    phoneLabel: "电话",
  },
  work: [
    {
      company: "参与大学项目",
      period: "2023 – 2024 冬",
      bullets: [
        "与朋友合作完成多个大学项目。",
        "参与前端及全栈项目，负责规划、开发与测试工作。",
      ],
    },
    {
      company: "IKM Soft",
      logo: "ikm",
      role: "前端开发 / 质量控制",
      period: "2024 冬 – 2024 春",
      bullets: [
        "使用 Vue 3、TypeScript 和 PrimeVue 开发响应式 Web 应用。",
        "通过手动与自动化测试确保产品质量。",
        "与团队协作改进 UI/UX 并修复问题。",
      ],
    },
    {
      company: "SkyEng",
      logo: "skyeng",
      role: "英语教师",
      period: "2024 夏",
      note: "兼职",
      bullets: [
        "为不同水平的学生开展线上英语课程。",
        "专注于口语练习、语法及考试备考。",
      ],
    },
    {
      company: "Genesis LLC",
      logo: "genesis",
      role: "全栈软件工程师 / 业务分析师 / 技术支持",
      period: "2024 秋 – 至今",
      bullets: [
        "开发全栈 Web 应用（Vue 3、TypeScript、Node.js）。",
        "分析业务需求并将其转化为技术解决方案。",
        "提供技术支持并与客户密切合作。",
        "参与项目规划并改进内部流程。",
      ],
    },
    {
      company: "DSANDY LLC",
      logo: "dsandy",
      role: "创始人 / 企业主",
      period: "2025 秋 – 至今",
      note: "兼职",
      bullets: [
        "在美国创立专注于速卖通代发货业务的公司。",
        "负责选品、供应商沟通、店铺运营及市场推广。",
        "建立并扩展电商品牌。",
      ],
    },
  ],
  education: [
    {
      company: "西安石油大学",
      logo: "xupt",
      role: "国际经济与贸易专业 学士学位",
      period: "2022 – 2027",
      note: "预计",
      bullets: [
        "学习国际贸易、经济学、管理学等相关课程。",
        "积极参与学术活动，并为学生开设英语课程。",
      ],
    },
  ],
  languages: [
    { name: "English（英语）", level: "优秀", note: "雅思 9 分" },
    { name: "中文", level: "HSK 5", note: "HSK 5 证书" },
  ],
  hobbies: [
    {
      icon: "pi pi-video",
      title: "视频剪辑与动态设计",
      desc: "YouTube 频道播放量超过 160 万次。",
    },
    {
      icon: "pi pi-desktop",
      title: "游戏模组制作",
      desc: "在 Thunderstore 上发布的模组下载量超过 1.3 万次。",
    },
    {
      icon: "pi pi-user",
      title: "演员 / 模特经历",
      desc: "曾在中国从事演员与模特工作。",
    },
  ],
};
