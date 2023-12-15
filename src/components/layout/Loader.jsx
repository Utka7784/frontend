import React from "react";
import ThreeDotsWave from './three-dots-wave';
import {IoFastFoodOutline} from 'react-icons/io5'

const Loader = () => {

  return (
    <div className="loader">
        <div>
            <IoFastFoodOutline/>
            <ThreeDotsWave />
        </div>
    </div>
  );
};

export default Loader;