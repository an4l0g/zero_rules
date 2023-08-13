import * as S from "../styles";

const rules = [
  {
    title: "Ações de rua",
    rules: [
      {
        content: (
          <>
            É permitido <b>"ir de E"</b> antes de uma ação terminar. Vale
            salientar que desta forma você perderá todos os seus itens.
          </>
        ),
      },
      {
        content: (
          <>
            É <b>terminantemente proibido</b> que um participante se retire do
            local de uma ação em andamento antes de sua conclusão, com o
            objetivo de receber tratamento, e depois retornar.
          </>
        ),
      },
      {
        content: (
          <>
            Ao finalizar uma ação, os paramédicos serão automaticamente
            notificados para que se dirijam ao local para a reanimação dos
            participantes desmaiados. Caso não existam paramédicos em serviço na
            cidade, os participantes desmaiados deverão <b>"ir de E"</b>.
          </>
        ),
      },
      {
        content: (
          <>
            Em uma abordagem policial, caso a sua escolha seja o confronto, você
            deverá fugir por no mínimo <b>15 segundos</b> antes de abrir fogo.
          </>
        ),
      },
      {
        content: (
          <>
            Em uma abordagem policial, caso a sua escolha seja a fuga, o{" "}
            <b>"Power Gaming"</b> é liberado. <b>Mas atenção:</b>
          </>
        ),
        extras: [
          <>
            <S.List>
              <S.Item>Se o carro capotar, você deve se entregar;</S.Item>
              <S.Item>
                Se três ou mais pneus forem furados, você pode continuar a fuga
                a pé;
              </S.Item>
            </S.List>
          </>,
        ],
      },
      {
        content: (
          <>
            Caso seja iniciado um confronto entre facção e polícia, o QRR ilegal
            só poderá ser acionado à partir de 3 minutos após o primeiro disparo
            da ação.
          </>
        ),
      },
      {
        content: (
          <>
            É permitido participar de ações com veículos sem portas, capô e
            porta-malas (Carro bicho)! 😂
          </>
        ),
      },
      {
        content: (
          <>Não é permitido dropar em ações de rua de dentro do porta-malas.</>
        ),
      },
      {
        content: (
          <>
            Não é permitido participar de uma ação de rua estando em um veículo
            com mais pessoas do que a capacidade do automóvel.{" "}
            <b>Não serão permitidos:</b>
          </>
        ),
        extras: [
          <>
            <S.List>
              <S.Item>Pessoas sendo carregadas por outras;</S.Item>
              <S.Item>Pessoas no porta-malas;</S.Item>
            </S.List>
          </>,
        ],
      },
      {
        content: (
          <>
            Os bandidos não podem pedir reforço em caixinhas ou ATM, caso algo
            dê errado deverá ser priorizada a fuga.
          </>
        ),
      },
      {
        content: (
          <>
            Proibido disparar para trás em carros que não possuam vidros
            traseiro ou carros com aerofólio que bloqueiam tiros.
          </>
        ),
      },
      {
        content: <>Proibido disparar de dentro de carros blindados.</>,
      },
      {
        content: (
          <>Não é permitido dar fuga para áreas vermelhas ou áreas safes.</>
        ),
      },
    ],
  },
];

export default rules;
