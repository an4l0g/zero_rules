import Introducao from "./introducao";
import Discord from "./discord";
import SoftwareIlegais from "./software_ilegais";
import Gerais from "./gerais";
import Safes from "./safes";
import AcoesRua from "./acoes_rua";
import ZonaAssalto from "./zona_assalto";
import InfracoesPunicoes from "./infracoes_punicoes";

export default [
  ...Introducao,
  ...Discord,
  ...SoftwareIlegais,
  ...Safes,
  ...Gerais,
  ...InfracoesPunicoes,
  ...AcoesRua,
  ...ZonaAssalto,
];
