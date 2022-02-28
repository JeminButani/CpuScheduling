import React from "react";

import { useColorMode, Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiCpu } from "react-icons/fi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const Navbar = ({ Headsize, iconSize }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex bg="gray.200" w="100%" p={4} color="Black">
        <Box p="2">
          <FiCpu style={{ color: "#941cff" }} size={iconSize} />
        </Box>
        <Link to="/Home">
          <Box p="2">
            <Heading
              size={Headsize}
              color="#08c"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              CPU Scheduling Algorithms
            </Heading>
          </Box>
        </Link>
        <Spacer />
        <Link to="/Home">
          <Box p="2" mr="4">
            <FaHome style={{ color: "#941cff" }} size={iconSize} />
          </Box>
        </Link>
        <Link to="/about">
          <Box p="2" mr="4">
            <BsFillInfoSquareFill
              style={{ color: "#941cff" }}
              size={iconSize}
            />
          </Box>
        </Link>

        <Link onClick={toggleColorMode}>
          <Box p="2" mr="4">
            {colorMode === "light" ? (
              <FiMoon style={{ color: "#941cff" }} size={iconSize} />
            ) : (
              <FiSun style={{ color: "#941cff" }} size={iconSize} />
            )}
          </Box>
        </Link>
      </Flex>
    </header>
  );
};

export default Navbar;
