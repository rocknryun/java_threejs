import React from "react";
import Header from "./components/Header";
import "./App.css";

import { ForceGraph3D } from "react-force-graph";

const App = () => {
  const points = require("./particle_axis.json");
  return (
    <>
      <Header>Hello</Header>
      <ForceGraph3D graphData={points} />
    </>
  );
};

export default App;
