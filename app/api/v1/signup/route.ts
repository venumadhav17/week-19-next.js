import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

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
