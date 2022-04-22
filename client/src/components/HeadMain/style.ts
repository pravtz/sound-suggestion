import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  height: "100%",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "60px 30px",

  gridTemplateAreas: "'LOGO NAME''TITLE TITLE'",
  "@medium": {
    gridTemplateColumns: "2fr 1fr",
    gridTemplateRows: "90px ",
    gridTemplateAreas: "'TITLE NAME'",
  },
  "@large": {
    gridTemplateColumns: "1fr 1fr",
  },
});
export const WrapperLogo = styled("div", {
  gridArea: "LOGO",
  "@medium": {
    display: "none",
  },
});
export const Title = styled("div", {
  gridArea: "TITLE",
  fontSize: 11,
  textAlign: "right",
  h2: {
    color: "$text",
  },
  "@medium": {
    textAlign: "left",
    fontSize: 18,
  },
  "@large": {
    fontSize: 24,
  },
});
export const Name = styled("div", {
  gridArea: "NAME",
  fontWeight: 200,
  fontSize: 16,
  textAlign: "right",
  color: "$text",
  "@large": {
    fontSize: 22,
  },
});
