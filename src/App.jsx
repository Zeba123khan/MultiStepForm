import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaCheck,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaChessPawn } from "react-icons/fa6";
import { FaDollarSign, FaChartPie, FaShieldAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { VscThumbsup } from "react-icons/vsc"; // Import VscThumbsup

const App = () => {
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start min-h-screen bg-gray-50 pt-6">
      <div className="flex flex-col md:flex-row shadow-lg rounded overflow-hidden max-w-5xl w-full bg-white p-4 md:p-6">
        {/* Sidebar */}
        <div className="w-full md:w-2/5 bg-gray-100 p-6 rounded-lg flex flex-col justify-between">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-5">
              <FaChessPawn className="text-orange-500 text-2xl -rotate-12" />
              <h1 className="text-xl md:text-2xl font-bold">Paw's</h1>
            </div>
            <hr className="opacity-90 my-4" />
          </div>
          <div className="space-y-4">
            {/* Message Us */}
            <div className="flex items-start space-x-4 p-4">
              <MdEmail className="text-orange-500 text-5xl md:text-6xl" />
              <div>
                <h2 className="font-bold text-lg md:text-base">Message Us</h2>
                <p className="text-sm mt-1">
                  Email us with your queries, and a team member will get back to you ASAP.
                </p>
                <p className="font-bold mt-1">email@example.com</p>
              </div>
            </div>
            {/* Call Us */}
            <div className="flex items-start space-x-4 p-4">
              <MdCall className="text-orange-500 text-4xl md:text-5xl" />
              <div>
                <h2 className="font-bold text-lg md:text-base">Call Us Now!</h2>
                <p className="text-sm mt-1">
                  Want to chat? Give us a call and we'll answer all your queries.
                </p>
                <p className="font-bold mt-1">+123 456 7890</p>
              </div>
            </div>
            {/* Office Address */}
            <div className="flex items-start space-x-4 p-4">
              <MdLocationOn className="text-orange-500 text-4xl md:text-5xl" />
              <div>
                <h2 className="font-bold text-lg md:text-base">Our Office</h2>
                <p className="text-sm mt-1">
                  Prefer to visit? We're located in Sydney, Australia.
                </p>
                <p className="font-bold mt-1">123 Main St, City</p>
              </div>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 md:space-x-5 mt-20">
            <a
              href="#"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Multi-step Form */}
        <div className="w-full md:w-3/5 py-6 px-4 md:px-20">
          <div className="mb-4">
            <h2 className="text-lg md:text-xl font-bold">
              {step === 1}
              {step === 2}
              {step === 3}
              {step === 4}
            </h2>
            <div className="flex items-center space-x-2 mt-2 mb-4">
              <div className="flex items-center">
                <span
                  className={`h-5 w-5 flex items-center justify-center rounded-full ${step > 1
                      ? "bg-orange-500 text-white"
                      : step === 1
                        ? "bg-orange-500 text-white"
                        : "bg-black text-white"
                    }`}
                >
                  {step > 1 ? <FaCheck size={14} /> : "1"}
                </span>
                <span className="ml-2 text-xs md:text-sm">Profile</span>
              </div>
              <IoIosArrowForward className="text-gray-400 mx-2" />
              <div className="flex items-center">
                <span
                  className={`h-5 w-5 flex items-center justify-center rounded-full ${step > 2
                      ? "bg-orange-500 text-white"
                      : step === 2
                        ? "bg-orange-500 text-white"
                        : "bg-black text-white"
                    }`}
                >
                  {step > 2 ? <FaCheck size={14} /> : "2"}
                </span>
                <span className="ml-2 text-xs md:text-sm">Project</span>
              </div>
              <IoIosArrowForward className="text-gray-400 mx-2" />
              <div className="flex items-center">
                <span
                  className={`h-5 w-5 flex items-center justify-center rounded-full ${step > 3
                      ? "bg-orange-500 text-white"
                      : step === 3
                        ? "bg-orange-500 text-white"
                        : "bg-black text-white"
                    }`}
                >
                  {step > 3 ? <FaCheck size={14} /> : "3"}
                </span>
                <span className="ml-2 text-xs md:text-sm">Planning</span>
              </div>
              <IoIosArrowForward className="text-gray-400 mx-2" />
              <div className="flex items-center">
                <span
                  className={`h-5 w-5 flex items-center justify-center rounded-full ${step === 4 ? "bg-orange-500 text-white" : "bg-black text-white"
                    }`}
                >
                  {step === 4 ? <FaCheck size={14} /> : "4"}
                </span>
                <span className="ml-2 text-xs md:text-sm">Confirmation</span>
              </div>
            </div>
          </div>
          <hr className="opacity-90 my-5" />
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="space-y-4">
                <p className="font-bold text-lg md:text-xl mt-12">
                  Provide your information
                </p>
                <p>
                  Please fill the fields below with your contact details.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="First Name"
                      {...register("firstName", { required: true })}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="Last Name"
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      type="tel"
                      placeholder="Phone Number"
                      {...register("phone", { required: true })}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    className="block w-full p-2 border border-gray-300 rounded mt-1 mb-10"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="font-bold text-lg md:text-xl mt-10">Create a Project</p>
                <p className="text-sm mt-1">
                  Please enter the project details in the fields below.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="projectName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Project Name
                    </label>
                    <input
                      id="projectName"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="Project Name"
                      {...register("projectName", { required: true })}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Project Type
                    </label>
                    <input
                      id="projectType"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="Project Type"
                      {...register("projectType", { required: true })}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="Company Name"
                      {...register("companyName", { required: true })}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <input
                      id="description"
                      className="block w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="Description"
                      {...register("description", { required: true })}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="block w-full p-2 border border-gray-300 rounded mt-1 mb-10"
                    placeholder="Message"
                    {...register("message", { required: true })}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg md:text-xl mt-10">
                    How are you planning to use Vinor?
                  </p>
                  <p className="text-sm mt-1">
                    Please enter the project details in the fields below.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {/* Financial Planning */}
                  <label className="flex items-center justify-between space-x-2 p-4 border border-gray-300 rounded cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <FaDollarSign className="text-gray-400 peer-checked:text-orange-500" />
                      <div className="peer-checked:text-orange-500">
                        <h2 className="font-bold text-base"> Planning</h2>
                        <p className="text-gray-400 my-1">Strategizing your finance</p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="usage"
                      className="form-radio text-orange-500 focus:ring-0 peer-checked:bg-orange-500"
                    />
                  </label>

                  {/* Budget Analytics */}
                  <label className="flex items-center justify-between space-x-2 p-4 border border-gray-300 rounded cursor-pointer transition-colors">
                    <div className="flex items-center space-x-2">
                      <FaChartPie className="text-gray-400 peer-checked:text-orange-500" />
                      <div className="peer-checked:text-orange-500">
                        <h2 className="font-bold text-base">Budget Analytics</h2>
                        <p className="text-gray-400 my-1">Analyzing and optimizing</p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="usage"
                      className="form-radio text-orange-500 focus:ring-0 peer-checked:bg-orange-500"
                    />
                  </label>

                  {/* Risk Management */}
                  <label className="flex items-center justify-between space-x-2 p-4 border border-gray-300 rounded cursor-pointer transition-colors ">
                    <div className="flex items-center space-x-2 ">
                      <FaShieldAlt className="text-gray-400 peer-checked:text-orange-500" />
                      <div className="peer-checked:text-orange-500">
                        <h2 className="font-bold text-base">Management</h2>
                        <p className="text-gray-400 my-1">Protecting against finance</p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="usage"
                      className="form-radio text-orange-500 focus:ring-0 peer-checked:bg-orange-500"
                    />
                  </label>

                  {/* Audit and Compliance */}
                  <label className="flex items-center justify-between space-x-2 p-4 border border-gray-300 rounded cursor-pointer transition-colors ">
                    <div className="flex items-center space-x-2">
                      <BsStars className="text-gray-400 peer-checked:text-orange-500" />
                      <div className="peer-checked:text-orange-500">
                        <h2 className="font-bold text-base">Audit</h2>
                        <p className="text-gray-400 my-1">Ensuring standards of Compliance</p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="usage"
                      className="form-radio text-orange-500 focus:ring-0 peer-checked:bg-orange-500 "
                    />
                  </label>
                </div>
              </div>
            )}


            {step === 4 && (
              <div className="text-center my-32">
                <VscThumbsup className="text-orange-500 text-5xl md:text-6xl mx-auto" />
                <h2 className="font-bold text-lg md:text-xl mt-4">Submit Successfully</h2>
              </div>
            )}

            <div className="flex justify-between mt-12">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center px-4 py-2 bg-white text-black rounded hover:bg-black hover:text-white transition-colors border border-black text-sm md:text-base"
                >
                  <IoIosArrowBack className="mr-2" />
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 bg-black text-white hover:text-black hover:bg-white border border-black rounded-lg text-sm md:text-base mt-"
                >
                  {step === 3 ? (
                    <>
                      Submit
                      <IoIosArrowForward className="ml-2" />
                    </>
                  ) : (
                    <>
                      Next
                      <IoIosArrowForward className="ml-2" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;