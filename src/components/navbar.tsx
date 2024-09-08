import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Bars3Icon } from '@heroicons/react/24/outline'; // Importing the hamburger icon from Heroicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define animation variants
  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: -20, transition: { duration: 0.5 } },
  };

  return (
    <header className="fixed w-full z-50 bg-zinc-800 border-zinc-200 border-b shadow-lg">
      <nav className="max-w-2xl lg:max-w-7xl flex items-center justify-between mx-auto py-4 px-4 lg:px-8">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ml-2 lg:ml-0.5 xl:ml-0">
          <img className="h-16 lg:h-20" src={logo} alt="Logo" />
        </a>
        <div className="flex items-center space-x-4">
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="flex space-x-4"
          >
            <a href="#home" className="text-white hover:text-gray-400 transition">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-400 transition">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-400 transition">
              Services
            </a>
            <a href="#portfolio" className="text-white hover:text-gray-400 transition">
              Portfolio
            </a>
            <a href="#contact-us" className="text-white hover:text-gray-400 transition">
              Contact Us
            </a>
          </motion.div>
          <Button
            variant="outline"
            size="lg"
            className="ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
