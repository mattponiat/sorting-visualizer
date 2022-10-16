import * as React from "react";
//Functions
import getRandomNumbers from "../functions/getRandomNumbers";
//Zustand
import useSortingStore from "../store/sortingStore";
import shallow from "zustand/shallow";

const useResetArray = () => {
  const { setArray, setStateArray, selectedAlgorithm, length } =
    useSortingStore(
      (state) => ({
        length: state.length,
        setArray: state.setArray,
        setStateArray: state.setStateArray,
        selectedAlgorithm: state.selectedAlgorithm,
      }),
      shallow
    );

  React.useEffect(() => {
    setArray(getRandomNumbers(length));
    setStateArray(Array.from({ length: length }, () => "default"));
  }, [length, selectedAlgorithm]);
};

export default useResetArray;
