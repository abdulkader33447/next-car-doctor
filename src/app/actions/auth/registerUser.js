"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

const registerUser = async (payload) => {
  const usersCollection = dbConnect(collectionNameObj.usersCollection);

  // Validation
  const { email, password, name } = payload;
  if (!email || !password)
    return { success: false, message: "Missing email or password" };

  // Check if user already exists
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) return { success: false, message: "User already exists" };

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);

  //insert user
  const newUser = {
    name,
    email,
    password: hashPassword,
    createdAt: new Date(),
  };

  // Insert new user
  const result = await usersCollection.insertOne(newUser);
  return { success: true, insertedId: result.insertedId };
};

export default registerUser;
