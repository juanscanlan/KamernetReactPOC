import React from "react";

import styles from "./userChoiceButton.module.scss";

const UserChoiceButton = ({ isActive, userType }) => {
  return (
    <button
      className={`${styles["userChoiceContainer__buttons--left"]} ${
        isActive ? styles["active"] : ""
      }`}
      onClick={() => setIsLandlord(true)}
    >
      {buttonType.toUpperCase()}
    </button>
  );
};

export default UserChoiceButton;
