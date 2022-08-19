import { styled } from "@stitches/react";
import * as React from "react";
//Components
import NumberInput from "../NumberInput/NumberInput";

type SlidersPanelProps = {
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  delay: number;
  setDelay: React.Dispatch<React.SetStateAction<number>>;
};

const SlidersPanel = ({
  length,
  setLength,
  delay,
  setDelay,
}: SlidersPanelProps) => {
  return (
    <Wrapper>
      <NumberInput value={length} setValue={setLength} id="length" max={150} />
      <NumberInput value={delay} setValue={setDelay} id="delay" />
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
