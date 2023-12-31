import { defineStore } from "pinia";
import { ref } from "vue";

export const useScoreStore = defineStore('score', () => {
  const correctQuestions = ref(0);
  const totalQuestions = ref(0);
  const seconds = ref(0);
  const totalSeconds = ref(0);

  function addPoint() {
    correctQuestions.value++;
  }

  function addSeconds(n: number) {
    seconds.value += n;
  }

  function setTotalQuestions(n: number) {
    totalQuestions.value = n;
  }

  function setTotalSeconds(n: number) {
    totalSeconds.value = n;
  }

  function reset() {
    correctQuestions.value = 0;
    totalQuestions.value = 0;
    seconds.value = 0;
    totalSeconds.value = 0;
  }

  return {
    correctQuestions,
    totalQuestions,
    seconds,
    totalSeconds,
    addPoint,
    addSeconds,
    setTotalQuestions,
    setTotalSeconds,
    reset,
  } as const;
});
