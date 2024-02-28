import React from "react";
import "./Utilities.scss";

function Loader() {
   return (
      <div className="lds-ring">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
}

export default Loader;
