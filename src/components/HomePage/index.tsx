import React from "react";
import Main from "./Main";
import Advantage from "./Advantage";
import FactoryInformation from "./FactoryInformation";
import JoinUs from "./joinus";
import SlideInView from "../Animators/SlideOnView";
import MaxWidth from "../Wrapper/MaxWidth";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Main />
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
