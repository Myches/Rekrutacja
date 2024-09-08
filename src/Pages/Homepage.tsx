import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full mt-12">
      <div className="flex justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="w-1/2 space-y-8">
          <h1 className="text-6xl leading-tight font-bold">
            Sprzedajemy samochody z Europy
          </h1>
          <p className="text-xl">
            Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-700 font-medium px-6 py-3 text-white rounded-lg">
              Zobacz zdjęcia
            </button>
            <button className="bg-gray-200 font-medium px-6 py-3 text-black rounded-lg">
              Zadzwoń do nas
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className=" absolute top-[45%] right-0 ">
          <img
            src="./images/Hero.png"
            alt="Hero"
            
          />
        </div>
      </div>

      <div className="mt-[300px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-blue-700 text-2xl">Prezentacja firmy</p>
        <h2 className="text-4xl font-bold mt-2">Zobacz naszą Galerię zdjęć</h2>
        <div className="flex space-x-8 mt-6">
          <button className="text-blue-700 font-medium">Samochody osobowe</button>
          <button className="text-gray-700">Samochody dostawcze</button>
        </div>
      </div>

      <div className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          <div className="px-2">
            <img src="./images/Images.png" alt="Car 1" className="w-full h-auto" />
          </div>
          <div className="px-2">
            <img src="./images/Images (1).png" alt="Car 2" className="w-full h-auto" />
          </div>
          <div className="px-2">
            <img src="./images/Images (2).png" alt="Car 3" className="w-full h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Homepage;