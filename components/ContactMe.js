import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

import React, { useState } from "react";
import { ContactMeForm } from "./ContactMeForm";
import { github_link, linkedIn_link, mail_link } from "../data/data";

const line_1="If you wanna get in touch, or just say hi,"
const line_2="please fill up the form below and let's talk."
const line_3="Let's do this"
export const ContactMe = (props) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div ref={props.contactMeRef} className="pt-20">
      <div
        className={
          showForm
            ? "bg-gradient-to-r from-indigo-900 to-slate-900 lg:w-2/3 relative mx-auto text-center rounded-xl -mb-48 md:w-3/4 sm:w-3/4 w-5/6"
            : "bg-gradient-to-r from-indigo-900 to-slate-900 lg:w-2/3 relative mx-auto text-center rounded-xl -mb-28 md:w-3/4 sm:w-3/4 w-5/6"
        }
      >
        <div className="mt-10 pt-10 pb-10 ">
          <h1 className="text-white font-bold lg:text-4xl md:text-4xl sm:text-xl text-xl">
            Get in touch
          </h1>
          <p className="mt-5 md:p-8 text-white font-mono md:pl-10 md:pr-10 sm:pl-3 sm:pr-3 lg:text-2xl md:text-xl sm:text-lg text-lg px-4">
            {line_1}<br/>
            {line_2}
          </p>

          {!showForm && (
            <button
              onClick={() => setShowForm(!showForm)}
              class="bg-transparent hover:bg-cyan-500 text-white font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded-3xl mt-5"
            >
              {line_3}
            </button>
          )}
        </div>
        {showForm && (
          <div className="flex justify-center mt-5 pb-20">
            <ContactMeForm setShowForm={setShowForm} showForm={showForm} />
          </div>
        )}
      </div>
      <div className="bg-gradient-to-b from-teal-500 to-cyan-500 text-center">
        <div
          className={
            showForm
              ? "text-4xl flex justify-center gap-16 py-3 text-gray-600 pt-80 pb-20"
              : "text-4xl flex justify-center gap-16 py-3 text-gray-600 pt-44 pb-20"
          }
        >
          <AiFillGithub
            onClick={() => {
              window.open(github_link, "_blank", "noopener,noreferrer");
            }}
            className="text-white hover:transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
          />
          <AiFillLinkedin
            onClick={() => {
              window.open(linkedIn_link, "_blank", "noopener,noreferrer");
            }}
            className="text-white hover:transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
          />
          <a href="mailto:anirudhmitra25@gmail.com">
            <AiFillMail className="text-white hover:transition duration-300 ease-in-out hover:scale-125 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
