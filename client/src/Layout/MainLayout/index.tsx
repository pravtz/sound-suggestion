import { Container } from "./style";

type MainLayoutType = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutType) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
