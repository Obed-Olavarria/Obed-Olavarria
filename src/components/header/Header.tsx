// src/components/header/Header.tsx
import Navbar from "../../ui/Navbar";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">ObedDev</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
