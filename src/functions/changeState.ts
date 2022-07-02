import { BoxStateType } from "../utils/types";

export const changeState = (
  array: BoxStateType[],
  targets: number[],
  state: BoxStateType
) => {
  targets.forEach((target) => {
    array[target] = state;
  });
};
