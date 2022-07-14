import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyle {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({ className, children, ...restProps }) => {
  return (
    <StyledButton className={className} {...restProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #0074e9;
  color: #fff;
  box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
  padding: 16px 17px;
  font-family: apple sd gothic neo, malgun gothic, nanumbarungothic, nanumgothic, dotum, sans-serif;
  font-size: 17px;
  line-height: 20px;
  display: block;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
`;

export default Button;
