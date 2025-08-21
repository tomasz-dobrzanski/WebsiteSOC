import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { exportToPowerPoint } from '../utils/powerpointExport';

const PowerPointExport: React.FC = () => {
  const handleExport = () => {
    try {
      exportToPowerPoint();
    } catch (error) {
      console.error('Error exporting to PowerPoint:', error);
      alert('Wystąpił błąd podczas eksportu prezentacji. Spróbuj ponownie.');
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.button
        onClick={handleExport}
        className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center space-x-2">
          <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
        </div>
        <span className="font-semibold">Pobierz PowerPoint</span>
      </motion.button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Eksportuj prezentację do PowerPoint
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default PowerPointExport;