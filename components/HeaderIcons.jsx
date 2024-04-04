"use client";

// import { useState } from "react";
import { faCircleUser, faMoon } from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from "./HeaderIcon";

const HeaderIcons = () => {
  return (
    <>
      {/* Themetoggler */}
      {/* <HeaderIcon icon={faMoon} iconId="darkmode" content="Toggle Dark Mode" /> */}

      {/* User Accont */}
      <HeaderIcon
        icon={faCircleUser}
        iconId="userIcon"
        content="Demo User"
      />
    </>
  );
};

export default HeaderIcons;
