import React from 'react';
import PageHeader from "@/components/common/PageHeader";
import {Container} from "react-bootstrap";
import connectToDatabase from "@/lib/mongodb";
import TempTicket from "@/models/TempTicket";
import CheckStatus from "@/app/[locale]/checkout/[id]/CheckStatus";
import tempTicket from "@/models/TempTicket";
import {notFound} from "next/navigation";


export default async function CheckoutCallbackPage({ params }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const tempTicket = await TempTicket.findById(id);
    if(!tempTicket) notFound()
  } catch (e) {
    return (
      <>
        <PageHeader currentPage={'Payment status'} banner={"banner-1 banner-2"} />
        <Container className={"mt-4"}>
          <div className="p-4 justify-content-center text-center">
            <h1 className="text-3xl font-bold text-red-600">❌ The ticket was not found</h1>
            <p className="mt-4 text-lg">Please check the url or contact us: <a href={"tel: +995598254444"}>(+995) 598254444</a></p>
          </div>
        </Container>
      </>
    )
  }


  // const searchParams = useSearchParams();
  // const status = searchParams.get('status');



  return (
    <>
      <PageHeader currentPage={'Payment status'} banner={"banner-1 banner-2"} />
      <Container className={"mt-4"}>
        {!tempTicket ? (
          <div className="p-4 justify-content-center text-center">
            <h1 className="text-3xl font-bold text-red-600">❌ The ticket was not found</h1>
            <p className="mt-4 text-lg">Please check the url or contact us: <a href={"tel: +995598254444"}>(+995) 598254444</a></p>
          </div>
        ) : (
          <CheckStatus ticketId={params.id} />
        )}

      </Container>

    </>
  );
}
