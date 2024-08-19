import Image from "next/image";

const Feature = [
  {
    featText: "2 Private Dressing Rooms",
    imgSrc: "/venue-feats/slide-1.jpg",
  },
  {
    featText: "Donut Wall & Victorian Donut Ladder",
    imgSrc: "/venue-feats/slide-2.jpg",
  },
  {
    featText: "Catering Station",
    imgSrc: "/venue-feats/slide-3.jpg",
  },
  {
    featText: "Built-In Bar",
    imgSrc: "/venue-feats/slide-4.jpg",
  },
  {
    featText: "Chilled Champaign Wall",
    imgSrc: "/venue-feats/slide-5.jpg",
  },
  {
    featText: "Dressing Suite & Separate Entrance",
    imgSrc: "/venue-feats/slide-6.jpg",
  },
  {
    featText: "Photo Wall",
    imgSrc: "/venue-feats/slide-7.jpg",
  },
  {
    featText: "Outdoor Ceremony Space",
    imgSrc: "/venue-feats/slide-8.jpg",
  },
  {
    featText: "Vintage Tables & Folding Chairs",
    imgSrc: "/venue-feats/slide-9.jpg",
  },
  {
    featText: "Dance Floor",
    imgSrc: "/venue-feats/slide-10.jpg",
  },
];

interface VenueFeatProps {
  featText: string;
  imgSrc: string;
}

const VenueFeat = ({ featText, imgSrc }: VenueFeatProps) => {
  return (
    <div className="relative">
      <Image
        src={imgSrc}
        width={800}
        height={450}
        className="aspect-video w-[100vw] object-cover md:w-[50vw]"
        alt={featText}
      />
      <div className="absolute bottom-5 left-5 text-xl italic text-white lg:text-3xl">
        {featText}
      </div>
    </div>
  );
};

interface VenueFeatRowProps {
  children: React.ReactNode;
}

const VenueFeatRow = ({ children }: VenueFeatRowProps) => {
  return (
    <div className="flex flex-col space-y-[4px] pb-[4px] md:flex-row md:space-x-[4px] md:space-y-0 md:px-[4px] md:pb-[4px]">
      {children}
    </div>
  );
};

const chunkArray = (arr: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export const VenueFeatGrid = () => {
  const chunks = chunkArray(Feature, 2);

  return (
    <>
      <section>
        {chunks.map((chunk, index) => (
          <VenueFeatRow key={index}>
            {chunk.map((feat, i) => (
              <VenueFeat
                key={i}
                featText={feat.featText}
                imgSrc={feat.imgSrc}
              />
            ))}
          </VenueFeatRow>
        ))}
      </section>
    </>
  );
};
