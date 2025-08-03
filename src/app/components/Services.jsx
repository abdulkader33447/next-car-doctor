import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Services = async () => {
  // const res = await fetch("/assets/services.json")
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <section className="sm:w-8/12 w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 p-2"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={250}
              className="w-11/12 mx-auto h-auto object-cover rounded-sm"
            />

            <div className="p-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex items-center justify-between text-[#FF3811] font-bold mt-1">
                <p className="">Price: ${item.price}</p>
                <Link href={`/services/${item._id}`}>
                  <GoArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
