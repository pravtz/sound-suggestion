import { styled } from "../../styles/stitches.config";

export const Container = styled("section", {
  height: "90%",
});
export const Header = styled("header", {});
export const Input = styled("input", {
  outline: "none",
  backgroundColor: "$background-box",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$border-box",
  borderRadius: "$2",
  width: "100%",
  height: 38,
  paddingLeft: 15,
  paddingRight: 15,
  marginBottom: "$5",
  marginTop: "$1",
  color: "$text-light",
  "@medium": {
    width: "60%",
  },
});

export const Wrapper = styled("div", {
  height: "97%",
  //border: "1px solid red",
});
export const Main = styled("main", {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$border-box",
  borderRadius: "$4",
  padding: "$5",
  height: "100%",
});
export const Table = styled("table", {
  width: "100%",
  color: "$text",
  th: {
    color: "$text-light",
    textAlign: "left",
    fontSize: "14px",
    "@large": {
      fontSize: "16px",
    },
    "&:nth-child(2)": {
      display: "none",
      "@small": {
        display: "block",
      },
    },
  },
  td: {
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "$border-box",
    paddingTop: "$2",
    paddingBottom: "$2",
    "&:nth-child(2)": {
      verticalAlign: "middle",
      display: "none",
      color: "$text",
      fontSize: "9px",
      "@small": {
        display: "block",
      },
      "@medium": {
        fontSize: "12px",
      },
      "@large": {
        fontSize: "16px",
      },
    },
    "&:nth-child(3)": {
      minWidth: "70px",
    },
  },
  tr: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#1d2632",
    },
    "&:active": {
      backgroundColor: "#1a212b",
    },
    "&:nth-child(1)": {
      cursor: "auto",
      "&:hover": {
        backgroundColor: "unset",
      },
      "&:active": {
        backgroundColor: "unset",
      },
    },

    fontSize: "14px",
    "@large": {
      fontSize: "16px",
    },
    span: {
      fontSize: "12px",
      color: "#696969",
    },
  },
});
