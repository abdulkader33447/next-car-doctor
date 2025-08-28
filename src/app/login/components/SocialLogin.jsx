"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (providerName) => {
    
    signIn(providerName);
    // console.log("Social Login component", providerName);
    // const result = await signIn(providerName, {
    //   redirect: false,
    //   callbackUrl: "/",
    // });
    // if (result?.error) {
    //   toast.error("Something went wrong");
    // } else {
    //   router.push(result.url || "/");
    //   toast.success(`Logged in successfully with ${providerName}`);
    // }
  };

  useEffect(() => {
    if (session?.status ==="authenticated") {
      toast.success("Successfully logged in");
      router.push("/");
    }
  }, [session?.status]);

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        type="button"
        className="bg-base-300 p-2 rounded-full cursor-pointer"
        onClick={() => handleSocialLogin("google")}
      >
        <FcGoogle className="size-5" />
      </button>
      <button
        type="button"
        className="bg-base-300 p-2 rounded-full cursor-pointer"
        onClick={() => handleSocialLogin("github")}
      >
        <FaGithub className="size-5" />
      </button>
    </div>
  );
};

export default SocialLogin;
