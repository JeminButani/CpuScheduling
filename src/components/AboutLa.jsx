import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

import HomeImg2 from "../assets/Images/2.svg";
import HomeImg4 from "../assets/Images/4.svg";
import { useMediaQuery } from "@chakra-ui/react";

const AboutLa = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <div>
      {isLargerThan1280 ? (
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
            <Heading fontSize="6xl">About</Heading>
          </Box>
          <Box w="full" mt="30px">
            <Link to="/Home">
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

          <HStack spacing={6}>
            <VStack spacing={8}>
              <Heading fontSize="5xl">
                How this website help us understand about CPU Scheduling?
              </Heading>
              <Text mt={4} fontSize="3xl">
                Through this website we deliver to you some Information on CPU
                Scheduling. 4 Types of CPU Scheduling i.e. FCFS, SJF, RR & PS.
                We have provided the information of each of them with the steps
                to break through and understand the algarithm.
              </Text>
            </VStack>
            <Image
              src={HomeImg2}
              alt="Example1 img"
              mt="10px"
              width="40%"
              ml="10%"
            />
          </HStack>
          <HStack spacing={6} mt="10%">
            <Image
              src={HomeImg4}
              alt="Example1 img"
              mt="10px"
              width="40%"
              ml="10%"
            />
            <VStack spacing={8}>
              <Heading fontSize="5xl">Simulation</Heading>
              <Text mt={4} fontSize="3xl">
                Also We have provided the simulation for each of the algorithm
                so that you can try it yourself and understand the concepts
                throughly and clearly.
              </Text>
            </VStack>
          </HStack>
        </Box>
      ) : (
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
            <Heading fontSize="6xl">About</Heading>
          </Box>
          <Box w="full" mt="30px">
            <Link to="/Home">
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

          <VStack spacing={6}>
            <Image
              src={HomeImg2}
              alt="Example1 img"
              mt="10px"
              width="100%"
              ml="10%"
            />
            <VStack spacing={8}>
              <Heading fontSize="5xl">
                How this website help us understand about CPU Scheduling?
              </Heading>
              <Text mt={4} fontSize="3xl">
                Through this website we deliver to you some Information on CPU
                Scheduling. 4 Types of CPU Scheduling i.e. FCFS, SJF, RR & PS.
                We have provided the information of each of them with the steps
                to break through and understand the algarithm.
              </Text>
            </VStack>
          </VStack>
          <VStack spacing={6} mt="10%">
            <Image
              src={HomeImg4}
              alt="Example1 img"
              mt="10px"
              width="100%"
              ml="10%"
            />
            <VStack spacing={8}>
              <Heading fontSize="5xl">Simulation</Heading>
              <Text mt={4} fontSize="3xl">
                Also We have provided the simulation for each of the algorithm
                so that you can try it yourself and understand the concepts
                throughly and clearly.
              </Text>
            </VStack>
          </VStack>
        </Box>
      )}
    </div>
  );
};

export default AboutLa;
