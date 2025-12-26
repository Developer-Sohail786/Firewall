import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "../utils/axios";

const Register = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setServerError("");
    try {
      const res = await axios.post("/register", data);
      console.log("Backend response:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Blocked by WAF or server error", err.response?.data);
      setServerError(
        err.response?.data?.message || "Request blocked by WAF or server error"
      );
    }
  };

  return (
    <div className="container flex items-center justify-center h-screen bg-slate-700">
      <div className="form flex flex-col rounded-lg text-white h-[80%] w-[40%]">
        <div className="text-[2.2rem] font-bold mt-10 flex justify-center">
          <h1>Register Here</h1>
        </div>

        <div className="create mt-4 text-[1.2rem] flex justify-center text-gray-400">
          <p>Create your new account here</p>
        </div>

        {/* 🔴 Server Error Message */}
        {serverError && (
          <div className="text-red-500 text-center mt-4 font-semibold">
            {serverError}
          </div>
        )}

        <div className="inputsFields text-[1.2rem] flex flex-col items-center mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mr-[63.9%] text-gray-500">Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-2 h-12 w-[30vw] text-black border-black rounded-lg mt-2 pl-8"
              {...register("name", {
                required: "Field can't be empty",
              })}
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </div>
            )}

            <p className="mr-[63.9%] text-gray-500 mt-2">Email</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-2 h-12 w-[30vw] text-black border-black rounded-lg mt-2 pl-8"
              {...register("email", {
                required: "Field can't be empty",
              })}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </div>
            )}

            <p className="mr-[64%] text-gray-500 mt-5">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-2 h-12 w-[30vw] text-black border-black rounded-lg mt-2 pl-8"
              {...register("password", {
                required: "Field can't be empty",
              })}
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </div>
            )}

            <div className="btn flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`h-12 w-[40%] rounded-lg mt-5 font-bold text-[1.2rem] ${
                  isSubmitting
                    ? "bg-gray-400"
                    : "bg-blue-500 hover:bg-blue-800 text-white"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </div>
          </form>
        </div>

        <p className="text-gray-400 flex justify-center mt-5">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-500 ml-2 hover:underline cursor-pointer"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
