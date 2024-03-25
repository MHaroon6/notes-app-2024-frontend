import Image from "next/image";
import Searchbar from "./Searchbar";
import AddButton from "./AddButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMoon } from "@fortawesome/free-solid-svg-icons";
// import logo from "@/public/assets/logo.png";

export const Header = () => {
  return (
    <header className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center my-2 ml-2 md:mx-10">
      {/* Logo */}
      <div className="logo flex justify-between items-center ">
        <Image
          src="/assets/logo.jpeg"
          alt="logo"
          width={50}
          height={50}
          className="m-2 rounded-md"
        />
        <span className="text-xl">Notes App 2024</span>
      </div>

      {/* Searchbar */}
      <div className="flex items-center justify-between md:justify-center gap-6 mx-auto md:mx-0">
        <Searchbar />
        {/* add note */}
        <AddButton />
      </div>

      <div className="flex justify-between items-center gap-8 absolute top-4 right-4 md:top-0 md:right-0 md:relative">
        {/* Themetoggler */}
        <div className="cursor-pointer" title="Toggle Dark Mode">
          <FontAwesomeIcon icon={faMoon} className="w-4 h-4 text-blue-950" />
        </div>

        {/* User Accont */}
        <div className="cursor-pointer" title="User Account">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="w-8 h-8 text-blue-950"
          />
        </div>
      </div>
    </header>
  );
};
