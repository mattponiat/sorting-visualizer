import { styled } from "@stitches/react";
import { BoxStateType } from "../../utils/types";

type Props = {
  state: BoxStateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  css?: any;
};

export const SortingBar = ({ state, ...props }: Props) => {
  return <StyledBar state={state} {...props} />;
};

const StyledBar = styled("div", {
  maxWidth: "auto",
  width: "100%",
  minHeight: "15px",
  backgroundColor: "rgba(255,255,255,0.7)",
  borderRadius: "10px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur( 5px )",
  variants: {
    state: {
      default: {
        backgroundColor: "rgba(255,255,255,0.7)",
      },
      compare: {
        backgroundColor: "rgba(132, 247, 255, 0.835)",
      },
      swap: {
        backgroundColor: "rgba(255,255,255)",
      },
      highlight: {
        backgroundColor: "#67fff27f",
      },
    },
  },
});
