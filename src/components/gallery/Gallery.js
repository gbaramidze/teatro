"use client"
import { useContext } from 'react';
import { cursor_context } from '@/Context/CursorProvider';
import GallerySwiper from '@/components/common/GallerySwiper';
import { galleryData } from '@/lib/galleryData';



const Gallery = ({ styleNum }) => {
    const { galleryRef } = useContext(cursor_context)

    // styleNum 0 from home page 1 
    // styleNum 1 from home page 2
    // styleNum 2 from home page 3, home page 4 and home page 6
    // styleNum 3 from home page 5
    // styleNum 4 from home page 7


    // ----- Change classname define in home page
    let parentClass;
    switch (styleNum) {
        case 0:
            parentClass = "pt-70 pt-lg-100 pt-xxl-120 pb-70 pb-lg-100 pb-xxl-120"
            break;
        case 1:
            parentClass = 'gallery-section gallery-1 pt-70 pt-lg-100 pt-xxl-120';
            break;
        case 2:
            parentClass = "py-50 py-lg-100 py-xxl-120";
            break;
        case 3:
            parentClass = "gallery-section gallery-1 py-50 py-lg-100 py-xxl-120"
            break;
        case 4:
            parentClass = "pt-70 pb-50 py-lg-100 py-xxl-120"
            break
        default:
            break;
    }

    // ----- Change classname define in home page

    return (

        <div ref={galleryRef} className={`gallery-section gallery-1 ${parentClass} `}>

            <GallerySwiper data={galleryData.slice(0, 8)} galleryData={galleryData} galleryClass={'swiper_gallery'} />
            <GallerySwiper data={galleryData.slice(6, -1)} galleryData={galleryData} galleryClass={'swiper_gallery2'} />

        </div>

    )
}

export default Gallery