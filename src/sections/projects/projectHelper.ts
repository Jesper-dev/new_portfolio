export type Project = {
  name: string;
  url: string;
  description: string;
};

export const projectsList: Project[] = [
  {
    name: "League auto chat",
    url: "https://github.com/Jesper-dev/leagueAutoChat",
    description:
      "Python project which lets you automatically send text messages in chat.",
  },
  {
    name: "What should I play",
    url: "https://what-should-i-play-rc161ij5w-jesperkyhs-projects.vercel.app/",
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
