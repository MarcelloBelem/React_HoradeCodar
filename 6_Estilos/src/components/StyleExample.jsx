import React from "react";

import "../Styles/StyleExample.css";

import Styles from "../Styles/StyleExample.module.css";

const StyleExample = () => {
  // Inline
  const inlineStyle = {
    color: "red",
    fontSize: "20px",
  };

  return (
    <div>
      <h2 style={inlineStyle}>Estilos Inline</h2>

      {/*Arquivo de Styles importado*/}
      <p className="text">Meu css</p>

      {/* CSS MODULES */}
      <p className={Styles.textPurple}>Meu Css Modules</p>
    </div>
  );
};

export default StyleExample;
