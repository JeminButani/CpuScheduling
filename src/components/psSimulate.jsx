import React, { useState, useEffect } from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "@chakra-ui/react";
import AddInput from "./psSimulate/_AddInput";
import InputValue from "./psSimulate/_InputValue";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import reactDom from "react-dom";

const PsSimulate = () => {
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
  const addInput = (arrT, burT, prio) => {
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
      prio: prio,
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
  time = Current Time,comp = completion time, turn = turnAround time, wait = waiting time
  total_turn= total turnAround time, total_wait= total waiting time
  timeLine= process timeline, sequence = sequence of processes
  count = count of processes completed*/
  function swap(pid, arr, bur, a, b, pr) {
    let temp2 = pid[a];
    pid[a] = pid[b];
    pid[b] = temp2;
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    let temp1 = bur[a];
    bur[a] = bur[b];
    bur[b] = temp1;
    let temp3 = pr[a];
    pr[a] = pr[b];
    pr[b] = temp3;
  }

  let comp = [],
    turn = [],
    wait = [];

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
  //Time complexity of this function: O(n^2)
  function CalculatingValues(processes, n, arr, bur, prio) {
    //creating copy of the burst time array to keep track of prempted remaining time.
    let bur_copy = [];
    //pushing a large integer into prio array for comparison purpose.
    prio.push(10000);
    //initializing the arrays (comp,turn,wait) with values as 0
    for (let i = 0; i < n; i++) {
      comp.push(0);
      turn.push(0);
      wait.push(0);
      bur_copy.push(bur[i]);
    }
    // initiliazing current time as arrival of first process.
    let time = arr[0];
    /* if the arrival[0] is not 0 then initially the resources would be free 
    and N/A would be pushed in the sequence.*/
    if (arr[0] !== 0) {
      timeLine.push(0);
      sequence.push("N/A");
    }
    //initializing prev priority
    let prev = 10000,
      count = 0,
      end = 0,
      smallest;
    //looping for n processes.
    while (count !== n) {
      smallest = n;
      /**Finding the process with highest priority among the arrived processes
       * which has not yet completed. */
      for (let i = 0; i < n; i++)
        if (arr[i] <= time && prio[i] < prio[smallest] && bur_copy[i] > 0)
          smallest = i;

      /** if such process is found whose priority is least and is not yet
       * completed.
       */
      if (smallest !== n) {
        /**while a process is running, if a new process has
         * arrived satisfying the above conditions then that
         * time will be pushed in the timeline and new process
         * to the sequence.
         */
        if (smallest !== prev) {
          sequence.push(processes[smallest]);
          timeLine.push(time);
        }
        //changing prev to the newly arrived process.
        prev = smallest;
        //decrementing bur_copy by 1 each time.
        bur_copy[smallest] -= 1;
        /**if the burst time of current process becomes 0
         * then push time in the timeline and process
         * in the sequence array.
         */
        if (bur_copy[smallest] === 0) {
          count++;
          end = time + 1;
          comp[smallest] = end;
          wait[smallest] = end - arr[smallest] - bur[smallest]; //calculation for waiting time
          total_wait += wait[smallest];
          turn[smallest] = end - arr[smallest]; //calculation for turnAround time.
          total_turn += turn[smallest];
        }
      }
      //if no such process is found,i.e cpu is idle, push N/A into the sequence
      else {
        if (sequence.slice(-1)[0] !== "N/A") sequence.push("N/A");
      }
      //incrementing time by one unit every time.
      time++;
    }
    //pushing the last completion time in the timeline.
    timeLine.push(comp[smallest]);

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
            <th scope="col">Priority</th>
            <th scope="col">Completion Time</th>
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
      document.getElementById("13").innerHTML += prio[i] + "<br>";
      document.getElementById("o4").innerHTML += comp[i] + "<br>";
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
  let Priority = [];
  inputs.map((input) => {
    return Priority.push(parseInt(input.prio));
  });

  let count = 0;
  const ps = (input) => {
    if (count === 0) {
      let process_id = Process_Id; // Ids assigned by the program itself
      let n = process_id.length;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (Arrival_Time[j] < Arrival_Time[i])
            swap(process_id, Arrival_Time, Burst_Time, i, j, Priority);
          else if (
            Arrival_Time[j] === Arrival_Time[i] &&
            process_id[j] < process_id[i]
          )
            swap(process_id, Arrival_Time, Burst_Time, i, j, Priority);
        }
      }
      if (process_id.length === 0) alert("Please Input some data");
      else CalculatingValues(Process_Id, n, Arrival_Time, Burst_Time, Priority);
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
          <Heading fontSize="4xl">PS Simulation</Heading>
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
          onClick={() => ps()}
        >
          <FaLaptopCode />
          &nbsp;Simulate
        </Button>

        {isLargerThan1280 ? (
          <Box w="full" mt="30px">
            {/* <p id="output1"></p> */}
            <div id="tableHead"></div>
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
                    <Text id="13" fontSize="2xl" mt="5%" w="100%"></Text>
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

export default PsSimulate;
