'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "react-tooltip";


const HeaderIcon = ({icon, iconId, content}) => {
  return (
    <>
    <div className="cursor-pointer" id={iconId}>
            <FontAwesomeIcon icon={icon} className={` ${iconId === "userIcon" ? "h-6 w-6" : "h-4 w-4"} w-4 h-4 text-blue-950 `} />
          </div>
          <Tooltip
            anchorSelect={`#${iconId}`}
            content={content}
            place={`${iconId === "userIcon" ? "bottom-end" : "bottom" }`}
          />

</>
  )
}

export default HeaderIcon