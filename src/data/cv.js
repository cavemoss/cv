const photo = '/assets/profile.svg';
const logos = {
  friends: '/assets/logo-friends.svg',
  ikm: '/assets/logo-ikm.svg',
  skyeng: '/assets/logo-skyeng.svg',
  genesis: '/assets/logo-genesis.svg',
  dsandy: '/assets/logo-dsandy.svg',
  university: '/assets/logo-university.svg'
};

export const cv = {
  en: {
    profile: {
      name: 'Alex Sandy',
      title: 'Full-Stack Software Engineer, Business Analyst',
      photo,
      contacts: [
        { icon: 'pi pi-envelope', label: 'alex@dsandy.com', href: 'mailto:alex@dsandy.com' },
        { icon: 'pi pi-phone', label: '+86 000 0000 0000', href: 'tel:+860000000000' },
        { icon: 'pi pi-map-marker', label: "Xi'an, China", href: null },
        { icon: 'pi pi-github', label: 'github.com/dsandy', href: 'https://github.com/' },
        { icon: 'pi pi-linkedin', label: 'linkedin.com/in/dsandy', href: 'https://linkedin.com/' }
      ]
    },
    skills: [
      'JavaScript', 'TypeScript', 'Vue', 'React', 'Node.js', 'HTML/CSS',
      'Full-Stack Development', 'Quality Control', 'Business Analysis',
      'Tech Support', 'SQL', 'Git', 'Video Editing', 'Motion Design'
    ],
    languages: [
      { name: 'English', level: 'Excellent — IELTS Band 9', icon: 'pi pi-star-fill' },
      { name: 'Chinese', level: 'HSK5 certificate', icon: 'pi pi-verified' },
      { name: 'Russian', level: 'Native', icon: 'pi pi-flag-fill' }
    ],
    hobbies: [
      { icon: 'pi pi-video', text: 'Video editing & motion design — YouTube channel with over 1.6 million views' },
      { icon: 'pi pi-box', text: 'Video game modding — a mod with over 13,000 downloads on Thunderstore' },
      { icon: 'pi pi-camera', text: 'Worked as an actor / model in China' }
    ],
    experience: [
      {
        period: 'Before 2024',
        company: 'College Projects',
        role: 'Collaborative Developer',
        logo: logos.friends,
        description: 'Worked with friends on their college projects, building practical software together and sharpening hands-on development skills.'
      },
      {
        period: 'Winter 2024',
        company: 'IKM Soft',
        role: 'Front-End Developer / Quality Control',
        logo: logos.ikm,
        description: 'Developed front-end interfaces and carried out quality control, ensuring releases met functional and visual standards.'
      },
      {
        period: 'Summer 2024 (during IKM Soft)',
        company: 'SkyEng',
        role: 'English Teacher',
        logo: logos.skyeng,
        description: 'Taught English online to students of various levels while continuing work at IKM Soft.'
      },
      {
        period: 'Autumn 2024',
        company: 'Genesis LLC',
        role: 'Full-Stack Software Engineer / Business Analyst / Tech Support',
        logo: logos.genesis,
        description: 'Built and maintained full-stack applications, analyzed business requirements, and provided technical support across products.'
      },
      {
        period: 'Autumn 2025 (during Genesis)',
        company: 'DSANDY LLC',
        role: 'Founder',
        logo: logos.dsandy,
        description: 'Opened my own company in the United States, DSANDY LLC, operating an AliExpress drop-shipping business.'
      }
    ],
    education: [
      {
        period: '2022 — 2027',
        company: "Xi'an University of Petroleum",
        role: 'International Economics and Trade (Major)',
        logo: logos.university,
        description: 'Pursuing a degree in International Economics and Trade, and also conducted English classes at the university.'
      }
    ]
  },

  ru: {
    profile: {
      name: 'Алекс Сэнди',
      title: 'Full-Stack разработчик, бизнес-аналитик',
      photo,
      contacts: [
        { icon: 'pi pi-envelope', label: 'alex@dsandy.com', href: 'mailto:alex@dsandy.com' },
        { icon: 'pi pi-phone', label: '+86 000 0000 0000', href: 'tel:+860000000000' },
        { icon: 'pi pi-map-marker', label: 'Сиань, Китай', href: null },
        { icon: 'pi pi-github', label: 'github.com/dsandy', href: 'https://github.com/' },
        { icon: 'pi pi-linkedin', label: 'linkedin.com/in/dsandy', href: 'https://linkedin.com/' }
      ]
    },
    skills: [
      'JavaScript', 'TypeScript', 'Vue', 'React', 'Node.js', 'HTML/CSS',
      'Full-Stack разработка', 'Контроль качества', 'Бизнес-анализ',
      'Техподдержка', 'SQL', 'Git', 'Видеомонтаж', 'Моушн-дизайн'
    ],
    languages: [
      { name: 'Английский', level: 'Отлично — IELTS 9 баллов', icon: 'pi pi-star-fill' },
      { name: 'Китайский', level: 'Сертификат HSK5', icon: 'pi pi-verified' },
      { name: 'Русский', level: 'Родной', icon: 'pi pi-flag-fill' }
    ],
    hobbies: [
      { icon: 'pi pi-video', text: 'Видеомонтаж и моушн-дизайн — YouTube-канал с более чем 1,6 млн просмотров' },
      { icon: 'pi pi-box', text: 'Моддинг видеоигр — мод с более чем 13 000 загрузок на Thunderstore' },
      { icon: 'pi pi-camera', text: 'Работал актёром / моделью в Китае' }
    ],
    experience: [
      {
        period: 'До 2024',
        company: 'Студенческие проекты',
        role: 'Разработчик в команде',
        logo: logos.friends,
        description: 'Работал с друзьями над их студенческими проектами, создавая практичное ПО и развивая прикладные навыки разработки.'
      },
      {
        period: 'Зима 2024',
        company: 'IKM Soft',
        role: 'Front-End разработчик / Контроль качества',
        logo: logos.ikm,
        description: 'Разрабатывал интерфейсы и проводил контроль качества, обеспечивая соответствие релизов функциональным и визуальным стандартам.'
      },
      {
        period: 'Лето 2024 (во время IKM Soft)',
        company: 'SkyEng',
        role: 'Преподаватель английского',
        logo: logos.skyeng,
        description: 'Преподавал английский онлайн ученикам разных уровней, продолжая работать в IKM Soft.'
      },
      {
        period: 'Осень 2024',
        company: 'Genesis LLC',
        role: 'Full-Stack разработчик / Бизнес-аналитик / Техподдержка',
        logo: logos.genesis,
        description: 'Создавал и поддерживал full-stack приложения, анализировал бизнес-требования и оказывал техническую поддержку по продуктам.'
      },
      {
        period: 'Осень 2025 (во время Genesis)',
        company: 'DSANDY LLC',
        role: 'Основатель',
        logo: logos.dsandy,
        description: 'Открыл собственную компанию в США — DSANDY LLC, занимающуюся дропшиппингом с AliExpress.'
      }
    ],
    education: [
      {
        period: '2022 — 2027',
        company: 'Сианьский нефтяной университет',
        role: 'Международная экономика и торговля (специальность)',
        logo: logos.university,
        description: 'Получаю степень по международной экономике и торговле, а также вёл занятия по английскому языку в университете.'
      }
    ]
  },

  zh: {
    profile: {
      name: 'Alex Sandy',
      title: '全栈软件工程师，商业分析师',
      photo,
      contacts: [
        { icon: 'pi pi-envelope', label: 'alex@dsandy.com', href: 'mailto:alex@dsandy.com' },
        { icon: 'pi pi-phone', label: '+86 000 0000 0000', href: 'tel:+860000000000' },
        { icon: 'pi pi-map-marker', label: '中国西安', href: null },
        { icon: 'pi pi-github', label: 'github.com/dsandy', href: 'https://github.com/' },
        { icon: 'pi pi-linkedin', label: 'linkedin.com/in/dsandy', href: 'https://linkedin.com/' }
      ]
    },
    skills: [
      'JavaScript', 'TypeScript', 'Vue', 'React', 'Node.js', 'HTML/CSS',
      '全栈开发', '质量控制', '商业分析',
      '技术支持', 'SQL', 'Git', '视频剪辑', '动态设计'
    ],
    languages: [
      { name: '英语', level: '优秀 — 雅思 9 分', icon: 'pi pi-star-fill' },
      { name: '汉语', level: 'HSK5 证书', icon: 'pi pi-verified' },
      { name: '俄语', level: '母语', icon: 'pi pi-flag-fill' }
    ],
    hobbies: [
      { icon: 'pi pi-video', text: '视频剪辑与动态设计 — YouTube 频道观看量超过 160 万次' },
      { icon: 'pi pi-box', text: '电子游戏 Mod 制作 — 在 Thunderstore 上的 Mod 下载量超过 1.3 万次' },
      { icon: 'pi pi-camera', text: '曾在中国担任演员 / 模特' }
    ],
    experience: [
      {
        period: '2024 年之前',
        company: '大学项目',
        role: '协作开发者',
        logo: logos.friends,
        description: '与朋友们一起完成他们的大学项目，共同构建实用软件并提升实践开发能力。'
      },
      {
        period: '2024 年冬',
        company: 'IKM Soft',
        role: '前端开发 / 质量控制',
        logo: logos.ikm,
        description: '开发前端界面并进行质量控制，确保发布版本符合功能与视觉标准。'
      },
      {
        period: '2024 年夏（IKM Soft 期间）',
        company: 'SkyEng',
        role: '英语教师',
        logo: logos.skyeng,
        description: '在 IKM Soft 工作期间，线上教授不同水平学生的英语课程。'
      },
      {
        period: '2024 年秋',
        company: 'Genesis LLC',
        role: '全栈软件工程师 / 商业分析师 / 技术支持',
        logo: logos.genesis,
        description: '构建并维护全栈应用程序，分析业务需求，并为各产品提供技术支持。'
      },
      {
        period: '2025 年秋（Genesis 期间）',
        company: 'DSANDY LLC',
        role: '创始人',
        logo: logos.dsandy,
        description: '在美国创办了自己的公司 DSANDY LLC，经营 AliExpress 代发货（drop-shipping）业务。'
      }
    ],
    education: [
      {
        period: '2022 — 2027',
        company: '西安石油大学',
        role: '国际经济与贸易（专业）',
        logo: logos.university,
        description: '攻读国际经济与贸易学位，并在该校教授英语课程。'
      }
    ]
  }
};
