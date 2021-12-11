import React from "react";
import './ItemLoading.css'

function ItemLoading() {
  return (
    <React.Fragment>
      <div className="ItemLoading">
        <div className="ItemLoading__Shadow"></div>
        <div className="ItemLoading__text">
          <div className="ItemLoading__text--left"></div>
          <div className="ItemLoading__text--right"></div>
        </div>
      </div>

      <div className="ItemLoading">
        <div className="ItemLoading__Shadow"></div>
        <div className="ItemLoading__text">
          <div className="ItemLoading__text--left"></div>
          <div className="ItemLoading__text--right"></div>
        </div>
      </div>

      <div className="ItemLoading">
        <div className="ItemLoading__Shadow"></div>
        <div className="ItemLoading__text">
          <div className="ItemLoading__text--left"></div>
          <div className="ItemLoading__text--right"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export {ItemLoading}