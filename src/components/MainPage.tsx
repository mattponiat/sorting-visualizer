import * as React from "react";
import { styled } from "@stitches/react";
//Functions
import bubbleSort from "../functions/algos/bubbleSort";
import quickSort from "../functions/algos/quickSort";
import insertionSort from "../functions/algos/insertionSort";
import getRandomNumbers from "../functions/getRandomNumbers";
import startAnimation from "../functions/startAnimation";
//Components
import SortingSection from "./SortingSection/SortingSection";
import SelectPanel from "./SelectPanel/SelectPanel";
import StyledButton from "./StyledButton/StyledButton";
import SlidersPanel from "./SlidersPanel/SlidersPanel";
//Hooks
import { useLatest } from "ahooks";
import useResetArray from "../functions/useResetArray";
//Zustand
import useSortingStore from "../store/sortingStore";
import shallow from "zustand/shallow";

const MainPage = () => {
  useResetArray();
  const {
    array,
    delay,
    length,
    selectedAlgorithm,
    setArray,
    stateArray,
    setStateArray,
  } = useSortingStore(
    (state) => ({
      array: state.array,
      delay: state.delay,
      length: state.length,
      selectedAlgorithm: state.selectedAlgorithm,
      setArray: state.setArray,
      stateArray: state.stateArray,
      setStateArray: state.setStateArray,
    }),
    shallow
  );

  const x = {
    bubble: bubbleSort([...array]),
    quick: quickSort([...array]),
    insertion: insertionSort([...array]),
  };

  const latestDelayRef = useLatest(delay);
  const algorithm = selectedAlgorithm;

  return (
    <Wrapper>
      <SortingSection />
      <OptionsWrapper>
        <SelectPanel sort={algorithm} />
        <SlidersPanel />
        <ButtonWrapper>
          <StyledButton
            onClick={() =>
              startAnimation(
                x[algorithm],
                latestDelayRef,
                array,
                setArray,
                stateArray,
                setStateArray
              )
            }
          >
            Sort
          </StyledButton>
          <StyledButton onClick={() => setArray(getRandomNumbers(length))}>
            Reset
          </StyledButton>
        </ButtonWrapper>
      </OptionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  minHeight: "100vh",
  maxWidth: "100%",
  padding: "20px",
  backgroundColor: "#00000010",
  backgroundImage: "url(https://wallpaperaccess.com/full/340434.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
});

const OptionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  maxWidth: "700px",
  width: "100%",
  userSelect: "none",

  "@media screen and (max-width: 670px)": {
    flexDirection: "column",
    gap: "30px",
  },
});

const ButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

export { MainPage };
