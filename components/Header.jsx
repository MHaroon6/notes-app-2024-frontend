import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import AddButton from "./AddButton";
import { faCircleUser, faMoon } from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from "./HeaderIcon";
import RefreshIcon from "./RefreshIcon";

// import logo from "@/public/assets/logo.png";

const Header = () => {
  return (
    <div className="fixed w-screen bg-gradient-to-l from-pink-50 to-cyan-50 shadow-md z-10">
      <header className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center my-2 ml-2 md:mx-10 ">
        {/* Logo */}
        <Link href="/">
          <div className="logo flex justify-between items-center ">
            <Image
              src="/assets/logo.jpeg"
              alt="logo"
              width={50}
              height={50}
              className="m-2 rounded-md"
            />
            <div className="flex flex-col">
              <span className="text-xl">Notes App 2024 </span>
              <span className="text-xs">v0.0.1 (Alpha Build) </span>
            </div>
          </div>
        </Link>
        {/* Searchbar */}
        <div className="flex items-center justify-between md:justify-center gap-6 mx-auto md:mx-0">
          <Searchbar />
          <RefreshIcon />
          {/* add note */}
          <AddButton />
        </div>

        <div className="flex justify-between items-center gap-8 absolute top-4 right-4 md:top-0 md:right-0 md:relative">
          {/* Themetoggler */}
          <HeaderIcon
            icon={faMoon}
            iconId="darkmode"
            content="Toggle Dark Mode"
          />

          {/* User Accont */}
          <HeaderIcon
            icon={faCircleUser}
            iconId="userIcon"
            content="User Account"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
