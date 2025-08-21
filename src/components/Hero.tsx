import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart3, Zap, Brain, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Energy Savings', value: '40%' },
    { label: 'Processing Speed', value: '10x' },
    { label: 'Accuracy Rate', value: '99.9%' },
    { label: 'Time Saved', value: '85%' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                UCMS
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-4 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Utility Cost Management System
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A modern digital platform for monitoring, analyzing, and optimizing utility usage and costs across buildings and facilities with AI-driven automation.
            </motion.p>
          </motion.div>
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern building with energy management systems"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="text-primary-600" size={24} />
                    <span className="text-gray-800 font-semibold">Smart Building Management</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features Icons */}
        <motion.div 
          className="flex justify-center items-center space-x-12 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-2 mx-auto">
              <BarChart3 size={28} className="text-primary-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Analytics</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-2 mx-auto">
              <Brain size={28} className="text-secondary-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">AI Powered</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-2 mx-auto">
              <Zap size={28} className="text-accent-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Automated</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-primary-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;