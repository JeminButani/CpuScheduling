import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const rrSimulate = () => {
  return (
    <div>
      <Box marginTop="20px" ml="10%" mr="10%">
        <Box
          marginTop="20px"
          p={7}
          shadow="2xl"
          borderWidth="4px"
          borderColor="blue.200"
          borderRadius="3xl"
          w="full"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">RR Simulation</Heading>
        </Box>
        <Box w="full" mt="30px">
          <Link to="/rr">
            <Button
              colorScheme="purple"
              size="lg"
              borderRadius="3xl"
              fontSize="4xl"
              padding="20px"
              variant="solid"
            >
              <RiArrowGoBackFill />
              &nbsp;Return
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default rrSimulate;
