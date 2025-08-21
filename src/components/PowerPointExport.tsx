import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText, Download } from 'lucide-react';
import { exportToPDF } from '../utils/pdfExport';
import { exportToPowerPoint } from '../utils/powerpointExport';

const PowerPointExport: React.FC = () => {
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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <motion.button
        onClick={handlePDFExport}
        className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center space-x-2">
          <Download size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          <FileDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
        </div>
        <span className="font-semibold">Export PDF</span>
      </motion.button>
      
      <motion.button
        onClick={handlePowerPointExport}
        className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="flex items-center space-x-2">
          <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
        </div>
        <span className="font-semibold">Export PPT</span>
      </motion.button>
    </div>
  );
};

export default PowerPointExport;