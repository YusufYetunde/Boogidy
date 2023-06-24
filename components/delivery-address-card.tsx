import type { NextPage } from "next";
import AddressCard from "./address-card";
import OfficeCard from "./office-card";

const DeliveryAddressCard: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col basis-full max-w-full py-0 px-0 items-center justify-center gap-[8px] text-left text-5xl text-gray-100 font-inter lg:w-1s/2 sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch h-[29px] flex flex-col items-center justify-between">
        <div className="self-stretch relative text-center text-lg font-semibold">
          Delivery Address
        </div>
      </div>
      <AddressCard locationText="Home" />
      <OfficeCard locationText="Office" />
      <button className="cursor-pointer py-4 px-16 bg-white self-stretch box-border h-[52px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
        <div className="flex flex-col py-1 px-0 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-[13px]">
            <img className="relative w-3.5 h-3.5" alt="" src="/add.svg" />
            <div className="relative text-sm font-semibold font-inter text-gray-200 text-left">
              Add New Address
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default DeliveryAddressCard;
