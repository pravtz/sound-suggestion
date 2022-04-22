import {
  Container,
  FormByFormik,
  FildByFormik,
  GroupForm,
  LabelInput,
  GroupButton,
} from "./style";
import { useRouter } from "next/router";
import { Formik, FormikErrors } from "formik";
import { ButtonText } from "../../ButtonText";
import { SoundSugestionApi as api } from "../../../service/api";
import { useEffect, useState } from "react";

type FormValues = {
  music: string;
  album: string;
  band: string;
  birth: number;
};

const AddScreen = () => {
  const router = useRouter();
  const [sound, setSound] = useState({});

  useEffect(() => {
    if (router.query.id) {
      api
        .get(`/${router.query.id}`)
        .then((response) => setSound(response.data))
        .catch((err) => {
          console.log(`ops...! ocorreu um erro ${err}`);
        });
    }
  }, []);

  const addSound = (filds: any, setSubmitting: any) => {
    api.post("/", filds).catch((err) => {
      setSubmitting(false);
      console.log(`ops...! ocorreu um erro ${err}`);
    });
  };
  const updateSound = (id: any, filds: any, setSubmitting: any) => {
    api.put(`/${id}`, filds).catch((err) => {
      setSubmitting(false);
      console.log(`ops...! ocorreu um erro ${err}`);
    });
  };

  const handlerOnSubmit = (values: any, action: any) => {
    setTimeout(() => {
      if (router.query.id) {
        updateSound(router.query.id, values, action.setSubmitting);

        router.push("/home");
        return;
      }
      addSound(values, action.setSubmitting);

      router.push("/home");
    }, 500);
  };
  const { music, album, band, birth }: any = sound;

  return (
    <Container>
      <header>
        <h2>Adicione Aqui Sua Música!</h2>
      </header>
      <main>
        <Formik
          enableReinitialize={true}
          initialValues={{
            music: music,
            album: album,
            band: band,
            birth: birth,
          }}
          // validate
          validate={(values: FormValues) => {
            const errors: FormikErrors<FormValues> = {};
            if (!values.music) {
              errors.music = "Requerido!";
            } else if (values.music.length > 40) {
              errors.music = "O campo deve conter menos que 40 caracteres";
            }
            if (!values.album) {
              errors.album = "Requirido!";
            } else if (values.album.length > 40) {
              errors.album = "O campo deve conter menos que 40 caracteres";
            }
            if (!values.band) {
              errors.band = "Requirido!";
            } else if (values.band.length > 40) {
              errors.band = "O campo deve conter menos que 40 caracteres";
            }
            if (!values.birth) {
              errors.birth = "Requirido!";
            } else if (
              !/18[0-9]{2}|19[0-9]{2}|20[0-9]{2}/.test(String(values.birth)) ||
              String(values.birth).length > 4
            ) {
              errors.birth = "É requerido um ano de 4 digitos valido!";
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
              <GroupForm>
                <div>
                  <LabelInput htmlFor="music">Nome da música</LabelInput>
                  <FildByFormik
                    id="music"
                    name="music"
                    placeholder="ex.: Black In Black"
                  />
                  {errors.music && touched.music ? (
                    <span>errors.music</span>
                  ) : null}
                </div>
                <div>
                  <LabelInput htmlFor="album">Álbum</LabelInput>
                  <FildByFormik
                    id="album"
                    name="album"
                    placeholder="ex.: Black In Black Show"
                  />
                  {errors.album && touched.album ? (
                    <span>errors.album</span>
                  ) : null}
                </div>
              </GroupForm>
              <GroupForm>
                <div>
                  <LabelInput htmlFor="band">Banda/Cantor</LabelInput>
                  <FildByFormik
                    id="band"
                    name="band"
                    placeholder="ex.: AC/DC"
                  />
                  {errors.band && touched.band ? (
                    <span>errors.band</span>
                  ) : null}
                </div>
                <div>
                  <LabelInput htmlFor="birth">Ano de lançamento</LabelInput>
                  <FildByFormik
                    id="birth"
                    name="birth"
                    placeholder="ex.: 1980"
                  />
                  {errors.band && touched.band ? (
                    <span>errors.band</span>
                  ) : null}
                </div>
              </GroupForm>
              <GroupButton>
                <ButtonText type="submit" disabled={isSubmitting}>
                  Adicionar
                </ButtonText>
                <ButtonText type="button" onClick={() => router.back()}>
                  Cancelar
                </ButtonText>
              </GroupButton>
            </FormByFormik>
          )}
        </Formik>
      </main>
    </Container>
  );
};

export default AddScreen;
