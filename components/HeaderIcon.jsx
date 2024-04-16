"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";

const HeaderIcon = ({ icon, iconId, content }) => {
  return (
    <>
      <div className="cursor-pointer" id={iconId}>
        <FontAwesomeIcon
          icon={icon}
          className={` ${
            iconId === "userIcon" ? "fa-xl" : "fa-1x"
          } text-blue-950 `}
        />
      </div>
      <Tooltip
        anchorSelect={`#${iconId}`}
        content={content}
        place={`${iconId === "userIcon" ? "bottom-end" : "bottom"}`}
      />
    </>
  );
};

export default HeaderIcon;
