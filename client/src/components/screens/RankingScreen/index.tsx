import { Container, Header, Main } from "./style";
import { FaMedal, FaStar, FaVoteYea } from "react-icons/fa";
import { useEffect, useState } from "react";
import { SoundSugestionApi as api } from "../../../service/api";

const RankingScreen = () => {
  const [sounds, setSounds] = useState([]);
  useEffect(() => {
    api
      .get("/rating/top")
      .then((response) => setSounds(response.data))
      .catch((err) => {
        console.log(`ops...! ocorreu um erro ${err}`);
      });
  }, []);

  return (
    <Container>
      <Header>
        <h2>TOP 10</h2>
      </Header>
      <Main>
        <table>
          {/* start line */}
          {sounds.map(({ id, music, rating, vote }: any, i) => {
            return (
              <tr key={id}>
                <td>
                  <i>
                    <FaMedal />
                  </i>
                  <span>{++i}</span>
                </td>
                <td>
                  {music.length > 20 ? music.substring(0, 10) + "..." : music}
                </td>
                <td>
                  <span>{(rating / vote).toFixed(1)}</span>
                  <i>
                    <FaStar />
                  </i>
                </td>
                <td>
                  <span>{vote}</span>
                  <i>
                    <FaVoteYea />
                  </i>
                </td>
              </tr>
            );
          })}

          {/* end line */}
        </table>
      </Main>
    </Container>
  );
};

export default RankingScreen;
