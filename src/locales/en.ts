import type { CvMessages } from "./types";

export const en: CvMessages = {
  header: {
    title: "Curriculum Vitae",
  },
  sections: {
    skills: "Skills",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    myStack: "My Stack",
    languages: "Languages",
    hobbies: "Hobbies",
    work: "Work Experience",
    education: "Education",
  },
  profile: {
    name: "Aleksandr Shushakov",
    profession: "Full-Stack Software Engineer, Business Analyst",
    location: "Xi'an, China",
  },
  contact: {
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  work: [
    {
      company: "Working on College Projects",
      period: "2023 – Jan. 2024",
      bullets: [
        "Worked with friends on various college projects.",
        "Built Telegram bots, front-end and full-stack projects; involved in planning, development, and testing.",
      ],
    },
    {
      company: "IKM Soft LLC (Russia)",
      logo: "ikm",
      role: "Frontend Developer / Quality Control",
      period: "Jan. 2024 – Oct. 2024",
      bullets: [
        "Worked at a company founded by my IT friends.",
        "Gained experience working on a team on real commercial projects.",
        "Software for hotel TVs, a factory access-control system, and conference-room display wall software.",
        "Developed and maintained the company website.",
        "Performed quality control and testing.",
      ],
    },
    {
      company: "SkyEng",
      logo: "skyeng",
      role: "English Teacher",
      period: "Summer 2024",
      note: "Part-time",
      bullets: [
        "Conducted online English lessons for students of different levels.",
        "Focused on speaking practice, grammar, and exam preparation.",
      ],
    },
    {
      company: "Genesis LLC (Russia)",
      logo: "genesis",
      role: "Full Stack Software Engineer / Business Analyst / Tech Support",
      period: "Oct. 26, 2024 – Present",
      bullets: [
        "Develop and maintain widgets for amoCRM and Bitrix24.",
        "Actively involved in developing the Kronos online booking system.",
        "Provide technical support and work closely with clients.",
        "Participate in project planning and improving internal processes.",
        "Developed and deployed an AI agent to speed up tech support on the HelpDeskEddy platform.",
        "Conduct market and client-needs analysis and prepare technical documentation.",
      ],
    },
    {
      company: "DSANDY LLC",
      logo: "dsandy",
      role: "Founder / Business Owner",
      period: "Oct. 30, 2025 – Present",
      note: "Part-time",
      bullets: [
        "Founded my own company in Wyoming, USA, focused on AliExpress drop shipping.",
        "Prepare financial reporting in Russia and the USA.",
        "Developed a SaaS platform for AliExpress drop shipping.",
        "Integrated Stripe to process payments worldwide.",
        "Building and growing an e-commerce brand.",
      ],
    },
  ],
  education: [
    {
      company: "Xi'an University of Petroleum",
      logo: "xupt",
      role: "Bachelor's Degree in International Economics and Trade",
      period: "2022 – 2027",
      note: "Expected",
      bullets: [
        "Studying international trade, economics, management, and related subjects.",
        "Actively participated in academic activities and conducted English classes for students.",
      ],
    },
  ],
  languages: [
    { name: "English", level: "Excellent", note: "IELTS 8.3 (9 Speaking)" },
    { name: "Chinese", level: "Confident", note: "HSK 5 Certificate" },
    { name: "Russian", level: "Native" },
  ],
  hobbies: [
    {
      icon: "pi pi-video",
      title: "Video Editing & Motion Design",
      desc: "YouTube channel with over 1.6 million views.",
    },
    {
      icon: "pi pi-desktop",
      title: "Video Game Modding",
      desc: "My Risk of Rain 2 mod in C# has over 13 thousand downloads on Thunderstore.",
    },
    {
      icon: "pi pi-user",
      title: "Actor / Model Experience",
      desc: "Worked as an actor and model in various cities across China. Hosted a live TikTok auction for a clothing brand in English.",
    },
  ],
};
