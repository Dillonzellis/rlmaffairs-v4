import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { LetterForm } from "@/components/sections/love-letters/LetterForm";
import { PageLetter } from "@/components/sections/love-letters/PageLetter";
import { reviews } from "@/data/reviews";

import Image from "next/image";

const testimonials = [
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
    bgColor: "bg-white",
    textColor: "text-primary",
    gridArea: "jeanette",
  },
  {
    name: "Patrick Abrams",
    title: "Verified Graduate",
    quote:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    details:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    bgColor: "bg-zinc-700",
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
    bgColor: "bg-primary",
    textColor: "text-white",
    gridArea: "double",
  },
  {
    name: "Patrick Abrams",
    title: "Verified Graduate",
    quote:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    details:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    bgColor: "bg-white",
    textColor: "text-primary",
    gridArea: "single",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div
    className={`rounded-xl px-6 py-3 shadow-lg ${testimonial.bgColor} ${testimonial.textColor}`}
    style={{ gridArea: testimonial.gridArea }}
  >
    <div className="flex items-center gap-4 pb-4">
      <Image
        src=""
        alt="Reviewer Name"
        className="rounded-full border-2"
        width={45}
        height={45}
      />
      <div className="space-y-1-">
        <h3 className="font-inter text-sm font-bold">{testimonial.name}</h3>
        <p className="text-sm opacity-75">{testimonial.title}</p>
      </div>
    </div>
    <p className="pb-4 font-inter text-lg font-bold">{testimonial.quote}</p>
    <p className="text-sm italic">"{testimonial.details}"</p>
  </div>
);

const Testimonials = () => (
  <div
    className="md:grid-col-2 flex flex-col gap-6 p-4 md:grid lg:grid-cols-4"
    style={{
      gridTemplateAreas: `
    'daniel daniel jonathan kira'
    'jeanette patrick patrick kira'
    'jeanette patrick patrick kira'
    'double double single single'
  `,
    }}
  >
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ))}
  </div>
);

export default function LoveLettersHome() {
  return (
    <main className="bg-zinc-100">
      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Love Letters</MainHeader>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="py-12 lg:px-20">
        {/* <MaxWidthWrapper> */}
        {/*   <div className="flex flex-wrap justify-center gap-8"> */}
        {/*     {reviews.map((review, index) => ( */}
        {/*       <PageLetter {...review} key={index} /> */}
        {/*     ))} */}
        {/*   </div> */}
        {/* </MaxWidthWrapper> */}
        <Testimonials />
      </section>
    </main>
  );
}
