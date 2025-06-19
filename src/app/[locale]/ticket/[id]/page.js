import React from 'react';
import PageHeader from "@/components/common/PageHeader";
import {Container} from "react-bootstrap";
import connectToDatabase from "@/lib/mongodb";
import Ticket from "@/models/Ticket";
import CheckStatus from "@/app/[locale]/ticket/[id]/CheckStatus";
import {notFound} from "next/navigation";


export default async function CheckoutCallbackPage({ params }) {
  const { id } = await params;
  await connectToDatabase();
  const ticket = await Ticket.findById(id);
  if(!ticket) notFound()



  // const searchParams = useSearchParams();
  // const status = searchParams.get('status');



  return (
    <>
      <PageHeader currentPage={'Payment status'} banner={"banner-1 banner-2"} />
      <Container className={"mt-4"}>
        {!ticket ? (
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
