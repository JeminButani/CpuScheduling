import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

import fcfsExample1 from "../assets/Images/fcfsExample1.png";
import fcfsExample2 from "../assets/Images/fcfsExample2.png";
import fcfsExample3 from "../assets/Images/fcfsExample3.png";
import fcfsExample4 from "../assets/Images/fcfsExample4.png";
import fcfsExample5 from "../assets/Images/fcfsExample5.png";
import fcfsExample6 from "../assets/Images/fcfsExample6.png";
import fcfsExample7 from "../assets/Images/fcfsExample7.png";
import fcfsExample8 from "../assets/Images/fcfsExample8.png";
import fcfsExample9 from "../assets/Images/fcfsExample9.png";
import fcfsExample10 from "../assets/Images/fcfsExample10.png";
import fcfsExample11 from "../assets/Images/fcfsExample11.png";
import fcfsExample12 from "../assets/Images/fcfsExample12.png";
import fcfsExample13 from "../assets/Images/fcfsExample13.png";
import fcfsExample14 from "../assets/Images/fcfsExample14.png";
import fcfsExample15 from "../assets/Images/fcfsExample15.png";
import fcfsExample16 from "../assets/Images/fcfsExample16.png";
import fcfsExample17 from "../assets/Images/fcfsExample17.png";

import { useMediaQuery } from "@chakra-ui/react";
import Footer from "./Footer";

const FCFS = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

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
          <Heading fontSize="4xl">
            FCFS(First-Come, First-Served Scheduling)
          </Heading>
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
        <Box mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Click on Simulate button to Simulate:
          </Heading>
        </Box>
        <Box w="full" mt="30px">
          <Link to="/fcfs/fcfsSimulate">
            <Button
              colorScheme="purple"
              size="lg"
              borderRadius="3xl"
              fontSize="4xl"
              padding="20px"
              variant="solid"
            >
              <FaLaptopCode />
              &nbsp;&nbsp;Simulate
            </Button>
          </Link>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Information:
          </Heading>
          <Text mt="10px" fontSize="2xl">
            First Come First Serve (FCFS) is an operating system scheduling
            algorithm that automatically executes queued requests and processes
            in order of their arrival. It is the easiest and simplest CPU
            scheduling algorithm. In this type of algorithm, processes which
            requests the CPU first get the CPU allocation first. This is managed
            with a FIFO queue. The full form of FCFS is First Come First Serve.
            As the process enters the ready queue, its PCB (Process Control
            Block) is linked with the tail of the queue and, when the CPU
            becomes free, it should be assigned to the process at the beginning
            of the queue.
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" color="pink.300">
            Calculating Average Waiting Time
          </Heading>
          <Text mt="10px" fontSize="2xl">
            • It supports non-preemptive and pre-emptive scheduling algorithm.
            <br /> • Jobs are always executed on a first-come, first-serve
            basis. <br />• It is easy to implement and use. <br />• This method
            is poor in performance, and the general wait time is quite high.
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" color="pink.300">
            Example of FCFS scheduling
          </Heading>
          <Text mt="10px" fontSize="2xl">
            A real-life example of the FCFS method is buying a movie ticket on
            the ticket counter. In this scheduling algorithm, a person is served
            according to the queue manner. The person who arrives first in the
            queue first buys the ticket and then the next one. This will
            continue until the last person in the queue purchases the ticket.
            Using this algorithm, the CPU process works in a similar manner.
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" color="pink.300">
            How FCFS Works? Calculating Average Waiting Time:
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here is an example of five processes arriving at different times.
            Each process has a different burst time :
          </Text>
          <Image
            src={fcfsExample1}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            Using the FCFS scheduling algorithm, these processes are handled as
            follows. <br />
            <br />
            <b>Step 0: </b>The process begins with P4 which has arrival time 0
          </Text>
          <Image
            src={fcfsExample2}
            alt="Example2 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 1: </b>At time=1, P3 arrives. P4 is still executing. Hence,
            P3 is kept in a queue.
          </Text>
          <Image
            src={fcfsExample3}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image src={fcfsExample4} alt="Example4 img" width="80%" ml="10%" />
          <Image
            src={fcfsExample5}
            alt="Example3 img"
            mt="20px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 2: </b> At time= 2, P1 arrives which is kept in the queue.
          </Text>
          <Image
            src={fcfsExample6}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image
            src={fcfsExample7}
            alt="Example3 img"
            mt="20px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 3: </b> At time=3, P4 process completes its execution.
          </Text>
          <Image
            src={fcfsExample8}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 4: </b> At time=3, P4 process completes its execution.
          </Text>
          <Image
            src={fcfsExample9}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image
            src={fcfsExample10}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 5: </b> At time =5, P2 arrives, and it is kept in a queue.
          </Text>
          <Image
            src={fcfsExample11}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image
            src={fcfsExample12}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 6: </b> At time 11, P3 completes its execution.
          </Text>
          <Image
            src={fcfsExample13}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 7: </b> At time=11, P1 starts execution. It has a burst time
            of 6. It completes execution at time interval 17
          </Text>
          <Image
            src={fcfsExample14}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 8: </b> At time=17, P5 starts execution. It has a burst time
            of 4. It completes execution at time=21
          </Text>
          <Image
            src={fcfsExample15}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 9: </b> At time=21, P2 starts execution. It has a burst time
            of 2. It completes execution at time interval 23
          </Text>
          <Image
            src={fcfsExample16}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 10: </b> Let’s calculate the average waiting time for above
            example.
          </Text>
          <Image
            src={fcfsExample17}
            alt="Example3 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Heading fontSize="3xl" mt="10px" color="pink.300">
            Waiting time = Start time - Arrival time
          </Heading>
          <Text mt="10px" fontSize="2xl">
            P4 = 0-0 = 0<br />
            P3 = 3-1 = 2<br />
            P1 = 11-2 = 9<br />
            P5= 17-4 = 13
            <br />
            P2= 21-5= 16
            <br />
          </Text>
          <Heading fontSize="3xl" mt="10px" color="pink.300">
            Average Waiting Time =
          </Heading>
          <Text fontSize="2xl" mt="10px">
            0+2+9+13+16/5 <br />
            =40/5 = 8
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" mt="10px" color="pink.300">
            Advantages of FCFS :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here, are pros/benefits of using FCFS scheduling algorithm: <br />
            • Thesimplest form of a CPU scheduling algorithm <br />
            • Easy to program <br />• First come first serve
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" mt="10px" color="pink.300">
            Disadvantages of FCFS :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here, are cons/ drawbacks of using FCFS scheduling algorithm: <br />
            • It is a Non-Preemptive CPU scheduling algorithm, so after the
            process has been allocated to the CPU, it will never release the CPU
            until it finishes executing. <br />• The Average Waiting Time is
            high. <br />• Short processes that are at the back of the queue have
            to wait for the long process at the front to finish.
            <br /> • Not an ideal technique for time-sharing systems.
            <br /> • Because of its simplicity, FCFS is not very efficient.
          </Text>
        </Box>
      </Box>
      {isLargerThan1280 ? <Footer height="10%" /> : <Footer height="10%" />}
    </div>
  );
};

export default FCFS;
