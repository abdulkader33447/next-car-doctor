"use client";
import Image from "next/image";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const MyBooked = ({ data }) => {
  console.log("from myBooked page", data);
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Favorite Color</th>
              <th>Favorite Color</th>
            </tr>
          </thead> */}
          <tbody>
            {/* row 1 */}
            {data?.map((item) => {
              return (
                <tr key={item._id}>
                  <th className="cursor-pointer">
                    <RxCross1 className="bg-gray-600 text-white p-2 size-8 rounded-full" />
                  </th>
                  <td>
                    <Image
                    className="rounded"
                      src={item.service_image}
                      width={60}
                      height={60}
                      alt="service image"
                    />
                  </td>
                  <td>{item.customerName}</td>
                  <td>{item.due}</td>
                  <td>{item.date}</td>
                  <td>Status</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooked;
