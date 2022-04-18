import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  ul: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "@medium": {
      flexDirection: "column",
    },

    li: {
      listStyle: "none",

      "&:nth-child(2)": {
        display: "flex",
      },
      "@medium": {
        "&:nth-child(2)": {
          display: "none",
        },
      },
    },
  },
});
