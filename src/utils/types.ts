export type Step = {
  type: "swap" | "compare";
  targets: number[];
};

export type StepType = "compare" | "swap" | "highlight";

export type BoxStateType = StepType | "default";
