import * as React from "react";
import * as Slider from "@radix-ui/react-slider";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";

type SliderProps = {
  value: number;
  setValue: (value: number) => void;
  label?: string;
  max?: number;
  min?: number;
};

const RangeSlider = ({ value, setValue, label, max, min }: SliderProps) => {
  return (
    <form>
      <SliderRoot
        value={[value]}
        onValueChange={([value]) => setValue(value)}
        min={min}
        max={max}
        step={10}
        aria-label={label}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
      </SliderRoot>
    </form>
  );
};

const SliderRoot = styled(Slider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "130px",
  marginTop: "8px",

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: 20,
    height: 100,
  },
});

const SliderTrack = styled(Slider.Track, {
  backgroundColor: blackA.blackA10,
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
});

const SliderRange = styled(Slider.Range, {
  position: "absolute",
  backgroundColor: violet.violet9,
  borderRadius: "9999px",
  height: "100%",
});

const SliderThumb = styled(Slider.Thumb, {
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { outline: "none", boxShadow: `0 0 0 2px ${blackA.blackA8}` },
});

export default RangeSlider;
