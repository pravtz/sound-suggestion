import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  background: "$background-box",
  borderRadius: "$2",
  width: "50%",
  padding: "$4",

  variants: {
    variant: {
      minimum: {
        minWidth: 300,
        maxWidth: 350,
        margin: "auto",
        height: "70vh",
        marginTop: "15vh",
      },
      column: {
        height: "100%",
      },
      row: {
        width: "100%",
      },
      full: {
        width: "100%",
        height: "100%",
      },
    },
  },
  defaultVariants: {
    variant: "full",
  },
});
