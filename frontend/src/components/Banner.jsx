import React from 'react';
import image from "./../images/imgbin_campervans-motorhome-caravan-png.png";

const Banner = () => {
  return (
    <div>
        <div>
        <div className="banner">
          <div className="left">
            <img src={image} alt="" width="530px" className="banner__img" />
          </div>
          <div className="right">
            <h1 className="right__title">Z naszymi camperami</h1>
            <h3 className="right__subtitle">świat stoi dla ciebie otworem</h3>
            <p className="right__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button>Wybierz swój camper</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner