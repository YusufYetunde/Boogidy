import type { NextPage } from "next";
import NavigationBar from "../components/navigation-bar";
import UserProfileContent from "../components/user-profile-content";

const UserProfile: NextPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-auto overflow-hidden flex flex-col pt-0 px-[150px] pb-[300px] box-border items-center justify-start sm:w-full">
      <NavigationBar />
      <UserProfileContent />
    </div>
  );
};

export default UserProfile;
