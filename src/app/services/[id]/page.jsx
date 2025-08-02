import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const ServiceDetailPage = async ({ params }) => {
  const p = await params;
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);

  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div className="w-8/12 mx-auto">
      <section>
        <div className="w-full mx-auto">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1140}
            height={300}
            alt="checkout img"
          />
        </div>
      </section>
      <p>{p.id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default ServiceDetailPage;
