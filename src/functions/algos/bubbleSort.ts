import { Step } from "../../utils/types";

const swapNumbers = (array: number[], i: number, j: number) => {
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
};

type BubbleTypes = (array: number[]) => Step[];

const bubbleSort: BubbleTypes = (array) => {
  const stepArray: Step[] = [];
  let lastSwap = array.length - 1;

  for (let i = 1; i < array.length; i++) {
    let isSorted = false;
    let currentSwap = -1;

    for (let j = 0; j < lastSwap; j++) {
      stepArray.push({
        type: "compare",
        targets: [j, j + 1],
      });
      if (array[j] > array[j + 1]) {
        swapNumbers(array, j, j + 1);
        currentSwap = j;
        stepArray.push({
          type: "swap",
          targets: [j, j + 1],
        });
        isSorted = true;
      }
    }
    if (isSorted === false) break;
    lastSwap = currentSwap;
  }
  return stepArray;
};

export { bubbleSort };
