const cursos = [{
    title: "NEGÓCIOS – EMPREENDEDORISMO" ,
    link: "https://eucapacito.com.br/curso-ec/negocios-empreendedorismo/" ,
    description: "É preciso mais do que uma grande ideia para se tornar um empreendedor bem-sucedido. A estrada sinuosa entre o conceito e a execução requer tino comercial, qualificações profissionais financeiras e, o mais importante, a mentalidade certa. Esse conhecimento não só destaca você, mas também prepara seu empreendimento de tecnologia para obter mais sucesso. Aproveite esse curso que foi feito para você, estimule suas ideias e prepare-se com as qualificações profissionais adequadas para dar o próximo passo com mais autoconfiança. Nenhum pré-requisito é necessário." ,
    nivel: "Fácil" ,
    time: "15 horas" ,
    area: "Negocios", 
},
{
    title:"BIG DATA & ANALYTICS",
    link: "https://eucapacito.com.br/curso-ec/big-data-analytics/",
    description: "A arte de transformar dados em informação é desbloquear o valor dos dados. Juntos, Big Data e  Analytics (BDA) prometem  transformar a maneira  com que as empresas fazem negócios. Não  é  difícil  confundir os  conceitos de Big Data  e  Analytics, normalmente, são  temas que andam juntos.",
    nivel: "Intermediário" ,
    time: "60 horas" ,
    area:"Tech" ,
},
{
    title:"CYBERSECURITY",
    link:"https://eucapacito.com.br/curso-ec/cybersecurity/", 
    description:"Cybersecurity   envolve   a   redução   do   risco   de   ataques   a   softwares, computadores  e  redes.  Isso  inclui  ferramentas  usadas  para  detectar invasões,  contenção  de  vírus,  bloqueio  de  acessos  maliciosos,  forçar autenticação,  uso  de  criptografia. Cada vez mais a segurança é uma necessidade em nosso dia a dia.",
    nivel:"Avançado",
    time:"60 horas",
    area:"Tech",
},
{
    title:"JAVA FUNDAMENTOS",
    link:"https://eucapacito.com.br/curso-ec/java-fundamentos/", 
    description:"Pense em uma loja, um banco financeiro, um hospital, sua conta de telefone ou na sua rede social favorita. Todos eles precisam de um sistema para serem gerenciados. É aí que entra o Desenvolvedor de Sistemas. Java vem se tornando uma plataforma de desenvolvimento das mais utilizadas e aceitas no mercado.",
    nivel:"Fácil",
    time:"80 horas",
    area:"Tech",
},
{
    title:"CLOUD COMPUTING & DATA SCIENCE",
    link:"https://eucapacito.com.br/curso-ec/cloud-computing-data-science/", 
    description:"Um  novo  modelo  de  computação  surgiu  e  tem  alterado  a  forma  como interagimos  com  a  rede,  os  serviços,  as  aplicações  e  estruturas  tradicionais. Atualmente os cloud services são oferecidos por grandes empresas, entender esse contexto é um passo crucial para sua carreira.",
    nivel:"Avançado",
    time:"80 horas",
    area:"Tech",
},
{
    title:"SEGURANÇA DIGITAL – CYBERSECURITY ESSENTIALS",
    link:"https://eucapacito.com.br/curso-ec/seguranca-digital-cybersecurity-essentials/", 
    description:"Uma única falha pode ter grandes consequências para uma empresa, afetando o resultado final e causando problemas no cotidiano de milhões de pessoas. É por isso que a demanda por profissionais de segurança continua aumentando. Integre e desenvolva uma compreensão de crime cibernético, princípios de segurança, tecnologias e procedimentos utilizados para defender as redes. Depois, decida se deseja exercer um cargo de segurança ou rede básica profissionalmente.",
    nivel:"Avançada",
    time:"30 horas",
    area:"Tech", 
},
{
    title:"LINUX FUNDAMENTOS",
    link:"https://eucapacito.com.br/curso-ec/linux-fundamentos/", 
    description:"Aprender  e entender  o sistema  operacional  Linux  é  indispensável  para qualquer profissional de TI, seja este um programador, administrador de rede ou um especialista  em  segurança.",
    nivel:"Fácil",
    time:"40 horas",
    area:"Tech",
}];

const carreiras = [
    "back-end",
    "Front-end",
    "FullStack",
    "DevOps",
    "Mobile",
    "QA",
    "UX/UI",
    "Scrum Master",
    "Administrador de Redes",
    "Segurança da Informação",
    "Ciêntista de Dados",
    "BI/BA",
    "Infraestrutura"
];

const categorias = [
     "Empreendedorismo",
     "Tech",
     "Administrativa",
     "Pessoal",
     "Educação",
     "Fluência Digital"
];

function getCarreira(carreiraNumber) {
    const position = +carreiraNumber - 1
    return carreiras[position]
}; 

function pageLanding(req, res) {return res.render("index.html")}
function pageStudy(req, res) {return res.render("study.html", {cursos, carreiras, categorias})}
function pageCadastro(req, res) {return res.render("cadastro.html")}
function pageCareer(req, res) {return res.render("career.html", {carreiras, categorias})}
function pageCreateCareer(req, res) {return res.render("page-create-career.html", {carreiras, categorias})}
function pageCreateClasses(req, res) {return res.render("page-create-classes.html", {carreiras, categorias})}
function pageDescription(req, res) {return res.render("description-career.html")}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))

.get('/', pageLanding) 
.get("/study", pageStudy) 
.get("/cadastro", pageCadastro) 
.get("/create-classes", pageCreateClasses) 
.get("/create-career", pageCreateCareer) 
.get("/career", pageCareer) 
.get("/description-career", pageDescription)

.listen(5503)