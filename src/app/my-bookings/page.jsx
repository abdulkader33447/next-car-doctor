"use client";
import MyBooked from "@/components/myBooked/MyBooked";
import React, { useEffect, useState } from "react";

const MyBookingsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMyBooked = async () => {
      const res = await fetch("http://localhost:3000/api/service");
      const d = await res.json();
      setData(d);
    };
    fetchMyBooked()
  }, []);
  return (
    <div className="lg:w-8/12 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">MyBookingsPage</h1>
      <MyBooked data={data}/>
    </div>
  );
};

export default MyBookingsPage;
