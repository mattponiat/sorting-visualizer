import * as React from "react";
import { styled } from "@stitches/react";
//Functions
import { bubbleSort } from "../functions/algos/bubbleSort";
import { getRandomNumbers } from "../functions/getRandomNumbers";
import { startAnimation } from "../functions/startAnimation";
//Components
import { SortingBar } from "./SortingBar/SortingBar";
//Types
import { BoxStateType } from "../utils/types";
import { StyledButton } from "./StyledButton/StyledButton";
import { StyledRange } from "./StyledRange/StyledRange";
//Hooks
import { useLatest } from "ahooks";

const MainPage = () => {
  const [length, setLength] = React.useState(10);
  const [delay, setDelay] = React.useState(50);
  const [array, setArray] = React.useState<number[]>([]);
  const [stateArray, setStateArray] = React.useState<BoxStateType[]>([]);
  const stepArray = bubbleSort([...array]);
  const latestDelayRef = useLatest(delay);

  React.useEffect(() => {
    setArray(getRandomNumbers(length));
    setStateArray(Array.from({ length: length }, () => "default"));
  }, [length]);

  return (
    <Wrapper>
      <SortingWrapper css={{ gap: Math.floor(100 / array.length) }}>
        {array.map((item, index) => (
          <SortingBar
            state={stateArray[index]}
            key={index}
            css={{
              minHeight: `${item}px`,
            }}
          />
        ))}
      </SortingWrapper>
      <OptionsWrapper>
        <SlidersContainer>
          <SliderWrapper>
            <label htmlFor="length" style={{ fontSize: "18px" }}>
              Length: {length}
            </label>
            <StyledRange
              id="length"
              type="range"
              min="10"
              max="150"
              step="10"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </SliderWrapper>
          <SliderWrapper>
            <label htmlFor="delay" style={{ fontSize: "18px" }}>
              Delay: {delay}
            </label>
            <StyledRange
              id="delay"
              type="range"
              min="0"
              max="500"
              step="10"
              value={delay}
              onChange={(e) => setDelay(parseInt(e.target.value))}
            />
          </SliderWrapper>
        </SlidersContainer>
        <ButtonWrapper>
          <StyledButton
            onClick={() =>
              startAnimation(
                stepArray,
                latestDelayRef.current,
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

const SortingWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  minHeight: "650px",
  maxWidth: "1480px",
  width: "100%",
  padding: "20px",
  boxShadow: "0 8px 32px 0 #00000045",
  backdropFilter: "blur( 10px )",
  borderRadius: "32px",
});

const OptionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  maxWidth: "600px",
  width: "100%",
  userSelect: "none",

  "@media screen and (max-width: 600px)": {
    flexDirection: "column",
    gap: "40px",
  },
});

const SlidersContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginRight: "auto",

  "@media screen and (max-width: 600px)": {
    marginRight: "unset",
  },
});

const SliderWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "15px",
  color: "#fff",
});

const ButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

export { MainPage };
