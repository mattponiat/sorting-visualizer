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
import { useSortingDataContext } from "../context/SortingData";
//Types
import { SortingAlgorithms, Step } from "../utils/types";

const MainPage = () => {
  const {
    selectedAlgorithms,
    array,
    setArray,
    stateArray,
    setStateArray,
    latestDelayRef,
    length,
  } = useSortingDataContext();
  let stepArray: Step[] = [];

  return (
    <Wrapper>
      <SortingSection />
      <OptionsWrapper>
        <>
          {selectedAlgorithms.map((sort: SortingAlgorithms, index: number) => {
            React.useEffect(() => {
              switch (sort) {
                case "bubble": {
                  stepArray = bubbleSort([...array]);
                  break;
                }
                case "quick": {
                  stepArray = quickSort([...array]);
                  break;
                }
                case "insertion": {
                  stepArray = insertionSort([...array]);
                  break;
                }
              }
            });
            return <SelectPanel sort={sort} index={index} key={index} />;
          })}
        </>
        <SlidersPanel />
        <ButtonWrapper>
          <StyledButton
            onClick={() =>
              startAnimation(
                stepArray,
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
