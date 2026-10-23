import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "CERTIFICATES", link: "#certificates" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECT", link: "#project" },
    { name: "CONTACT", link: "#contact" },
  ];

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4 overflow-hidden">
      <nav className="flex items-center justify-center bg-linear-to-br from-cyan-200 to-blue-600 backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg font-sans">
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* LOGO */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-mono font-extrabold text-blue-600">
              FA<span className="text-gray-900">ISAL</span>
            </span>
          </a>
          {/* NAVIGATION */}
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
