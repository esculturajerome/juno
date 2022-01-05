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
            Get in touch
          </p>
          <p className="md:text-lg mt-3 text-secondaryTextColor">
            Want to know more us? <br /> We're ready to answer any and all
            questions.
          </p>
        </div>
        <div className="w-full max-w-lg py-10 px-6 bg-white rounded-lg hover:bg-gray-50 shadow-xl shadow-shadowColor">
          <form
            className="px-8 pt-6 pb-8 mb-4"
            data-netlify="true"
            method="post"
            name="Contact Form"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="contact-form" value="Contact Form" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="number"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="text"
                placeholder="Phone Number"
                name="Number"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message*
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                name="Message"
                required
                placeholder="Send us a message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainColor hover:bg-mainColor-dark"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
