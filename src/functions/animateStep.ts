import { sleep } from "../utils/sleep";
import { BoxStateType, Step } from "../utils/types";
import { changeState } from "./changeState";

const swapNumbers = (array: number[], i: number, j: number) => {
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
};

type AnimateStep = (
  step: Step,
  delay: number,
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  stateArray: BoxStateType[],
  setStateArray: React.Dispatch<React.SetStateAction<BoxStateType[]>>
) => Promise<void>;

const animateStep: AnimateStep = async (
  step,
  delay,
  array,
  setArray,
  stateArray,
  setStateArray
) => {
  if (step.type === "swap") {
    swapNumbers(array, step.targets[0], step.targets[1]);
    changeState(stateArray, step.targets, "swap");
    setArray([...array]);
    setStateArray([...stateArray]);
    await sleep(delay);
  }
  changeState(stateArray, step.targets, "default");

  if (step.type === "compare") {
    changeState(stateArray, step.targets, "compare");
    setStateArray([...stateArray]);
    await sleep(delay);
  }
  changeState(stateArray, step.targets, "default");

  setArray([...array]);
  setStateArray([...stateArray]);
};

export { animateStep };
