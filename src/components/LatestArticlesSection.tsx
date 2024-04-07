import { FunctionComponent } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import TravelSnacksContainer from "./TravelSnacksContainer";

const LatestArticlesSection: FunctionComponent = () => {
  return (
    <section className="absolute top-[1614px] left-[108px] w-[1225px] h-[679px] text-left text-2xl text-primary font-poppins">
      <h1 className="m-0 absolute top-[0px] left-[0px] text-37xl tracking-[0.04em] leading-[42px] font-semibold font-source-sans-pro inline-block w-[461px] h-[84px]">
        Latest Articles
      </h1>
      <div className="absolute top-[125px] left-[0px] w-[381px] h-[554px]">
        <div className="absolute top-[0px] left-[0px] rounded-[20.94px] bg-white box-border w-[381px] h-[554px] border-[1.4px] border-solid border-lightsteelblue" />
        <img
          className="absolute top-[27px] left-[27px] rounded-2xl w-[326px] h-[257px] object-cover"
          alt=""
          src="/grilledtomatoes1846x846-1@2x.png"
        />
        <div className="absolute top-[319.5px] left-[43.2px] w-[295px] h-[194.5px] flex flex-col items-start justify-start gap-[27.4px]">
          <div className="h-[125px] flex flex-col items-start justify-start gap-[14px]">
            <h3 className="m-0 relative text-inherit leading-[27px] font-bold font-inherit whitespace-pre-wrap">
              Grilled Tomatoes at Home
            </h3>
            <div className="w-[295px] relative text-mini tracking-[-0.02em] leading-[27px] font-open-sans text-body inline-block">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
          </div>
          <Button
            className="w-[131px]"
            variant="solid"
            w="131px"
            colorScheme="teal"
          >
            Read More
          </Button>
        </div>
      </div>
      <TravelSnacksContainer
        recipeImageUrl="Snacks for Travel"
        imageThumbnailUrl="/mealprepideas846x846-1@2x.png"
      />
      <TravelSnacksContainer
        recipeImageUrl="Post-workout Recipes"
        imageThumbnailUrl="/mealprepideas846x846-11@2x.png"
        propLeft="844px"
        propWidth="unset"
      />
    </section>
  );
};

export default LatestArticlesSection;
