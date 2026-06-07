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
    hobbies: "兴趣爱好",
    work: "工作经历",
    education: "教育背景",
  },
  profile: {
    name: "亚历山大",
    profession: "全栈软件工程师，业务分析师",
    location: "中国 西安",
  },
  contact: {
    emailLabel: "邮箱",
    phoneLabel: "电话",
  },
  work: [
    {
      company: "参与大学项目",
      period: "2023 – 2024年1月",
      bullets: [
        "与朋友合作完成多个大学项目。",
        "制作了 Telegram 机器人、前端及全栈项目，参与规划、开发与测试。",
      ],
    },
    {
      company: "IKM Soft LLC (俄罗斯)",
      logo: "ikm",
      role: "前端开发 / 质量控制",
      period: "2024年1月 – 2024年10月",
      bullets: [
        "在由 IT 朋友创立的公司工作。",
        "在团队中参与真实商业项目，积累了实战经验。",
        "酒店电视软件、工厂门禁系统、会议室多屏展示墙软件。",
        "开发并维护公司网站。",
        "负责质量控制和测试。",
      ],
    },
    {
      company: "SkyEng",
      logo: "skyeng",
      role: "英语教师",
      period: "2024年夏",
      note: "兼职",
      bullets: [
        "为不同水平的学生开展线上英语课程。",
        "专注于口语练习、语法及考试备考。",
      ],
    },
    {
      company: "Genesis LLC (俄罗斯)",
      logo: "genesis",
      role: "全栈软件工程师 / 业务分析师 / 技术支持",
      period: "2024年10月26日 – 至今",
      bullets: [
        "开发并维护 amoCRM 和 Bitrix24 插件。",
        "积极参与 Kronos 在线预约系统的开发。",
        "提供技术支持并与客户密切合作。",
        "参与项目规划并改进内部流程。",
        "在 HelpDeskEddy 平台上开发并部署 AI 智能体，加速技术支持流程。",
        "进行市场和客户需求分析，编写技术文档。",
      ],
    },
    {
      company: "DSANDY LLC (美国)",
      logo: "dsandy",
      role: "创始人 / 企业主",
      period: "2025年10月30日 – 至今",
      note: "兼职",
      bullets: [
        "在美国怀俄明州创立专注于速卖通代发货业务的公司。",
        "负责俄罗斯和美国的财务报告。",
        "开发了速卖通代发货 SaaS 平台。",
        "集成 Stripe 支付系统，支持全球收款。",
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
    { name: "英语", level: "良好", note: "雅思 8.3（口语9分）" },
    { name: "中文", level: "自信", note: "HSK 5 证书" },
    { name: "俄语", level: "母语" },
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
      desc: "《雨中冒险2》C# 模组在 Thunderstore 下载量超过 1.3 万次。",
    },
    {
      icon: "pi pi-user",
      title: "演员 / 模特经历",
      desc: "曾在中国多个城市从事演员与模特工作。曾在 TikTok 以英语为服装品牌主持直播拍卖。",
    },
  ],
};
