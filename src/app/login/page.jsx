import Link from 'next/link';
import React from 'react';
import { CgFacebook } from 'react-icons/cg';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import LoginForm from './components/LoginForm';

const LongInPage = () => {
  return (
    <div className="lg:w-8/12 w-11/12 mx-auto sm:mt-25 mt-15">
      <div className="flex sm:flex-row flex-col items-center gap-5">

        {/* left section */}
        <div className="flex-1">
          <Image
            src={"/assets/images/login/login.svg"}
            width={460}
            height={502}
            alt="register img"
          />
        </div>

        {/* right section */}
        <div className="flex-1">
          <div className=" w-full border-2 border-base-300 rounded-xl">
            <div className="card-body sm:py-18 sm:px-15">
              <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-semibold">
                Sign In
              </h1>
              <LoginForm/>
              <p className="text-center my-5 text-xl">Or Sign In with</p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href={"https://www.facebook.com/"}
                  target="_blank"
                  className="bg-base-300 p-2 rounded-full"
                >
                  <CgFacebook className="size-5 text-[#3b5998]" />
                </Link>
                <Link
                  href={"https://www.linkedin.com/"}
                  target="_blank"
                  className="bg-base-300 p-2 rounded-full"
                >
                  <FaLinkedinIn className="size-5 text-[#0a66c2]" />
                </Link>
                <Link
                  href={"https://www.google.com/"}
                  target="_blank"
                  className="bg-base-300 p-2 rounded-full"
                >
                  <FcGoogle className="size-5" />
                </Link>
              </div>
              <p className="text-center mt-5 sm:text-xl">
                Don't have an account?{" "}
                <Link className="text-[#FF3811] underline font-semibold" href={"/register"}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LongInPage;