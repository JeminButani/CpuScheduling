import React from "react";
import { Box, Button, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box paddingTop="50px" ml="10%" mr="10%">
        <SimpleGrid columns={2} spacingX="20px" spacingY="20px">
          <Box
            p={10}
            width="200px"
            shadow="2xl"
            boxShadow="dark-lg"
            borderWidth="4px"
            borderColor="blue.200"
            borderRadius="3xl"
            w="full"
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          >
            <Heading fontSize="4xl">FCFS</Heading>
            <Text mt={4} fontSize="lg">
              First-Come, First-Served Scheduling
            </Text>
            <Link to="/fcfs">
              <Button
                mt={4}
                border="2px"
                borderColor="blue.200"
                colorScheme="purple"
                variant="solid"
              >
                Open
              </Button>
            </Link>
          </Box>

          <Box
            p={10}
            width="40%"
            shadow="2xl"
            boxShadow="dark-lg"
            borderWidth="4px"
            w="full"
            borderColor="blue.200"
            borderRadius="3xl"
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          >
            <Heading fontSize="4xl">SJF</Heading>
            <Text mt={4} fontSize="lg">
              Shortest-Job-First Scheduling
            </Text>
            <Link to="/sjf">
              <Button
                mt={4}
                border="2px"
                borderColor="blue.200"
                colorScheme="purple"
                variant="solid"
              >
                Open
              </Button>
            </Link>
          </Box>

          <Box
            p={10}
            shadow="2xl"
            boxShadow="dark-lg"
            borderWidth="4px"
            w="full"
            borderColor="blue.200"
            borderRadius="3xl"
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          >
            <Heading fontSize="4xl">RR</Heading>
            <Text mt={4} fontSize="lg">
              Round Robin Scheduling
            </Text>
            <Link to="/rr">
              <Button
                mt={4}
                border="2px"
                borderColor="blue.200"
                colorScheme="purple"
                variant="solid"
              >
                Open
              </Button>
            </Link>
          </Box>

          <Box
            p={10}
            shadow="2xl"
            boxShadow="dark-lg"
            borderWidth="4px"
            w="full"
            borderColor="blue.200"
            borderRadius="3xl"
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          >
            <Heading fontSize="4xl">PS</Heading>
            <Text mt={4} fontSize="lg">
              Priority Scheduling
            </Text>
            <Link to="/ps">
              <Button
                mt={4}
                border="2px"
                borderColor="blue.200"
                colorScheme="purple"
                variant="solid"
              >
                Open
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Home;
