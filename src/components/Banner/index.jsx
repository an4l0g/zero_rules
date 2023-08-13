import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { scrollTo } from "@/utils";

function Banner() {
  return (
    <S.Container>
      <S.Filter>
        <S.Logo src="/logo.png" width={400} height={150} />
        <S.Title>Regras</S.Title>
        <S.ScrollIndicator onClick={() => scrollTo("rules")}>
          <S.Indicator />
        </S.ScrollIndicator>
      </S.Filter>
    </S.Container>
  );
}

export default Banner;
