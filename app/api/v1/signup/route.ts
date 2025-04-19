import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

import PrismaClient from "../../../lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  await prismaClient.user.create({
    data: {
      username: data.username,
      password: data.password // payload
    }
  });

  return NextResponse.json({
    message: "You have been signed up"
  });
}

// If I want to hit the GET the request we don't need to create or hit the api endpoint again instead we do get the data from the DB.
