import React from "react";

function Newsletter() {
  return (
    <div className="bg-black py-4 text-white">
      <div className="flex w-full flex-col py-9 justify-around md:flex-row px-7">
        <div className="flex flex-col md:pr-4 gap-4 p-5">
          <h1 className="text-3xl font-bold">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col md:flex-row p-4 gap-4">
          <input type="text" placeholder="Enter your email" className="text-[gray] p-2 mr-2 rounded"/>
          <div className="self-center"><button className="bg-[#40F8FF] text-black px-5 py-2 rounded hover:bg-slate-400 hover:text-black">Notify me</button></div>
          </div>
          <div>
            <p>We care about the protection of your data. Read our <a href="#" className="text-[#40F8FF] underline">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
