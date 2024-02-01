interface BackgroundImageProps {
  imageUrl: string;
}

const BackgroundImage = ({ imageUrl }: BackgroundImageProps) => {
  return (
    <div
      className={`min-h-72 bg-cover bg-fixed bg-center bg-no-repeat md:min-h-[573px]`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default BackgroundImage;
