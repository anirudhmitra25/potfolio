import React, { useState } from "react"
import { db } from "../pages/api/firebase";

export const ContactMeForm = (props) =>{

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  function onSubmit(){
    db.collection('contacts').add({
      name:formData.name,
      email:formData.email,
      subject:formData.subject,
      message:formData.message
    }).then((res)=>{
      setFormData({
        name:"",
        email:"",
        subject:"",
        message:""
      })
      alert("Thanks, form has been submitted successfuly")
    }).catch((err)=>{
      alert("ERROR",err);
    })
  }
    return (
      <form class="w-full max-w-sm flex-column justify-center">
        <div class="md:flex md:items-center mb-6 px-3">
          <div class="w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 "
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div class="">
            <input
              class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              placeholder="Your Full Name"
              type="text"
              value={formData.name}
              onChange={(e) => {
               setFormData({...formData,name:e.target.value})
              }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6 px-3">
          <div class="w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 "
              for="inline-password"
            >
              Email
            </label>
          </div>
          <div class="">
            <input
              class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              type="text"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData,email:e.target.value})
               }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6 px-3">
          <div class="w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Subject
            </label>
          </div>
          <div class="">
            <input
              class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => {
                setFormData({...formData,subject:e.target.value})
               }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6 px-3">
          <div class="w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Message
            </label>
          </div>
          <div class="">
            <textarea
              class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-28 "
              type="text"
              placeholder="Please type your message here..."
              value={formData.message}
              onChange={(e) => {
                setFormData({...formData,message:e.target.value})
               }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6 px-3">
          <div class="w-1/3"></div>
          <div class="">
            <button
              onClick={() => {
                onSubmit();
              }}
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
            <button
              onClick={() => props.setShowForm(!props.showForm)}
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-5"
              type="button"
            >
              close
            </button>
          </div>
        </div>
      </form>
    );
}