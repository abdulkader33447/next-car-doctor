import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(id) });

    if (!data) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("Service fetch error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
