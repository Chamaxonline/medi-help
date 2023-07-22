// pages/patient.tsx
import React, { Component, FormEvent, useState } from "react";
import { MyPage } from "@/components/common/types";
import { useForm } from "react-hook-form";
import { submitFormData, Patient } from "@/services/api/patient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientPage: MyPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can perform any action with the form data, like sending it to the server
    try {
      const data = await submitFormData(formData);

      toast.success("Data saved successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("Failed to save data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Register Patient
            </h2>
            <p className="text-gray-500 mb-6">
              Enter Your Patient Details here.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Vehicle Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="lastName">Address</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Address"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="lastName">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="gender">Gender</label>
                        <div className="flex items-center mb-4">
                          <input
                            id="gender_male"
                            type="radio"
                            value="0"
                          onChange={handleChange}
                          checked={formData.gender == 0}
                            name="gender"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="gender_female"
                            type="radio"
                            value="1"
                            onChange={handleChange}
                            checked={formData.gender == 1}
                            name="gender"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="default-radio-2"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Female
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="gender_other"
                            type="radio"
                            value="2"
                            onChange={handleChange}
                            checked={formData.gender == 2}
                            name="gender"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="default-radio-2"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientPage;
PatientPage.Layout = "Main";
