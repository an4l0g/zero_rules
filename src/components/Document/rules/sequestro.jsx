import * as S from "../styles";

const rules = [
  {
    title: "Regras de Sequesto",
    rules: [
      {
        content: (
          <>
            É proibido sequestrar cidadãos sem o uso do item algema.
          </>
        ),
      },
      {
        content: (
          <>
            É obrigatório anunciar a rendição e ação para vítima/refém, a voz deve ser dada com o modo de fala no <b>“GRITANDO”</b>.
          </>
        ),
      },
      {
        content: (
          <>
            É proibido usar refém que saiba o plano da ação ou que faça parte da ação;
          </>
        ),
      },
      {
        content: (
          <>
            Caso o sequestrado seja de facção ou organização criminosa, a ligação inicial deverá ser feita para os membros da própria
            facção ou organização do sequestrado, negociando a vida e o valor a ser pago pelo resgate. A facção ou organização,
            por intermédio de seu líder, caso ache necessário, poderá solicitar a intervenção da polícia, noticiando o sequestro e disponibilizando
            a quantia solicitada. Caso a facção ou organização opte pelo resgate do membro por conta própria, arcará com todos os riscos da ação.
          </>
        ),
      },
      {
        content: (
          <>
            A polícia pode intervir um sequesto em qualquer circunstância, seja ela por meio de denúncia, flagrante delito ou notificações de disparos,
            independentemente do acordo entre as partes envolvidas.
          </>
        ),
      },
      {
        content: (
          <>
            O tempo máximo com refém é uma hora após o início do sequestro. O próprio refém pode contar o tempo e avisar os bandidos, caso esteja 
            acabando, caso isso seja um problema.
          </>
        ),
      },
      {
        content: (
          <>
            Nas negociações, a cada exigência solicitada e concedida a um bandido, um refém deve ser liberado, como moeda de troca.
          </>
        ),
      },
      {
        content: (
          <>
            É <b>terminantemente proibido</b> sequestrar paramédicos e mecânicos em serviço.
          </>
        ),
      },
      {
        content: <> Nas negociações, as exigências devem seguir como exposto abaixo: </>,
        extras: [
          <>
            <S.List>
             <S.Item>
                <S.Paragraph>
                <b>Negociações para troca de tiros:</b> <br />
                <br />
                - R$15.000,00 sujo = um refém.
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                <b>Negociações para fuga:</b> <br />
                <br />
                - R$15.000,00 sujo = um refém; <br />
                - Fuga limpa = um refém; <br />
                - Uma moto = um refém; <br />
                - Um carro = um refém; <br />
                - Sem helicóptero na fuga = quatro reféns;* <br />
                <br />
                *Apenas para ações de <b>banco central</b> e <b>joaelheria</b>. <br />
                <br />
                <b>Atenção!</b> As ações possuem um limite máximo de cinco reféns.
                </S.Paragraph>
             </S.Item>
            </S.List>
          </>,
        ],
      },
      {
        content: (
          <>
            É necessário possuir, no mínimo, <b>10 policiais</b> em serviço, para que haja um sequestro.
          </>
        ),
      },
      {
        content: (
          <>
            Para sequestrar alguém, é necessário manter a proporção de 2 para 1. Ou seja, para sequestrar uma pessoa,
            são necessárias duas pessoas.
          </>
        ),
      },
    ],
  },
];

export default rules;
