export type ExperienceItem = {
  company: string;
  logo?: string;
  role?: string;
  period: string;
  note?: string;
  bullets: string[];
};

export type LanguageItem = {
  name: string;
  level: string;
  note?: string;
};

export type HobbyItem = {
  icon: string;
  title: string;
  desc: string;
  link?: string;
};

export type CvMessages = {
  header: {
    title: string;
  };
  sections: {
    skills: string;
    hardSkills: string;
    softSkills: string;
    myStack: string;
    languages: string;
    hobbies: string;
    work: string;
    education: string;
  };
  profile: {
    name: string;
    profession: string;
    location: string;
  };
  contact: {
    emailLabel: string;
    phoneLabel: string;
  };
  work: ExperienceItem[];
  education: ExperienceItem[];
  languages: LanguageItem[];
  hobbies: HobbyItem[];
};
