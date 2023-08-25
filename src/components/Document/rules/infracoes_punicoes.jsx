import * as S from "../styles";

const rules = [
  {
    title: "Infrações e Punições",
    rules: [
      {
        content: (
          <>
            <b>Power Gaming (PG): </b> é a prática de abusar das mecânicas e
            bugs do jogo para se beneficiar ou adquirir vantagens sobre o
            adversário. <b>Exemplos:</b>
          </>
        ),
        extras: [
          <S.List>
            <S.Item>
              <S.Paragraph>
                Se comunicar via rádio estando algemado;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                Atirar enquanto estiver executando alguma animação.
              </S.Paragraph>
            </S.Item>
          </S.List>,
        ],
      },
      {
        content: (
          <>
            <b>Meta Gaming: </b> trata-se de utilizar de informações recebidas
            fora do roleplay (discord, stream, chat da stream etc.) dentro do
            jogo.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Vehicle Deathmatch (VDM): </b> é o ato de utilizar veículos como
            arma para matar ou atropelar alguém.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Random Deathmatch (RDM): </b> consiste em matar outro jogador
            apenas pelo simples desejo de matar, sem motivo plausível. Toda
            morte deve haver um motivo real para ambas as partes.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Combat Logging (CL): </b> é deslogar durante uma ação em que o cidadão
            esteja participando direta ou indiretamente. Outro ato que pode ser
            considerado CL é deslogar para que uma ação não aconteça.
          </>
        ),
        extras: [
          <S.Paragraph>
            <b>
              Atenção! Em caso de crash em uma ação em que o PvP já tenha sido
              iniciado, o cidadão deve voltar para o servidor e sair da ação
              imediatamente. O cidadão deverá, também, reportar o crash no canal
              específico no discord.{" "}
            </b>
          </S.Paragraph>,
        ],
      },
      {
        content: (
          <>
            <b>Power RP (Forçar RP): </b> consiste em forçar roleplay com
            alguém. <b>Exemplos:</b>
          </>
        ),
        extras: [
          <S.List>
            <S.Item>
              <S.Paragraph>
                Cometer desacato à policiais sem motivo;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                Ofender um jogador sem motivo com o intúito de iniciar uma ação;
              </S.Paragraph>
            </S.Item>
          </S.List>,
        ],
      },
      {
        content: (
          <>
            <b>Dark RP: </b> consiste em praticar roleplay com contexto
            pesado, como por exemplo assédio, estupro, racismo, tortura,
            homofobia etc <b>(passível de banimento)</b>:
          </>
        ),
        extras: [
          <S.List>
            <S.Item>
              <S.Paragraph>
                <b>Assédio:</b> pode ser configurado como condutas abusivas
                exaradas por meio de palavras, comportamentos, atos, gestos,
                escritos que podem trazer danos à personalidade, à dignidade ou
                à integridade física ou psíquica de uma pessoa;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                <b>Estupro:</b> é um tipo de agressão sexual
                envolvendo relação sexual ou outras formas de atos libidinosos,
                realizados contra uma pessoa, sem o seu consentimento;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                <b>Racismo:</b> é um tipo de preconceito que se baseia numa
                ideia pré-concebida e pejorativa a respeito de uma etnia ou
                grupo social;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                <b>Tortura:</b> constranger alguém com emprego de violência ou
                grave ameaça, causando-lhe sofrimento físico ou mental;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                <b>Homofobia:</b> preconceito motivado pela orientação sexual e
                pela identidade de gênero que se equipara a discriminação pela
                opção sexual.
              </S.Paragraph>
            </S.Item>
          </S.List>,
        ],
      },
      {
        content: (
          <>
            <b>Blacklist: </b> após sair de uma organização, o cidadão ficará em uma
            "lista negra" <b>por 7 dias</b>. Durante este período, o cidadão não
            poderá ser contratado por outra organização.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Revenge Kill: </b> caso morra e alguém veja o que aconteceu, a
            pessoa pode te lembrar brevemente do ocorrido, porém, é proibida a 
            vingança contra quem matou e/ou qualquer pessoa presente na ação.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Anti RP: </b> infringir regras com o propósito de estragar o RP
            de outros jogadores. <b>Exemplos:</b>
          </>
        ),
        extras: [
          <S.List>
            <S.Item>
              <S.Paragraph>
                Não agir de acordo com o papel do personagem criado no jogo;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                Olhar o nome do jogador no /id para identificar o
                player;
              </S.Paragraph>
            </S.Item>
            <S.Item>
              <S.Paragraph>
                Qualquer atitude que foge da dinâmica
                ou regras do roleplay, ou seja, toda conduta considerada fora do
                que a pessoa faria na vida real.
              </S.Paragraph>
            </S.Item>
          </S.List>,
        ],
      },
      {
        content: (
          <>
            <b>Amor à Vida: </b> é o ato de preservar a sua vida como se fosse única,
            evitando conflitos desnecessários e ações que colocariam a sua vida em risco
            no mundo real. Ir em contradição a isso é considerado <i>anti amor à vida</i>.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Flaming: </b> flaming, é o ato de inflamar alguma situação ou a
            pessoa de forma negativa, incitando o ódio, acusações, ofensas,
            ameaças, abusos etc, contra algo ou alguém.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Cop Baiting: </b> é qualquer atitude
            que tenha finalidade de enganar, trapacear e/ou emboscar alguém de
            forma desonesta e desonrosa, visando apenas o benefício próprio ou de
            outrem.
          </>
        ),
      },
      {
        content: (
          <>
            <b>Car parking: </b> Car parking é o ato de manter o veículo
            estacionado em cima de outro jogador propositalmente e o ato de bloquear entradas e saídas de portas, como por exemplo:
            dos bancos, lojas de conveniências, lojas de roupas, entre outros.
          </>
        ),
      },
      {
        content: (
          <>
            Na <b>ZERO CITY</b>, o <b>banimento</b> será dado apenas para players que sejam identificados utilizando cheaters. Para qualquer
            outra infração grave da regra, em que o player necessite ser punido de forma mais severa, ele será encaminhado ao <b>manicômio</b> da
            cidade. <br />
            <br />
            O manicômio funciona de forma semelhante a uma prisão, no entanto, não há formas de diminuir a pena e a quantidade de tempo em que o 
            player poderá ficar por lá será maior que o tempo de uma prisão comum.
          </>
        ),
      },
    ],
  },
];

export default rules;
