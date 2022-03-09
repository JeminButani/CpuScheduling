import React, { useState, useEffect } from "react";

const FcfsAlgo = () => {
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
    sequence = [];

  function CalculatingValues(processes, n, arr, bur) {
    for (let i = 0; i < n; i++) {
      timeLine.push(currT);

      if (i === 0) {
        //#Condition for first process
        if (arr[i] > 0) {
          //#If the arrival of first is greater than 0, then its completion will be arrival + Burst
          currT += bur[i] + arr[i];
          timeLine.push(arr[i]);
          sequence.push("NA");
        } else {
          currT += bur[i];
          // sequence.push(processes[i]) //#Else completion will be the burst time
        }
        alloted.push(arr[i]); //#CPU will be alloted to process 1 at arrival of 1st process
        // sequence.push(processes[i])
      } else {
        if (arr[i] > comp[i - 1]) {
          //#if the arrival of current process is greater than the completion of previous process
          currT += bur[i] + arr[i] - comp[i - 1]; //#then its completion will be the addition of the gap and its burst time.
          alloted.push(arr[i]); //#CPU allocation will be arrival time of the process
          timeLine.push(arr[i]);
          sequence.push("NA");
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
    for (let i = 0; i < s_l; i++) {
      document.getElementById("o9").innerHTML += sequence[i] + " ";
    } // to be included in gantt chart blocks
    document.getElementById("10").innerHTML += "TimeLine    : ";
    for (let i = 0; i < l; i++) {
      document.getElementById("10").innerHTML += timeLine[i] + " ";
    } // to be displayed below the gantt chart as labels.
    let s = Math.round((total_wait / n) * 100) / 100;
    let t = Math.round((total_turn / n) * 100) / 100;
    document.getElementById("11").innerHTML =
      "Average waiting time = " + s + " sec.";

    document.getElementById("12").innerHTML =
      "Average turn around time = " + t + " sec.";
  } //calculatingValues ends here.

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

  const fcfs = (input) => {
    let process_id = Process_Id; // Ids assigned by the program itself
    let n = process_id.length;

    //Input from the user and store values in array given below for arrival_time and burst_time.
    // let arrival_time = Arrival_Time;
    // let burst_time = Burst_Time;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (Arrival_Time[j] < Arrival_Time[i]) {
          swap(Process_Id, Arrival_Time, Burst_Time, i, j);
        }
      }
    }

    if (process_id.length === 0) {
      alert("Please Input some data");
    } else {
      CalculatingValues(Process_Id, n, Arrival_Time, Burst_Time);
    }
  };
  return <div>FcfsAlgo</div>;
};

export default FcfsAlgo;
