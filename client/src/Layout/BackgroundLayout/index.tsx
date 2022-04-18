import { Root } from "./baseStyle";

type BackgroundLayoutType = {
  children: React.ReactNode;
};

const BackgroundLayout = ({ children }: BackgroundLayoutType) => {
  return <Root>{children}</Root>;
};

export default BackgroundLayout;
