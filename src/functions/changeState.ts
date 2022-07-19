import { BoxStateType } from "../utils/types";

const changeState = (
  array: BoxStateType[],
  targets: number[],
  state: BoxStateType
) => {
  targets.forEach((target) => {
    array[target] = state;
  });
};

export default changeState;
