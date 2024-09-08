

function Navbar() {
  return (
    <div className="w-full h-[79px] relative">
      <div className="w-full h-full flex justify-around items-center">
        <div>
          <img src="./images/Group 255 (1).png" alt="logo" className="h-auto w-auto" />
        </div>
        <div>
          <ul className="flex space-x-[24px] text-[16px] leading-[24px]">
            <li>Galeria zdjęć</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <button className="bg-blue-700 font-medium h-[47px] w-[158px] leading-[23px] text-[15px] text-white border rounded-lg">
            Zadzwoń do nas
          </button>
        </div>
      </div>
      <img 
        src="./images/Subtract.png" 
        alt="background" 
        className="absolute top-0 right-[130px] h-screen w-auto object-cover z-[-1]"
      />
    </div>
  );
}

export default Navbar;