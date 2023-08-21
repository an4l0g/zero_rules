import * as S from "../styles";

const rules = [
  {
    title: "Regras Hospital",
    rules: [
      {
        content: (
          <>
            Todos os pacientes devem entrar no hospital devidamente vestidos, com todas as peças de roupa. O uso de sapatos, 
            no entanto, é dispensável. Qualquer falta de vestimenta adequada, fora os sapatos, pode resultar na recusa de atendimento.
          </>
        ),
      },
      {
        content: (
          <>
            É proibido o uso de máscara dentro do hospital, exceto policiais, no exercício da função e com apresentação da identificação funcional.
          </>
        ),
      },
      {
        content: (
          <>
            É proibido estacionar veículos nas áreas reservadas para emergências, demarcadas por faixas vermelhas no solo, em frente ao hospital.
          </>
        ),
      },
      {
        content: (
          <>
            É proibido o uso de aparelhos sonoros nas dependências do hospital.
          </>
        ),
      },
      {
        content: (
          <>
            É proibido gritar e/ou causar pertubação nas dependências do hospital.
          </>
        ),
      },
      {
        content: (
          <>
            Para ser atendido, o cidadão deve se dirijir até a recepção e solicitar atendimento ao atendente e aguardar ser chamado por um médico. <b>Evite
            ficar apressando os médicos, eles possuem uma lista de atendimento que deve ser seguida</b>.
          </>
        ),
      },
      {
        content: (
          <>
            É proibida a circulação, sem acompanhamento, de civis dentro do hospital, exceto em áreas de atendimento ou deslocamento para garagem pública. 
          </>
        ),
      },
      {
        content: (
          <>
            O pagamento pelo atendimento no Centro Médico Zero é obrigatório e deve ser efetuado imediatamente após o serviço. 
            A falha no cumprimento desta obrigação pode resultar em advertência.
          </>
        ),
      },
      {
        content: (
          <>
            O serviço de reanimação não é cobrado ao paciente.
          </>
        ),
      },
      {
        content: <> <b>Médico Ilegal:</b> <br />
        <br />
        Na <b>ZERO CITY</b>, é permitido que os membros do centro médico façam ações ilegais. No entanto, ficam estabelecidas algumas regras que devem ser 
        seguidas: </>,
        extras: [
          <>
            <S.List>
             <S.Item>
                <S.Paragraph>
                É <b>terminantemente proibida</b> a corrupção por dinheiro, medicamentos e/ou informações (salvo quando sancionado pela <b><i>Alta Classe</i></b>);
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                É permitido que médicos façam rotas ilegais, desde que estejam descaracterizados;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                É permitido que médicos façam qualquer ação de rua;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Caso o médico decida realizar qualquer ação ilegal e seja descoberto pela diretoria do hospital, será exonerado permanentemente do centro médico, além 
                de ser preso por 1800 meses (total de 30 horas).
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
