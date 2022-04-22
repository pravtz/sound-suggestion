import Image from "next/image";
import { Container, WrapperLogo, Name, Title } from "./style";
import Logo from "../../../public/logo.svg";

const HeadMain = () => {
  const name = "Ederson";
  return (
    <Container>
      <WrapperLogo>
        <Image src={Logo} />
      </WrapperLogo>

      <Title>
        <h2>É mais que sua opinião. É seu estilo</h2>
      </Title>
      <Name>
        <p>Ola! {name}</p>
      </Name>
    </Container>
  );
};
export default HeadMain;
