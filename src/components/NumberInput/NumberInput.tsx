import * as React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import _ from "lodash";
//Components
import RangeSlider from "../RangeSlider/RangeSlider";
//Hoooks
import { useMemoizedFn } from "ahooks";

interface NumberInputProps {
  value: number;
  setValue: (value: number) => void;
  id: string;
  min: number;
  max: number;
}

const NumberInput = ({ value, setValue, id, min, max }: NumberInputProps) => {
  const handleChange = useMemoizedFn(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Math.max(parseInt(e.target.value, 10), min), max);
      setValue(value);
    }
  );

  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>{_.capitalize(id)}</StyledLabel>
      <StyledInput
        type="number"
        value={value}
        id={id}
        min={min}
        max={max}
        onChange={(e) => handleChange(e)}
      />
      <RangeSlider
        value={value}
        setValue={setValue}
        max={max}
        min={min}
        label={id}
      />
    </Wrapper>
  );
};

NumberInput.defaultProps = {
  min: 10,
  max: 500,
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5px",
  maxWidth: "100%",
  marginTop: "4px",
});

const StyledInput = styled("input", {
  maxWidth: "100%",
  height: "40px",
  borderRadius: "6px",
  border: "none",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  backgroundColor: "rgba(255,255,255,0.7)",
  padding: "6px",

  "&:focus": {
    outline: "1px solid black",
  },

  "&::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    appearance: "none",
  },
  "&::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    appearance: "none",
  },
  "&::-moz-inner-spin-button": {
    "-moz-appearance": "none",
    appearance: "none",
  },
  "&::-moz-outer-spin-button": {
    "-moz-appearance": "none",
    appearance: "none",
  },
});

const StyledLabel = styled("label", {
  fontSize: "18px",
  color: "FieldText",
});

export default NumberInput;
