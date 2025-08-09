import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const navRef = useRef<HTMLDivElement>(null);

  const openMenuHandler = (menu: string) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="hidden md:flex items-center space-x-1 relative">
      {/* INICIO */}
      <div className="flex items-center">
        <Button
          label="Inicio"
          navbar
          onClick={() => {
            setOpenMenu(null);
            navigate("/");
          }}
        />
      </div>

      {/* CONÓCEME */}
      <div className="flex items-center">
        <Button
          label="Conóceme"
          navbar
          onClick={() => {
            setOpenMenu(null);
            navigate("/about");
          }}
        />
      </div>

      {/* CERTIFICADOS */}
      <div className="flex items-center">
        <Button
          label="Certificados"
          navbar
          onClick={() => {
            setOpenMenu(null);
            navigate("/certificate");
          }}
        />
      </div>

      {/* PORTAFOLIO */}
      <div className="relative flex items-center">
        <Button label="Portafolio" navbar onClick={() => openMenuHandler("portafolio")} />
        {openMenu === "portafolio" && (
          <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow p-2 space-y-1 z-40">
            <Link
              to="/portafolio/system"
              onClick={() => setOpenMenu(null)}
              className="block text-gray-700 hover:text-blue-600 text-sm"
            >
              System
            </Link>
            <Link
              to="/portafolio/electronican"
              onClick={() => setOpenMenu(null)}
              className="block text-gray-700 hover:text-blue-600 text-sm"
            >
              Electronican
            </Link>
          </div>
        )}
      </div>

      {/* SKILLS */}
      <div className="relative flex items-center">
        <Button label="Habilidades" navbar onClick={() => openMenuHandler("skills")} />
        {openMenu === "skills" && (
          <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow p-2 space-y-1 z-40">
            <Link
              to="/skill/system"
              className="block text-gray-700 hover:text-blue-600 text-sm"
              onClick={() => setOpenMenu(null)}
            >
              System
            </Link>
            <Link
              to="/skill/electronican"
              className="block text-gray-700 hover:text-blue-600 text-sm"
              onClick={() => setOpenMenu(null)}
            >
              Electronican
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
