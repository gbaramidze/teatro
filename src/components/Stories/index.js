"use client";
import React, { useState } from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import {Modal} from "react-bootstrap";
import Image from "next/image";
import award_img_1 from "@/assets/images/home-1/maruv.jpeg";
import VideoIcon from "@/components/common/icons/VideoIcon";
import RoundText from "@/components/common/RoundText";

const Story = () => {
  const [open, setOpen] = useState(false);
  const [stories] = useState([
    {
      type: "video",
      url: '/stories/1.mp4',
      duration: 35000
    },
    {
      type: "video",
      url: '/stories/2.mp4',
      duration: 45000
    },
    {
      type: "video",
      url: '/stories/3.mp4',
      duration: 44000
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex overflow-x-auto gap-4 pb-2">
        {
          open ? (
            <Modal fullscreen={"sm-down"} show={open} onHide={() => setOpen(false)} animation={false} scrollable={true} >
              <Modal.Body style={{padding: 0, overflow: 'hidden'}}>
                <Stories
                  width="100%"
                  height="calc(100vh)" // Adjust height to fit the viewport minus the header
                  stories={stories}
                  onAllStoriesEnd={() => setOpen(false)}
                />
              </Modal.Body>
            </Modal>
          ) : <div>
            <div style={{position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', zIndex: 50}} onClick={() => setOpen(true)}>
              <div  className="video-popup video-popup-left position-absolute video-popup-link">
                <div className="circle-wrapper">
                  <div className="circle-bg"></div>
                  <span className="inner-circle video-icon">
                                        <span className="">
                                            <VideoIcon height={"30"} width={"30"} />
                                        </span>
                                    </span>
                  {/*  */}
                  <div className="rotate-text3 text-uppercase">
                    <RoundText text={"Check out our stories"} style={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Story;