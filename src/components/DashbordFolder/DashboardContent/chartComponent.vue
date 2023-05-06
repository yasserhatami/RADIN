<template>
  <div
    dir="rtl"
    class="chartcontainer  d-flex justify-center align-center"
  >
    <div class="chart w-100 h-100">
      <p class="mr-5 mt-3">پیشرفت میزان فروش در یک ماه اخیر</p>
      <div class="barwrapper ">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
      </div>
    </div>
  </div>
</template>
    
    <script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "سمند ",
          "پراید",
          "تیگو",
          "تیولی",
          "206",
          "پرشیا",
          "mvm110",
          "تیبا",
        ],
        datasets: [
          {
            data: [200, 400, 200, 200, 200, 200, 200, 142],
            

            borderRadius: 10,

            borderSkipped: false,
            backgroundColor: [
              "#666cff",
              "#FF614C",
              "#C081F0",
              "#BFDC36",
              "#485162",
              "#F34848",
              "orange",
              "#ff668b",
            ],
            color: ["#F34848"],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            bottom: "",
            left: "0",
            right: "10",
            top: "0",
          },
        },
        scales: {
          y: {
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              display: false,
             
            },
          },
          x: {
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              color: "#2A2929",
              font: {
                size: 15,
                family: "DanaFaNum",
              },
            },
          },
        },
      },
    };
  },
};
</script>
  <style scoped>
  p{
    font-size: 1rem;
  }
.chartcontainer {
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(157, 157, 157, 0.25);
  border-radius: 30px;
}
.barwrapper {
  height: 250px;
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #2a2929;
}
@media only screen and (min-width: 600px) {
  .barwrapper {
    height: 130px;
  }
}
@media only screen and (min-width: 700px) {
  .barwrapper {
    height: 180px;
  }
}
@media only screen and (min-width: 1000px) {
  .barwrapper {
    height: 230px;
  }
}
@media only screen and (min-width: 1200px) {
  .barwrapper {
    height: 300px;
  }
}
@media only screen and (min-width: 1400px) {
  .barwrapper {
    height: 310px;
  }
}
@media only screen and (min-width: 1600px) {
  .barwrapper {
    height: 450px;
  }
}
@media only screen and (min-width: 1850px) {
  .barwrapper {
    height: 550px;
  }
}
.chart {
  width: 98%;
}
.txt {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #2a2929;

  transform: rotate(-90deg);
}

</style>