import { Container, Header, Input, Wrapper, Main, Table } from "./style";
import ReactStars from "react-stars";
import Link from "next/link";
import { SoundSugestionApi as api } from "../../service/api";
import { useEffect, useState } from "react";

const ContentMain = () => {
  const [sounds, setSounds] = useState([]);
  const [searchSound, setSearchSound] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handlerSearchSounds = (e: any) => searchItems(e.target.value);

  const searchItems = (searchValue: string) => {
    setSearchSound(searchValue);
    if (searchSound !== "") {
      const filteredData = sounds.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchSound.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(sounds);
    }
  };

  useEffect(() => {
    api
      .get("/")
      .then((response) => setSounds(response.data))
      .catch((err) => {
        console.log(`ops...! ocorreu um erro ${err}`);
      });
  }, []);
  const addRating = () => {};

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  const handlerClickStars = (id: any) => {
    console.log(id);
  };

  return (
    <Container>
      <Header>
        <Input
          type="text"
          area-label="Buscar"
          placeholder="Buscar"
          onChange={handlerSearchSounds}
          autoFocus
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
            {/* start fetch */}
            {searchSound.length > 1
              ? filteredResults.map(({ id, music, album, band }) => {
                  return (
                    <Link key={id} href={`/sound/${id}`} passHref>
                      <tr>
                        <td>
                          <tr>{music}</tr>
                          <tr>
                            <span>{band}</span>
                          </tr>
                        </td>

                        <td>{album}</td>

                        <td>
                          <ReactStars
                            count={5}
                            value={0}
                            onChange={ratingChanged}
                            size={16}
                            color1={"#434952"}
                            color2={"#BE185D"}
                            edit={false}
                          />
                        </td>
                      </tr>
                    </Link>
                  );
                })
              : sounds.map(({ id, music, album, band }) => {
                  return (
                    <Link key={id} href={`/sound/${id}`} passHref>
                      <tr>
                        <td>
                          <tr>{music}</tr>
                          <tr>
                            <span>{band}</span>
                          </tr>
                        </td>

                        <td>{album}</td>

                        <td onChange={handlerClickStars}>
                          <ReactStars
                            count={5}
                            value={0}
                            onChange={ratingChanged}
                            size={16}
                            color1={"#434952"}
                            color2={"#BE185D"}
                            edit={false}
                          />
                        </td>
                      </tr>
                    </Link>
                  );
                })}
            {/* end fetch */}
          </Table>
        </Main>
      </Wrapper>
    </Container>
  );
};
export default ContentMain;
