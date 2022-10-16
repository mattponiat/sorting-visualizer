import { styled } from "@stitches/react";
import * as React from "react";
//Components
import SelectAlgorithm from "../SelectAlgorithm/SelectAlgorithm";
//Hooks
import { useMemoizedFn } from "ahooks";
//Zustand
import useSortingStore from "../../store/sortingStore";
import shallow from "zustand/shallow";
//Types
import { SortingAlgorithms } from "../../utils/types";

type SelectPanelProps = {
  sort: SortingAlgorithms;
};

const SelectPanel = ({ sort }: SelectPanelProps) => {
  const { selectedAlgorithm, setSelectedAlgorithm } = useSortingStore(
    (state) => ({
      selectedAlgorithm: state.selectedAlgorithm,
      setSelectedAlgorithm: state.setSelectedAlgorithm,
    }),
    shallow
  );

  const changeSelectedAlgorithm = useMemoizedFn((sort: SortingAlgorithms) => {
    setSelectedAlgorithm(sort);
  });

  return (
    <Wrapper>
      <SelectAlgorithm
        key={sort}
        value={selectedAlgorithm}
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
