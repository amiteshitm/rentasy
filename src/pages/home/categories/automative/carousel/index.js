import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
// import { baseUrl } from "./config";

const photos = [
  {
    id: 1,
    name: "photo1",
    url:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYSUyMGhkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "photo2",
    url:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHNvZmElMjBoZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "photo3",
    url:
      "https://images.unsplash.com/photo-1601086386762-0620518df7f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c29mYXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "photo4",
    url:
      "https://images.unsplash.com/photo-1516919583355-b065d26684d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const Carousel = () => {
  const settings = {
    // customPaging: function(i) {
    //   return (
    //     // <a>
    //     //   <img src={`${photo.urlrl}/abstract0${i + 1}.jpg`} />
    //     // </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.id}>
              <img width="100%" height="100vh" src={photo.url} alt="img" />
              <div>
            {/* <img src={photo.url} /> */}
          </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default Carousel;
