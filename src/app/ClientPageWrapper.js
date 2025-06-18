"use client";
import {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const ClientPageWrapper = ({children}) => {
  useEffect(() => {
    Aos.init()
    document.body.classList.add("eventiva-landing")
  }, [])
  return <></>
}
export default ClientPageWrapper;