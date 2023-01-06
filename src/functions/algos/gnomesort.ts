import { Step } from "../../utils/types";

type GnomeTypes = (array: number[]) => Step[];

const gnomeSort: GnomeTypes = (array) => {
  const stepArray: Step[] = [];

  const moveBack = (i: number) => {
    for (; i > 0 && array[i - 1] > array[i]; i--) {
      stepArray.push({
        type: "compare",
        targets: [i, i - 1],
      });
      const t = array[i];
      array[i] = array[i - 1];
      array[i - 1] = t;
      stepArray.push({
        type: "swap",
        targets: [i, i - 1],
      });
    }
  };

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) moveBack(i);
  }

  return stepArray;
};

export default gnomeSort;
