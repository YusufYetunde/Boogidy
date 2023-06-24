import type { NextPage } from "next";

const UserProfileCard: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col basis-full max-w-full py-0 px-0 items-center justify-center gap-[8px] text-left text-5xl text-gray-100 font-inter lg:w-1s/2 sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between">
      <h2 className="text-lg">Basic Information</h2>
      <a href="#" className="text-red-500 text-sm font-semibold no-underline">Edit Profile</a>
      </div>
      <div className="self-stretch rounded-[16.87px] overflow-hidden flex flex-row py-2 px-0 items-center justify-start">
        <img
          className="relative rounded-md w-[110.51px] h-[110.51px] object-cover "
          alt=""
          src="/rectangle-321@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[16px] text-right text-sm text-crimson">
        <input
          className="font-inter w-full rounded-md text-sm self-stretch box-border h-[52px] flex flex-row py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-300"
          type="text"
          placeholder="John Doe"
          readOnly
        />
        <input
          className="font-inter w-full rounded-md text-sm self-stretch box-border h-[51px] flex flex-row py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-300"
          type="text"
          placeholder="johndoe@gmail.com"
          readOnly
        />
        <input
          className=" w-full rounded-md self-stretch box-border h-[52px] flex flex-row py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-300"
          type="text" placeholder="*********"
          readOnly
        />
        <div className="self-stretch relative font-medium hover:underline">Change Password</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
          <select  className="font-inter text-sm box-border w-[30%] h-[52px] flex flex-row py-4 px-6 rounded-md items-center justify-center border-[1px] border-solid border-gray-300">
            <option value="+1">
              <img src="#" alt="/"/>+1
            </option>
            <option value="+91">+91</option>
            <option value="+44">+44</option>     
            </select>
          <input
            className="font-inter text-sm w-[70%] flex-1 box-border h-[52px] flex flex-row py-4 px-6 rounded-md items-center justify-start border-[1px] border-solid border-gray-300"
            type="text"
            placeholder="0123 456789"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
