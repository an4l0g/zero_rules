import React from "react";
import * as S from "./styles";
import Image from "next/image";

function Banner() {
  return (
    <S.Container>
      <S.Filter>
        <Image src="/logo.png" width={400} height={150} />
        <S.Title>Regras</S.Title>
        <S.ScrollIndicator>
          <S.Indicator />
        </S.ScrollIndicator>
      </S.Filter>
    </S.Container>
  );
}

export default Banner;
