import React from "react";
import "./../../styles/ModelViewer.css";

export const ModelViewer = () => {
  const closeViewer = () => {
    document.querySelector(".visible").classList.replace("show", "hide");
  };
  return (
    <div className="visible hide">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <iframe
            id="modelViewerView"
            title="PisoFijoModelView"
            src="https://3000-4geeksacademy-htmlhello-359k3jin6lk.ws-eu34.gitpod.io/"
          ></iframe>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="text-center">
          <button className="closeBtn" onClick={closeViewer}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
