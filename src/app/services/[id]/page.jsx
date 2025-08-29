import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const ServiceDetailPage = async ({ params }) => {
  const {id} =  params;

  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();
  console.log(data);
  return (
    <div className="lg:w-8/12 w-11/12 mx-auto">
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-md">
        <Image
          src="/assets/images/checkout/checkout.png"
          alt="checkout img"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        {/* text Overlay */}
        <div className="absolute lg:inset-30 md:inset-15 inset-6 flex items-center justify-normal">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Service Details
          </h1>
        </div>
      </section>

      <div className="grid grid-flow-row sm:grid-cols-3 lg:mt-40 mt-20 gap-5">
        <div className="sm:col-span-2">
          <Image
            src={data.img}
            width={780}
            height={100}
            alt="data.img"
            className="rounded-md md:h-70 lg:h-96"
          />
          <h1 className="text-2xl font-bold my-3">{data.title}</h1>
          <p>{data.description}</p>
          
        </div>
        <div>
          <div className="bg-base-300 rounded-md  lg:p-10 p-6 h-fit">
          <h1 className="text-start text-2xl lg:text-4xl md:text-3xl font-bold mb-5">
            Services
          </h1>
          <div className="flex flex-col gap-3 sm:gap-5">
            <div className="btn lg:text-lg rounded-md hover:border-none border-none hover:bg-[#FF3811] hover:text-white flex items-center justify-between sm:px-3 sm:py-6  transition duration-500">
              <button>Full Car Repair</button>
              <Link href={"/"}>
                <GoArrowRight />
              </Link>
            </div>
            <div className="btn lg:text-lg rounded-md hover:border-none border-none hover:bg-[#FF3811] hover:text-white flex items-center justify-between sm:px-3 sm:py-6  transition duration-500">
              <button>Engin Repair</button>
              <Link href={"/"}>
                <GoArrowRight />
              </Link>
            </div>
            <div className="btn lg:text-lg rounded-md hover:border-none border-none hover:bg-[#FF3811] hover:text-white flex items-center justify-between sm:px-3 sm:py-6  transition duration-500">
              <button>Automatic Services</button>
              <Link href={"/"}>
                <GoArrowRight />
              </Link>
            </div>
            <div className="btn lg:text-lg rounded-md hover:border-none border-none hover:bg-[#FF3811] hover:text-white flex items-center justify-between sm:px-3 sm:py-6  transition duration-500">
              <button>Engine Oil Change</button>
              <Link href={"/"}>
                <GoArrowRight />
              </Link>
            </div>
            <div className="btn lg:text-lg rounded-md hover:border-none border-none hover:bg-[#FF3811] hover:text-white flex items-center justify-between sm:px-3 sm:py-6  transition duration-500">
              <button>Battery Change</button>
              <Link href={"/"}>
                <GoArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold my-5">Price ${data.price}</h1>
        <Link href={`/checkout/${data._id}`}>
        <button className="btn w-full bg-[#FF3811] text-white rounded-md border-none">Proceed Checkout</button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceDetailPage;
