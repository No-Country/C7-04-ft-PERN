import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 3, 2.6, 2.6, 2.9, 3.2, 4],
    },
  ],
};

const ProductGraph = () => {
  return (
    <div>
      <Line data={data} options={{fill: true}} />
    </div>
  );
};

export default ProductGraph;