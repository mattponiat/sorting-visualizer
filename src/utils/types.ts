export type BoxStateType = StepType | "default";

export type StepType = "compare" | "swap" | "pivot";

export type Step = {
  type: StepType;
  targets: number[];
};
export type SortingAlgorithms = "bubble" | "quick";
