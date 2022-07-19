import sleep from "../utils/sleep";
import { BoxStateType, Step } from "../utils/types";
import changeState from "./changeState";
import swapNumbers from "./swapNumbers";

type AnimateStep = (
  step: Step,
  delay: React.MutableRefObject<number>,
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
    await sleep(delay.current);
  }
  changeState(stateArray, step.targets, "default");

  if (step.type === "compare") {
    changeState(stateArray, step.targets, "compare");
    setStateArray([...stateArray]);
    await sleep(delay.current);
  }
  changeState(stateArray, step.targets, "default");

  if (step.type === "pivot") {
    changeState(stateArray, step.targets, "pivot");
    setStateArray([...stateArray]);
    await sleep(delay.current);
  }
  changeState(stateArray, step.targets, "default");

  setArray([...array]);
  setStateArray([...stateArray]);
};

export default animateStep;
