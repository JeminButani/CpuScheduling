import React from "react";
import { Image, Spacer, Tag } from "@chakra-ui/react";
import HomeImg1 from "../assets/Images/1.svg";
import HomeImg2 from "../assets/Images/2.svg";
import HomeImg3 from "../assets/Images/3.svg";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import {
  Button,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import Jemin from "../assets/Images/Jemin2.png";
import Jemil from "../assets/Images/jemil.png";
import Dhruvit from "../assets/Images/Dhruvit.png";
import Shrey from "../assets/Images/shrey.png";

import { BsFillInfoSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeInfoSm = () => {
  return (
    <div>
      {/* cpu scheduling info  */}
      <VStack spacing={6}>
        <Image
          src={HomeImg2}
          alt="Example1 img"
          mt="10px"
          width="100%"
          ml="10%"
        />
        <VStack spacing={8}>
          <Heading
            fontSize="7xl"
            bgGradient={[
              "linear(to-b, orange.100, purple.300)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-tr, teal.300, pink.400)",
            ]}
            bgClip="text"
          >
            What is CPU Scheduling?
          </Heading>
          <Text mt={4} fontSize="3xl">
            CPU Scheduling is a process of determining which process will own
            CPU for execution while another process is on hold. The main task of
            CPU scheduling is to make sure that whenever the CPU remains idle,
            the OS at least select one of the processes available in the ready
            queue for execution.
          </Text>
        </VStack>
      </VStack>

      {/* algorithms  */}
      <SimpleGrid columns={1} spacingX="20px" spacingY="20px" mt="10%">
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
      <VStack mt="10%" spacing={6}>
        <Image
          src={HomeImg1}
          alt="Example1 img"
          mt="10px"
          width="100%"
          ml="10%"
        />

        {/* about  */}
        <VStack spacing={8}>
          <Heading
            fontSize="7xl"
            bgGradient={[
              "linear(to-b, orange.100, purple.300)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-tr, teal.300, pink.400)",
            ]}
            bgClip="text"
          >
            About
          </Heading>
          <Text mt={4} fontSize="3xl">
            To know more about this website please on the about button :
          </Text>
          <Link to="/about">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
              size="lg"
              fontSize="4xl"
              padding="6"
            >
              <BsFillInfoSquareFill />
              &nbsp;&nbsp; About
            </Button>
          </Link>
        </VStack>
      </VStack>
      <VStack mt="10%" spacing={6}>
        <Image
          src={HomeImg3}
          alt="Example1 img"
          mt="10px"
          width="100%"
          ml="10%"
        />
      </VStack>

      <Box paddingTop="50px" ml="10%" mr="10%">
        {/* team  */}
        <VStack spacing={8}>
          <Heading
            fontSize="7xl"
            bgGradient={[
              "linear(to-b, orange.100, purple.300)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-tr, teal.300, pink.400)",
            ]}
            bgClip="text"
          >
            Team
          </Heading>
          <Text mt={4} fontSize="3xl">
            Know more about the Team
          </Text>
        </VStack>

        {/* team members info */}

        {/* Jemin  */}
        <VStack mt="10%">
          <VStack spacing={6}>
            <Image
              src={Jemin}
              alt="Jemin img"
              mt="10px"
              width="80%"
              borderRadius="10%"
            />
            <Spacer />

            <VStack spacing={8} width="80%">
              <Heading
                fontSize="4xl"
                color="#08c"
                bgGradient={[
                  "linear(to-b, orange.100, purple.300)",
                  "linear(to-t, blue.200, teal.500)",
                  "linear(to-tr, teal.300, pink.400)",
                ]}
                bgClip="text"
              >
                Jemin Butani{" "}
                <Tag size="md" colorScheme="blue" borderRadius="full">
                  Team Lead
                </Tag>
                <Text mt={4} fontSize="2xl">
                  Computer Engineering, PDEU. <br />
                  20BCP094
                </Text>
              </Heading>

              <Text mt={4} fontSize="2xl" color="cyan">
                "Designing your Dreams..."
                <br />
              </Text>

              <HStack spacing={4}>
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "MongoDB",
                  "ExpressJs",
                  "ReactJs",
                  "NodeJs",
                ].map((size) => (
                  <Tag size="md" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>
              <HStack spacing={4}>
                {["NextJs", "ChakraUI", "Bootstrap", "MaterialUI", "Antd"].map(
                  (size) => (
                    <Tag
                      size="md"
                      key={size}
                      variant="subtle"
                      colorScheme="blue"
                    >
                      {size}
                    </Tag>
                  )
                )}
              </HStack>
              <HStack spacing={4}>
                {["Java", "C++", "MYSQL", "PHP"].map((size) => (
                  <Tag size="md" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>
              <HStack>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.linkedin.com/in/jemin-butani-a87073237/"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="linkedin"
                      leftIcon={<FaLinkedinIn />}
                    >
                      LinkedIn
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.instagram.com/jeminbutani_2606/"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="pink"
                      leftIcon={<FaInstagram />}
                    >
                      Instagram
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.facebook.com/jemin.butani.5/"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="facebook"
                      leftIcon={<FaFacebook />}
                    >
                      Facebook
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </HStack>
            </VStack>
          </VStack>
        </VStack>

        {/* Jemil  */}
        <VStack mt="10%">
          <VStack spacing={6}>
            <Image
              src={Jemil}
              alt="Jemil img"
              mt="10px"
              width="80%"
              borderRadius="10%"
            />
            <Spacer />

            <VStack spacing={8} width="80%">
              <Heading
                fontSize="4xl"
                color="#08c"
                bgGradient={[
                  "linear(to-b, orange.100, purple.300)",
                  "linear(to-t, blue.200, teal.500)",
                  "linear(to-tr, teal.300, pink.400)",
                ]}
                bgClip="text"
              >
                Jemil Dharia{" "}
                <Tag size="md" colorScheme="blue" borderRadius="full">
                  Team Member
                </Tag>
                <Text mt={4} fontSize="2xl">
                  Computer Engineering, PDEU. <br />
                  20BCP101
                </Text>
              </Heading>

              <Text mt={4} fontSize="2xl" color="cyan">
                "Computer Programmer"
                <br />
              </Text>

              <HStack spacing={4}>
                {["Python", "C", "Java", "Dart"].map((size) => (
                  <Tag size="lg" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>
              <HStack spacing={4}>
                {["Flutter", "HTML", "CSS", "JavaScript"].map((size) => (
                  <Tag size="lg" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>
              <HStack>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.linkedin.com/in/jemil-dharia-731b58200/"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="linkedin"
                      leftIcon={<FaLinkedinIn />}
                    >
                      LinkedIn
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.instagram.com/jemil_15/"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="pink"
                      leftIcon={<FaInstagram />}
                    >
                      Instagram
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.facebook.com/jass.dharia/"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="facebook"
                      leftIcon={<FaFacebook />}
                    >
                      Facebook
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </HStack>
            </VStack>
          </VStack>
        </VStack>

        {/* Dhruvit  */}
        <VStack mt="10%">
          <VStack spacing={6}>
            <Image
              src={Dhruvit}
              alt="Dhruvit img"
              mt="10px"
              width="80%"
              borderRadius="10%"
            />
            <Spacer />

            <VStack spacing={8} width="80%">
              <Heading
                fontSize="4xl"
                color="#08c"
                bgGradient={[
                  "linear(to-b, orange.100, purple.300)",
                  "linear(to-t, blue.200, teal.500)",
                  "linear(to-tr, teal.300, pink.400)",
                ]}
                bgClip="text"
              >
                Dhruvit Patel{" "}
                <Tag size="md" colorScheme="blue" borderRadius="full">
                  Team Member
                </Tag>
                <Text mt={4} fontSize="2xl">
                  Computer Engineering, PDEU. <br />
                  20BCP096
                </Text>
              </Heading>

              <Text mt={4} fontSize="2xl" color="cyan">
                "Programmer"
                <br />
              </Text>

              <HStack spacing={4}>
                {["HTML", "CSS", "JavaScript", "Java"].map((size) => (
                  <Tag size="lg" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>
              <HStack spacing={4}>
                {["Python", "ReactJS", "C", "C++"].map((size) => (
                  <Tag size="lg" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>
              <HStack>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.linkedin.com/in/dhruvit-patel-1615b4216"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="linkedin"
                      leftIcon={<FaLinkedinIn />}
                    >
                      LinkedIn
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.instagram.com/mr_dhr_007/"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="pink"
                      leftIcon={<FaInstagram />}
                    >
                      Instagram
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.facebook.com/dhruvit.patel.357284"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="facebook"
                      leftIcon={<FaFacebook />}
                    >
                      Facebook
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </HStack>
            </VStack>
          </VStack>
        </VStack>

        {/* shrey */}
        <VStack mt="10%">
          <VStack spacing={6}>
            <Image
              src={Shrey}
              alt="Dhruvit img"
              mt="10px"
              width="80%"
              borderRadius="10%"
            />
            <Spacer />

            <VStack spacing={8} width="80%">
              <Heading
                fontSize="4xl"
                color="#08c"
                bgGradient={[
                  "linear(to-b, orange.100, purple.300)",
                  "linear(to-t, blue.200, teal.500)",
                  "linear(to-tr, teal.300, pink.400)",
                ]}
                bgClip="text"
              >
                Shrey Kulkarni{" "}
                <Tag size="md" colorScheme="blue" borderRadius="full">
                  Team Member
                </Tag>
                <Text mt={4} fontSize="2xl">
                  Computer Engineering, PDEU. <br />
                  20BCP111
                </Text>
              </Heading>

              <Text mt={4} fontSize="2xl" color="cyan">
                "Programmer"
                <br />
              </Text>

              <HStack spacing={4}>
                {["Python", "C++", "C", "Java"].map((size) => (
                  <Tag size="lg" key={size} variant="subtle" colorScheme="blue">
                    {size}
                  </Tag>
                ))}
              </HStack>

              <HStack>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.linkedin.com/in/shrey-kulkarni-80b176218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0Qr7%2F7MpSIaaA3738pvzYA%3D%3D"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="linkedin"
                      leftIcon={<FaLinkedinIn />}
                    >
                      LinkedIn
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.instagram.com/kulkarnishrey/?hl=en"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="pink"
                      leftIcon={<FaInstagram />}
                    >
                      Instagram
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox as="article" maxW="sm" p="5">
                  <LinkOverlay
                    href="https://www.facebook.com/shrey.kulkarni.7"
                    isExternal
                  >
                    <Button
                      size="md"
                      colorScheme="facebook"
                      leftIcon={<FaFacebook />}
                    >
                      Facebook
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </div>
  );
};

export default HomeInfoSm;
