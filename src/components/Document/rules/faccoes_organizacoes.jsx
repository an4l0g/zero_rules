import * as S from "../styles";

const rules = [
  {
    title: "Facções e Organizações",
    rules: [
      {
        content: (
          <>
            Todas as facções e organizações (legais e ilegais) são subordinadas a uma organização que tem autoridade sobre
            tudo dentro da cidade, cujo nome é <b>Alta Classe</b>.
          </>
        ),
      },
      {
        content: (
          <>
            O recrutamento para facções e organizações ilegais através do discord e/ou formulários é proibido.
          </>
        ),
      },
      {
        content: (
          <>
            Em caso de ausência total da facção ou organização ilegal, durante três dias, a facção ou organização será
            reivindicada e entregue a outros interessados.
          </>
        ),
      },
      {
        content: (
          <>
            Em casos de traição a uma facção ou organização, o traidor pode sofrer <i>PD de personagem</i>.
          </>
        ),
      },
      {
        content: (
          <>
            Áreas vermelhas não possuem PvP liberado, sendo necessário um roleplay antes de atirar em qualquer outro cidadão.
          </>
        ),
      },
        {
        content: <> As invasões de facção/organização são controladas pelos responsáveis do ilegal e devem ser comunicadas com,
        no mínimo, 24 horas de antecedência. Todas as invasões devem seguir os items expostos abaixo: </>,
        extras: [
          <>
            <S.List>
             <S.Item>
                <S.Paragraph>
                Para que uma invasão seja autorizada, é necessária a apresentação, aos responsáveis pelo ilegal, de motivos 
                que levaram a decisão de invasão ser tomada, junto com todas as provas colhidas para tal;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                As facções/organizações invasoras e invadidas devem estar caracterizadas com, pelo menos, uma peça de roupa
                com cores padronizadas, para fácil identificação na hora da invasão;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                É <b>terminantemente proibida</b> a intervenção de facções ou organizações ilegais que não sejam as envolvidas
                na invasão;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Todos os participantes da invasão deverão estar devidamente setados em suas respectivas facções ou organizações;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Será nomeado vencedor da ação a facção ou organização que obtiver damoninância completa da outra (matando todos os
                envolvidos) ou aquela que obtiver a maior quantidade de membros vivos após 2:00 horas de invasão;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Caso a facção ou organização invadida seja dominada, ficará três dias sem poder exercer suas funções;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                As invasões possuem um limite de uma por semana;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                <b>Em ações de invasão, a polícia não está autorizada a intervir</b>. Os responsáveis pelo ilegal deverão entrar em contato
                com os responsáveis pela polícia e notificar dia e hora da invasão, para que a polícia não interfira.
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
