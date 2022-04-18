import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  // MODELO BREAKPOINT STITCHES
  // "@small": {}, // 1440PX
  // "@medium": {}, // 1170PX
  // "@large": {}, // 768PX
  // "@huge": {}, // 450PX

  width: "100%",
  height: "100%",

  display: "grid",
  gridTemplateColumns: "auto",
  gridTemplateRows: "90px auto 90px",

  gridTemplateAreas: "'HE''CO''AS'",

  "@small": {},
  "@medium": {
    gridTemplateColumns: "400px auto",
    gridTemplateRows: "100px auto",

    gridTemplateAreas: "'AS HE''AS CO'",
  },
  "@large": {},
  "@huge": {},
});
