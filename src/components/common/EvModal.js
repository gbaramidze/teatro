import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const EvModal = ({ setModalIsOpen, url, type, currentId, images }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(currentId - 1);

    const nextImage = () => {
        if (type === "image") {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (type === "image") {
            setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
        }
    };

    // Close modal event
    const closeEvModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="ev-modal">
            <div className="ev-modal-container">
                <button className="ev-close-btn" onClick={closeEvModal}>
                    <i><IoMdClose /></i>
                </button>
                {
                    type === "video" ?
                        <div className="">
                            <iframe className="iframe"  src={url} controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen" />
                        </div> :
                        <div className="ev-modal-img">
                            <Image src={images[currentImageIndex]?.thumb} alt={`Image ${currentImageIndex + 1}`} width={"auto"} height={"auto"} />
                            <p className="ev-counter">{currentImageIndex} of {images?.length}</p>
                        </div>
                }

            </div>
            {
                type === "image" && <div className="ev-action-btn">
                    <button className="ev-prev-button " onClick={prevImage}>
                        <AiFillCaretLeft />
                    </button>
                    <button className="ev-next-button" onClick={nextImage}>
                        <AiFillCaretRight />
                    </button>
                </div>
            }
        </div>
    );
};

export default EvModal;