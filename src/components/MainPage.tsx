import * as React from "react";
import { styled } from "@stitches/react";
//Functions
import { bubbleSort } from "../functions/algos/bubbleSort";
import { getRandomNumbers } from "../functions/getRandomNumbers";
import { startAnimation } from "../functions/startAnimation";
//Components
import { SortingBar } from "./SortingBar/SortingBar";
import { NumberInput } from "./NumberInput/NumberInput";
//Types
import { BoxStateType } from "../utils/types";
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
            <NumberInput
              value={length}
              setValue={setLength}
              id="length"
              max={150}
            />
          </SliderWrapper>
          <SliderWrapper>
            <NumberInput value={delay} setValue={setDelay} id="delay" />
          </SliderWrapper>
        </SlidersContainer>
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

const StyledButton = styled("button", {
  width: "70px",
  padding: "10px",
  backgroundColor: "rgba(255,255,255,0.7)",
  border: "none",
  borderRadius: "10px",
  boxShadow: "-1px 2px 0 0 #00000045",
  backdropFilter: "blur( 10px )",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000000c3",
  cursor: "pointer",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: "transparent",
    transform: "translateY(1px) translateX(-1px)",
    boxShadow: "-0.5px 1px 0 0 #00000045",
  },
});

export { MainPage };
