import type { NextPage } from "next";

const UserSignInMenu: NextPage = () => {
  return (
    <div className=" flex flex-row items-center justify-between space-x-2 text-left text-sm text-crimson font-inter md:hidden">
      <a
        className="[text-decoration:none] bg-white w-[100px] h-auto overflow-hidden shrink-0 flex flex-row py-4 px-4 box-border items-center justify-center text-[inherit]"
        href="#"
      >
        <div className="relative font-semibold">Sign In</div>
      </a>
      <button className="cursor-pointer [border:none] py-2 px-2 bg-crimson rounded-full w-[100px] h-auto overflow-hidden shrink-0 flex flex-row box-border items-center justify-center ml-auto">
        <div className="relative text-sm font-semibold font-inter text-white text-left">
          Sign Up
        </div>
      </button>
    </div>
  );
};

export default UserSignInMenu;
