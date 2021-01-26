import classes from "./LineGraph.module.css";
import { Pie } from "react-chartjs-2";
import { Component } from "react";

class Chart extends Component {
  constructor() {
    super(props);
    this.state = {
      chartData: {
        labels: [],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Pie />
      </div>
    );
  }
}

export default Chart;
