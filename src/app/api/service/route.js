import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  if (session) {
    const email = session?.user?.email;
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const result = await bookingCollection.find({email}).toArray()

    return NextResponse.json(result)
    // console.log("api-service-route", session);
  }
  return NextResponse.json({});
};

export const POST = async (req) => {
  const body = await req.json();
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const result = await bookingCollection.insertOne(body);
  console.log("from post route", body);
  return NextResponse.json(result);
};
