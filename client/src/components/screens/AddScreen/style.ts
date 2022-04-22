import { styled } from "../../../styles/stitches.config";
import { Form, Field } from "formik";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  height: "100%",

  header: {
    fontSize: "12px",
    color: "$text-light",
    margin: "$1",
    h2: {
      marginLeft: "$5",
    },
  },
  main: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "$border-box",
    borderRadius: "$4",
    padding: "$3",
    height: "100%",
  },
});

export const FormByFormik = styled(Form, {
  width: "100%",
});
export const FildByFormik = styled(Field, {
  outline: "none",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: "$2",
  borderColor: "$border-box",
  backgroundColor: "$background-box",
  color: "$text",
  height: 38,
  width: "100%",
  textAlign: "left",
  paddingLeft: "$4",
});
export const LabelInput = styled("label", {
  width: "97%",
  marginLeft: "$3",

  color: "$text-light",
  fontSize: "12px",
});
export const GroupForm = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@large": {
    flexDirection: "row",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    width: "97%",
    marginLeft: "$3",
    marginRight: "$3",
    marginTop: "$1",
    marginBottom: "$1",

    span: {
      fontSize: "12px",
      color: "$error",
      width: "95%",
      textAlign: "center",
    },
  },
});
export const GroupButton = styled("div", {
  display: "flex",
});
