"use client";
import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
  //console.log(data);

  const { data: session } = useSession();
  //   console.log("user data", session);

  const handleConfirm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const due = form.due.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const formData = { name, date, email, due, phone, address };
    toast.success("Form submitted successfully");
    console.log("booking form", formData);
  };

  return (
    <div className="lg:w-8/12 w-11/12 mx-auto">
      <h1 className="sm:text-4xl text-2xl text-center font-semibold my-5">
        Book <span className="text-[#FF3811]">{data?.title}</span> Service
      </h1>
      <div>
        <form onSubmit={handleConfirm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
            <fieldset className="fieldset">
              <label className="label ">Name</label>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-[#FF3811]/50 border-[#FF3811]/20"
                placeholder="Name"
                defaultValue={session?.user?.name || ""}
                readOnly
                name="name"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label ">Email</label>
              <input
                type="email"
                className="input w-full focus:outline-none focus:border-[#FF3811]/50 border-[#FF3811]/20"
                placeholder="Email"
                defaultValue={session?.user?.email || ""}
                readOnly
                name="email"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label ">Due amount</label>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-[#FF3811]/50 border-[#FF3811]/20"
                placeholder="Due"
                defaultValue={data?.price}
                readOnly
                name="due"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label ">Date</label>
              <input
                type="date"
                className="input w-full focus:outline-none focus:border-[#FF3811]/50 border-[#FF3811]/20"
                // placeholder="Name"
                min={new Date().toISOString().split("T")[0]} // only today and future dates
                name="date"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label ">Phone</label>
              <input
                type="tel"
                className="input w-full focus:outline-none focus:border-[#FF3811]/50 border-[#FF3811]/20"
                placeholder="Phone"
                name="phone"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label ">Present Address</label>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-[#FF3811]/50 border-[#FF3811]/20"
                placeholder="Present Address"
                name="address"
              />
            </fieldset>
          </div>
          <button
            type="submit"
            className="btn btn-outline border-[#FF3811] text-[#FF3811] rounded-sm hover:bg-[#FF3811] hover:text-white w-full mt-5 transition duration-300"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
