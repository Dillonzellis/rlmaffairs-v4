export const testimonials = [
  {
    name: "Daniel Clifford",
    title: "Verified Graduate",
    quote:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    details:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    bgColor: "bg-brandGreen-400",
    textColor: "text-white",
    gridArea: "daniel",
  },
  {
    name: "Jonathan Walters",
    title: "Verified Graduate",
    quote: "The team was very supportive and kept me motivated",
    details:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
    bgColor: "bg-brandGold-400",
    textColor: "text-white",
    gridArea: "jonathan",
  },
  {
    name: "Kira Whittle",
    title: "Verified Graduate",
    quote: "Such a life-changing experience. Highly recommended!",
    details:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of experience. It certainly helped me land a job as a full-stack 100% recommend!",
    bgColor: "bg-white",
    textColor: "text-primary",
    gridArea: "kira",
  },
  {
    name: "Jeanette Harmon",
    title: "Verified Graduate",
    quote: "An overall wonderful and rewarding experience",
    details:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    bgColor: "bg-brandGreen-400 md:bg-white",
    textColor: "text-white md:text-primary",
    gridArea: "jeanette",
  },
  {
    name: "Patrick Abrams",
    title: "Verified Graduate",
    quote:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    details:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    bgColor: "bg-brandGold-400 md:bg-zinc-700",
    textColor: "text-white",
    gridArea: "patrick",
  },
  {
    name: "Patrick Abrams",
    title: "Verified Graduate",
    quote:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    details:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    bgColor: "bg-white md:bg-primary",
    textColor: "text-primary md:text-white",
    gridArea: "double",
  },
  {
    name: "Patrick Abrams",
    title: "Verified Graduate",
    quote:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    details:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    bgColor: "bg-brandGreen-400 md:bg-white",
    textColor: "text-white md:text-primary",
    gridArea: "single",
  },
] as const;

export type TypeTestimonial = (typeof testimonials)[number];
