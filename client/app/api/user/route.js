import { NextResponse } from "next/server";
import dbConnect from '../../../database/database'
import User from '../../../database/model/User'

export async function GET() {

//   await dbConnect();

  return NextResponse.json({ msg: "success" });
}


export async function POST(req) {
  const body = await req.json();
   await dbConnect();
  const user = await User.create(body)

  return NextResponse.json({ msg:"success",data: user });
}