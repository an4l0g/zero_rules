import Introducao from "./introducao";
import Discord from "./discord";
import SoftwareIlegais from "./software_ilegais";
import Gerais from "./gerais";
import Safes from "./safes";
import AcoesRua from "./acoes_rua";
import Assalto from "./assalto";
import InfracoesPunicoes from "./infracoes_punicoes";
import AbordagemFuga from "./abordagem_fuga";
import AvisodeMiranda from "./aviso_de_miranda";
import AcoesPoliciais from "./acoes_policiais";
import PermaDeath from "./perma_death";
import Sequestro from "./sequestro";
import FaccoesOrganizacoes from "./faccoes_organizacoes";
import Hospital from "./hospital";

export default [
  ...Introducao,
  ...Gerais,
  ...Discord,
  ...Hospital,
  ...SoftwareIlegais,
  ...Safes,
  ...InfracoesPunicoes,
  ...AcoesRua,
  ...AbordagemFuga,
  ...AvisodeMiranda,
  ...AcoesPoliciais,
  ...PermaDeath,
  ...Assalto,
  ...Sequestro,
  ...FaccoesOrganizacoes,

];
