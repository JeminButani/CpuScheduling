import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import FCFS from "./components/fcfs";
import SJF from "./components/sjf";
import PS from "./components/ps";
import RR from "./components/rr";
import FCFSS from "./components/fcfsSimulate";
import SJFS from "./components/sjfSimulate";
import RRS from "./components/rrSimulate";
import PSS from "./components/psSimulate";

import { useMediaQuery } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fcfs" component={FCFS} />
          <Route exact path="/sjf" component={SJF} />
          <Route exact path="/rr" component={RR} />
          <Route exact path="/ps" component={PS} />
          <Route exact path="/fcfs/fcfsSimulate" component={FCFSS} />
          <Route exact path="/sjf/sjfSimulate" component={SJFS} />
          <Route exact path="/rr/rrSimulate" component={RRS} />
          <Route exact path="/ps/psSimulate" component={PSS} />
        </Switch>
        {isLargerThan1280 ? <Footer height="15%" /> : <Footer height="65%" />}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
