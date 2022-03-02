import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

import sjfExample1 from "../assets/Images/sjfExample1.png";
import sjfExample2 from "../assets/Images/sjfExample2.png";
import sjfExample3 from "../assets/Images/sjfExample3.png";
import sjfExample4 from "../assets/Images/sjfExample4.png";
import sjfExample5 from "../assets/Images/sjfExample5.png";
import sjfExample6 from "../assets/Images/sjfExample6.png";
import sjfExample7 from "../assets/Images/sjfExample7.png";
import sjfExample8 from "../assets/Images/sjfExample8.png";
import sjfExample9 from "../assets/Images/sjfExample9.png";
import sjfExample10 from "../assets/Images/sjfExample10.png";
import sjfExample11 from "../assets/Images/sjfExample11.png";
import sjfExample12 from "../assets/Images/sjfExample12.png";
import sjfExample13 from "../assets/Images/sjfExample13.png";
import sjfExample14 from "../assets/Images/sjfExample14.png";
import sjfExample15 from "../assets/Images/sjfExample15.png";
import sjfExample16 from "../assets/Images/sjfExample16.png";
import sjfExample17 from "../assets/Images/sjfExample17.png";
import sjfExample18 from "../assets/Images/sjfExample18.png";
import sjfExample19 from "../assets/Images/sjfExample19.png";
import sjfExample20 from "../assets/Images/sjfExample20.png";
import sjfExample21 from "../assets/Images/sjfExample21.png";
import sjfExample22 from "../assets/Images/sjfExample22.png";
import sjfExample23 from "../assets/Images/sjfExample23.png";
import sjfExample24 from "../assets/Images/sjfExample24.png";
import sjfExample25 from "../assets/Images/sjfExample25.png";
import sjfExample26 from "../assets/Images/sjfExample26.png";
import sjfExample27 from "../assets/Images/sjfExample27.png";
import sjfExample28 from "../assets/Images/sjfExample28.png";
import sjfExample29 from "../assets/Images/sjfExample29.png";

import { useMediaQuery } from "@chakra-ui/react";
import Footer from "./Footer";

const SJF = () => {
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
          <Heading fontSize="4xl">SJF(Shortest-Job-First Scheduling)</Heading>
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
          <Link to="/sjf/sjfSimulate">
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
            Shortest Job First (SJF) is an algorithm in which the process having
            the smallest execution time is chosen for the next execution. This
            scheduling method can be preemptive or non-preemptive. It
            significantly reduces the average waiting time for other processes
            awaiting execution. The full form of SJF is Shortest Job First.
            There are basically two types of SJF methods:
            <br /> • Non-Preemptive SJF <br />• Preemptive SJF
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Characteristics of SJF Scheduling
          </Heading>
          <Text mt="10px" fontSize="2xl">
            • It is associated with each job as a unit of time to complete.
            <br /> • This algorithm method is helpful for batch-type processing,
            where waiting for jobs to complete is not critical. <br />• It can
            improve process throughput by making sure that shorter jobs are
            executed first, hence possibly have a short turnaround time.
            <br /> • It improves job output by offering shorter jobs, which
            should be executed first, which mostly have a shorter turnaround
            time.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Non-Preemptive SJF
          </Heading>
          <Text mt="10px" fontSize="2xl">
            In non-preemptive scheduling, once the CPU cycle is allocated to
            process, the process holds it till it reaches a waiting state or
            terminated.
            <br /> <br /> Consider the following five processes each having its
            own unique burst time and arrival time.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Image
            src={sjfExample1}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 0: </b>At time=0, P4 arrives and starts execution.
          </Text>
          <Image
            src={sjfExample2}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 1: </b>At time= 1, Process P3 arrives. But, P4 still needs 2
            execution units to complete. It will continue execution.
          </Text>
          <Image
            src={sjfExample3}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 2: </b>At time =2, process P1 arrives and is added to the
            waiting queue. P4 will continue execution.
          </Text>
          <Image
            src={sjfExample4}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 3: </b>At time = 3, process P4 will finish its execution.
            The burst time of P3 and P1 is compared. Process P1 is executed
            because its burst time is less compared to P3.
          </Text>
          <Image
            src={sjfExample5}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 4: </b>At time = 4, process P5 arrives and is added to the
            waiting queue. P1 will continue execution.
          </Text>
          <Image
            src={sjfExample6}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 5: </b>At time = 5, process P2 arrives and is added to the
            waiting queue. P1 will continue execution.
          </Text>
          <Image
            src={sjfExample7}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 6: </b>At time = 9, process P1 will finish its execution.
            The burst time of P3, P5, and P2 is compared. Process P2 is executed
            because its burst time is the lowest.
          </Text>
          <Image
            src={sjfExample8}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 7: </b>At time=10, P2 is executing and P3 and P5 are in the
            waiting queue.
          </Text>
          <Image
            src={sjfExample9}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 8: </b>At time = 11, process P2 will finish its execution.
            The burst time of P3 and P5 is compared. Process P5 is executed
            because its burst time is lower.
          </Text>
          <Image
            src={sjfExample10}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 9: </b> At time = 15, process P5 will finish its execution.
          </Text>
          <Image
            src={sjfExample11}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 10: </b> At time = 23, process P3 will finish its execution.
          </Text>
          <Image
            src={sjfExample12}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 11: </b> Let’s calculate the average waiting time for above
            example.
          </Text>
          <Text mt="10px" fontSize="2xl">
            <b>Wait time</b>
            <br />
            P4= 0-0=0 <br />
            P1= 3-2=1 <br />
            P2= 9-5=4 <br />
            P5= 11-4=7 <br />
            P3= 15-1=14
            <br />
            <b>Average Waiting Time= </b>
            <br />
            0+1+4+7+14/5 = 26/5 = 5.2
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Preemptive SJF
          </Heading>
          <Text mt="10px" fontSize="2xl">
            In Preemptive SJF Scheduling, jobs are put into the ready queue as
            they come. A process with shortest burst time begins execution. If a
            process with even a shorter burst time arrives, the current process
            is removed or preempted from execution, and the shorter job is
            allocated CPU cycle.
            <br /> <br /> Consider the following five process:
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Image
            src={sjfExample13}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 0: </b> At time=0, P4 arrives and starts execution. example.
          </Text>
          <Image
            src={sjfExample14}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image
            src={sjfExample15}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 1: </b> At time= 1, Process P3 arrives. But, P4 has a
            shorter burst time. It will continue execution.
          </Text>
          <Image
            src={sjfExample16}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 2: </b> At time = 2, process P1 arrives with burst time = 6.
            The burst time is more than that of P4. Hence, P4 will continue
            execution.
          </Text>
          <Image
            src={sjfExample17}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 3: </b>At time = 3, process P4 will finish its execution.
            The burst time of P3 and P1 is compared. Process P1 is executed
            because its burst time is lower.
          </Text>
          <Image
            src={sjfExample18}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 4: </b>At time = 4, process P5 will arrive. The burst time
            of P3, P5, and P1 is compared. Process P5 is executed because its
            burst time is lowest. Process P1 is preempted.
          </Text>
          <Image
            src={sjfExample19}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image src={sjfExample20} alt="Example1 img" width="80%" ml="10%" />
          <Image
            src={sjfExample21}
            alt="Example1 img"
            mt="20px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 5: </b>At time = 5, process P2 will arrive. The burst time
            of P1, P2, P3, and P5 is compared. Process P2 is executed because
            its burst time is least. Process P5 is preempted.
          </Text>
          <Image
            src={sjfExample22}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image
            src={sjfExample23}
            alt="Example1 img"
            mt="20px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 6: </b>At time =6, P2 is executing.
          </Text>
          <Image
            src={sjfExample24}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 7: </b>At time =7, P2 finishes its execution. The burst time
            of P1, P3, and P5 is compared. Process P5 is executed because its
            burst time is lesser.
          </Text>
          <Image
            src={sjfExample25}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Image
            src={sjfExample26}
            alt="Example1 img"
            mt="20px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 8: </b>) At time =10, P5 will finish its execution. The
            burst time of P1 and P3 is compared. Process P1 is executed because
            its burst time is less.
          </Text>
          <Image
            src={sjfExample27}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 9: </b>At time =15, P1 finishes its execution. P3 is the
            only process left. It will start execution.
          </Text>
          <Image
            src={sjfExample28}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 10: </b>At time =23, P3 finishes its execution.
          </Text>
          <Image
            src={sjfExample29}
            alt="Example1 img"
            mt="10px"
            width="80%"
            ml="10%"
          />
          <Text mt="10px" fontSize="2xl">
            <b>Step 11: </b>Let’s calculate the average waiting time for above
            example.
          </Text>
          <Text mt="10px" fontSize="2xl">
            <b>Wait time</b> <br />
            P4= 0-0=0 <br />
            P1= (3-2) + 6 =7 <br />
            P2= 5-5 = 0 <br />
            P5= 4-4+2 =2 <br />
            P3= 15-1 = 14 <br />
            <b>Average Waiting Time =</b> <br />
            0+7+0+2+14/5 = 23/5 =4.6
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Advantages of SJF:
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here are the benefits/pros of using SJF method: <br />• SJF is
            frequently used for long term scheduling. <br />• It reduces the
            average waiting time over FIFO (First in First Out) algorithm.{" "}
            <br />• SJF method gives the lowest average waiting time for a
            specific set of processes. <br />• It is appropriate for the jobs
            running in batch, where run times are known in advance. <br />• For
            the batch system of long-term scheduling, a burst time estimate can
            be obtained from the job description. <br />• For Short-Term
            Scheduling, we need to predict the value of the next burst time.{" "}
            <br />• Probably optimal with regard to average turnaround time.
          </Text>
        </Box>
        <Box w="full" mt="30px">
          <Heading fontSize="3xl" color="pink.300">
            Disadvantages/Cons of SJF:
          </Heading>
          <Text mt="10px" fontSize="2xl">
            Here are some drawbacks/cons of SJF algorithm: <br />• Job
            completion time must be known earlier, but it is hard to predict.{" "}
            <br />• It is often used in a batch system for long term scheduling.
            <br />• SJF can’t be implemented for CPU scheduling for the short
            term. It is because there is no specific method to predict the
            length of the upcoming CPU burst. <br />• This algorithm may cause
            very long turnaround times or starvation. <br />• Requires knowledge
            of how long a process or job will run. <br />• It leads to the
            starvation that does not reduce average turnaround time. <br />• It
            is hard to know the length of the upcoming CPU request. <br />•
            Elapsed time should be recorded, that results in more overhead on
            the processor.
          </Text>
        </Box>
      </Box>
      {isLargerThan1280 ? <Footer height="10%" /> : <Footer height="10%" />}
    </div>
  );
};

export default SJF;
