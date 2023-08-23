import * as S from "../styles";

const rules = [
  {
    title: "Ações Policiais",
    rules: [
      {
        content: <> <b>Código Vermelho:</b> </>,
        extras: [
          <>
            <S.List>
             <S.Item>
                <S.Paragraph>
                A cidade pode entrar em código vermelho caso o Comandante-geral ou Subcomandante-geral sejam baleados, 
                sequestrados ou mortos. Neste caso a Polícia tomará o controle completo da cidade e poderá usar blindagem, armas de alto calibre, além de possuírem 
                direito de fazer incursões nas facções e organizações.
                </S.Paragraph>
             </S.Item>
            </S.List>
          </>,
        ],
      },
      {
        content: <> <b>Incursão:</b> </>,
        extras: [
          <>
            <S.List>   
             <S.Item>
                <S.Paragraph>
                A incursão ocorre com denúncias de crimes ocorrendo dentro das áreas das facções e/ou organizações;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                A incursão só poderá ser iniciada em caso de flagrante delito;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Para se iniciar uma incursão, a polícia deverá se certificar que possui o contingente adequado para a ação. Do contrário, poderá ser considerado anti amor à vida;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Por ser ação de rua, a incursão não possui tempo limite, no entanto, após 3 minutos sem disparos a incursão deverá ser imediatamente finalizada.
                </S.Paragraph>
             </S.Item>
            </S.List>
          </>,
        ],
      },
      {
        content: <> <b>Pacificação:</b> </>,
        extras: [
          <>
            <S.List>
             <S.Item>
                <S.Paragraph>
                Para que uma pacificação possa ser devidamente marcada, é necessária a apresentação de provas de toda atividade criminosa envolvendo a
                facção ou organização;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                A autorização da pacificação é de responsabilidade conjunta do responsável pela polícia e do responsável pelo ilegal, que deverão observar
                as provas colhidas pela polícia através de informantes, policiais infiltrados, denúncias, vídeos, fotos, compras e qualquer outro meio de
                investigação que possa ser considerado sólido e bem fundamentado, pelos responsáveis pela autorização;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Após a pacificação ser aprovada, ela deverá ser anunciada nos discords da polícia e ilegal com, <b>no mínimo</b>, 24 horas de antecedência;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Pacificações podem ocorrer apenas uma vez na semana em cada facção ou organização;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                A facção ou organização que será pacificada não poderá se juntar a outra;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Caso não haja tentativa de defesa, a facção ou organização deverá apresentar motivos plausíveis ao responsável do ilegal. Caso não sejam apresentados
                motivos ou estes, mesmo que apresentados, não sejam considerados plausíveis, a facção ou organização poderá sofrer sanções disciplinares que podem variar
                de advertência a reivindicação;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Quando anunciada a pacificação, a facção ou organização não poderá mais mexer em seus baús;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                A polícia não está autorizada a usar o <b><i>/dv</i></b> em veículos, durante a pacificação;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                O limite da ação de pacificação é caracterizado pela área da favela ou quartel general da facção ou organização;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                A pacificação tem a duração máxima de 1:30 horas. Caso alcance o tempo limite, será considerada a derrota policial.
                </S.Paragraph>
             </S.Item>
            </S.List>
          </>,
        ],
      },
      {
        content: <> <b>Polícia Ilegal:</b> <br />
        <br />
        Na <b>ZERO CITY</b>, é permitido que os membros do corpo policial façam ações ilegais. No entanto, ficam estabelecidas algumas regras que devem ser 
        seguidas: </>,
        extras: [
          <>
            <S.List>
             <S.Item>
                <S.Paragraph>
                É <b>terminantemente proibida</b> a corrupção por dinheiro, armas e/ou informações (salvo quando sancionado pela <b><i>Cúpula</i></b>);
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                É permitido que policiais façam rotas ilegais, desde que estejam descaracterizados;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                É permitido que policiais façam qualquer ação de rua, desde que estejam descaracterizados e, em caso de uso de arma de fogo, usem armas ilegais;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                É proibido o uso de arma da polícia para qualquer ação ilegal;
                </S.Paragraph>
             </S.Item>
             <S.Item>
                <S.Paragraph>
                Caso o policial decida realizar qualquer ação ilegal e seja descoberto pela corregedoria, será exonerado permanentemente das forças policiais, além 
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
