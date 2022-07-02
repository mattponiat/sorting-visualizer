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

const MainPage = () => {
  const [length, setLength] = React.useState(10);
  const [delay, setDelay] = React.useState(50);
  const [array, setArray] = React.useState<number[]>([]);
  const [stateArray, setStateArray] = React.useState<BoxStateType[]>([]);
  const stepArray = bubbleSort([...array]);

  React.useEffect(() => {
    setArray(getRandomNumbers(length));
    setStateArray(Array.from({ length: length }, () => "default"));
  }, [length]);

  return (
    <Wrapper>
      <StyledHeading>Super Epic Sorting Visualizer 🤠</StyledHeading>
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
        <SliderWrapper>
          <span>Length: {length}</span>
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={length}
            onChange={(event) => setLength(parseInt(event.target.value))}
          />
        </SliderWrapper>
        <SliderWrapper>
          <span>Delay: {delay}</span>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={delay}
            onChange={(event) => setDelay(parseInt(event.target.value))}
          />
        </SliderWrapper>
        <button
          onClick={() =>
            startAnimation(
              stepArray,
              delay,
              array,
              setArray,
              stateArray,
              setStateArray
            )
          }
        >
          Sort
        </button>
        <button onClick={() => setArray(getRandomNumbers(length))}>
          Reset
        </button>
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
  padding: "30px",
  backgroundColor: "#00000010",
  backgroundImage:
    "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e65e21bd-dc77-499e-962a-fa13cab37fc2/dd8rub0-2bb114b5-ccbb-4fe6-9e13-afa758122c41.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2NWUyMWJkLWRjNzctNDk5ZS05NjJhLWZhMTNjYWIzN2ZjMlwvZGQ4cnViMC0yYmIxMTRiNS1jY2JiLTRmZTYtOWUxMy1hZmE3NTgxMjJjNDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PvQuZvWg8t8RjkaNYWxezsqRsq86J4_7IbCjlfOKIkY)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
  userSelect: "none",
});

const SortingWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  minHeight: "600px",
  maxWidth: "1300px",
  width: "100%",
  padding: "20px",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 10px )",
  borderRadius: "32px",
});

const OptionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

const SliderWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "15px",
  color: "#fff",
});

const StyledHeading = styled("h1", {
  fontSize: "50px",
  fontWeight: "bold",
  color: "rgba(255,255,255,0.9)",
});

export { MainPage };
