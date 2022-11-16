import React from "react";

import LogoImg from "../../images/logo.png";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImg} alt="Little Book" />
    </div>
  );
};

export default Logo;
