import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import FCFS from "./components/fcfs";
import SJF from "./components/sjf";
import PS from "./components/ps";
import RR from "./components/rr";
import FCFSS from "./components/FcfsSimulate";
import SJFS from "./components/SjfSimulate";
import RRS from "./components/rrSimulate";
import PSS from "./components/psSimulate";
import AboutLa from "./components/AboutLa";

import { useMediaQuery } from "@chakra-ui/react";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        {isLargerThan1280 ? (
          <Navbar Headsize="xl" iconSize={32} />
        ) : (
          <Navbar Headsize="md" iconSize={20} />
        )}

        <Switch>
          <Route exact path="/CpuScheduling" index component={Home} />
          <Route exact path="/Home" index component={Home} />
          <Route exact path="/about" component={AboutLa} />
          <Route exact path="/fcfs" component={FCFS} />
          <Route exact path="/sjf" component={SJF} />
          <Route exact path="/rr" component={RR} />
          <Route exact path="/ps" component={PS} />
          <Route exact path="/fcfs/fcfsSimulate" component={FCFSS} />
          <Route exact path="/sjf/sjfSimulate" component={SJFS} />
          <Route exact path="/rr/rrSimulate" component={RRS} />
          <Route exact path="/ps/psSimulate" component={PSS} />
        </Switch>

        {/* {isLargerThan1280 ? <Footer height="45%" /> : <Footer height="75%" />} */}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
