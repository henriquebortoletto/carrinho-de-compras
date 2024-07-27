import { Trash } from "@phosphor-icons/react";

import * as S from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  $primary?: boolean;
  $size?: "small" | "medium";
  $fullWidth?: boolean;
  $hasIcon?: boolean;
}

const Button = ({
  $size = "medium",
  $primary = false,
  $fullWidth = false,
  $hasIcon = false,
  children,
  ...rest
}: ButtonProps) => (
  <S.Button {...rest} $primary={$primary} $size={$size} $fullWidth={$fullWidth}>
    {$hasIcon && <Trash size={16} />}
    {children}
  </S.Button>
);

export default Button;
