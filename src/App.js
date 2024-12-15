import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { ArrowBigDown, ArrowUpFromDot, CircleArrowDown, Facebook, Instagram } from "lucide-react";
import Footer from "./components/Footer";
import { toast } from 'react-toastify';
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const parallaxContainer = useRef(null);

  const arrowRef = useRef(null)
  const cursoRef = useRef(null);
  const extensao = useRef(null);
  const galeria = useRef(null);
  const sobreIfpr = useRef(null);
  const topRef = useRef(null);


  const backgroundRef = useRef(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const [formEnviado, setFormEnviado] = useState(false);
  const validar = () => {
    const novosErros = {};
    if (!formData.nome.trim()) novosErros.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) novosErros.email = "E-mail é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      novosErros.email = "E-mail inválido.";
    if (!formData.mensagem.trim())
      novosErros.mensagem = "Mensagem é obrigatória.";
    return novosErros;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = validar();
    if (Object.keys(novosErros).length > 0) {
      setErrors(novosErros);
      return;
    }
    setErrors({});
    toast.info("Sistema ainda não esta em funcionamento")
    setFormEnviado(true);
    console.log("Formulário enviado com sucesso!", formData);
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    gsap.to(arrowRef.current, {
      y: 20,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });


  }, []);



  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
      <button className="scroll-to-top" onClick={() => scrollToSection(topRef)}>
        <ArrowUpFromDot size={20} />
      </button>
      <div className="background" ref={backgroundRef}>

        <div className="parallax-container" ref={parallaxContainer}>
          <div className="header" ref={topRef}>
            <div className="menu-direito">
              <img className="img-ifpr" src="/imagens/ifpr-logo.png" alt="" />
            </div>
            <ul className="menu-esquerdo" style={{ listStyle: "none" }}>
              <li
                onClick={() => scrollToSection(cursoRef)}
              >
                <button className="componente" onClick={() => scrollToSection(cursoRef)}>
                  Curso
                </button>
              </li>
              <li >
                <button className="componente" onClick={() => scrollToSection(sobreIfpr)}>
                  Sobre IFPR
                </button>
              </li>
              <li >
                <button className="componente" onClick={() => scrollToSection(galeria)}>
                  Galeria
                </button>
              </li>
              <li >
                <button className="componente" onClick={() => scrollToSection(extensao)}>
                  Práticas de Extensão
                </button>

              </li>
              <li>
                <a href="https://www.instagram.com/ifpr_pvai/">
                  <Instagram width={60} size={40} color="white"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ifprparanavai">
                  <Facebook size={40} width={60} color="white" />
                </a>
              </li>

            </ul>
          </div>
          <div className="layer">
            <h1 className="text-header" style={{ fontSize: "50px", color: 'white' }}>Arraste para baixo</h1>
            <br />
            {/* <CircleArrowDown size={120} color="white" ref={arrowRef} /> */}
            <ArrowBigDown size={120} color="white" ref={arrowRef} />
          </div>
          <div id={"curso"} ref={cursoRef}>

            <div className="centraliza-tudo Curso">
              <section className="content" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                <h2 className="titulo-esquerdo">Curso</h2>
                <p className="primeiroParagrafo">
                  O curso de Engenharia de Software é uma das formações mais procuradas atualmente, especialmente em um mundo onde a tecnologia está em constante evolução e impacta praticamente todos os setores da sociedade. Voltado para aqueles que desejam se especializar no desenvolvimento, gerenciamento e manutenção de sistemas e aplicações, o curso combina conhecimentos de tecnologia, engenharia e gestão, formando profissionais altamente capacitados para atender às demandas de um mercado cada vez mais competitivo e dinâmico.
                </p>

                <h3> O que é Engenharia de Software?</h3>
                <p className="primeiroParagrafo" >
                  A Engenharia de Software pode ser definida como a área da computação que se dedica à concepção, desenvolvimento e manutenção de softwares, seguindo processos sistemáticos, controlados e eficientes. O objetivo é criar soluções tecnológicas robustas, confiáveis e que atendam às necessidades específicas dos usuários e organizações. Para isso, o curso aborda uma combinação de técnicas teóricas e práticas que permitem aos alunos desenvolverem sistemas que não apenas funcionem, mas também sejam escaláveis, seguros e fáceis de manter.
                </p>
                <h3>
                  Competências Desenvolvidas
                </h3>
                <p className="primeiroParagrafo">
                  Os estudantes de Engenharia de Software desenvolvem uma ampla gama de competências durante o curso. Entre as principais habilidades adquiridas, destacam-se:
                </p>
                <ol>
                  <li>
                    <p className="primeiroParagrafo">

                      Análise de Problemas: Os alunos aprendem a compreender profundamente os desafios enfrentados por organizações e usuários, traduzindo essas necessidades em soluções tecnológicas.
                      Programação e Desenvolvimento: Conhecimentos avançados em linguagens de programação, bancos de dados, frameworks e ferramentas de desenvolvimento de software são parte fundamental da formação.
                      Gestão de Projetos: Saber organizar equipes, gerenciar prazos e orçamentos, e utilizar metodologias ágeis, como Scrum e Kanban, são diferenciais importantes no mercado.
                    </p>
                  </li>
                  <li>
                    <p className="primeiroParagrafo">

                      Qualidade de Software: Técnicas de teste e validação garantem que os sistemas desenvolvidos sejam confiáveis e funcionem adequadamente.
                    </p>
                  </li>
                  <li>
                    <p className="primeiroParagrafo">

                      Inovação: O curso também incentiva a criatividade e o pensamento crítico, preparando os estudantes para criar soluções inovadoras em diferentes contextos.
                    </p>
                  </li>
                </ol>
                <h3>
                  Por que o curso é importante?
                </h3>
                <p className="primeiroParagrafo">

                  A relevância do curso de Engenharia de Software vai além de formar profissionais para atender ao mercado de trabalho. Ele desempenha um papel essencial no desenvolvimento de tecnologias que transformam a sociedade. A área é a base para a criação de aplicativos que utilizamos diariamente, sistemas empresariais complexos, jogos digitais, plataformas de e-commerce, e até mesmo soluções em áreas como saúde, educação e transporte.

                  Além disso, em um cenário global onde a transformação digital é imprescindível, a demanda por engenheiros de software continua a crescer. Segundo estudos de mercado, empresas de todos os setores estão em busca de profissionais que possam liderar iniciativas tecnológicas, tornando essa carreira uma escolha estratégica para quem deseja segurança e valorização profissional.
                </p>
                <h3>
                  O que o curso forma?
                </h3>
                <p className="primeiroParagrafo">

                  O curso de Engenharia de Software forma engenheiros de software capazes de projetar, construir e manter soluções tecnológicas em diversos setores. Os egressos têm uma formação multidisciplinar que os prepara tanto para o mercado de trabalho quanto para a pesquisa acadêmica. Eles podem atuar em empresas de tecnologia, startups, indústrias, instituições financeiras, governos ou até mesmo empreender.
                </p>
                <h3>
                  Entre as principais áreas de atuação dos engenheiros de software estão:
                </h3>
                <ul>
                  <li>
                    Desenvolvimento de software;

                  </li>
                  <li>
                    Engenharia de requisitos;
                  </li>
                  <li>
                    Arquitetura de sistemas;
                  </li>
                  <li>
                    Segurança da informação;
                  </li>
                  <li>
                    Gerenciamento de projetos de TI;
                  </li>
                  <li>
                    Ciência de dados e inteligência artificial.
                  </li>
                </ul>

              </section>
            </div>
          </div>
          <div className="centraliza-tudo" ref={sobreIfpr}>
            <section className="content">
              <h2 className="titulo-direito">Sobre o IFPR</h2>
              <p className="primeiroParagrafo">
                O Instituto Federal do Paraná (IFPR) é uma instituição de ensino pública e gratuita voltada à educação profissional e tecnológica em diversos níveis e modalidades. Criado em 2008, como parte do processo de expansão da Rede Federal de Educação Profissional, Científica e Tecnológica, o IFPR tem como missão promover ensino de qualidade, pesquisa e extensão que atendam às demandas sociais e do mercado de trabalho. Com campi espalhados por várias cidades do Paraná, o IFPR oferece cursos técnicos, de graduação e pós-graduação, além de programas de formação continuada e projetos que incentivam a inovação e o desenvolvimento local.
              </p>
              <h3>Surgimento:</h3>
              <p className="primeiroParagrafo">
                O surgimento do IFPR está ligado à necessidade de democratizar o acesso à educação técnica e tecnológica no Brasil, especialmente em regiões menos favorecidas. A criação do instituto foi um marco na história da educação no estado, pois ampliou as oportunidades de formação profissional para jovens e adultos. Essa expansão também visa fortalecer a relação entre o ensino, a pesquisa e o desenvolvimento regional, estimulando a capacitação de profissionais alinhados às exigências do mercado e à vocação econômica das regiões atendidas.
              </p>
              <h3>Sua importância:</h3>
              <p className="primeiroParagrafo">
                O surgimento do IFPR está ligado à necessidade de democratizar o acesso à educação técnica e tecnológica no Brasil, especialmente em regiões menos favorecidas. A criação do instituto foi um marco na história da educação no estado, pois ampliou as oportunidades de formação profissional para jovens e adultos. Essa expansão também visa fortalecer a relação entre o ensino, a pesquisa e o desenvolvimento regional, estimulando a capacitação de profissionais alinhados às exigências do mercado e à vocação econômica das regiões atendidas.
              </p>
            </section>
          </div>
          <div className="centraliza-tudo" ref={galeria}>
            <section className="content">
              <h2 className="titulo-esquerdo">Galeria</h2>
              <div className="grid-container">
                <div className="item item1">
                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/ale.png" alt="Projeto AQUA" />
                </div>
                <div className="item item2">
                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/ale2.png" alt="Projeto AQUA" />
                </div>
                <div className="item item3">
                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/TEIA.png" alt="Projeto TEIA" />
                </div>
                <div className="item item4">                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/iftech.png" alt="Projeto Iftech" /></div>
                <div className="item item5">
                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/Extensao.png" alt="Projeto Mauricio Gehlen" />
                </div>
                <div className="item item6">
                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/idosos1.png" alt="Projeto Mauricio Gehlen" />
                </div>
                <div className="item item7">
                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/idosos3.png" alt="Projeto Mauricio Gehlen" />
                </div>
                <div className="item item8">
                  <img style={{ width: '100%', height: ' 100%', objectFit: 'cover' }} src="/imagens/musicarte.png" alt="Projeto Musica Arte" />
                </div>
              </div>
            </section>
          </div>



          <div className="centraliza-tudo" ref={extensao}>
            <section className="content">
              <h2 className="titulo-direito">Práticas de Extensão</h2>
              <p className="primeiroParagrafo">
                A prática de extensão no meio acadêmico transcende os limites da sala de aula, configurando-se como uma oportunidade única para transformar o conhecimento em ação. Por meio dela, estudantes e docentes colaboram com comunidades, estabelecendo uma troca rica e dinâmica entre saberes acadêmicos e populares. Essa interação permite que os conhecimentos produzidos nas instituições de ensino ganhem uma dimensão prática, ao mesmo tempo em que a comunidade contribui com perspectivas e experiências que enriquecem a formação dos participantes.

                No Instituto Federal, a extensão assume um papel estratégico na construção de uma sociedade mais justa e equitativa. Os projetos de extensão abordam temas variados, como educação inclusiva, preservação ambiental, empreendedorismo e promoção da saúde, sempre com foco nas demandas reais de diferentes contextos sociais. Essas iniciativas geram benefícios mútuos: enquanto a comunidade se fortalece com o acesso a tecnologias, informações e capacitação, os estudantes desenvolvem competências como liderança, trabalho em equipe, resolução de problemas e empatia.


              </p>
              <h3>   Entre os impactos mais notáveis, destacam-se:</h3>
              <ul>
                <li>Promoção da Educação para Todos: A extensão possibilita a criação de programas de alfabetização, reforço escolar e ensino técnico-profissionalizante, ampliando o acesso ao conhecimento e reduzindo desigualdades educacionais.</li>
                <li>Inclusão Social e Diversidade: Projetos voltados para grupos historicamente marginalizados, como pessoas com deficiência, comunidades indígenas e quilombolas, promovem a integração social e o respeito às diferenças culturais.</li>
                <li>Desenvolvimento Econômico Local: Iniciativas de capacitação em áreas como empreendedorismo, economia solidária e agricultura sustentável contribuem para a geração de renda e fortalecimento das economias locais.</li>
                <li>Fomento à Cultura e Arte: Oficinas de arte, festivais culturais e projetos de valorização do patrimônio histórico contribuem para a construção de identidades locais e regionais, além de estimular a criatividade.</li>
                <li>Soluções Inovadoras para Sustentabilidade: Ações voltadas à redução de resíduos, energia renovável e conservação ambiental oferecem alternativas práticas e economicamente viáveis para enfrentar desafios contemporâneos.</li>
              </ul>
              <p className="primeiroParagrafo">
                Dessa forma, a extensão torna-se um motor de transformação social, conectando a instituição de ensino com o mundo real e promovendo mudanças concretas. Ela amplia horizontes, tanto para os estudantes quanto para a sociedade, criando profissionais que não apenas dominam conhecimentos técnicos, mas também têm consciência crítica e responsabilidade social.
              </p>
              <h2>Exemplos de projetos de extensão no IFPR:</h2>
              <h4>T.E.I.A – Tecnologia, Educação, Informação e Arte</h4>
              <p className="primeiroParagrafo">
                O projeto de extensão T.E.I.A - Tecnologia, Educação, Informação e Arte designa-se como um dispositivo de interconexão com demais projetos que possuem o objetivo de produzir artefatos artísticos e informacionais que envolvam o uso de tecnologia no processo de criação, como podcasts, experimentações em video, ensaios fotográficos, instalações artísticas, videoinstalações, produção musical, arte gráfica, web-arte, entre outras linguagens e expressões artísticas-informacionais. Além de oferecer colaboração técnica e aporte tecnológico, o T.E.I.A contribui para formação teórica-metodológica, atuando, por consequência, no âmbito político e estético. Tais premissas se efetivam, além das produções mencionadas, através de oficinas, grupos de estudos, exibições fílmicas, escritos acadêmicos, entre outras ações. Outro ponto importante de se mencionar é a perspectiva de extensão que o projeto possui, pois todas as estratégias de atuação serão desenvolvidas visando os estudantes do IFPR - Campus Paranavaí, incluindo-os na organização e produção dos artefatos culturais, assim como público alvo das ações, conjuntamente com o público externo.</p>
              <h4>AQUA - Ambiente de Química Ambiental</h4>
              <p className="primeiroParagrafo">
                A Química Ambiental é uma importante área dedicada a estudar os processos químicos que ocorrem na natureza, sejam eles naturais ou por ação antropogênica, e que comprometem a saúde humana e a saúde do planeta como um todo. Além de ser extremamente ampla e interdisciplinar, a Química Ambiental apresenta ainda um dinamismo e fluidez únicos. No contexto atual, a discussão ambiental pode ser usada como tema gerador, abordagem didática interdisciplinar e projeto integrador do currículo acadêmico. Entender a importância que a química ambiental desempenha no ambiente acadêmico e escolar é significativo e necessário, uma vez que é um princípio fundamental da educação, em seus diversos níveis, oportunizar o diálogo acerca das relações ambientais. O projeto AQUA – Ambiente de Química Ambiental visa estabelecer no campus um ambiente dinâmico de diálogo sobre a temática ambiental pautado em princípios da química verde e objetivos do desenvolvimento sustentável. Além disso, como muitos dos currículos não conseguem suprir possíveis carências educacionais, relacionados à área ambiental, que os estudantes têm enfrentado ao longo de seus estudos, o AQUA contribuirá na formação individual dos estudantes. O intuito do projeto é promover ações ambientais de caráter extensionista como cursos, palestras e em especial oficinas didáticas. Espera-se com isso estimular no campus o desenvolvimento de habilidades e competências nos estudantes de modo a torna-los cidadãos mais sensíveis às causas ambientais e com isso garantir que a educação pública cumpra com o seu papel na formação cidadã sociorrefenciada, por meio do diálogo e da discussão científica.
              </p>
              <h4>PIPA - Práticas Inclusivas no Processo de Aprendizagem</h4>
              <p className="primeiroParagrafo">
                O Projeto de Inovação “PIPA - Práticas Inclusivas no Processo de Aprendizagem” tem como objetivo promover a equidade de oportunidades para o aprendizado de pessoas com deficiência e/ou necessidades específicas por meio da fabricação de materiais didáticos que atendam às necessidades dos professores da sala de aula regular e da professora de educação especial. O projeto tem caráter multidisciplinar, visto que profissionais de diversas áreas poderão atuar de forma colaborativa com recursos em comum, objetivando a criação de um ambiente mais inclusivo no IFPR, campus Paranavaí. A comunidade externa também será impactada, já que os materiais didáticos elaborados no âmbito do projeto serão disponibilizados para doação ou para reprodução, estando disponíveis em uma plataforma virtual. O público contemplado no projeto são professores da base comum, especializado ou área técnica que necessitem de materiais didáticos que facilitem o aprendizado de estudantes com deficiência e/ou necessidades específicas.</p>
              <h4>Musicarte: transformando vidas</h4>
              <p className="primeiroParagrafo">
                A presente proposta tem como objetivo relatar as ações desenvolvidas no programa de extensão "Musicarte: transformando vidas” do IFPR – Campus Paranavaí e propiciar aulas gratuitas sobre as diferentes linguagens artísticas (Música, Dança, Teatro e Artes Visuais). As metodologias utilizadas baseiam-se em uma abordagem construtivista e métodos ativos, uma vez que se projeta a participação de todos os educandos para realizar as atividades. Trata-se de uma perspectiva de arte, portanto, que privilegia a interação social como forma de construir e reconstruir significados sobre a experiência vivida. O projeto pretende atender cerca de 150 pessoas, dentre as quais se incluirão estudantes, servidores e membros da comunidade externa. Proporcionará oportunidade de realizar apresentações públicas internas e externas ao Instituto, tais como em teatros, escolas, fundações, espaços culturais e praças. Neste sentido, esse projeto fomentará possibilidades de integração entre educação, arte e práticas sociais. As linguagens artísticas são manifestações culturais importantes uma vez que também propiciam a criação de laços identitários entre os indivíduos. Espera-se, portanto, que essa proposta seja veículo de socialização e formação integral dos sujeitos envolvidos, de modo que melhorem sua qualidade de vida por meio do desenvolvimento cognitivo (sensibilidade, criatividade, expressão e senso crítico) e da formação para a cidadania.
              </p>
            </section>
          </div>
          <div className="centraliza-tudo">
            <section className="content">
              <h2 className="titulo-centro">Interresado(a) em saber como os projetos funcionam ? </h2>
              <p style={{ textAlign: "center" }}>
                entre em contato com o time de extensão do campus Paranavaí, no formulário abaixo:
              </p>
              {formEnviado ? (
                <p className="successMessage">
                  Obrigado por entrar em contato! Em breve responderemos.
                </p>
              ) : (
                <div className="formulario">

                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="nome" className="label">
                        Nome:
                      </label>
                      {errors.nome && <small className="error">{errors.nome}</small>}

                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="input"
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label">
                        E-mail:
                      </label>
                      {errors.email && (
                        <small className="error">{errors.email}</small>
                      )}
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="Digite seu e-mail"
                      />
                    </div>
                    <div>
                      <label htmlFor="mensagem" className="label">
                        Mensagem:
                      </label>
                      {errors.mensagem && (
                        <small className="error" >{errors.mensagem}</small>
                      )}
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="textarea"
                        placeholder="Escreva sua mensagem"
                      />
                    </div>
                    <div>
                      <button type="submit" className="button">
                        Enviar Mensagem
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </div >
  );
}

export default App;
