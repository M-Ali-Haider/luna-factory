import SlideInView from "../Animators/SlideOnView";
import MaxWidth from "../Wrapper/MaxWidth";
import Advantage from "./Advantage";
import FactoryInformation from "./FactoryInformation";
import JoinUs from "./joinus";
import Main2 from "./Main2";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Main2 />
      <SlideInView from="bottom">
        <MaxWidth className="px-6">
          <Advantage />
        </MaxWidth>
      </SlideInView>
      <MaxWidth className="px-6">
        <FactoryInformation />
      </MaxWidth>
      <JoinUs />
    </div>
  );
};

export default HomePage;
