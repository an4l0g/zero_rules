import * as S from "../styles";

const rules = [
  {
    title: "Zona de assalto",
    rules: [
      {
        content: (
          <>
            A zona de assalto da cidade está delimitada no seguinte perímetro:
          </>
        ),
        extras: [<S.CImage src="/zona_assalto.png" width="500" height="400" />],
      },
      {
        content: (
          <>
            Assaltos realizados fora do perímetro acima serão passíveis de
            advertência.
          </>
        ),
      },
      {
        content: (
          <>
            Sempre ao dar uma voz de assalto, verifique se o nível de voz do seu
            personagem está no "GRITANDO".
          </>
        ),
      },
      {
        content: (
          <>
            Os paramédicos não possuem permissão para atender chamados e
            reanimar dentro da zona de assalto.
          </>
        ),
      },
    ],
  },
];

export default rules;
