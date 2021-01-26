import classes from "./LineGraph.module.css";
import { Pie } from "react-chartjs-2";
import { Component } from "react";

class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <Pie />
      </div>
    );
  }
}

export default Chart;
