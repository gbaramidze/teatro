
import NavbarOne from "@/components/common/navbars/NavbarOne";
import FooterOne from "@/components/common/footers/FooterOne";
import React from "react";
import BannerEight from "@/components/heroes/BannerEight";
import Stories from "@/components/Stories";
import LineupOne from "@/components/lineups/LineupOne";
import Gallery from "@/components/gallery/Gallery";
import Cta from "@/components/cta/Cta";
import SubscriptionOne from "@/components/subscriptions/SubscriptionOne";
import connectToDatabase from "@/lib/mongodb";
import Event from "@/models/Event";
import BlogSeven from "@/components/blogs/BlogSeven";
import HighlightThree from "@/components/highlights/HighlightThree"; // Adjust the path as necessary

const Page = async () => {
      await connectToDatabase();
      const events = await Event.find().lean();
      return (
        <>
              <NavbarOne />
              <BannerEight />
              <Stories />
              <BlogSeven events={events.map(event => ({
                ...event,
                  _id: event._id.toString(),
                seatingOverrides: event.seatingOverrides ? event.seatingOverrides.map(so => ({
                  ...so,
                  tableId: so.tableId.toString(),
                  _id: so._id.toString()
                })) : [],
              }))}/>

              <LineupOne />

              <HighlightThree styleNum={2} />
              {/*<TicketOne styleNum={0} />*/}
              <Gallery styleNum={0}/>
              <Cta styleNum={0} />
              <SubscriptionOne styleNum={0} />
              <FooterOne />
        </>
      )
}
export default Page
