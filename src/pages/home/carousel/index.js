import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const photos = [
  { id: 1, name: "photo1", url: "/images/renteasyimage.png" },
  {
    id: 2,
    name: "photo2",
    url:
      "https://images.unsplash.com/photo-1592923867318-2016d04942d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80",
  },
  {
    id: 3,
    name: "photo3",
    url:
      "https://images.unsplash.com/photo-1609347496865-274632d84cd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=655&q=80",
  },
  {
    id: 4,
    name: "photo4",
    url:
      "https://images.unsplash.com/photo-1590373717962-014ba271c061?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  return (
    <>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.id}>
              <img width="100%" height="400vh" src={photo.url} alt="img" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default Carousel;
