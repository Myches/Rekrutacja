
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
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="w-full mt-8 md:mt-12 ">
      <div className="flex flex-col lg:flex-row justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="w-full lg:w-[53%] space-y-6 md:space-y-8 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-[76px] lg:leading-[84px] leading-tight text-csBlack  font-bebas">
            Sprzedajemy samochody z Europy
          </h1>
          <p className="text-lg lg:text-[16px] text-csBlack  w-[45%] md:text-xl font-roboto-condensed">
            Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-csBlue hover:bg-blue-500 font-medium px-6 py-3 text-white  text-[15px] font-roboto-flex rounded-lg w-full sm:w-auto">
              Zobacz zdjęcia
            </button>
            <button className="text-csBlue hover:bg-gray-200  font-medium px-6 py-3 text-black text-[15px] font-roboto-flex border border-csBlue rounded-lg w-full sm:w-auto">
              Zadzwoń do nas
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="w-full lg:w-[70%]  lg:absolute lg:top-[65%] lg:right-0 ">
          <img
            src="./images/Hero.png"
            alt="Hero"
            className="w-full h-auto object-cover "
          />
            
        </div>
      
      </div>

      <div className="mt-16 lg:mt-[500px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-csBlue lg:text-[22px] lg:leading-[32px]text-xl md:text-2xl font-roboto-condensed">Prezentacja firmy</p>
        <h2 className="text-3xl lg:text-[40px] text-cs md:text-4xl font-bold mt-2 font-bebas">Zobacz naszą Galerię zdjęć</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mt-6 ">
         <div> <p className="text-csBlue font-medium font-roboto-flex text-[15px] ">Samochody osobowe</p>
         <div className="w-full h-px bg-csBlue "></div></div>
          <p className="text-black font-roboto-flex  text-[15px]">Samochody dostawcze</p>
        </div>
      </div>

      <div className="mt-8 md:mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          <div className="px-2">
            <img src="./images/Images.png" alt="Car 1" className="w-full h-auto" />
          </div>
          <div className="px-2">
            <img src="./images/Images (1).png" alt="Car 2" className="w-full h-auto" />
          </div>
          <div className="px-2">
            <img src="./images/Images (2).png " alt="Car 3" className="w-full h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Homepage;