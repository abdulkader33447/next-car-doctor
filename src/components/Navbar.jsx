"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session);

  const handleLogOut = async (e) => {
    e.preventDefault();
    await signOut({ redirect: false });
    toast.success("Logged out successfully!", { duration: 4000 });
  };
  const navMenu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      {status === "authenticated" ? (
        <>
          <li>
            <Image src={session?.user?.image} width={50} height={50} alt="profile"/>
          </li>
          <li>
            <a onClick={handleLogOut}>Log Out</a>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link href={"/register"}>Sign Up</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm lg:w-8/12 mx-auto mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image
              src={"/assets/logo.svg"}
              width={54}
              height={54}
              alt="logo"
              // className="h-auto w-auto"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline border-[#FF3811] text-[#FF3811] rounded-sm hover:bg-[#FF3811] hover:text-white">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
