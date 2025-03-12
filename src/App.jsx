import "./App.css";
import fotoBlack from "./img/fotoPerfilBlack.jpg";


import Perfil from "./components/perfil/perfil";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import Projetos from "./img/Captura de tela 2025-03-12 161754.png"

const App = () => {
  return (
    <div id="App" className={""}>
      <Perfil fotoPerfil={fotoBlack}>
        Me chamo Juliana Maria Fulanetto, tenho 17 anos e estou no 3º ano do
        ensino médio. Atualmente, curso Desenvolvimento de Sistemas no SENAI,
        onde estou aprimorando meus conhecimentos em tecnologia e programação.
        Ao longo da minha jornada, já aprendi diversas tecnologias, como
        JavaScript, HTML, CSS e C#. Além disso, desenvolvi diversos projetos
        práticos, aplicando esses conhecimentos em soluções reais. Atualmente,
        estou me aprofundando no aprendizado de React para criar interfaces
        dinâmicas e interativas. Estou sempre em busca de novos desafios para
        expandir minhas habilidades e contribuir de maneira criativa e eficaz
        para o mundo da programação.
      </Perfil>


      <div id="container">
        <div id="links">
          <ul>
            <Links link={"https://github.com/JulianaFulanetto"}>GitHub</Links>
            <Links
              link={
                "https://api.whatsapp.com/send/?phone=5514981953806&text&type=phone_number&app_absent=0"
              }
            >
              Whatsapp
            </Links>
            <Links
              link={
                "https://www.linkedin.com/feed/?trk=sem-ga_campid.12619604099_asid.149519181115_crid.725790844702_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9100701"
              }
            >
              Linkedin
            </Links>
          </ul>
        </div>
      </div>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/JulianaFulanetto"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/jujuumf_/?hl=pt"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          link={
            "https://www.figma.com/files/team/1362110313926714257/recents-and-sharing/recently-viewed?fuid=1362110311319816752"
          }
          icon={"logo-figma"}
        />
        <SocialLinks
          link={
            "https://www.linkedin.com/feed/?trk=sem-ga_campid.12619604099_asid.149519181115_crid.725790844702_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9100701"
          }
          icon={"logo-linkedin"}
        />
      </div>

      <Rodape>Juliana</Rodape>

    </div>
  );
};

export default App;
