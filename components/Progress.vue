<template>
  <div class="progress">
    <div class="chart">
      <Doughnut :data="data" :options="options" />
    </div>
    <div class="msg">
      {{ progress.passed }} of {{ progress.passed + progress.failed }} test cases passed.
    </div>
  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import { progress } from "@/composables/progress";

const data = computed(() => ({
  labels: [],
  datasets: [
    {
      backgroundColor: ["aqua", "#2e3138"],
      borderColor: "none",
      data: [progress.passed, progress.failed],
    },
  ],
}));

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

ChartJS.register(ArcElement, Tooltip, Legend);
</script>

<style scoped>
.progress {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 400px;
  margin: auto;
}

.msg {
  font-size: 1.2rem;
}

.chart {
  max-width: 200px;
}
</style>
