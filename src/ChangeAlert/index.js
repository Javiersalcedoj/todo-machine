import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert ({sincronize}) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="changeAlert">
        <div className="changeAlert__container">
          <h2 className="changeAlert__text">Hubo cambios vuelva a cargar la pagina</h2>
          <button
            onClick={() => toggleShow()}
            className="changeAlert__button"
          >
            Re-cargar
          </button>
        </div>
      </div>
    );
  } else {
    return null
  }
}


export { ChangeAlert };