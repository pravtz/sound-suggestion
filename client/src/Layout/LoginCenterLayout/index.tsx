import { Container } from "./style";

type LoginCenterLayoutType = {
  children: React.ReactNode;
};

const LoginCenterLayout = ({ children }: LoginCenterLayoutType) => {
  return <Container>{children}</Container>;
};

export default LoginCenterLayout;
