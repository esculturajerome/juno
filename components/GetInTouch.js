import React from "react";
import Button from "./Button";

function GetInTouch() {
  return (
    <div className="lg:flex lg:flex-col items-center">
      <div
        className="grid lg:grid-cols-2 lg:gap-10 lg:items-center my-20 lg:w-9/12"
        id="contact"
      >
        <div className="">
          <p className="text-2xl md:text-3xl lg:text-4xl lg:font-semibold text-mainTextColor">
            Let us hear from you
          </p>
          <p className="md:text-lg mt-3 text-secondaryTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius
            earum magnam nulla mollitia molestiae ad impedit ducimus rerum ut,
            atque reiciendis asperiores! Eaque obcaecati deleniti in assumenda!
            Officiis, molestiae.
          </p>
        </div>
        <div className="w-full max-w-lg py-10 px-6 bg-white rounded-lg hover:bg-gray-50 shadow-xl shadow-shadowColor">
          <form className="px-8 pt-6 pb-8 mb-4" data-netlify="true">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                placeholder="Send us a message"
              />
              {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
            </div>
            <div className="flex items-center justify-between">
              <Button text="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
