import type { NextPage } from "next";
import ImageSlider from "./image-slider";
import SignInForm from "./sign-in-form";

const SignInMainSection: NextPage = () => {
  return (
    <div className="self-stretch w-full h-auto m-auto  flex flex-wrap flex-row items-center justify-center text-center text-17xl text-gray-100 font-inter md:flex-row ">
      <ImageSlider />
      <SignInForm />
    </div>
  );
};

export default SignInMainSection;
