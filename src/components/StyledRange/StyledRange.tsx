import { styled } from "@stitches/react";

const StyledRange = styled("input", {
  "-webkit-appearance": "none",
  appearance: "none",
  backgroundColor: "transparent",
  cursor: "pointer",

  "&::-webkit-slider-runnable-track": {
    height: "5px",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: "100vmax",
  },
  "&::-moz-range-track": {
    height: "5px",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: "100vmax",
  },

  "&::-webkit-slider-thumb": {
    "-webkit-appearance": "none",
    appearance: "none",
    height: "1rem",
    width: "1rem",
    marginTop: "-5px",
    backgroundColor: "#ffe1fc",
    borderRadius: "50%",
  },
  "&::-moz-range-thumb": {
    height: "1rem",
    width: "1rem",
    backgroundColor: "#ffe1fc",
    border: "none",
    borderRadius: "50%",
  },
});

export { StyledRange };
