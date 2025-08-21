import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'AI Processing', 'Workflow', 'Deployment', 'Pricing']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'News', 'Partners', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Support', 'Blog', 'Case Studies']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'Compliance']
    }
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@ucms.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">UCMS</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern digital platform for monitoring, analyzing, and optimizing utility usage and costs across buildings and facilities with AI-driven automation.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.text}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Icon size={16} className="mr-3 text-primary-400" />
                    <span className="text-sm">{info.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      whileHover={{ x: 3 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 UCMS. All rights reserved. Utility Cost Management System.
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;