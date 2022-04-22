import { styled } from "../../styles/stitches.config";

export const Container = styled("button", {
  margin: "$2",
  padding: "$2 $2",
  backgroundColor: "$primary",
  border: "none",
  borderRadius: 4,
  color: "$text",

  fontWeight: "700",
  textTransform: "uppercase",

  "&:hover": {
    color: "$text-light",
  },

  variants: {
    sizeButton: {
      small: {
        margin: "$2",
        padding: "$2 $2",
      },
      medium: {
        margin: "$3",
        padding: "$3 $3",
      },
      large: {
        margin: "$4",
        padding: "$4 $4",
      },
    },
  },

  "&[disabled=true]": {
    opacity: ".5",
    "&:hover": {
      color: "$text",
    },
  },
});
