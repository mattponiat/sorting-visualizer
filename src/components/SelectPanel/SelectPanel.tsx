import { styled } from "@stitches/react";
import * as React from "react";
//Components
import SelectAlgorithm from "../SelectAlgorithm/SelectAlgorithm";
//Hooks
import { useMemoizedFn } from "ahooks";
import { useSortingDataContext } from "../../context/SortingData";
//Types
import { SortingAlgorithms } from "../../utils/types";

type SelectPanelProps = {
  sort: SortingAlgorithms;
  index: number;
};

const SelectPanel = ({ sort, index }: SelectPanelProps) => {
  const { selectedAlgorithms, setSelectedAlgorithms } = useSortingDataContext();

  const changeSelectedAlgorithm = useMemoizedFn((sort: SortingAlgorithms) => {
    const newSelectedArray = [...selectedAlgorithms];
    newSelectedArray[index] = sort;
    setSelectedAlgorithms(newSelectedArray);
  });

  return (
    <Wrapper>
      <SelectAlgorithm
        key={sort}
        value={selectedAlgorithms[index]}
        setValue={changeSelectedAlgorithm}
      />
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  width: "150px",
});

export default SelectPanel;
