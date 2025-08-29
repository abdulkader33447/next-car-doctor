import CheckoutForm from "@/components/forms/CheckoutForm";
import React from "react";

const CheckoutPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();
  //   console.log(data);
  return (
    <div>
      <CheckoutForm data={data}/>
      
    </div>
  );
};

export default CheckoutPage;
