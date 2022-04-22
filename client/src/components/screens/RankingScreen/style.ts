import { styled } from "../../../styles/stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
});
export const Header = styled("div", {
  h2: {
    color: "$text",
    marginLeft: "$4",
    marginBottom: "20px",
  },
});
export const Main = styled("main", {
  width: "100%",

  table: {
    width: "100%",
    tr: {
      td: {
        verticalAlign: "middle",
        color: "$text",
        fontSize: "16px",
        i: {
          color: "$primary",
          "&:nth-child(1)": {
            fontSize: "10px",
          },
        },
        "&:nth-child(1)": {
          fontSize: "12px",
          width: "35px",
        },
        "&:nth-child(3)": {
          textAlign: "right",
          width: "60px",
        },
        "&:nth-child(4)": {
          textAlign: "right",
          width: "60px",
        },
      },
    },
  },
});
