import SendTicket from "@/lib/sendEmail";
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
  const response = await SendTicket('68550faa540d5fd5a1e77637')
  return NextResponse.json({...response})
}