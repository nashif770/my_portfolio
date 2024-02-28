"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.email.value,
      message: e.target.message.value,
    };
    console.log("data", data);

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === "200") {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-10 blur-lg absolute  top-4 -left-4 transform -translate-x-1 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect </h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          adipisci ullam cupiditate quam maxime deserunt ex, natus fuga debitis
          esse suscipit velit delectus perspiciatis voluptates amet ut odio
          sequi repudiandae?
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image></Image>
          </Link>
          <Link href="github.com">
            <Image></Image>
          </Link>
          <Link href="github.com">
            <Image></Image>
          </Link>
          <Link href="github.com">
            <Image></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-[#18191e] border-[#333535] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="yakub@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="text"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-[#18191e] border-[#333535] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just Saying hi"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              type="text"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="text"
              id="message"
              className="bg-[#18191e] border-[#333535] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave your message here ..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text0white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email Sent Successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
