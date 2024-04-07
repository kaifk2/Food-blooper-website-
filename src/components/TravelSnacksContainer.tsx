import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button, IconButton } from "@chakra-ui/react";

export type TravelSnacksContainerType = {
  recipeImageUrl?: string;
  imageThumbnailUrl?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const TravelSnacksContainer: FunctionComponent<TravelSnacksContainerType> = ({
  recipeImageUrl,
  imageThumbnailUrl,
  propLeft,
  propWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[125px] left-[422px] w-[381px] h-[554px] text-left text-2xl text-primary font-poppins"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[381px] h-[554px]">
        <div className="absolute top-[0px] left-[0px] rounded-[20.94px] bg-white box-border w-[381px] h-[554px] border-[1.4px] border-solid border-lightsteelblue" />
        <div className="absolute top-[319.5px] left-[43.2px] flex flex-col items-start justify-start gap-[27.4px]">
          <div className="flex flex-col items-start justify-start gap-[13.7px]">
            <h3 className="m-0 relative text-inherit leading-[27px] font-bold font-inherit">
              {recipeImageUrl}
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
            style={groupButtonStyle}
          >
            Read More
          </Button>
        </div>
      </div>
      <img
        className="absolute top-[27px] left-[27px] rounded-2xl w-[326px] h-[258px] object-cover"
        alt=""
        src={imageThumbnailUrl}
      />
    </div>
  );
};

export default TravelSnacksContainer;
