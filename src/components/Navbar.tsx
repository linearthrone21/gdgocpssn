import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">GDGoC</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-500"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
              <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;