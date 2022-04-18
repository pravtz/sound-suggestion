import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  // "html, body, #__next": {
  //   minHeight: "100%",
  // },

  body: {
    textRendering: "optimizeLegibility !important",
    fontFamily: "$default",
    fontWeight: 400,
  },

  button: {
    cursor: "pointer",
    fontFamily: "Roboto, sans-serif",
  },
});
