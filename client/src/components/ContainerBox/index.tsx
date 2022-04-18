import { Container } from "./style";

type props = {
  children: React.ReactNode;
  variant: "minimum" | "column" | "row" | "full";
};

const ContainerBox = ({ children, variant }: props) => {
  return <Container variant={variant}>{children}</Container>;
};

export default ContainerBox;
