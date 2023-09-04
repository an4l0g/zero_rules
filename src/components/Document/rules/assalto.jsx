import * as S from "../styles";

const rules = [
  {
    title: "Regras de Assalto",
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
            personagem está no <b>"GRITANDO"</b>.
          </>
        ),
      },
      {
        content: (
          <>
            É <b>terminantemente proibido</b> assaltar paramédicos e mecânicos em serviço.
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
      {
        content: (
          <>
            Para assaltar alguém, é necessário manter a proporção de 2 para 1. Ou seja, para assaltar uma pessoa,
            são necessárias duas pessoas.
          </>
        ),
      },
      {
        content: (
          <>
            É proibido assaltar indivíduos em blips de rotas.
          </>
        ),
      },
    ],
  },
];

export default rules;
