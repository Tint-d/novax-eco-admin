import React from "react";
import Chart from "react-apexcharts";
import { Progress } from "@mantine/core";

const BarChart = () => {
  // for left chart
  const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

  const options = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30, 34],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {},
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Jan"],
        ["Feb"],
        ["Mar"],
        ["Apr"],
        ["May"],
        ["June"],
        ["July"],
        ["Aug"],
        ["Sep"],
      ],
      labels: {
        style: {
          colors: colors,
          fontSize: "12px",
        },
      },
    },
  };
  //   For right chart
  const progressData = [
    {
      title: "Jeans",
      value: 60,
    },
    {
      title: "Shirts",
      value: 40,
    },
    {
      title: "Belts",
      value: 10,
    },
    {
      title: "Caps",
      value: 20,
    },
    {
      title: "Others",
      value: 80,
    },
  ];
  return (
    <div className="flex gap-5 mx-16">
      {/* Left Chart  */}
      <div className="w-6/12 bg-white rounded-lg p-5">
        <div className="flex flex-col font-bold gap-3">
          <p>Total Revenue</p>
          <div className="flex items-center gap-5">
            <p className="text-2xl">$50.2K</p>
            <span className="text-green-500">50% than last month</span>
          </div>
        </div>
        <span id="chart">
          <Chart
            options={options}
            series={options.series}
            type="bar"
            height={350}
          />
        </span>
      </div>

      {/* Right Chart  */}
      <div className="w-6/12 bg-white rounded-lg flex flex-col justify-around px-5">
        <p className="font-bold text-xl">Most Sold Items</p>
        {/* Sold progress  */}
        <div className="flex flex-col gap-5">
          {progressData?.map((item) => {
            return (
              <div key={item?.title} className="flex flex-col gap-2">
                <div className="flex justify-between font-bold text-lg">
                  <p>{item?.title}</p>
                  <p>{item?.value}%</p>
                </div>
                <Progress
                  size="xl"
                  sections={[{ value: item?.value, color: "cyan" }]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
