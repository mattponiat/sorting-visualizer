import { styled } from "@stitches/react";

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

export { StyledButton };
