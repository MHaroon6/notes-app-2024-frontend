import { faFileLines, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <>
      {/*  <=========== sidebar for computer screen ===========> */}
      <div className="z-20 fixed large-screen h-screen hidden md:flex flex-col justify-center ">
        <nav className="border border-gray-500 rounded-r-md w-16 h-96 flex flex-col justify-between item-center  ">
          <div className=" flex justify-center p-2 ">
            <SidebarItem
              link="/notes"
              icon={faFileLines}
              color="text-cyan-500"
              title="Notes"
            />
          </div>
          <div className=" border-t border-gray-500 flex justify-center p-2">
            <SidebarItem
              link="/trash"
              icon={faTrashCan}
              color="text-red-500"
              title="Trash"
            />
          </div>
        </nav>
      </div>

      {/*  <=========== sidebar for Mobile screen ===========> */}
      <div className="mobile-sidebar md:hidden fixed bottom-0 border-t border-gray-500 w-screen flex justify-between px-10 py-2 ">
        <div className=" flex justify-center p-2">
          <SidebarItem
            link="/notes"
            icon={faFileLines}
            color="text-cyan-500"
            title="Notes"
            toolTipPosition="top"
          />
        </div>
        <div className=" flex justify-center pr-2 py-2">
          <SidebarItem
            link="/trash"
            icon={faTrashCan}
            color="text-red-500"
            title="Trash"
            toolTipPosition="top"

          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
