import { useState } from "react";
import styles from "./perfil.module.css";

const Perfil = ({ children, fotoPerfil }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div id={styles.perfil}>
        <div id={styles.framePerfil}>
          <img src={fotoPerfil} alt="" />
        </div>
        <button id={styles.perfilButton} onClick={toggleMenu}>
        ▾ Sobre mim ▾ 
        </button>
        <div id={styles.perfilMenu} className={isMenuOpen ? styles.active : ""}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
