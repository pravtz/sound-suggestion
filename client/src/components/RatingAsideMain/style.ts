import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  display: "none",
  "@medium": {
    display: "flex",
    flexDirection: "column",
  },
});
export const WrapperImage = styled("div", {
  margin: "10px auto",
});
