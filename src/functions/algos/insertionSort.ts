import { Step } from "../../utils/types";

type InsertionTypes = (array: number[]) => Step[];

const insertionSort: InsertionTypes = (array) => {
  const stepArray: Step[] = [];

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      const swap = array[j];
      stepArray.push({
        type: "compare",
        targets: [j, j - 1],
      });
      array[j] = array[j - 1];
      array[j - 1] = swap;
      stepArray.push({
        type: "swap",
        targets: [j, j - 1],
      });
    }
  }

  return stepArray;
};

export default insertionSort;
