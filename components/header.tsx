import type { NextPage } from "next";
import Logo from "./logo";
import MainMenus from "./main-menus";
import UserSignInMenu from "./user-sign-in-menu";

const Header: NextPage = () => {
  return (
    <nav className="self-stretch bg-white w-full h-[80px] overflow-hidden flex flex-row p-[10px] items-center justify-between text-left text-sm text-crimson font-inter">
      <Logo />
      <MainMenus />
      <UserSignInMenu />
    </nav>
  );
};

export default Header;
