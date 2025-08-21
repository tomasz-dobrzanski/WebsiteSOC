import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Zap, Shield, TrendingUp, Globe, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainBenefits = [
    {
      icon: CheckCircle,
      title: 'Unified Energy Data',
      description: 'Centralize all your utility information in one comprehensive platform',
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Reduce manual work by 90% with intelligent document processing',
      color: 'text-yellow-600',
      bg: 'bg-yellow-100'
    },
    {
      icon: Shield,
      title: 'Smart Alerts',
      description: 'Improve responsiveness with proactive notifications and monitoring',
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      icon: TrendingUp,
      title: 'Cost Control',
      description: 'Strategic energy cost management with advanced analytics',
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      icon: Globe,
      title: 'Energy Security',
      description: 'Support energy efficiency policies and sustainability goals',
      color: 'text-teal-600',
      bg: 'bg-teal-100'
    },
    {
      icon: Users,
      title: 'Ready for Scale',
      description: 'Multi-language, multi-supplier support for global operations',
      color: 'text-red-600',
      bg: 'bg-red-100'
    }
  ];

  const stats = [
    { value: '90%', label: 'Time Reduction', sublabel: 'in data processing' },
    { value: '40%', label: 'Cost Savings', sublabel: 'through optimization' },
    { value: '99.9%', label: 'Accuracy Rate', sublabel: 'in data extraction' },
    { value: '24/7', label: 'Monitoring', sublabel: 'continuous oversight' }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Benefits at a Glance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your utility management with comprehensive features designed for modern energy optimization
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${benefit.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className={benefit.color} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  ✅ {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Measurable Impact
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Transform Your Utility Management
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join organizations worldwide who trust UCMS to optimize their energy costs and streamline their utility operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;