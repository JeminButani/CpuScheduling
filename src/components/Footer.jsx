import React from "react";
import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = ({ height }) => {
  return (
    <div>
      <Box mt={height}>
        <Flex bg="gray.200" w="100%" p={2} color="Black">
          <Spacer />
          <Box p="2">
            <AiFillCopyrightCircle
              style={{ fontSize: "32px", color: "#08c" }}
            />
          </Box>

          <Box p="2">
            <Heading size="lg" color="#08c">
              All Rights reserved to G3_Team5 PDEU,Gandhinagar.
            </Heading>
          </Box>
          <Spacer />
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
