import create from "zustand";
import { SortingAlgorithms, BoxStateType } from "../utils/types";

interface SortingState {
  length: number;
  setLength: (length: number) => void;
  delay: number;
  setDelay: (delay: number) => void;
  array: number[];
  setArray: (array: number[]) => void;
  stateArray: BoxStateType[];
  setStateArray: (stateArray: BoxStateType[]) => void;
  selectedAlgorithm: SortingAlgorithms;
  setSelectedAlgorithm: (selectedAlgorithm: SortingAlgorithms) => void;
  allAlgorithms: SortingAlgorithms[];
}

const useSortingStore = create<SortingState>()((set) => ({
  length: 10,
  setLength: (length) => set({ length }),
  delay: 50,
  setDelay: (delay) => set({ delay }),
  array: [],
  setArray: (array) => set({ array }),
  stateArray: [],
  setStateArray: (stateArray) => set({ stateArray }),
  selectedAlgorithm: "bubble",
  setSelectedAlgorithm: (selectedAlgorithm) => set({ selectedAlgorithm }),
  allAlgorithms: ["bubble", "quick", "insertion", "gnome"],
}));

export default useSortingStore;
