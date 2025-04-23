import { HeroParallaxDemo } from "../../../components/HeroParallaxDemo/HeroParallaxDemo";
import { MacbookScrollDemo } from "../../../components/MacBookDemo/MacbookScrollDemo";
import { ContainerScrollDemo } from "../../../components/ContainerScroll/ContainerScrollDemo";
import { FlipWordsDemo } from "../../../components/FlipWord/FlipWordsDemo";

const Web = () => {
  // const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  // useEffect(() => {
  //   setIsNavbarBlack(false);

  //   return () => {
  //     setIsNavbarBlack(true); // optional reset
  //   };
  // }, [setIsNavbarBlack]);
  return (
    <>
      <div>
        <MacbookScrollDemo />
        <FlipWordsDemo />
        <HeroParallaxDemo />
        <ContainerScrollDemo />
      </div>
    </>
  );
};

export default Web;
