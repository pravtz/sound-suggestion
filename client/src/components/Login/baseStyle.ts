import { styled } from "../../styles/stitches.config";
import { Field, Form } from "formik";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
});
export const Logo = styled("div", {
  textAlign: "center",
  color: "$text",
});
export const LabelInput = styled("label", {
  textAlign: "center",
  fontSize: 32,
  color: "$text",
  marginBottom: "$3",
});

export const Mensage = styled("h2", {
  fontSize: 16,
  fontWeight: 200,
  textAlign: "center",
  color: "$text",
  marginTop: "$3",
});
export const FormByFormik = styled(Form, {
  display: "flex",
  flexDirection: "column",
  span: {
    textAlign: "center",
    color: "$error",
    fontSize: 12,
  },
});
export const FieldByFormik = styled(Field, {
  outline: "none",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: "$2",
  borderColor: "$border-box",
  backgroundColor: "$background-box",
  color: "$text",
  height: 38,
  width: "80%",
  textAlign: "center",
  margin: "auto",
});
