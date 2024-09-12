import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full relative px-8">
      <div className="w-full py-4 px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <img src="./images/Group 255 (1).png" alt="logo" className="h-auto w-auto" />
        </div>
        
        <div className="hidden md:block">
          <ul className="flex space-x-6 text-base">
            <li className="hover:text-blue-700 cursor-pointer">Galeria zdjęć</li>
            <li className="hover:text-blue-700 cursor-pointer">FAQ</li>
          </ul>
        </div>
        
        <div className="hidden md:block">
          <button className="bg-blue-700 font-medium h-12 w-40 text-white rounded-lg hover:bg-blue-800 z-40 transition-colors">
            Zadzwoń do nas
          </button>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
          <ul className="space-y-4 text-[16px] text-csBlack leading-[24px] font-roboto-flex">
            <li className="hover:text-blue-700 cursor-pointer">Galeria zdjęć</li>
            <li className="hover:text-blue-700 cursor-pointer">FAQ</li>
            <li>
              <button className="bg-csBlue font-medium h-12 w-full text-white text-[15px]  font-roboto-flex rounded-lg hover:bg-blue-500 transition-colors">
                Zadzwoń do nas
              </button>
            </li>
          </ul>
        </div>
      )}
      
      <img
        src="./images/Subtract.png"
        alt="background"
        className="hidden lg:block absolute top-0 right-[40px] h-screen w-auto object-cover "
      />
    </div>
  );
}

export default Navbar;