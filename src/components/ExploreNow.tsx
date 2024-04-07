import { FunctionComponent } from "react";
import { Button, IconButton } from "@chakra-ui/react";

const ExploreNow: FunctionComponent = () => {
  return (
    <Button
      className="absolute top-[556px] left-[97px]"
      variant="solid"
      w="190px"
      colorScheme="teal"
    >
      Explore Now!
    </Button>
  );
};

export default ExploreNow;
