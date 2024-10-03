import React from "react";
import { menuIcon } from "../assets/icons";
import { closeIcon } from "../assets/icons";

const MenuHam = ({ openNavigation }) => {
  return (
    <img
      src={openNavigation ? closeIcon : menuIcon}
      alt={openNavigation ? "close-icon" : "open menu"}
      height={25}
      width={25}
    />
  );
};

export default MenuHam;
