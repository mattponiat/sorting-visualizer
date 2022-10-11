import * as React from "react";
import { styled } from "@stitches/react";
//Components
import NumberInput from "../NumberInput/NumberInput";
//Hooks
import { useSortingDataContext } from "../../context/SortingData";

const SlidersPanel = () => {
  const { length, setLength, delay, setDelay } = useSortingDataContext();

  return (
    <Wrapper>
      <NumberInput
        value={length}
        setValue={setLength}
        id="length"
        min={10}
        max={150}
      />
      <NumberInput
        value={delay}
        setValue={setDelay}
        id="delay"
        min={0}
        max={500}
      />
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

export default SlidersPanel;
