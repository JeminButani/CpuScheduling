import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

import ps1 from "../assets/Images/ps1.png";
import ps2 from "../assets/Images/ps2.png";
import ps3 from "../assets/Images/ps3.png";
import ps4 from "../assets/Images/ps4.png";
import ps5 from "../assets/Images/ps5.png";
import ps6 from "../assets/Images/ps6.png";
import ps7 from "../assets/Images/ps7.png";
import ps8 from "../assets/Images/ps8.png";
import ps9 from "../assets/Images/ps9.png";
import ps10 from "../assets/Images/ps10.png";
import ps11 from "../assets/Images/ps11.png";
import ps12 from "../assets/Images/ps12.png";
import ps13 from "../assets/Images/ps13.png";
import ps14 from "../assets/Images/ps14.png";
import ps15 from "../assets/Images/ps15.png";
import ps16 from "../assets/Images/ps16.png";
import ps17 from "../assets/Images/ps17.png";
import ps18 from "../assets/Images/ps18.png";
import ps19 from "../assets/Images/ps19.png";
import ps20 from "../assets/Images/ps20.png";
import ps21 from "../assets/Images/ps21.png";
import ps22 from "../assets/Images/ps22.png";

import { useMediaQuery } from "@chakra-ui/react";
import Footer from "./Footer";

const PS = () => {
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
          <Heading fontSize="4xl">PS( Priority Scheduling )</Heading>
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
          <Link to="/ps/psSimulate">
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
            Priority Scheduling is a method of scheduling processes that is
            based on priority. In this algorithm, the scheduler selects the
            tasks to work as per the priority. The processes with higher
            priority should be carried out first, whereas jobs with equal
            priorities are carried out on a round-robin or FCFS basis. Priority
            depends upon memory requirements, time requirements, etc.
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" color="pink.300">
            Types of Priority Scheduling:-
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Priority scheduling divided into two main types:
          </Text>
          <Heading fontSize="2xl" mt="10px" color="pink.300">
            Preemptive Scheduling
          </Heading>
          <Text mt="10px" fontSize="2xl">
            In Preemptive Scheduling, the tasks are mostly assigned with their
            priorities. Sometimes it is important to run a task with a higher
            priority before another lower priority task, even if the lower
            priority task is still running. The lower priority task holds for
            some time and resumes when the higher priority task finishes its
            execution.
          </Text>
          <Heading fontSize="2xl" mt="10px" color="pink.300">
            Non-Preemptive Scheduling
          </Heading>
          <Text mt="10px" fontSize="2xl">
            In this type of scheduling method, the CPU has been allocated to a
            specific process. The process that keeps the CPU busy, will release
            the CPU either by switching context or terminating. It is the only
            method that can be used for various hardware platforms. That’s
            because it doesn’t need special hardware (for example, a timer) like
            preemptive scheduling.
          </Text>
        </Box>
        <Box w="full" mt="10px">
          <Heading fontSize="3xl" color="pink.300">
            Characteristics of Priority Scheduling:
          </Heading>
          <Text mt="10px" fontSize="2xl">
            • A CPU algorithm that schedules processes based on priority. <br />
            • It used in Operating systems for performing batch processes.
            <br />• If two jobs having the same priority are READY, it works on
            a FIRST COME, FIRST SERVED basis. <br />• In priority scheduling, a
            number is assigned to each process that indicates its priority
            level. <br />• Lower the number, higher is the priority. <br />• In
            this type of scheduling algorithm, if a newer process arrives, that
            is having a higher priority than the currently running process, then
            the currently running process is preempted.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Example of Priority Scheduling :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Consider following five processes P1 to P5. Each process has its
            unique priority, burst time, and arrival time.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Image src={ps1} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 0: </b> At time=0, Process P1 and P2 arrive. P1 has higher
            priority than P2. The execution begins with process P1, which has
            burst time 4.
          </Text>
          <Image src={ps2} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 1: </b> At time=1, no new process arrive. Execution
            continues with P1.
          </Text>
          <Image src={ps3} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 2: </b> At time 2, no new process arrives, so you can
            continue with P1. P2 is in the waiting queue.
          </Text>
          <Image src={ps4} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 3: </b> At time 3, no new process arrives so you can
            continue with P1. P2 process still in the waiting queue.
          </Text>
          <Image src={ps5} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 4: </b> At time 4, P1 has finished its execution. P2 starts
            execution.
          </Text>
          <Image src={ps6} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 5: </b> At time= 5, no new process arrives, so we continue
            with P2.
          </Text>
          <Image src={ps7} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 6: </b>At time=6, P3 arrives. P3 is at higher priority (1)
            compared to P2 having priority (2). P2 is preempted, and P3 begins
            its execution.
          </Text>
          <Image src={ps8} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Image src={ps9} alt="Example1 img" mt="20px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 7: </b>At time 7, no-new process arrives, so we continue
            with P3. P2 is in the waiting queue.
          </Text>
          <Image src={ps10} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 8: </b>At time= 8, no new process arrives, so we can
            continue with P3.
          </Text>
          <Image src={ps11} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 9: </b>At time= 9, no new process comes so we can continue
            with P3.
          </Text>
          <Image src={ps12} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 10: </b>At time interval 10, no new process comes, so we
            continue with P3
          </Text>
          <Image src={ps13} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 11: </b>At time=11, P4 arrives with priority 4. P3 has
            higher priority, so it continues its execution.
          </Text>
          <Image src={ps14} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Image src={ps15} alt="Example1 img" mt="20px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 12: </b>At time=12, P5 arrives. P3 has higher priority, so
            it continues execution.
          </Text>
          <Image src={ps16} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 13: </b>At time=13, P3 completes execution. We have P2,P4,P5
            in ready queue. P2 and P5 have equal priority. Arrival time of P2 is
            before P5. So P2 starts execution.
          </Text>
          <Image src={ps17} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Image src={ps18} alt="Example1 img" mt="20px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 14: </b>At time =14, the P2 process has finished its
            execution. P4 and P5 are in the waiting state. P5 has the highest
            priority and starts execution.
          </Text>
          <Image src={ps19} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 15: </b>At time =15, P5 continues execution.
          </Text>
          <Image src={ps20} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 16: </b>At time= 16, P5 is finished with its execution. P4
            is the only process left. It starts execution.
          </Text>
          <Image src={ps21} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 17: </b>At time =20, P5 has completed execution and no
            process is left.
          </Text>
          <Image src={ps22} alt="Example1 img" mt="10px" width="80%" ml="10%" />
          <Text mt="10px" fontSize="2xl">
            <b>Step 18: </b> Let’s calculate the average waiting time for the
            above example.
          </Text>
          <Text mt="10px" fontSize="2xl">
            <b>
              Waiting Time = start time – arrival time + wait time for next
              burst
            </b>
            <br />
            P1 = o - o = o <br />
            P2 =4 - o + 7 =11 <br />
            P3= 6-6=0 <br />
            P4= 16-11=5 <br />
            <b>Average Waiting time </b> <br />
            = (0+11+0+5+2)/5
            <br /> = 18/5
            <br /> = 3.6
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Advantages of priority scheduling :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here, are benefits/pros of using priority scheduling method: <br />•
            Easy to use scheduling method <br />• Processes are executed on the
            basis of priority so high priority does not need to wait for long
            which saves time <br />• This method provides a good mechanism where
            the relative important of each process may be precisely defined.
            <br />• Suitable for applications with fluctuating time and resource
            requirements.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Disadvantages of priority scheduling :
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here, are cons/drawbacks of priority scheduling <br />• If the
            system eventually crashes, all low priority processes get lost.
            <br />• If high priority processes take lots of CPU time, then the
            lower priority processes may starve and will be postponed for an
            indefinite time. <br />• This scheduling algorithm may leave some
            low priority processes waiting indefinitely. <br />• A process will
            be blocked when it is ready to run but has to wait for the CPU
            because some other process is running currently. <br />• If a new
            higher priority process keeps on coming in the ready queue, then the
            process which is in the waiting state may need to wait for a long
            duration of time.
          </Text>
        </Box>
      </Box>
      {isLargerThan1280 ? <Footer height="10%" /> : <Footer height="10%" />}
    </div>
  );
};

export default PS;
