import { BoxStateType, Step } from "../utils/types";
import { animateStep } from "./animateStep";

type StartAnimation = (
  stepArray: Step[],
  delay: number,
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  stateArray: BoxStateType[],
  setStateArray: React.Dispatch<React.SetStateAction<BoxStateType[]>>
) => Promise<void>;

const startAnimation: StartAnimation = async (
  stepArray,
  delay,
  array,
  setArray,
  stateArray,
  setStateArray
) => {
  for (const step of stepArray) {
    await animateStep(step, delay, array, setArray, stateArray, setStateArray);
  }
};

export { startAnimation };
