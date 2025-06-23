"use client"
import {useContext, useEffect, useState} from 'react';
import {cursor_context} from '@/Context/CursorProvider';
import GallerySwiper from '@/components/common/GallerySwiper';
import useSWR from "swr";


const Gallery = ({styleNum}) => {
  const [images, setImages] = useState([])
  const {data} = useSWR('/api/s3Images/20.06.2025', (url) => fetch(url).then(res => res.json()));
  const {galleryRef} = useContext(cursor_context)

  useEffect(() => {
    if (data) {
      setImages(data.map((item, index) => ({
        id: index,
        link: item,
        thumb: item,
        type: item.type || 'image',
        width: 500,
        height: 300
      })))
    }
  }, [data]);


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

  const first50Percent = images.slice(0, images.length / 2);
  const second50Percent = images.slice(images.length / 2, -1);

  return (

    <div ref={galleryRef} className={`gallery-section gallery-1 ${parentClass} `}>

      <GallerySwiper data={first50Percent} galleryData={images} galleryClass={'swiper_gallery'}/>
      <GallerySwiper data={second50Percent} galleryData={images} galleryClass={'swiper_gallery2'}/>

    </div>

  )
}

export default Gallery