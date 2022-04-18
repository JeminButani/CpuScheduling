import React, { useState, useEffect } from "react";
import { Box, Heading, Button, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import AddInput from "./rrSimulate/AddInput1";
import InputValue from "./rrSimulate/InputValue1";
import AddInputquant from "./rrSimulate/AddInputquant";
import InputValuequant from "./rrSimulate/InputValuequant";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import reactDom from "react-dom";

const RrSimulate = () => {
  //for responsiveness
  const [isLargerThan1280] = useMediaQuery("(min-width: 900px)");
  // Utility methods for Data Input
  let input = [];
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
      sno = 1;
    } else {
      sno = inputs[inputs.length - 1].sno + 1;
    }
    const myInput = {
      sno: sno,
      arrT: arrT,
      burT: burT,
      // prio: prio,
    };
    setInputs([...inputs, myInput]);
  };
  const [inputs, setInputs] = useState(input);
  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  // for quantum time
  let quantInput = [];
  if (localStorage.getItem("quantInput") === null) {
    quantInput = [];
  } else {
    quantInput = JSON.parse(localStorage.getItem("quantInput"));
  }

  const onDeleteq = (todo) => {
    console.log("I am ondelete", todo);
    setInputs(
      inputs.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(qtinput));
  };

  const addInputq = (timequantum) => {
    let sno;

    if (qtinput.length === 0) {
      sno = 1;
    }
    // else if (qtinput.length === 1) {
    //   alert("This Vlaue can be Entered only once!");
    // }
    var myInputq = {};
    if (sno === 1) {
      myInputq = {
        sno: sno,
        timequantum: timequantum,
        // prio: prio,
      };
    } else {
      alert("This Vlaue can be Entered only once!");
    }

    setQtinput([...qtinput, myInputq]);
  };
  const [qtinput, setQtinput] = useState(quantInput);
  useEffect(() => {
    localStorage.setItem("qtinput", JSON.stringify(qtinput));
  }, [qtinput]);

  //time complexity: O(n^2) {Sorting.}
  //Space complexity: O(n) {Arrays for displaying and storing values}
  /*utility function to sort the processes according to arrival time followed by pId.
  pid= Process id, arr = Arrival time , bur = burst time , a&b = index values.
  time = Current Time,comp = completion time, turn = turnAround time, wait = waiting time
  total_turn= total turnAround time, total_wait= total waiting time
  timeLine= process timeline, sequence = sequence of processes
  count = count of processes completed*/
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

  let comp = [],
    turn = [],
    wait = [];

  let total_turn = 0,
    total_wait = 0;
  let timeLine = [],
    sequence = [];

  /* Taking Input as : 
  Array processes: process id
  int n: total number of processes
  Array arr: array of arrival time
  Array bur: array of burst time
  and passing them as arguments in CalculatingValues function.
  */
  //Time complexity of this function: O(n^2)
  function CalculatingValues(processes, n, arr, bur, q) {
    //creating copy of the burst time array to keep track of prempted remaining time.
    let burst_copy = [];
    var m = bur[0];
    for (let i = 0; i < n; i++) {
      burst_copy[i] = bur[i];
      if (i > 0 && bur[i] > bur[i - 1]) {
        m = bur[i];
      }
    }
    let no_of_times = 0;
    if (m % q == 0) no_of_times = parseInt(m / q);
    else no_of_times = parseInt(m / q) + 1;

    let index = [],
      sum = 0,
      length = 0;
    let currT = arr[0];
    timeLine.push(currT);

    for (let j = 0; j < no_of_times; j++) {
      for (let i = 0; i < n; i++) {
        if (burst_copy[i] >= q) {
          currT += q;
          timeLine.push(currT);
          burst_copy[i] -= q;
          sequence.push(processes[i]);
        } else if (burst_copy[i] != 0 && burst_copy[i] < q) {
          currT += burst_copy[i];
          timeLine.push(currT);
          burst_copy[i] = 0;
          sequence.push(processes[i]);
        }

        if (
          (burst_copy[i] == 0 && length == 0) ||
          (burst_copy[i] == 0 && comp[length - 1] != currT)
        ) {
          index.push(i);
          comp.push(currT);
          length += 1;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (index[j] < index[i]) {
          let temp = comp[i];
          comp[i] = comp[j];
          comp[j] = temp;

          let temp1 = index[i];
          index[i] = index[j];
          index[j] = temp1;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      turn.push(comp[i] - arr[i]);
      total_turn += turn[i];
      wait.push(turn[i] - bur[i]);
      total_wait += wait[i];
    }

    reactDom.render(
      <table class="table-dark table-striped  table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Process ID</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Burst Time</th>
            {/* <th scope="col">Priority</th> */}
            <th scope="col">Completion Time</th>
            {/* <th scope="col">Allotment Time</th>
        <th scope="col">Response Time</th> */}
            <th scope="col">TurnAround Time</th>
            <th scope="col">Waiting Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Text id="o1" fontSize="2xl" mt="5%" w="100%"></Text>
            </td>
            <td>
              <Text id="o2" fontSize="2xl" mt="5%" w="100%"></Text>
            </td>
            <td>
              <Text id="o3" fontSize="2xl" mt="5%" w="100%"></Text>
            </td>
            <td>
              <Text id="o4" fontSize="2xl" mt="5%" w="100%"></Text>
            </td>
            {/* <td>
          <Text id="o5" fontSize="2xl" mt="5%" w="100%"></Text>
        </td>
        <td>
          <Text id="o6" fontSize="2xl" mt="5%" w="100%"></Text>
        </td> */}
            <td>
              <Text id="o7" fontSize="2xl" mt="5%" w="100%"></Text>
            </td>
            <td>
              <Text id="o8" fontSize="2xl" mt="5%" w="100%"></Text>
            </td>
          </tr>
        </tbody>
      </table>,
      document.getElementById("tableHead")
    );

    for (let i = 0; i < n; i++) {
      document.getElementById("o1").innerHTML += processes[i] + "<br>";
      document.getElementById("o2").innerHTML += arr[i] + "<br>";
      document.getElementById("o3").innerHTML += bur[i] + "<br>";
      // document.getElementById("13").innerHTML += prio[i] + "<br>";
      document.getElementById("o4").innerHTML += comp[i] + "<br>";
      // document.getElementById("o5").innerHTML += alloted[i] + "<br>";
      // document.getElementById("o6").innerHTML += response[i] + "<br>";
      document.getElementById("o7").innerHTML += turn[i] + "<br>";
      document.getElementById("o8").innerHTML += wait[i] + "<br>";
    }
    let l = timeLine.length,
      s_l = sequence.length;
    document.getElementById("o9").innerHTML += "Sequence    : ";
    for (let i = 0; i < s_l; i++)
      document.getElementById("o9").innerHTML += sequence[i] + " ";
    // to be included in gantt chart blocks
    document.getElementById("10").innerHTML += "TimeLine    : ";
    for (let i = 0; i < l; i++)
      document.getElementById("10").innerHTML += timeLine[i] + " ";
    // to be displayed below the gantt chart as labels.
    let s = Math.round((total_wait / n) * 100) / 100;
    let t = Math.round((total_turn / n) * 100) / 100;
    document.getElementById("11").innerHTML =
      "Average waiting time = " + s + " unit.";
    document.getElementById("12").innerHTML =
      "Average turn around time = " + t + " unit.";
  } //calculatingValues ends here.

  // Retriving the input values and storing in array
  let Process_Id = [];
  inputs.map((input) => {
    return Process_Id.push(parseInt(input.sno));
  });
  let Arrival_Time = [];
  inputs.map((input) => {
    return Arrival_Time.push(parseInt(input.arrT));
  });
  let Burst_Time = [];
  inputs.map((input) => {
    return Burst_Time.push(parseInt(input.burT));
  });
  let Quntum_Time = [];
  qtinput.map((qtinput) => {
    return Quntum_Time.push(parseInt(qtinput.timequantum));
  });
  // let Priority = [];
  // inputs.map((input) => {
  //   return Priority.push(parseInt(input.prio));
  // });

  let quanta = Quntum_Time[0];
  const rr = (input) => {
    let process_id = Process_Id; // Ids assigned by the program itself

    let n = process_id.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (Arrival_Time[j] < Arrival_Time[i])
          swap(process_id, Arrival_Time, Burst_Time, i, j);
        else if (
          Arrival_Time[j] == Arrival_Time[i] &&
          process_id[j] < process_id[i]
        )
          swap(process_id, Arrival_Time, Burst_Time, i, j);
      }
    }
    if (process_id.length === 0) alert("Please Input some data");
    else CalculatingValues(Process_Id, n, Arrival_Time, Burst_Time, quanta);
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
          <Heading fontSize="4xl">RR Simulation</Heading>
        </Box>
        <Box w="full" mt="30px">
          <Link to="/sjf">
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

        <AddInputquant AddInputquant={addInputq} />
        <InputValuequant qtinput={qtinput} onDelete={onDeleteq} />

        <AddInput addInput={addInput} />

        <InputValue inputs={inputs} onDelete={onDelete} />

        <Button
          mt="4%"
          colorScheme="purple"
          size="lg"
          borderRadius="3xl"
          fontSize="4xl"
          padding="20px"
          variant="solid"
          // cursor={pointer}
          onClick={() => rr()}
        >
          <FaLaptopCode />
          &nbsp;Simulate
        </Button>

        {isLargerThan1280 ? (
          <Box w="full" mt="30px">
            {/* <p id="output1"></p> */}
            <div id="tableHead"></div>

            {/* <table class="table-dark table-striped  table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Process ID</th>
                  <th scope="col">Arrival Time</th>
                  <th scope="col">Burst Time</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Completion Time</th>
                  <th scope="col">Allotment Time</th>
                  <th scope="col">Response Time</th>
                  <th scope="col">TurnAround Time</th>
                  <th scope="col">Waiting Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Text id="o1" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o2" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o3" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="13" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o4" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o5" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o6" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o7" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o8" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                </tr>
              </tbody>
            </table> */}

            <Text id="o9" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="10" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="11" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="12" fontSize="2xl" mt="5%" w="100%" mb="5%"></Text>
          </Box>
        ) : (
          <Box w="full" mt="30px">
            <table class="table-dark table-striped table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Process ID</th>
                  <th scope="col">Arrival Time</th>
                  <th scope="col">Burst Time</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Completion Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Text id="o1" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o2" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o3" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    {/* <Text id="13" fontSize="2xl" mt="5%" w="100%"></Text> */}
                  </td>
                  <td>
                    <Text id="o4" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table-dark table-striped table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Allotment Time</th>
                  <th scope="col">Response Time</th>
                  <th scope="col">TurnAround Time</th>
                  <th scope="col">Waiting Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Text id="o5" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o6" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o7" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                  <td>
                    <Text id="o8" fontSize="2xl" mt="5%" w="100%"></Text>
                  </td>
                </tr>
              </tbody>
            </table>

            <Text id="o9" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="10" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="11" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="12" fontSize="2xl" mt="5%" w="100%" mb="5%"></Text>
            {/* <Image
              src={plot}
              alt="Example1 img"
              mt="10px"
              width="80%"
              ml="10%"
            /> */}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default RrSimulate;
