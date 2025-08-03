"use client";
import registerUser from "@/app/actions/auth/registerUser";
import React from "react";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name =form.name.value;
    const email =form.email.value;
    const password=form.password.value;
    registerUser({name,email,password});
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <label className="label text-2xl mb-4">Name</label>
        <input
        name="name"
          type="text"
          className="input w-full text-2xl py-6"
          placeholder="Name"
        />

        <label className="label text-2xl mb-4">Email</label>
        <input
        name="email"
          type="email"
          className="input w-full text-2xl py-6"
          placeholder="Email"
        />

        <label className="label text-2xl mb-4">Password</label>
        <input
        name="password"
          type="password"
          className="input w-full text-2xl py-6"
          placeholder="Password"
        />

        <button
          className="btn bg-[#FF3811] hover:bg-[#ff1111b0] text-white mt-4 w-full text-2xl py-8 rounded-lg border-none"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
