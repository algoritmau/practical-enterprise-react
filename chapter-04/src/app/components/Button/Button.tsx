import { ButtonProps } from '../types'

import { ButtonStyled } from './ButtonStyled'

export const Button = ({
  type,
  variant,
  size,
  text,
  className
}: ButtonProps) => (
  <ButtonStyled
    className={`${className} btn btn--${type} btn--${variant} btn--${size}`}
  >
    {text}
  </ButtonStyled>
)
