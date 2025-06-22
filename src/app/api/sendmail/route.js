import SendTicket from "@/lib/sendEmail";
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
  const response = await SendTicket('68554c07e8626fba559570e5')
  return NextResponse.json({...response})
}