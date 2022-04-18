import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  "@small": {
    "h3:after": {
      content: " small",
    },
  },
  "@medium": {
    "h3:after": {
      content: " medium",
    },
  },
  "@large": {
    "h3:after": {
      content: " large",
    },
  },
  "@huge": {
    "h3:after": {
      content: " huge",
    },
  },
});
