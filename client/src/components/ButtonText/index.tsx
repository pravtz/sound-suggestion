import { ButtonHTMLAttributes, ComponentProps } from "react";
import { Container } from "./style";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof Container>;

export const ButtonText = ({
  children,

  ...rest
}: React.PropsWithChildren<Props>) => {
  return <Container {...rest}>{children}</Container>;
};
