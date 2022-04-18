import { Container } from "./style";
import { FaHome, FaPlusSquare, FaMedal } from "react-icons/fa";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { ButtonNav } from "../ButtonNav";
import { useRouter } from "next/router";

const NavBottomMain = () => {
  const router = useRouter();
  return (
    <Container>
      <ul>
        <li>
          <ButtonNav
            icon={<FaHome />}
            text="home"
            onClick={() => router.push("/home")}
          />
        </li>
        <li>
          <ButtonNav
            icon={<FaMedal />}
            text="Ranking"
            onClick={() => router.push("/ranking")}
          />
        </li>
        <li>
          <ButtonNav
            icon={<FaPlusSquare />}
            text="Adicionar Música"
            onClick={() => router.push("/add")}
          />
        </li>
        <li>
          <ButtonNav
            icon={<BsFillCaretLeftFill />}
            text="Sair"
            onClick={() => router.push("/")}
          />
        </li>
      </ul>
    </Container>
  );
};

export default NavBottomMain;
