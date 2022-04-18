import { styled } from "../../styles/stitches.config";

export const Container = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  outline: "none",
  backgroundColor: "$background-box",
  color: "$text",
  border: "none",
  fontSize: "16px",
  margin: "$1",

  span: {
    display: "none",
    fontWeight: "200",
    marginLeft: "$3",
    "@medium": { display: "block" },
  },
  i: {
    color: "$primary",
    fontSize: "24px",
  },
});
