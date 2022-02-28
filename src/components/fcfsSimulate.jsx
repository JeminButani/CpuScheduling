import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  Stack,
  InputGroup,
  Input,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const getLocalData = () => {
  const list = localStorage.getItem("ArrivalTime");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const FCFSS = () => {
  // console.log(noOfProcesses);

  // const [arivalTime, setArivalTime] = useState([]);
  // const [aT, setAT] = useState(getLocalData());
  // console.log(arivalTime);

  // const AddArivalTime = () => {
  //   if (!arivalTime) {
  //     alert("Please Fill the Data");
  //   } else {
  //     const newArivalTime = {
  //       id: new Date().getTime().toString(),
  //       name: arivalTime,
  //     };
  //     setAT([...aT, newArivalTime]);
  //     setArivalTime("");
  //   }
  // };

  const [noOfProcesses, setNoOfProcesses] = useState({ p: null });
  const [arrivalTime, setArrivalTime] = useState({ id: null, at: null });
  const [burstTime, setBurstTime] = useState({ id: null, bt: null });

  const getArrivalTime = (event) => {
    setArrivalTime({ id: Date(), at: event.target.value });
  };
  const getBurstTime = (event) => {
    setBurstTime({ id: Date(), bt: event.target.value });
  };
  const getNoOfProcesses = (event) => {
    setNoOfProcesses({ p: event.target.value });
  };

  const NoOfProcessesBtn = (event) => {
    event.preventDefault();

    const processes = noOfProcesses.p;
    console.log(processes);
    console.log(noOfProcesses);
  };

  const submitBtn = (event) => {
    event.preventDefault();

    const AtValue = arrivalTime.at;
    const BtValue = burstTime.bt;

    console.log(AtValue);
    console.log(BtValue);
  };

  useEffect(() => {
    localStorage.setItem("ArrivalTime", JSON.stringify());
  }, []);

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
            >
              <RiArrowGoBackFill />
              &nbsp;Return
            </Button>
          </Link>
        </Box>
        <Box w="full" mt="30px">
          <Stack spacing={5}>
            <Text mt="10px" fontSize="2xl">
              Enter number of processes:
            </Text>
            <InputGroup>
              <Input
                onChange={getNoOfProcesses}
                type="number"
                placeholder="No. of Processes"
                focusBorderColor="pink.400"
                borderColor="gray.200"
              />
            </InputGroup>
            <Button
              ml={5}
              bg="gray.200"
              color="black"
              onClick={NoOfProcessesBtn}
            >
              Add Value
            </Button>

            <Text mt="10px" fontSize="2xl">
              Enter Arrival Time:
            </Text>
            <InputGroup>
              <Input
                onChange={getArrivalTime}
                type="number"
                placeholder="No. of Processes"
                focusBorderColor="pink.400"
                borderColor="gray.200"
              />
            </InputGroup>

            <Text mt="10px" fontSize="2xl">
              Enter Burst Time:
            </Text>
            <InputGroup>
              <Input
                onChange={getBurstTime}
                type="number"
                placeholder="No. of Processes"
                focusBorderColor="pink.400"
                borderColor="gray.200"
              />
            </InputGroup>
            <Button ml={5} bg="gray.200" color="black" onClick={submitBtn}>
              Add Value
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default FCFSS;
