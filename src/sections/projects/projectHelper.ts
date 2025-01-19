export type Project = {
  name: string;
  url: string;
  description: string;
};

export const projectsList: Project[] = [
  {
    name: "What should I play",
    url: "",
    description: "A simple project I made to learn some basic SvelteKit",
  },
  {
    name: "Lets vest",
    url: "https://lets-vest.surge.sh/",
    description: "Project I made with some friends while in school",
  },
  {
    name: "Photo Portfolio",
    url: "https://photoportfolio.surge.sh/",
    description: "I made this to learn some vue and Nuxt",
  },
  {
    name: "BlogTS",
    url: "https://jesperpblogts.surge.sh/",
    description:
      "While in school I did this to learn how to work with a database",
  },
];
