"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tooltip } from "react-tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarItem = ({ link, icon, color, title, toolTipPosition }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={link}
        id={title}
        data-tooltip-variant={title === "Trash" ? "error" : "info"}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`w-6 h-6 cursor-pointer hover:${color} ${
            pathname === link && color
          }`}
        />
      </Link>
      <Tooltip anchorSelect={`#${title}`} content={title} place={toolTipPosition} />
    </>
  );
};

export default SidebarItem;
