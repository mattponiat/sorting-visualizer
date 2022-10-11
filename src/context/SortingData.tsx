import * as React from "react";
//Functions
import getRandomNumbers from "../functions/getRandomNumbers";
//Hooks
import { useLatest } from "ahooks";
//Types
import { SortingAlgorithms, BoxStateType } from "../utils/types";

const SortingData = () => {
  const allAlgorithms: SortingAlgorithms[] = ["bubble", "quick", "insertion"];
  const [length, setLength] = React.useState(10);
  const [delay, setDelay] = React.useState(50);
  const [array, setArray] = React.useState<number[]>([]);
  const [stateArray, setStateArray] = React.useState<BoxStateType[]>([]);
  const [selectedAlgorithms, setSelectedAlgorithms] = React.useState<
    SortingAlgorithms[]
  >(["bubble"]);
  const latestDelayRef = useLatest(delay);

  React.useEffect(() => {
    setArray(getRandomNumbers(length));
    setStateArray(Array.from({ length: length }, () => "default"));
  }, [length, selectedAlgorithms]);

  return {
    allAlgorithms,
    length,
    setLength,
    delay,
    setDelay,
    array,
    setArray,
    stateArray,
    setStateArray,
    selectedAlgorithms,
    setSelectedAlgorithms,
    latestDelayRef,
  };
};

//React Context
type UseSortingDataType = ReturnType<typeof SortingData>;

const SortingDataContext = React.createContext<UseSortingDataType | null>(null);

export const useSortingDataContext = () => {
  const context = React.useContext(SortingDataContext);
  if (!context) {
    throw new Error(
      "useSortingDataContext must be used within a SortingDataContextProvider"
    );
  }
  return context;
};

export const SortingDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <SortingDataContext.Provider value={{ ...SortingData() }}>
    {children}
  </SortingDataContext.Provider>
);
