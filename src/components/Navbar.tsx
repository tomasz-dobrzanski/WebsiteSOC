import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap, FileDown, FileText } from 'lucide-react';
import { exportToPDF } from '../utils/pdfExport';
import { exportToPowerPoint } from '../utils/powerpointExport';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handlePDFExport = async () => {
    try {
      await exportToPDF();
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      alert('Wystąpił błąd podczas eksportu PDF. Spróbuj ponownie.');
    }
  };

  const handlePowerPointExport = async () => {
    try {
      await exportToPowerPoint();
    } catch (error) {
      console.error('Error exporting to PowerPoint:', error);
      alert('Wystąpił błąd podczas eksportu PowerPoint. Spróbuj ponownie.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'AI Processing', href: '#ai-processing' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Deployment', href: '#deployment' },
    { name: 'Benefits', href: '#benefits' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">UCMS</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <motion.button
              onClick={handlePDFExport}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown size={18} />
              <span>Export PDF</span>
            </motion.button>
            <motion.button
              onClick={handlePowerPointExport}
              className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              <span>Export PPT</span>
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handlePDFExport();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 text-accent-600 hover:text-accent-700 hover:bg-gray-50 rounded-md w-full"
              >
                <FileDown size={18} />
                <span>Export PDF</span>
              </button>
              <button
                onClick={() => {
                  handlePowerPointExport();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 text-accent-600 hover:text-accent-700 hover:bg-gray-50 rounded-md w-full"
              >
                <FileText size={18} />
                <span>Export PPT</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;