import React from 'react';
import audi from "../../../assets/audi.png";
import mercedes from "../../../assets/mercedes.png";
import lexus from "../../../assets/audi.png";
const Logos = () => {
    return (
      <div>
        <div className="flex space-x-2 w-full">
          <img src={mercedes} alt="Mercedes" className="w-1/6" />
          <img src={mercedes} alt="Mercedes" className="w-1/6" />
          <img src={audi} alt="Audi" className="w-1/6" />
          <img src={audi} alt="Audi" className="w-1/6" />
          <img src={lexus} alt="Lexus" className="w-1/6" />
          <img src={lexus} alt="Lexus" className="w-1/6" />
        </div>
      </div>
    );
}

export default Logos;
