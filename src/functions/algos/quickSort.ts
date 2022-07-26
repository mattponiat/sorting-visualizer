import { Step } from "../../utils/types";
import swapNumbers from "../swapNumbers";

type quickTypes = (array: number[]) => Step[];

const quickSort: quickTypes = (array) => {
  const stepArray: Step[] = [];
  const quickSortHelper = (array: number[], left: number, right: number) => {
    if (left < right) {
      const pivot = right;
      let index = left;
      for (let i = left; i < right; i++) {
        if (array[i] < array[pivot]) {
          stepArray.push({
            type: "swap",
            targets: [i, index],
          });
          swapNumbers(array, i, index);
          index++;
        }
        stepArray.push({
          type: "pivot",
          targets: [pivot],
        });
      }
      stepArray.push({
        type: "swap",
        targets: [pivot, index],
      });
      swapNumbers(array, pivot, index);
      quickSortHelper(array, left, index - 1);
      quickSortHelper(array, index + 1, right);
    }
  };
  quickSortHelper(array, 0, array.length - 1);
  return stepArray;
};

export default quickSort;
