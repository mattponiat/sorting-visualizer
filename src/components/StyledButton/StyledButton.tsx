import { styled } from "@stitches/react";
import { mauve, blackA } from "@radix-ui/colors";

const StyledButton = styled("button", {
  width: "75px",
  padding: "10px",
  backgroundColor: "rgba(255,255,255,0.7)",
  border: "none",
  borderRadius: "8px",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  backdropFilter: "blur(10px)",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000000c3",
  cursor: "pointer",
  transition: "all 0.2s",
  "&:hover": { backgroundColor: mauve.mauve4 },
});

export default StyledButton;
