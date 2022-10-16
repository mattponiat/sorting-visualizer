import * as React from "react";
import { styled } from "@stitches/react";
//Components
import SortingBar from "../SortingBar/SortingBar";
//Zustand
import useSortingStore from "../../store/sortingStore";
import shallow from "zustand/shallow";

const SortingSection = () => {
  const { array, stateArray } = useSortingStore(
    (state) => ({
      array: state.array,
      stateArray: state.stateArray,
    }),
    shallow
  );

  return (
    <Wrapper css={{ gap: Math.floor(100 / array.length) }}>
      {array.map((item: number, index: number) => (
        <SortingBar
          state={stateArray[index]}
          key={index}
          css={{
            minHeight: `${item}px`,
          }}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  height: "650px",
  maxWidth: "1480px",
  width: "100%",
  padding: "20px",
  boxShadow: "0 8px 32px 0 #00000045",
  backdropFilter: "blur(10px)",
  borderRadius: "32px",
});

export default SortingSection;
