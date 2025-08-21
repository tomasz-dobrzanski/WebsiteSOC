import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Building, 
  MapPin, 
  Gauge, 
  FileText, 
  FileCheck, 
  Users, 
  DollarSign,
  Bell,
  TrendingUp,
  Settings,
  Shield
} from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: BarChart3,
      title: 'Dashboard',
      description: 'Visual stats on usage & costs by utility type with monthly trends and budget alerts',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Building,
      title: 'Buildings Module',
      description: 'Metadata registry with size, technical condition, year built, and auto-counting linked UAPs',
      color: 'secondary',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: MapPin,
      title: 'Utility Access Points',
      description: 'Management of supply points for electricity, gas, water, and heat with status tracking',
      color: 'accent',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: Gauge,
      title: 'Meters',
      description: 'Registry of measuring devices with specs, readout history, and full CRUD support',
      color: 'primary',
      gradient: 'from-primary-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Invoices',
      description: 'Import, validation, parsing with advanced item-level breakdowns linked to meters & UAPs',
      color: 'secondary',
      gradient: 'from-secondary-500 to-teal-600'
    },
    {
      icon: FileCheck,
      title: 'Contracts',
      description: 'Supplier agreements management with durations, tariffs tied to specific UAPs',
      color: 'accent',
      gradient: 'from-accent-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Suppliers',
      description: 'Contact database with tax IDs, tariff rates, and comprehensive supplier information',
      color: 'primary',
      gradient: 'from-primary-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Budgets',
      description: 'Set limits by organization, building, UAP, or meter with auto-alerts for thresholds',
      color: 'secondary',
      gradient: 'from-secondary-500 to-emerald-600'
    },
    {
      icon: Bell,
      title: 'Alerts',
      description: 'Full lifecycle management: create → notify → resolve/delete with smart notifications',
      color: 'accent',
      gradient: 'from-accent-500 to-yellow-600'
    },
    {
      icon: TrendingUp,
      title: 'Reports',
      description: 'Usage, cost, trends, and comparisons with export capabilities to CSV/PDF formats',
      color: 'primary',
      gradient: 'from-primary-500 to-indigo-600'
    },
    {
      icon: Settings,
      title: 'Settings & Templates',
      description: 'Invoice templates, integrations management, and comprehensive security panel',
      color: 'secondary',
      gradient: 'from-secondary-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Authentication',
      description: 'Secure user login and session management powered by Supabase Auth',
      color: 'accent',
      gradient: 'from-accent-500 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Features Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive utility management system with advanced features for monitoring, analyzing, and optimizing energy costs across all your facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;