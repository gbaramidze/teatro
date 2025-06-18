"use client"
import {MiniMap, TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import {Button} from "react-bootstrap";
import SectionName from "@/components/common/sectionTitle/SectionName";
import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import EventList from "@/components/common/Events/EventList";
import React from "react";


const floorPlanImage = '/map/plan.png'; // Adjust the path to your image


const FloorPlan = () => {
  const floorPlanWidth = 648;
  const floorPlanHeight = 1536;
  const minScale = 0.3;
  const maxScale = 3;

  // Replace this URL with your restaurant floor plan image

  return (

    <section className="blog-section blog-vertical pb-50 pb-lg-80 mt-100 d-none d-md-block">
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between">
          <div className="col-lg-4">
            <div className="section-title section-title-style-2" >
              <SectionName
                name={"Map"}
                className={""}
              />
              <SectionTitle
                title={"Floor"}
                subTitle={"Schemas"}
              />
            </div>
            {/* <!-- section-title --> */}
          </div>
        </div>
        {/* <!-- row --> */}
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-transparent">
          <div className="container position-relative" style={{ maxWidth: '900px' }}>
            <div className="bg-transparent rounded-lg overflow-hidden" style={{ width: '100%', height: '700px' }}>
              <TransformWrapper
                initialScale={1}
                minScale={minScale}
                maxScale={maxScale}
                limitToBounds={true}
                centerOnInit={true}
                panning={{
                  velocityDisabled: true,
                }}
                pinch={{ step: 0.05 }}
                wheel={{ step: 0.1 }}
              >

                {({ zoomIn, zoomOut }) => (
                  <>
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2" style={{display: "flex", flexDirection: 'column', width: 60, position: 'absolute', zIndex: 1,}}>
                      <Button
                        style={{borderRadius: '50%', width: '53px', height: '53px', background: 'rgba(255,255,255,0.76)', border: 0, color: '#000', padding: 0}}
                        onClick={() => zoomIn(0.2)}
                        variant={"outline-primary"}
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => zoomOut(0.2)}
                        style={{borderRadius: '50%', width: '53px', height: '53px', background: 'rgba(255,255,255,0.76)', border: 0, color: '#000', padding: 0}}
                      >
                        −
                      </Button>
                    </div>

                    {/* Minimap positioned top-right outside the main container */}
                    <div className="position-absolute top-0 end-0 z-10" style={{ transform: 'translate(100%, 0)', marginTop: '10px', marginRight: '10px' }}>
                      <div className="w-[150px] h-[100px] bg-white border border-gray-300 rounded overflow-hidden d-none d-md-block">
                        <MiniMap width={150} height={300}>
                          <img
                            src={floorPlanImage}
                            alt="Minimap"
                            width={floorPlanWidth}
                            height={floorPlanHeight}
                            style={{ objectFit: 'contain' }}
                          />
                        </MiniMap>
                      </div>
                    </div>

                    <TransformComponent
                      wrapperStyle={{
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                      }}
                      contentStyle={{
                        width: `${floorPlanWidth}px`,
                        height: `${floorPlanHeight}px`,
                      }}
                    >
                      <img
                        src={floorPlanImage}
                        alt="Restaurant Floor Plan"
                        width={floorPlanWidth}
                        height={floorPlanHeight}
                        style={{ objectFit: 'contain', cursor: 'grab' }}
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>
        </div>
        {/* <!-- swiper --> */}
      </div>
      {/* <!-- blog-content-wrapper --> */}
    </section >

  );
};



export default FloorPlan