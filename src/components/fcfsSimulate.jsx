import React, { useState, useEffect } from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "@chakra-ui/react";
import AddInput from "./FcfsSimulate/AddInput";
import InputValue from "./FcfsSimulate/InputValue";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import reactDom from "react-dom";

//main function for rendering the page
const FcfsSimulate = () => {
  //for responsiveness
  const [isLargerThan1280] = useMediaQuery("(min-width: 900px)");
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
    };
    setInputs([...inputs, myInput]);
  };
  const [inputs, setInputs] = useState(input);
  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  //time complexity: O(n^2) {Sorting.}
  //Space complexity: O(n) {Arrays for displaying and storing values}
  /*utility function to sort the processes according to arrival time followed by pId.
  pid= Process id, arr = Arrival time , bur = burst time , a&b = index values.
  currT = Current Time,comp = completion time, turn = turnAround time, wait = waiting time
  alloted = cpu allotment time, response = response time
  total_turn= total turnAround time, total_wait= total waiting time
  timeLine= process timeline, sequence = sequence of processes*/
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
  let currT = 0;
  let comp = [],
    turn = [],
    wait = [],
    alloted = [],
    response = [];
  let total_turn = 0,
    total_wait = 0;
  let timeLine = [],
    sequence = [],
    spacing = [],
    seq_disp = [];
  /* Taking Input as : 
  Array processes: process id
  int n: total number of processes
  Array arr: array of arrival time
  Array bur: array of burst time
  and passing them as arguments in CalculatingValues function.
  */
  function CalculatingValues(processes, n, arr, bur) {
    for (let i = 0; i < n; i++) {
      timeLine.push(currT);
      if (i === 0) {
        //#Condition for first process
        if (arr[i] > 0) {
          //#If the arrival of first is greater than 0, then its completion will be arrival + Burst
          currT += bur[i] + arr[i];
          timeLine.push(arr[i]);
          sequence.push("N/A");
        } else currT += bur[i]; // sequence.push(processes[i]) //#Else completion will be the burst time
        alloted.push(arr[i]); //#CPU will be alloted to process 1 at arrival of 1st process
        // sequence.push(processes[i])
      } else {
        if (arr[i] > comp[i - 1]) {
          //#if the arrival of current process is greater than the completion of previous process
          currT += bur[i] + arr[i] - comp[i - 1]; //#then its completion will be the addition of the gap and its burst time.
          alloted.push(arr[i]); //#CPU allocation will be arrival time of the process
          timeLine.push(arr[i]);
          sequence.push("N/A");
        } else {
          //#if the arrival of current process is less than or equal to the completion of previous process
          currT += bur[i]; //#then the completion will current time + Burst time.
          alloted.push(comp[i - 1]); //#CPU allocation will the completion of previous process
        }
      }
      sequence.push(processes[i]);
      turn.push(currT - arr[i]); //# Turn arround will be current time - its arrival time.
      total_turn += turn[i]; //# adding turnAround of each process for the average calculation.
      wait.push(turn[i] - bur[i]); // # Waiting time be turnAround - Burst Time.
      total_wait += wait[i]; //# adding waiting of each process for the average calculation.
      comp.push(currT);
      response.push(alloted[i] - arr[i]);
    }
    timeLine.push(currT);

    let len_s = timeLine.length;
    for (let i = 0; i < len_s - 1; i++) {
      if (sequence[i] !== "N/A") {
        let ar = [timeLine[i], timeLine[i + 1]];
        spacing.push(ar);
        seq_disp.push(sequence[i]);
      }
    }

    reactDom.render(
      <table class="table-dark table-striped  table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Process ID</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Burst Time</th>
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
      </table>,
      document.getElementById("tablehead")
    );
    reactDom.render(
      <Box
        marginTop="20px"
        marginBottom="20px"
        p={7}
        shadow="2xl"
        borderWidth="4px"
        borderColor="blue.200"
        borderRadius="3xl"
        w="sm"
        textAlign="center"
        backgroundColor={"AppWorkspace"}
      >
        <Bar
          title="Gantt Chart"
          data={{
            // Name of the variables on x-axies for each bar
            labels: seq_disp,
            datasets: [
              {
                label: "Gantt Chart",
                indexAxis: "y",
                barPercentage: 0.4,
                data: spacing,
                backgroundColor: ["red", "green"],
              },
            ],
          }}
        />
      </Box>,
      document.getElementById("gantt")
    );

    for (let i = 0; i < n; i++) {
      document.getElementById("o1").innerHTML += processes[i] + "<br>";
      document.getElementById("o2").innerHTML += arr[i] + "<br>";
      document.getElementById("o3").innerHTML += bur[i] + "<br>";
      document.getElementById("o4").innerHTML += comp[i] + "<br>";
      document.getElementById("o5").innerHTML += alloted[i] + "<br>";
      document.getElementById("o6").innerHTML += response[i] + "<br>";
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
      "Average waiting time = " + s + " sec.";
    document.getElementById("12").innerHTML =
      "Average turn around time = " + t + " sec.";
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

  let count = 0;
  const fcfs = (input) => {
    if (count === 0) {
      let process_id = Process_Id; // Ids assigned by the program itself
      let n = process_id.length;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (Arrival_Time[j] < Arrival_Time[i])
            swap(process_id, Arrival_Time, Burst_Time, i, j);
          else if (
            Arrival_Time[j] === Arrival_Time[i] &&
            process_id[j] < process_id[i]
          )
            swap(process_id, Arrival_Time, Burst_Time, i, j);
        }
      }

      if (process_id.length === 0) alert("Please Input some data");
      else CalculatingValues(Process_Id, n, Arrival_Time, Burst_Time);
      count = count + 1;
    }
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

        <Button
          mt="4%"
          colorScheme="purple"
          size="lg"
          borderRadius="3xl"
          fontSize="4xl"
          padding="20px"
          variant="solid"
          // cursor={pointer}
          onClick={() => fcfs()}
        >
          <FaLaptopCode />
          &nbsp;Simulate
        </Button>

        {isLargerThan1280 ? (
          <Box w="full" mt="30px">
            {/* <p id="output1"></p> */}

            <div id="tablehead"></div>

            <Text id="o9" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="10" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="11" fontSize="2xl" mt="5%" w="100%"></Text>
            <Text id="12" fontSize="2xl" mt="5%" w="100%" mb="5%"></Text>
            <div id="gantt"></div>
          </Box>
        ) : (
          <Box w="full" mt="30px">
            {/* <p id="output1"></p> */}

            <table class="table-dark table-striped table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Process ID</th>
                  <th scope="col">Arrival Time</th>
                  <th scope="col">Burst Time</th>
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
          </Box>
        )}
      </Box>
    </div>
  );
};

export default FcfsSimulate;
