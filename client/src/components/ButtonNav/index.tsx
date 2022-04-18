import { ButtonHTMLAttributes, ComponentProps } from "react";
import { Container } from "./style";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof Container> & {
    rest?: any;
    icon: any;
    text: string;
  };

export const ButtonNav = ({ icon, text, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <i>{icon}</i>
      <span>{text}</span>
    </Container>
  );
};
