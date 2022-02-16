import React from "react";

import { useColorMode, Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiCpu } from "react-icons/fi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex bg="gray.200" w="100%" p={4} color="Black">
        <Box p="2">
          <FiCpu style={{ fontSize: "32px", color: "#941cff" }} />
        </Box>
        <Link to="/">
          <Box p="2">
            <Heading
              size="xl"
              color="#08c"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              CPU Scheduling Algorithms
            </Heading>
          </Box>
        </Link>
        <Spacer />
        <Link to="/">
          <Box p="2" mr="4">
            <HomeFilled style={{ fontSize: "32px", color: "#941cff" }} />
          </Box>
        </Link>

        <Link onClick={toggleColorMode}>
          <Box p="2" mr="4">
            {colorMode === "light" ? (
              <FiMoon style={{ fontSize: "32px", color: "#941cff" }} />
            ) : (
              <FiSun style={{ fontSize: "32px", color: "#941cff" }} />
            )}
          </Box>
        </Link>
      </Flex>
    </header>
  );
};

export default Navbar;
