import React, { useState } from "react";
import { Link } from "react-router-dom";
import {db} from "/firebase";
import {collection ,addDoc} from "firebase/firestore";
import firebase from "firebase";
function Doctor() {
const [formData,setFormData]=useState({
    name:"",
    specialization:"",
    contactInfo:"",
    schedule:"",
    slotId:"",
    agree:false,

});

const handleChange = (e) => {
    const {name,value} =e.target;
    setFormData({...formData,[name]:value});
    
};
const handleCheckboxChange = () => {
    setFormData({ ...formData, agree: !formData.agree });
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "doctors"), {
        name: formData.name,
        specialization: formData.specialization,
        contactInfo: formData.contactInfo,
        schedule: formData.schedule,
        slotId: formData.slotId,
      });
      console.log("Document written with ID: ", docRef.id);
      // Optionally reset the form
      setFormData({
        name: "",
        specialization: "",
        contactInfo: "",
        schedule: "",
        slotId: "",
        agree: false,
    });
} catch (e) {
  console.error("Error adding document: ", e);
}
};


  return (
    <>
      <div class="flex items-center justify-center h-screen  ">
        <form>
          <h1 className="text-3xl mb-7">Doctor Login Form</h1>
          <div class="grid gap-6 mb-6 md:grid-cols-2 ">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Specialization
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ContactInfo
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0300-0000000"
                pattern="[0-9]{4}-[0-9]{7}"
                required
              />
            </div>

            <div class="mb-6 ">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Schedule
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="medical_history"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                slotId_1
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div class="flex items-start mt-8 ">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 block focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <Link
                  to="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </Link>
                .
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Doctor;