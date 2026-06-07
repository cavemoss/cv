// Locale-independent data (skill tags, contact details, asset references).

export type SkillGroupKey = "hardSkills" | "softSkills" | "myStack";

export interface SkillGroup {
  key: SkillGroupKey;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: "hardSkills",
    items: ["Software Development", "AI Integration", "Video Editing"],
  },
  {
    key: "softSkills",
    items: ["Project Management", "Public Speaking", "Business Analysis"],
  },
  {
    key: "myStack",
    items: [
      "Linux",
      "Docker",
      "Nginx",
      "Git",
      "Python",
      "TypeScript",
      "FSD",
      "Node.js",
      "Vue",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Notion",
    ],
  },
];

export interface ContactLink {
  id: string;
  icon: string;
  text: string;
  href: string;
}

export const contacts: ContactLink[] = [
  {
    id: "email",
    icon: "pi pi-envelope",
    text: "alexshu1812@gmail.com",
    href: "mailto:daniil.sandy@gmail.com",
  },
  {
    id: "email",
    icon: "pi pi-envelope",
    text: "admin@dsandy.org",
    href: "mailto:admin@dsandy.org",
  },
  {
    id: "phone",
    icon: "pi pi-phone",
    text: "+7 (977) 144-16-92",
    href: "tel:+79771441692",
  },
  {
    id: "phone2",
    icon: "pi pi-phone",
    text: "+86 (132) 5988-5565",
    href: "tel:+8613259885565",
  },
  {
    id: "phone2",
    icon: "pi pi-phone",
    text: "+1 (651) 964-43-18",
    href: "tel:+16519644318",
  },
  {
    id: "telegram",
    icon: "pi pi-telegram",
    text: "@SanyaShaw",
    href: "https://t.me/SanyaShaw",
  },
];

// Maps a logo key (used in locale data) to a short label shown in the badge.
export const logoLabels: Record<string, string> = {
  ikm: "IKM",
  skyeng: "SE",
  genesis: "GEN",
  dsandy: "DS",
  xupt: "XU",
};

export const logoUrls: Record<string, string> = {
  ikm: "",
  skyeng:
    "https://cdn-user53347.skyeng.ru/assets/images/favicon/apple-touch-icon.png",
  genesis:
    "https://static.tildacdn.com/tild3761-3862-4136-a532-646639306266/favicon.ico",
  dsandy: "",
  xupt: "https://english.xsyu.edu.cn/favicon.ico",
};
