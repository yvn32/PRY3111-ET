
  
    const dataLine = {
      type: "line",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday ",
        ],
        datasets: [
          {
            label: "Current period",
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: "Previous period",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "rgba(66, 133, 244, 0.0)",
            borderColor: "#33b5e5",
            pointBorderColor: "#33b5e5",
            pointBackgroundColor: "#33b5e5",
          },
        ],
      },
    };

    new mdb.Chart(document.getElementById("chart-users"), dataLine);
  
    const dataPageViews = {
      type: "line",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday ",
        ],
        datasets: [
          {
            label: "Current period",
            data: [25, 49, 40, 21, 56, 75, 30],
          },
          {
            label: "Previous period",
            data: [58, 18, 30, 59, 46, 77, 90],
            backgroundColor: "rgba(66, 133, 244, 0.0)",
            borderColor: "#33b5e5",
            pointBorderColor: "#33b5e5",
            pointBackgroundColor: "#33b5e5",
          },
        ],
      },
    };

    new mdb.Chart(document.getElementById("chart-page-views"), dataPageViews);

  
    const dataAverageTime = {
      type: "line",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday ",
        ],
        datasets: [
          {
            label: "Current period",
            data: [431, 123, 435, 123, 345, 234, 124],
          },
          {
            label: "Previous period",
            data: [654, 234, 123, 432, 533, 422, 222],
            backgroundColor: "rgba(66, 133, 244, 0.0)",
            borderColor: "#33b5e5",
            pointBorderColor: "#33b5e5",
            pointBackgroundColor: "#33b5e5",
          },
        ],
      },
    };

    new mdb.Chart(
      document.getElementById("chart-average-time"),
      dataAverageTime
    );

  
    const dataBounceRate = {
      type: "line",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday ",
        ],
        datasets: [
          {
            label: "Current period",
            data: [41, 12, 35, 13, 45, 34, 12],
          },
          {
            label: "Previous period",
            data: [65, 24, 13, 43, 33, 42, 22],
            backgroundColor: "rgba(66, 133, 244, 0.0)",
            borderColor: "#33b5e5",
            pointBorderColor: "#33b5e5",
            pointBackgroundColor: "#33b5e5",
          },
        ],
      },
    };

    new mdb.Chart(document.getElementById("chart-bounce-rate"), dataBounceRate);
  

    const pieChartsOptions = {
      dataLabelsPlugin: true,
      options: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 10,
          },
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = dataPieCurrent.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + "%";
              return percentage;
            },
            color: "white",
            labels: {
              title: {
                font: {
                  size: "14",
                },
              },
            },
          },
        },
      },
    };

    // Pie chart current
    const dataPieCurrent = {
      type: "pie",
      data: {
        labels: ["New visitor", "Returning visitor"],
        datasets: [
          {
            label: "Traffic",
            data: [502355, 423545],
            backgroundColor: [
              "rgba(66, 133, 244, 0.6)",
              "rgba(77, 182, 172, 0.6)",
            ],
          },
        ],
      },
    };

    new mdb.Chart(
      document.getElementById("pie-chart-current"),
      dataPieCurrent,
      pieChartsOptions
    );

    // Pie chart previous
    const dataPiePrevious = {
      type: "pie",
      data: {
        labels: ["New visitor", "Returning visitor"],
        datasets: [
          {
            label: "Traffic",
            data: [402355, 523545],
            backgroundColor: [
              "rgba(66, 133, 244, 0.6)",
              "rgba(77, 182, 172, 0.6)",
            ],
          },
        ],
      },
    };

    new mdb.Chart(
      document.getElementById("pie-chart-previous"),
      dataPiePrevious,
      pieChartsOptions
    );
  