import React from "react";
import styled from "styled-components";

export const LayoutStyled = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

export default function Layout({ children }: any) {
  return (
    <LayoutStyled>
      <main>{children}</main>
    </LayoutStyled>
  );
}
