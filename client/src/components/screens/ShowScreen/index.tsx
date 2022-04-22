import { ButtonNav } from "../../ButtonNav";
import { Container, Main, Title, Content, Header, Tools } from "./style";
import { useRouter } from "next/router";
import { FaPen, FaTrash, FaVoteYea } from "react-icons/fa";
import ReactStars from "react-stars";
import { SoundSugestionApi as api } from "../../../service/api";
import { useCallback, useEffect, useState } from "react";

const ShowScreen = () => {
  const router = useRouter();
  const [sound, setSound] = useState({});
  const [medStar, setMedStar] = useState("");

  const handlerDelete = async () => {
    const exec = await api.delete(`/${id}`).catch((err) => {
      console.log(`ops...! ocorreu um erro ${err}`);
    });
    if (exec) {
      router.push(`/home`);
    }
  };

  const ratingChanged = (newRating: any) => {
    api
      .post(`/rating/${router.query.sound}`, {
        valuation: newRating,
      })
      .catch((err) => {
        console.log(`ops...! ocorreu um erro ${err}`);
      });
    router.push("/home");
  };

  useEffect(() => {
    api
      .get(`/${router.query.sound}`)
      .then((response) => setSound(response.data))
      .catch((err) => {
        console.log(`ops...! ocorreu um erro ${err}`);
      });
    api
      .get(`rating/${router.query.sound}`)
      .then((response) => setMedStar(response.data))
      .catch((err) => {
        console.log(`ops...! ocorreu um erro ${err}`);
      });
  }, []);

  const show = { ...sound, medStar };
  const { id, music, album, band, birth, vote }: any = show;

  return (
    <Container>
      <Main>
        <Header>
          <Title>{music}</Title>
          <Tools>
            <ButtonNav
              icon={<FaPen />}
              text="Editar"
              onClick={() => router.push(`/add?id=${id}`)}
            />
            <ButtonNav
              icon={<FaTrash />}
              text="Deletar"
              onClick={handlerDelete}
            />
          </Tools>
        </Header>
        <Content>
          <ul>
            <li>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color1={"#434952"}
                color2={"#BE185D"}
              />
            </li>

            <li>
              Quant. de votos: <span>{vote}</span>
            </li>
            <li>
              Media das Avaliações:{" "}
              <span>{Number(show.medStar).toFixed(1)}</span>
            </li>
            <li>
              Álbum: <span>{album}</span>
            </li>
            <li>
              Músico/Banda: <span>{band}</span>
            </li>
            <li>
              Ano de Lançamento: <span>{birth}</span>
            </li>
          </ul>
        </Content>
      </Main>
    </Container>
  );
};
export default ShowScreen;
