import type { NextPage } from "next";

type OfficeCardType = {
  locationText?: string;
};

const OfficeCard: NextPage<OfficeCardType> = ({ locationText }) => {
  return (
    <div className="self-stretch rounded-lg bg-white flex flex-col py-4 pl-8  items-center justify-center gap-[10px] text-left text-lg text-darkgray-100 font-inter border-[1px] border-solid border-crimson">
      <div className="self-stretch flex flex-row items-center justify-between text-gray-100">
        <div className="relative font-semibold inline-block w-[354px] shrink-0">
          {locationText}
        </div>
        <div className="flex flex-row items-center justify-start pr-4">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 relative text-sm font-medium font-inter text-crimson text-right inline-block">{`Edit `}</button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 relative text-sm font-medium font-inter text-crimson text-right inline-block ml-2">{`Delete `}</button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-base">
        <div className="self-stretch relative">
          Bodija Estate Baptist Church
        </div>
        <div className="self-stretch relative">Adeyi Avenue, 201345</div>
        <div className="self-stretch relative">Ibadan, Nigeria.</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-center text-sm">
        <div className="flex-1 relative">Default</div>
      </div>
    </div>
  );
};

export default OfficeCard;
