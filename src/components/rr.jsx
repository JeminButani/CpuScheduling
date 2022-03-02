import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

import rr1 from "../assets/Images/rr1.png";
import rr2 from "../assets/Images/rr2.png";
import rr3 from "../assets/Images/rr3.png";
import rr4 from "../assets/Images/rr4.png";
import rr5 from "../assets/Images/rr5.png";
import rr6 from "../assets/Images/rr6.png";
import rr7 from "../assets/Images/rr7.png";
import rr8 from "../assets/Images/rr8.png";
import rr9 from "../assets/Images/rr9.png";

import { useMediaQuery } from "@chakra-ui/react";
import Footer from "./Footer";

const RR = () => {
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
          <Heading fontSize="4xl">RR(Round Robin Scheduling)</Heading>
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
          <Link to="/rr/rrSimulate">
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
            The name of this algorithm comes from the round-robin principle,
            where each person gets an equal share of something in turns. It is
            the oldest, simplest scheduling algorithm, which is mostly used for
            multitasking. In Round-robin scheduling, each ready task runs turn
            by turn only in a cyclic queue for a limited time slice. This
            algorithm also offers starvation free execution of processes.should
            be assigned to the process at the beginning of the queue.
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" color="pink.300">
            Characteristics of Round-Robin Scheduling:-
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here are the important characteristics of Round-Robin Scheduling:{" "}
            <br />• Round robin is a pre-emptive algorithm <br />• The CPU is
            shifted to the next process after fixed interval time, which is
            called time quantum/time slice. <br />• The process that is
            preempted is added to the end of the queue. <br />• Round robin is a
            hybrid model which is clock-driven <br />• Time slice should be
            minimum, which is assigned for a specific task that needs to be
            processed. However, it may differ OS to OS. <br />• It is a real
            time algorithm which responds to the event within a specific time
            limit. <br />• Round robin is one of the oldest, fairest, and
            easiest algorithm. <br />• Widely used scheduling method in
            traditional OS.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Example of Round-robin Scheduling :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Consider this following three processes
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Image src={rr1} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Image src={rr2} alt="Example1 img" mt="30px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 1: </b> The execution begins with process P1, which has
            burst time 4. Here, every process executes for 2 seconds. P2 and P3
            are still in the waiting queue.
          </Text>
          <Image src={rr3} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 2: </b> At time =2, P1 is added to the end of the Queue and
            P2 starts executing
          </Text>
          <Image src={rr4} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 3: </b> At time=4 , P2 is preempted and add at the end of
            the queue. P3 starts executing.
          </Text>
          <Image src={rr5} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 4: </b> At time=6 , P3 is preempted and add at the end of
            the queue. P1 starts executing.
          </Text>
          <Image src={rr6} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 5: </b> At time=8 , P1 has a burst time of 4. It has
            completed execution. P2 starts execution
          </Text>
          <Image src={rr7} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 6: </b> P2 has a burst time of 3. It has already executed
            for 2 interval. At time=9, P2 completes execution. Then, P3 starts
            execution till it completes.
          </Text>
          <Image src={rr8} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 7: </b> Let’s calculate the average waiting time for above
            example.
            <br />
            <b>Wait time =</b> <br />
            P1= 0+ 4= 4 <br />
            P2= 2+4= 6 <br />
            P3= 4+3= 7
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Advantage of Round-robin Scheduling :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here, are pros/benefits of Round-robin scheduling method: <br />• It
            doesn’t face the issues of starvation or convoy effect. <br />• All
            the jobs get a fair allocation of CPU. <br />• It deals with all
            process without any priority <br />• If you know the total number of
            processes on the run queue, then you can also assume the worst-case
            response time for the same process. <br />• This scheduling method
            does not depend upon burst time. That’s why it is easily
            implementable on the system. <br />• Once a process is executed for
            a specific set of the period, the process is preempted, and another
            process executes for that given time period. <br />• Allows OS to
            use the Context switching method to save states of preempted
            processes. <br />• It gives the best performance in terms of average
            response time.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Disadvantages of Round-robin Scheduling :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here, are drawbacks/cons of using Round-robin scheduling: <br />• If
            slicing time of OS is low, the processor output will be reduced.
            <br />• This method spends more time on context switching <br />•
            Its performance heavily depends on time quantum. <br />• Priorities
            cannot be set for the processes. <br />• Round-robin scheduling
            doesn’t give special priority to more important tasks. <br />•
            Decreases comprehension <br />• Lower time quantum results in higher
            the context switching overhead in the system. <br />• Finding a
            correct time quantum is a quite difficult task in this system.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Worst Case Latency :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            This term is used for the maximum time taken for execution of all
            the tasks. <br />• dt = Denote detection time when a task is brought
            into the list <br />• st = Denote switching time from one task to
            another <br />• et = Denote task execution time
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Formula:
          </Heading>
          <Image src={rr9} alt="Example1 img" mt="10px" width="80%" ml="10%" />
        </Box>
      </Box>
      {isLargerThan1280 ? <Footer height="10%" /> : <Footer height="10%" />}
    </div>
  );
};

export default RR;
