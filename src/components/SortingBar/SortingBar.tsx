import * as React from "react";
import { styled } from "@stitches/react";
//Types
import { BoxStateType } from "../../utils/types";

type Props = {
  state: BoxStateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  css?: any;
};

const SortingBar = ({ state, ...props }: Props) => {
  return <StyledBar state={state} {...props} />;
};

const StyledBar = styled("div", {
  width: "100%",
  minHeight: "15px",
  backgroundColor: "#abb4eb",
  variants: {
    state: {
      default: {
        backgroundColor: "#abb4eb",
      },
      compare: {
        backgroundColor: "#9048f4",
      },
      swap: {
        backgroundColor: "#9048f4",
      },
      pivot: {
        backgroundColor: "#ff7ac6",
      },
    },
  },
});

export default SortingBar;
