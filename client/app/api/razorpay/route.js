import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET, // Corrected the environment variable name
});

export async function GET() {
  try {
    const payment_capture = 1;
    const amount = 1 * 100; // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
      amount: amount.toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
      notes: {
        // These notes will be added to your transaction. So you can search it within their dashboard.
        // Also, it's included in webhooks as well. So you can automate it.
        paymentFor: "testingDemo",
        userId: "100",
        stockId: "P100",
      },
    };

    const order = await instance.orders.create(options);
    return NextResponse.json({ msg: "success", order });
  } catch (error) {
    return NextResponse.json({ msg: "error", error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    return NextResponse.json({ msg: body });
  } catch (error) {
    return NextResponse.json({ msg: "error", error: error.message }, { status: 500 });
  }
}