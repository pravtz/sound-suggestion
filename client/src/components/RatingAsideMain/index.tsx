import { Container, WrapperImage } from "./style";
import RatingScreen from "../screens/RankingScreen";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

const RatingAsideMain = () => {
  return (
    <Container>
      <WrapperImage>
        <Image src={Logo} />
      </WrapperImage>
      <RatingScreen />
    </Container>
  );
};
export default RatingAsideMain;
