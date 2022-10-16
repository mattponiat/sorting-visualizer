import { BoxStateType, Step } from "../utils/types";
import animateStep from "./animateStep";

type StartAnimation = (
  stepArray: Step[],
  delay: React.MutableRefObject<number>,
  array: number[],
  setArray: (array: number[]) => void,
  stateArray: BoxStateType[],
  setStateArray: (stateArray: BoxStateType[]) => void
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

export default startAnimation;
