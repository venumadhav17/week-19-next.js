import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    user: "harkirat",
    email: "123@gmail.com"
  });
}
