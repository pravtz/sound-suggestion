import { styled } from "../../../styles/stitches.config";

export const Container = styled("section", {
  height: "100%",
});
export const Main = styled("main", {
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$border-box",
  borderRadius: "$4",
  padding: "$5",
  height: "100%",
});
export const Header = styled("header", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});
export const Tools = styled("div", {
  color: "$text",
  display: "flex",
  flexDirection: "row",
});
export const Title = styled("h1", {
  color: "$text",
  "@medium": {
    fontSize: 30,
  },
  "@large": {
    fontSize: 40,
  },
});
export const Content = styled("div", {
  ul: {
    listStyle: "none",
  },
  li: {
    color: "$text",
    fontSize: 12,
    fontWeight: 200,
    margin: "$3",

    "@large": {
      fontSize: 18,
    },

    span: {
      fontSize: 18,
      fontWeight: 400,
      "@large": {
        fontSize: 28,
      },
    },
  },
});
