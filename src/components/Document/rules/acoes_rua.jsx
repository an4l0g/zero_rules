import * as S from "../styles";

const rules = [
  {
    title: "Ações de Rua",
    rules: [
      {
        content: (
          <>
            É permitido <b>"ir de E"</b> antes de uma ação terminar. Vale
            salientar que, desta forma o cidadão perderá todos os seus itens.
          </>
        ),
      },
      {
        content: (
          <>
            É <b>terminantemente proibido</b> que o cidadão se retire do
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
            cidade, os cidadãos desmaiados deverão <b>"ir de E"</b>.
          </>
        ),
      },
      {
        content: (
          <>
            Em uma abordagem policial, caso o cidadão escolha seja o confronto, ele
            deverá fugir por, no mínimo, <b>15 segundos</b> antes de abrir fogo.
          </>
        ),
      },
      {
        content: (
          <>
            Caso seja iniciado um confronto entre facção e polícia, o apoio ilegal
            só poderá ser acionado à partir do primeiro disparo da ação.
          </>
        ),
      },
      {
        content: (
          <>
            É permitido participar de ações com veículos sem portas, capô e
            porta-malas <b>(carro bicho)</b>! 😂
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
          <>Não é permitido fazer rotas e participar de ações de rua utilizando helicóptero.</>
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
              <S.Item><S.Paragraph>Pessoas sendo carregadas por outras;</S.Paragraph></S.Item>
              <S.Item><S.Paragraph>Pessoas no porta-malas.</S.Paragraph></S.Item>
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
            traseiros ou carros com aerofólio que bloqueiem tiros.
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
      {
        content: (
           <>
            Em ocorrências, a abertura do porta-malas para policiais não é obrigatória. Caso o cidadão opte por não abrir, ele poderá ser detido por obstrução policial.
          </>
          ),
      },
      {
        content: (
          <>
            Caso o líder e/ou vice-líder de uma facção ou organização seja detido pela força policial, os membros da facção/organização em questão poderão usar da força
            para tentar libertar seus líderes. Para que isto aconteça, ficam estabelecidas algumas regras complementares:
          </>
        ),
        extras: [
          <>
            <S.List>
              <S.Item><S.Paragraph>A polícia, ao identificar que o player se trata de um líder ou vice-líder de facção ou organização, deverá priorizar o roleplay de depoimento,
                interrogatório etc, antes de efetuar a prisão, de fato, para que o ilegal possa ter tempo de resgate, caso decidam tentar;</S.Paragraph></S.Item>
              <S.Item><S.Paragraph>O limite máximo de membros da facção ou organização é 15 pessoas;</S.Paragraph></S.Item>
              <S.Item><S.Paragraph>O intuito principal da invasão é o <b>resgate</b> e ele deve ser priorizado;</S.Paragraph></S.Item>
              <S.Item><S.Paragraph>Caso o ilegal decida tentar o resgate, a reanimação por parte da equipe do Centro Médico Zero é vedada e os mortos devem <b>"ir de "E"</b>.</S.Paragraph></S.Item>
              <S.Item><S.Paragraph>Caso a invasão ao departamento policial fracasse, a facção ou organização poderá solicitar apoio à Cúpula. A intervenção da Cúpula poderá ter altos
              custos, caberá aos membros da facção ou organização escolher se vale apena resgatar seus líderes ou não.</S.Paragraph></S.Item>
            </S.List>
          </>,
        ],
      },
    ],
  },
];

export default rules;
