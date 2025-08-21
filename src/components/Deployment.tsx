import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Cloud, Shield, Zap, Users, Building } from 'lucide-react';

const Deployment: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const deploymentOptions = [
    {
      icon: Server,
      title: 'On-Premise',
      subtitle: 'Full Control & Security',
      description: 'Deploy UCMS on your own infrastructure for maximum security and control',
      features: ['Full data control', 'Custom security policies', 'Internal hosting', 'Compliance ready'],
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      icon: Cloud,
      title: 'SaaS Model',
      subtitle: 'Cloud-Based Solution',
      description: 'Cloud-based access with easy rollout, automatic updates, and global scalability',
      features: ['Instant deployment', 'Auto updates', 'Global availability', 'Elastic scaling'],
      gradient: 'from-primary-500 to-secondary-500'
    }
  ];

  const useCases = [
    {
      icon: Building,
      title: 'Municipalities & Public Sector',
      items: ['Government offices', 'Schools & universities', 'Public utilities', 'Healthcare facilities'],
      color: 'text-primary-600'
    },
    {
      icon: Users,
      title: 'Private Sector',
      items: ['Manufacturing plants', 'Logistics centers', 'Real estate portfolios', 'Corporate facilities'],
      color: 'text-secondary-600'
    }
  ];

  const benefits = [
    'Energy cost optimization',
    'ESG/green reporting',
    'Invoice verification',
    'Cross-facility benchmarking',
    'Streamlined procurement',
    'Audit readiness'
  ];

  return (
    <section id="deployment" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Deployment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the deployment model that best fits your organization's requirements and security policies
          </p>
        </motion.div>

        {/* Deployment Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {deploymentOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gray-50"
              >

                <div className="text-center mb-6">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${option.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={36} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-lg font-semibold text-gray-600 mb-3">{option.subtitle}</p>
                  <p className="text-gray-600">{option.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${option.gradient} mr-3`}></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Who is it for */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Who is it for?</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <Icon size={32} className={useCase.color} />
                    <h4 className="text-xl font-bold text-gray-900 ml-3">{useCase.title}</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + itemIndex * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full ${useCase.color.replace('text-', 'bg-')} mr-2`}></div>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Use Cases & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Key Use Cases</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-sm md:text-base font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Deployment;