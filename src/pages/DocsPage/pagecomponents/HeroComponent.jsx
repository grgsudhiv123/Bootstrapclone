import FirstComp from "./HeroPageComponent/FirstComp"
import SecondComp from "./HeroPageComponent/secondComp"
import ThirdComp from "./HeroPageComponent/ThirdComp"

const HeroComponent = () => {
  return (
    <div className="w-full md:w-[67%] h-fit sticky px-5">
      <FirstComp />
      <SecondComp />
      <ThirdComp />
    </div>
  );
};

export default HeroComponent;

