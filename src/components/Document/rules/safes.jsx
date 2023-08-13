import * as S from "../styles";

const rules = [
  {
    title: "Zona Safes",
    rules: [
      {
        content: (
          <>
            É <b>proibido</b> matar/roubar em safezone.
          </>
        ),
      },
      {
        content: <>As safe zones da Zero são:</>,
        extras: [
          <>
            <S.List>
              <S.Item>
                <b>Praça</b> (Furto de veículos <b>proibido</b>)
              </S.Item>
              <S.Item>
                <b>Prefeitura</b> (Furto de veículos <b>proibido</b>)
              </S.Item>
              <S.Item>
                <b>Concessionária</b> (Furto de veículos <b>liberado</b>)
              </S.Item>
              <S.Item>
                <b>Hospital</b> (Furto de veículos <b>proibido</b>)
              </S.Item>
              <S.Item>
                <b>Garagens</b> (Furto de veículos <b>proibido</b>)
              </S.Item>
              <S.Item>
                <b>Loja de roupa</b> (Furto de veículos <b>liberado</b>)
              </S.Item>
              <S.Item>
                <b>Barbeiro</b> (Furto de veículos <b>liberado</b>)
              </S.Item>
              <S.Item>
                <b>Loja de tatuagem</b> (Furto de veículos <b>liberado</b>)
              </S.Item>
              <S.Item>
                <b>Zero Fome</b> (Furto de veículos <b>proibido</b>)
              </S.Item>
            </S.List>
          </>,
        ],
      },
      {
        content: (
          <>
            Em garagens, caso haja tentativa de roubo à veículo, o dono do
            automóvel terá aval para matar o assaltante.
          </>
        ),
      },
      {
        content: (
          <>
            Em garagens, caso haja tentativa de roubo à veículo, o dono do
            automóvel terá aval para matar o assaltante.
          </>
        ),
      },
    ],
  },
];

export default rules;
