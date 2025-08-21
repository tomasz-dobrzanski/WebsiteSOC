import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, FileText, Zap, Target, Cpu, Database } from 'lucide-react';

const AIProcessing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const capabilities = [
    {
      icon: FileText,
      title: 'Document Recognition',
      description: 'Automatic extraction from utility invoices without OCR - reads text-layer PDFs directly',
    },
    {
      icon: Target,
      title: 'Smart Data Extraction',
      description: 'Detects invoice number, total payable, utility usage (kWh conversion), tariff codes, and contract parameters',
    },
    {
      icon: Zap,
      title: 'Auto-Mapping',
      description: 'AI automatically maps extracted data to correct UAPs and meters with 99.9% accuracy',
    },
    {
      icon: Cpu,
      title: 'Learning System',
      description: 'Continuously learns new templates and adapts to layout changes from suppliers',
    }
  ];

  const processSteps = [
    { step: '01', title: 'Document Upload', desc: 'Secure invoice import' },
    { step: '02', title: 'AI Analysis', desc: 'Semantic classification' },
    { step: '03', title: 'Data Extraction', desc: 'Structured information' },
    { step: '04', title: 'Auto-Mapping', desc: 'Link to UAPs & meters' },
  ];

  return (
    <section id="ai-processing" className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Brain size={40} className="text-white" />
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Invoice Processing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary document processing that eliminates manual data entry and reduces processing time by 90%
          </p>
        </motion.div>

        {/* AI Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Processing Pipeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.step}
                  </motion.div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-secondary-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-primary-400 mb-2">90%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIProcessing;