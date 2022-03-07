import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  SimpleGrid,
  Text,
  Input,
  VStack,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import AddInput from "./FcfsSimulate/AddInput";
import InputValue from "./FcfsSimulate/InputValue";

import { RiArrowGoBackFill } from "react-icons/ri";

const FcfsSimulate = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 900px)");

  let input;
  if (localStorage.getItem("input") === null) {
    input = [];
  } else {
    input = JSON.parse(localStorage.getItem("input"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setInputs(
      inputs.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(inputs));
  };
  const addInput = (arrT, burT) => {
    let sno;
    if (inputs.length === 0) {
      sno = 0;
    } else {
      sno = inputs[inputs.length - 1].sno + 1;
    }
    const myInput = {
      sno: sno,
      arrT: arrT,
      burT: burT,
    };

    setInputs([...inputs, myInput]);
  };

  const [inputs, setInputs] = useState(input);

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  function swap(pid, arr, bur, a, b) {
    let temp2 = pid[a];
    pid[a] = pid[b];
    pid[b] = temp2;

    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    let temp1 = bur[a];
    bur[a] = bur[b];
    bur[b] = temp1;
  }

  function CalculatingValues(processes, n, arr, bur) {
    let currT = 0;
    let comp = new Array(n),
      turn = new Array(n),
      wait = new Array(n),
      alloted = new Array(n);
    let total_turn = 0,
      total_wait = 0;
    let timeLine = [];
    for (let i = 0; i < n; i++) {
      timeLine.push(currT);

      if (i == 0) {
        //#Condition for first process
        if (arr[i] > 0) {
          //#If the arrival of first is greater than 0, then its completion will be arrival + Burst
          currT += bur[i] + arr[i];
          timeLine.push(arr[i]);
        } else {
          currT += bur[i]; //#Else completion will be the burst time
        }
        alloted[i] = arr[i]; //#CPU will be alloted to process 1 at arrival of 1st process
      } else {
        if (arr[i] > comp[i - 1]) {
          //#if the arrival of current process is greater than the completion of previous process
          currT += bur[i] + arr[i] - comp[i - 1]; //#then its completion will be the addition of the gap and its burst time.
          alloted[i] = arr[i]; //#CPU allocation will be arrival time of the process
          timeLine.push(arr[i]);
        } else {
          //#if the arrival of current process is less than or equal to the completion of previous process
          currT += bur[i]; //#then the completion will current time + Burst time.
          alloted[i] = comp[i - 1]; //#CPU allocation will the completion of previous process
        }
      }

      turn[i] = currT - arr[i]; //# Turn arround will be current time - its arrival time.
      total_turn += turn[i]; //# adding turnAround of each process for the average calculation.

      wait[i] = turn[i] - bur[i]; // # Waiting time be turnAround - Burst Time.
      total_wait += wait[i]; //# adding waiting of each process for the average calculation.

      comp[i] = currT;
    }
    timeLine.push(currT);

    for (let i = 0; i < n; i++) {
      document.getElementById("o1").innerHTML +=
        "Process ID: " + processes[i] + "<br>";
      document.getElementById("o2").innerHTML +=
        "Arrival Time    : " + arr[i] + "<br>";
      document.getElementById("o3").innerHTML +=
        "Burst Time    : " + bur[i] + "<br>";
      document.getElementById("o4").innerHTML +=
        "Completion Time    : " + comp[i] + "<br>";
      document.getElementById("o5").innerHTML +=
        "TurnAround Time    : " + turn[i] + "<br>";
      document.getElementById("o6").innerHTML +=
        "Waiting Time    : " + wait[i] + "<br>";
    }
    let l = timeLine.length;
    document.getElementById("o7").innerHTML += "TimeLine    : ";
    for (let i = 0; i < l; i++) {
      document.getElementById("o7").innerHTML += timeLine[i] + " ";
    }
    let s = Math.round((total_wait / n) * 100) / 100;
    let t = Math.round((total_turn / n) * 100) / 100;
    document.getElementById("o9").innerHTML =
      "Average waiting time = " + s + " sec.";

    document.getElementById("10").innerHTML =
      "Average turn around time = " + t + " sec.";
  }

  const fcfs = () => {
    let process_id = [1, 2, 3]; // Ids assigned by the program itself
    let n = process_id.length;

    //Input from the user and store values in array given below for arrival_time and burst_time.
    let arrival_time = [44, 7, 11];
    let burst_time = [1, 28, 12];

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (arrival_time[j] < arrival_time[i]) {
          swap(process_id, arrival_time, burst_time, i, j);
        }
      }
    }

    CalculatingValues(process_id, n, arrival_time, burst_time);
  };

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
          <Heading fontSize="4xl">FCFS Simulation</Heading>
        </Box>
        <Box w="full" mt="30px">
          <Link to="/fcfs">
            <Button
              colorScheme="purple"
              size="lg"
              borderRadius="3xl"
              fontSize="4xl"
              padding="20px"
              variant="solid"
              // cursor={pointer}
            >
              <RiArrowGoBackFill />
              &nbsp;Return
            </Button>
          </Link>
        </Box>

        <AddInput addInput={addInput} />
        <InputValue inputs={inputs} onDelete={onDelete} />

        {isLargerThan1280 ? (
          <SimpleGrid columns={2} spacing={10} mb="5%">
            <Box w="full" mt="30px">
              {/* <p id="output1"></p> */}
              <VStack spacing={4}>
                <Text id="o1" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o2" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o3" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o4" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o5" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o6" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o7" fontSize="2xl" mt="5%" w="100%"></Text>
                {/* <Text id="o8" fontSize="2xl" mt="5%" w="100%"></Text> */}
                <Text id="o9" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="10" fontSize="2xl" mt="5%" w="100%"></Text>
              </VStack>
            </Box>
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={1} spacing={10} mb="5%">
            <Box w="full" mt="30px">
              {/* <p id="output1"></p> */}
              <VStack spacing={4}>
                <Text id="o1" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o2" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o3" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o4" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o5" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o6" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="o7" fontSize="2xl" mt="5%" w="100%"></Text>
                {/* <Text id="o8" fontSize="2xl" mt="5%" w="100%"></Text> */}
                <Text id="o9" fontSize="2xl" mt="5%" w="100%"></Text>
                <Text id="10" fontSize="2xl" mt="5%" w="100%"></Text>
              </VStack>
            </Box>
          </SimpleGrid>
        )}
      </Box>
    </div>
  );
};

export default FcfsSimulate;

//  <Table
//             variant="striped"
//             colorScheme="purple"
//             mt="5%"
//             style={{ border: "1px solid #aa80ff", borderRadius: "5px" }}
//           >
//             <Thead>
//               <Tr>
//                 <Th>Process ID</Th>
//                 <Th>Arrival Time</Th>
//                 <Th>Burst Time</Th>
//                 <Th>Completion Time</Th>
//                 <Th>TurnAround Time</Th>
//                 <Th>Waiting Time</Th>
//               </Tr>
//             </Thead>

//             <Tbody>
//               <Tr>
//                 <Td>2</Td>
//                 <Td>7</Td>
//                 <Td>28</Td>
//                 <Td>35</Td>
//                 <Td>28</Td>
//                 <Td>0</Td>
//               </Tr>
//               <Tr>
//                 <Td>3</Td>
//                 <Td>11</Td>
//                 <Td>12</Td>
//                 <Td>47</Td>
//                 <Td>36</Td>
//                 <Td>24</Td>
//               </Tr>
//               <Tr>
//                 <Td>1</Td>
//                 <Td>44</Td>
//                 <Td>1</Td>
//                 <Td>48</Td>
//                 <Td>4</Td>
//                 <Td>3</Td>
//               </Tr>
//             </Tbody>
// </Table>
