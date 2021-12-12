//chart-01
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Weather",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById("myChart"), config);

//chart-02
const data1 = {
  labels: ["Sunny", "cloudy", "Rainy", "Foggy"],
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};

const config1 = {
  type: "polarArea",
  data: data1,
  options: {},
};

const mychart1 = new Chart(document.getElementById("mycanvas1"), config1);

//jquery
