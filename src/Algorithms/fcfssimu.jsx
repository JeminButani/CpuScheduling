// import React, { Component } from "react";
// import {
//   Box,
//   Heading,
//   Button,
//   Stack,
//   InputGroup,
//   Input,
//   Text,
//   HStack,
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   VStack,
//   Spacer,
// } from "@chakra-ui/react";

// import { Link } from "react-router-dom";
// import { RiArrowGoBackFill } from "react-icons/ri";

// import { render } from "@testing-library/react";

// class FCFSS extends Component {
//   process = {
//     pro: null,
//   };

//   arrival = {
//     id: null,
//     arr: null,
//   };

//   componentDidMount() {
//     this.callBackendAPI()
//       .then((res) => this.setState({ data: res.express }))
//       .catch((err) => console.log(err));
//   }

//   // fetching the GET route from the Express server which matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch("/express_backend");
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message);
//     }
//     return body;
//   };

//   getarrivalTime = (event) => {
//     this.process.pro = event.target.value;
//   };

//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// //  output = async () => {
// //    const process = { pro: this.process.pro };

// //    for (let i = 1; i <= process.pro; i++) {
// //      render(
// //        <Box marginTop="20px" ml="10%" mr="10%">
// //          <Box w="full" mt="30px">
// //            <Stack spacing={5}>
// //              <Text mt="10px" fontSize="2xl">
// //                Enter Arrival time for Process {i}:
// //              </Text>
// //              <HStack>
// //                <InputGroup>
// //                  <Input
// //                    type="number"
// //                    placeholder="arrival Time"
// //                    focusBorderColor="pink.400"
// //                    borderColor="gray.200"
// //                    width="60%"
// //                  />
// //                </InputGroup>
// //                <Button ml={5} width="35%" bgColor="gray.200">
// //                  Add Value
// //                </Button>
// //              </HStack>
// //              <Text mt="10px" fontSize="2xl">
// //                Enter Burst time for Process {i}:
// //              </Text>
// //              <HStack>
// //                <InputGroup>
// //                  <Input
// //                    type="number"
// //                    placeholder="arrival Time"
// //                    focusBorderColor="pink.400"
// //                    borderColor="gray.200"
// //                    width="60%"
// //                  />
// //                </InputGroup>
// //                <Button ml={5} bg="gray.200" width="35%">
// //                  Add Value
// //                </Button>
// //              </HStack>
// //            </Stack>
// //          </Box>
// //        </Box>
// //      );
// //    }
// //  };

// // const FCFSS = () => {
// //   const [noOfProcesses, setNoOfProcesses] = useState([]);
// //   const [arrivalTime, setArrvialTime] = useState([]);
// //   const [burstTime, setBurstTime] = useState([]);

// //   const getNoOfProcesses = (event) => {
// //     setNoOfProcesses(event.target.value);
// //   };

// //   const getarrivalTime = (event) => {
// //     setNoOfProcesses(event.target.value);
// //   };

// //   const getburstTime = (event) => {
// //     setNoOfProcesses(event.target.value);
// //   };

// //   const NoOfProcessesBtn = (event) => {
// //     event.preventDefault();

// //     const processes = noOfProcesses;
// //     console.log(processes);
// //     console.log(noOfProcesses);
// //   };

// //   const ArrivalTimeBtn = (event) => {
// //     event.preventDefault();

// //     const arrivalTime = arrivalTime;
// //     console.log(arrivalTime);
// //   };
// //   const BurstTimeBtn = (event) => {
// //     event.preventDefault();

// //     const burstTime = burstTime;
// //   };

// //   var noOfInputs = () => {
// //     for (let index = 1; index <= noOfProcesses; index++) {
// //       render(
// // <div>
// //   <Box marginTop="20px" ml="10%" mr="10%">
// //     <Box w="full" mt="30px">
// //       <Stack spacing={5}>
// //         <Text mt="10px" fontSize="2xl">
// //           Enter Arrival time for Process {index}:
// //         </Text>
// //         <HStack>
// //           <InputGroup>
// //             <Input
// //               onChange={getarrivalTime}
// //               type="number"
// //               placeholder="arrival Time"
// //               focusBorderColor="pink.400"
// //               borderColor="gray.200"
// //               width="60%"
// //             />
// //           </InputGroup>
// //           <Button
// //             ml={5}
// //             onClick={ArrivalTimeBtn}
// //             width="35%"
// //             bgColor="gray.200"
// //           >
// //             Add Value
// //           </Button>
// //         </HStack>
// //         <Text mt="10px" fontSize="2xl">
// //           Enter Burst time for Process {index}:
// //         </Text>
// //         <HStack>
// //           <InputGroup>
// //             <Input
// //               onChange={getburstTime}
// //               type="number"
// //               placeholder="arrival Time"
// //               focusBorderColor="pink.400"
// //               borderColor="gray.200"
// //               width="60%"
// //             />
// //           </InputGroup>
// //           <Button
// //             ml={5}
// //             bg="gray.200"
// //             onClick={BurstTimeBtn}
// //             width="35%"
// //           >
// //             Add Value
// //           </Button>
// //         </HStack>
// //       </Stack>
// //     </Box>
// //   </Box>
// // </div>
// //       );
// //     }
// //   };

// //   return (
// // <div>
// //   <Box marginTop="20px" ml="10%" mr="10%">
// //     <Box
// //       marginTop="20px"
// //       p={7}
// //       shadow="2xl"
// //       borderWidth="4px"
// //       borderColor="blue.200"
// //       borderRadius="3xl"
// //       w="full"
// //       textAlign="center"
// //       bgGradient="linear(to-l, #7928CA, #FF0080)"
// //     >
// //       <Heading fontSize="4xl">FCFS Simulation</Heading>
// //     </Box>
// //     <Box w="full" mt="30px">
// //       <Link to="/fcfs">
// //         <Button
// //           colorScheme="purple"
// //           size="lg"
// //           borderRadius="3xl"
// //           fontSize="4xl"
// //           padding="20px"
// //           variant="solid"
// //         >
// //           <RiArrowGoBackFill />
// //           &nbsp;Return
// //         </Button>
// //       </Link>
// //     </Box>
// //     <Box w="full" mt="30px">
// //       <Stack spacing={5}>
// //         <Text mt="10px" fontSize="2xl" width="75%">
// //           Enter number of processes:
// //         </Text>
// //         <HStack>
// //           <InputGroup>
// //             <Input
// //               onChange={getNoOfProcesses}
// //               type="number"
// //               placeholder="No. of Processes"
// //               focusBorderColor="pink.400"
// //               borderColor="gray.200"
// //               width="75%"
// //             />
// //           </InputGroup>
// //           <Button
// //             ml="2%"
// //             bg="gray.200"
// //             color="black"
// //             width="25%"
// //             onClick={(NoOfProcessesBtn, noOfInputs)}
// //           >
// //             Add Value
// //           </Button>
// //         </HStack>
// //       </Stack>
// //     </Box>
// //   </Box>
// // </div>
// //   );
// // };
