import Link from 'next/link'
import {headers} from 'next/headers'
import React from "react";
import NavbarOne from "@/components/common/navbars/NavbarOne";
import FooterOne from "@/components/common/footers/FooterOne";
import PageHeader from "@/components/common/PageHeader";
import {Container} from "react-bootstrap";

const NotFoundAnimation = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <dotlottie-player
        src="https://lottie.host/abbbf242-e4a1-4c02-b372-d814eae52373/dFParN05vK.lottie"
        background="#04000A"
        speed="1"
        style={{width: "180px", height: "180px"}}
        direction="1"
        mode="normal"
        loop
        autoplay>
      </dotlottie-player>
      <script
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
        type="module"
      ></script>
    </div>
  )
}

export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  return (
    <>
      <NavbarOne/>
      <PageHeader currentPage={'Not Found'} banner={"banner-1 banner-2"}/>
      <Container>
        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold text-red-600">❌ Page Not Found</h1>
          <p className="mt-4 text-lg">
            The page you are looking for does not exist or has been moved.
          </p>
          <p>
            Go to <Link href="/">home</Link> page
          </p>
        </div>
      </Container>

      <FooterOne/>
    </>
  )
}