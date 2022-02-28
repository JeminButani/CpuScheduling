import React from "react";
import { Box } from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";
import HomeInfoLa from "./HomeInfoLa";
import HomeInfoSm from "./HomeInfoSm";

const Home = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <Box paddingTop="50px" ml="10%" mr="10%">
        {isLargerThan1280 ? <HomeInfoLa /> : <HomeInfoSm />}
      </Box>
    </div>
  );
};

export default Home;
