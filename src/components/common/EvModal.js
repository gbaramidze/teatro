import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const EvModal = ({setModalIsOpen, url, type, currentId, images}) => {
  if (type === "video") {
    return (
      <div className="ev-modal">
        <div className="ev-modal-container">
          <button className="ev-close-btn" onClick={() => setModalIsOpen(false)}>
            ✕
          </button>
          <div className="">
            <iframe
              className="iframe"
              src={url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  // Transform image data to Lightbox format
  const slides = images.map(img => ({
    src: img?.src || img?.thumb, // assumes 'thumb' or 'src' available
  }));

  return (
    <Lightbox
      open={true}
      close={() => setModalIsOpen(false)}
      slides={slides}
      index={currentId}
      carousel={{finite: false}}
    />
  );
};

export default EvModal;
