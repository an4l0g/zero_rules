import * as S from "../styles";

const rules = [
  {
    title: "Permanent Death",
    rules: [
      {
        content: (
          <>
            Em alguns casos, a morte permanente será considerada válida, desde que siga alguns quesitos. Para que um personagem tenha a morte permanente, 
            se faz necessária a apresentação de motivos plausíveis, seguindo o roleplay. Caso o personagem que for receber a morte permanente seja um terceiro,
            se faz necessária a apresentação de provas detalhadas, contemplando os motivos para a morte.
          </>
        ),
      },
      {
        content: (
          <>
            O indivíduo que sofrer a morte permanente, terá seu personagem totalmente resetado (aparência, identidade, dinheiro, carros, casas etc).
          </>
        ),
      },
      {
        content: <> Existem dois tipos de permanent death (PD): </>,
        extras: [
          <>
            <S.List>
             <S.Item>
                <S.Paragraph>
                <b>PD de facção:</b> ocorre quando o personagem precisa morrer para ser retirado de sua facção ou organização e obrigado a esquecer tudo
                relacionado a ela e as pessoas que a compõem. <b>Nestes casos, não ocorre o reset de personagem</b>.
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                <b>PD de personagem:</b> ocorre seguindo o <b><i>item 12.1</i></b> ou quando o personagem comete alguma infração na cidade que é considerada 
                irreparável e, por isso, necessita ter o personagem resetado.
                </S.Paragraph>
             </S.Item>
            </S.List>
          </>,
        ],
      },
    ],
  },
];

export default rules;
