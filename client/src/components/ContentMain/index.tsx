import { Container, Header, Input, Wrapper, Main, Table } from "./style";
import ReactStars from "react-stars";
import Link from "next/link";

const ContentMain = () => {
  const handlerSearchSounds = () => {};

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };

  return (
    <Container>
      <Header>
        <Input
          type="text"
          area-label="Buscar"
          placeholder="Buscar"
          onChange={handlerSearchSounds}
        />
      </Header>
      <Wrapper>
        <Main>
          <Table>
            <tr>
              <th>Title</th>
              <th>Álbum</th>
              <th></th>
            </tr>
            <tr>
              <Link href={`/sound/1`} passHref>
                <td>
                  <tr>While Riot</tr>
                  <tr>
                    <span>The Clash</span>
                  </tr>
                </td>
              </Link>
              <Link href={`/sound/1`} passHref>
                <td>The Clash (Remastered)</td>
              </Link>
              <td>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={16}
                  color1={"#434952"}
                  color2={"#BE185D"}
                />
              </td>
            </tr>
            <tr>
              <Link href={`/sound/2`} passHref>
                <td>
                  <tr>Have You Ever Seen The Rain </tr>
                  <tr>
                    <span>Greedence Clearwater Revival</span>
                  </tr>
                </td>
              </Link>
              <Link href={`/sound/2`} passHref>
                <td>Pendulum (40th Anniversary Edition)</td>
              </Link>
              <td>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={16}
                  color1={"#434952"}
                  color2={"#BE185D"}
                />
              </td>
            </tr>
            <tr>
              <Link href={`/sound/3`} passHref>
                <td>
                  <tr>Hole In My Soul</tr>
                  <tr>
                    <span>Aerosmith</span>
                  </tr>
                </td>
              </Link>
              <Link href={`/sound/3`} passHref>
                <td>Nine Lives</td>
              </Link>
              <td>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={16}
                  color1={"#434952"}
                  color2={"#BE185D"}
                />
              </td>
            </tr>
          </Table>
        </Main>
      </Wrapper>
    </Container>
  );
};
export default ContentMain;
