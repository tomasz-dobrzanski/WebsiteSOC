import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Brain, Route, BarChart3, Archive, Shield } from 'lucide-react';

const Workflow: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workflowSteps = [
    {
      icon: Download,
      title: 'Data Acquisition',
      description: 'Secure login to supplier portals (eBOK) with daily auto-download of invoices and related documents',
      color: 'from-blue-500 to-blue-600',
      details: ['Automated portal access', 'Daily batch downloads', 'Secure data transfer']
    },
    {
      icon: Brain,
      title: 'AI Extraction',
      description: 'Semantic document classification and structured data extraction with enriched database population',
      color: 'from-purple-500 to-purple-600',
      details: ['Document classification', 'Data extraction', 'Database enrichment']
    },
    {
      icon: Route,
      title: 'Data Distribution',
      description: 'Documents auto-routed to recipient emails based on UAP-mapping with delivery failure alerts',
      color: 'from-green-500 to-green-600',
      details: ['Smart routing', 'Email distribution', 'Failure alerts']
    },
    {
      icon: BarChart3,
      title: 'Reporting & Alerts',
      description: 'Real-time dashboards with budget thresholds and intelligent anomaly detection systems',
      color: 'from-orange-500 to-orange-600',
      details: ['Real-time monitoring', 'Budget alerts', 'Anomaly detection']
    },
    {
      icon: Archive,
      title: 'Archiving',
      description: 'Policy-based cleanup of old data and files with intelligent retention management',
      color: 'from-teal-500 to-teal-600',
      details: ['Automated cleanup', 'Policy compliance', 'Data retention']
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield size={48} className="text-primary-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Smart Automation Workflow
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end automation that transforms how you handle utility data processing and management
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Central Flow Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-secondary-200 to-accent-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8 space-y-8 lg:space-y-0`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3`}></div>
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Central Circle (Desktop) */}
                  <div className="hidden lg:flex w-16 h-16 bg-white border-2 border-gray-200 rounded-full items-center justify-center shadow-lg z-10">
                    <span className="text-lg font-bold text-gray-700">{index + 1}</span>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="lg:w-1/2 flex justify-center">
                    <motion.div
                      className="w-48 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-10`}></div>
                      <Icon size={40} className={`text-gray-400 relative z-10`} />
                      
                      {/* Animated dots */}
                      <div className="absolute top-4 right-4">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mb-1`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;