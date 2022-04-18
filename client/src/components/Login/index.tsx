import Image from "next/image";
import { useRouter } from "next/router";
import {
  Wrapper,
  LabelInput,
  Mensage,
  FormByFormik,
  FieldByFormik,
  Logo,
} from "./baseStyle";
import { ButtonText } from "../ButtonText";
import logo from "../../../public/logo.svg";
import { Formik, FormikErrors } from "formik";
import { loadDefaultErrorComponents } from "next/dist/server/load-components";

type FormValues = {
  firstName: string;
};

const Login = () => {
  const router = useRouter();

  const handlerOnSubmit = (values: any, action: any) => {
    setTimeout(() => router.push("/home"), 500);

    action.setSubmitting(false);
  };

  return (
    <Wrapper>
      <Logo>
        <Image src={logo} alt="Logo" />
      </Logo>

      <Formik
        initialValues={{
          firstName: "",
        }}
        validate={(values: FormValues) => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.firstName) {
            errors.firstName = "Requerido!";
          }
          return errors;
        }}
        onSubmit={handlerOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <FormByFormik>
            <LabelInput htmlFor="firstName">Qual o seu nome?</LabelInput>
            <FieldByFormik id="firstName" name="firstName" placeholder="Nome" />
            <span>
              {errors.firstName && touched.firstName && errors.firstName}
            </span>
            <Mensage>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati doloribus tempora quam delectus.
            </Mensage>
            <ButtonText disabled={isSubmitting} type="submit">
              Enter
            </ButtonText>
          </FormByFormik>
        )}
      </Formik>
    </Wrapper>
  );
};
export default Login;
