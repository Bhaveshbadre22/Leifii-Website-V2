import ImageScrollItem from "./ImageScrollItem";

const ImageScrollAnimation = ({ bannerData }: any) => {
  return (
    <div className="w-full bg-black rounded-t-3xl">
      {bannerData.map((service: any, index: number) => (
        <ImageScrollItem key={index} service={service} index={index} />
      ))}
    </div>
  );
};

export default ImageScrollAnimation;
