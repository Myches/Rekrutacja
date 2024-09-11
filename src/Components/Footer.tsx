
function Footer() {
  return (
    <div className="bg-csBlack py-8 md:py-12 lg:py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          <div className="flex flex-col text-white gap-y-4 md:gap-y-6 lg:gap-y-8 max-w-lg">
            <p className="text-xl md:text-2xl lg:text-[25px] leading-tight font-bebas">Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</p>
            <p className="text-sm md:text-base lg:text-[14px] leading-relaxed font-roboto-condensed">Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</p>
            <button className="text-sm md:text-base lg:text-[14px] leading-relaxed font-roboto-condensed text-white hover:text-blue-700 transition-colors self-start ">
            <div className="flex jusify-center items-center space-x-2"> <p>Rozwiń </p><img src="./images/-_.png" alt="logo" className="w-3 h-3 "  /></div> 
            <div className="w-full h-px bg-gray-300 mt-2"></div>
            </button>
          </div>

          <div className="flex flex-col text-white gap-y-4 md:gap-y-6 lg:gap-y-8 max-w-lg">
            <p className="text-xl md:text-2xl lg:text-[25px] leading-tight font-bebas">Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</p>
            <p className="text-sm md:text-base lg:text-[14px] leading-relaxed font-roboto-condensed">Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</p>
            <button className="text-sm md:text-base lg:text-[14px] leading-relaxed font-roboto-condensed  text-white hover:text-blue-700 transition-colors self-start ">
            <div className="flex jusify-center items-center space-x-2"> <p>Rozwiń </p><img src="./images/-_.png" alt="logo" className="w-3 h-3 "  /></div> 
            <div className="w-full h-px bg-gray-300 mt-2"></div>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-white mt-8 lg:mt-12 pt-4 border-t border-white font-roboto-condensed">
          <p className="font-semibold text-base md:text-[16px] leading-relaxed mb-2 sm:mb-0">Cars Spot</p>
          <p className="text-base md:text-[16px] leading-relaxed">Polityka prywatności</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;