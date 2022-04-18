import { styled } from "../../styles/stitches.config";

export const Container = styled("button", {
  margin: "$4",
  padding: "$4 $4",
  backgroundColor: "$primary",
  border: "none",
  borderRadius: 4,
  color: "$text",

  fontWeight: "700",
  textTransform: "uppercase",

  "&:hover": {
    color: "$text-light",
  },

  "&[disabled=true]": {
    opacity: ".5",
    "&:hover": {
      color: "$text",
    },
  },
});
