"use client";
// import registerUser from "@/app/actions/auth/registerUser";
import React from "react";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-7">
        <label className="label sm:text-2xl text-xl sm:mb-4 mb-2">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full sm:text-2xl text-xl sm:py-6 py-3"
          placeholder="Email"
        />

        <label className="label sm:text-2xl text-xl sm:mb-4 mb-2">Password</label>
        <input
          name="password"
          type="password"
          className="input w-full sm:text-2xl text-xl sm:py-6 py-3"
          placeholder="Confirm Password"
        />

        <button
          className="btn bg-[#FF3811] hover:bg-[#ff1111b0] text-white mt-4 w-full text-xl sm:text-2xl py-6 sm:py-8 rounded-lg border-none"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
