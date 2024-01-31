interface BackgroundImageProps {
  imageUrl: string;
}

const BackgroundImage = ({ imageUrl }: BackgroundImageProps) => {
  return (
    <div
      className={`bg-center bg-fixed bg-no-repeat h-[434px] bg-cover`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default BackgroundImage;
