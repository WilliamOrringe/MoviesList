import {
  faFilm,
  faHouseChimney,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Sidebar = () => {
  return (
    <div className="relative w-[10%] min-w-[200px] flex">
      <span className="fixed rounded-lg bg-gray-500 dark:bg-shadedBackgroundDark shadow-good justify-center w-[10%] flex h-[90%]">
        <div className="flex flex-col mt-10 gap-10 font-good font-bold">
          <Link href="/" className="flex flex-row gap-4">
            <FontAwesomeIcon icon={faHouseChimney} className="w-5 h-5" /> Home
          </Link>
          <Link href="/movies" className="flex flex-row gap-4">
            <FontAwesomeIcon icon={faFilm} className="w-5 h-5" /> Movies
          </Link>
          <Link href="/tv" className="flex flex-row gap-4">
            <FontAwesomeIcon icon={faTv} className="w-5 h-5" /> TV Shows
          </Link>
          <Link href="/calendar" className="flex flex-row gap-4 ">
            <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 shadow-" />{" "}
            Calendar
          </Link>
          <Link href="/account" className="flex flex-row gap-4">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5" /> Account
          </Link>
          <ThemeSwitcher />
        </div>
      </span>
    </div>
  );
};

export default Sidebar;
