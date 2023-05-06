import React from "react";
import nextjs from "../assets/nextjs.svg";

export function Nextjs({ size }) {
  const estilos = {
    height: `${size}px`,
    width: `${size}px`,
    marginBottom: "8px"
  };

  return <img className="select-none" style={estilos} src={nextjs} alt="Nextjs" />;
}

export default Nextjs;
