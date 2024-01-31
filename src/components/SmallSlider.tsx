import Image from "next/image";

const imgs = [
  { src: "/catering-slide.jpg", alt: "venue" },
  { src: "/catering-slide-2.jpg", alt: "venue" },
  { src: "/catering-slide-3.jpg", alt: "venue" },
  { src: "/catering-slide.jpg", alt: "venue" },
];

export const SmallSlider = () => {
  return (
    <div className="flex overflow-hidden">
      {imgs.map((img, idx) => (
        <Image
          key={idx}
          src={img.src}
          alt={img.alt}
          width={365}
          height={335}
          className="min-h-[335px] object-cover"
        />
      ))}
    </div>
  );
};
