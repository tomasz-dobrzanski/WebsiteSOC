import PptxGenJS from 'pptxgenjs';

export const exportToPowerPoint = () => {
  const pptx = new PptxGenJS();
  
  // Set presentation properties
  pptx.author = 'UCMS Team';
  pptx.company = 'UCMS - Utility Cost Management System';
  pptx.title = 'UCMS - Comprehensive Utility Management Platform';
  pptx.subject = 'AI-Powered Utility Cost Management System';

  // Define common styles
  const titleStyle = {
    fontSize: 32,
    bold: true,
    color: '1d4ed8',
    fontFace: 'Arial'
  };

  const subtitleStyle = {
    fontSize: 18,
    color: '374151',
    fontFace: 'Arial'
  };

  const bulletStyle = {
    fontSize: 14,
    color: '4b5563',
    fontFace: 'Arial',
    bullet: true
  };

  const headerStyle = {
    fontSize: 24,
    bold: true,
    color: '1f2937',
    fontFace: 'Arial'
  };

  // Slide 1: What is UCMS?
  const slide1 = pptx.addSlide();
  slide1.background = { fill: 'f8fafc' };
  
  slide1.addText('What is UCMS?', {
    x: 0.5, y: 0.5, w: 9, h: 1,
    ...titleStyle
  });

  slide1.addText('UCMS (Utility Cost Management System) is a modern digital platform for monitoring, analyzing, and optimizing utility usage and costs across buildings and facilities.', {
    x: 0.5, y: 1.5, w: 9, h: 1,
    ...subtitleStyle
  });

  slide1.addText('🔍 Purpose:', {
    x: 0.5, y: 2.5, w: 9, h: 0.5,
    ...headerStyle
  });

  slide1.addText([
    { text: '• Centralized management of electricity, heat, gas, and water', options: bulletStyle },
    { text: '• AI-driven automation of document handling', options: bulletStyle },
    { text: '• Data analytics for budget control and environmental goals', options: bulletStyle }
  ], {
    x: 0.5, y: 3, w: 9, h: 2
  });

  // Slide 2: Core Features Overview
  const slide2 = pptx.addSlide();
  slide2.background = { fill: 'f8fafc' };
  
  slide2.addText('Core Features Overview 🚀', {
    x: 0.5, y: 0.5, w: 9, h: 1,
    ...titleStyle
  });

  const features = [
    '📊 Dashboard - Visual stats on usage & costs by utility type',
    '🏢 Buildings Module - Metadata registry with auto-counting UAPs',
    '📍 Utility Access Points - Management of supply points',
    '⚡ Meters - Registry of measuring devices with full CRUD support',
    '📄 Invoices - Import, validation and parsing with AI',
    '📋 Contracts - Supplier agreements tied to specific UAPs',
    '🏪 Suppliers - Contact database with tax IDs and tariff rates',
    '💰 Budgets - Limits by org/building/UAP/meter with auto-alerts',
    '🚨 Alerts - Full lifecycle management',
    '📈 Reports - Usage, cost, trends with export capabilities',
    '⚙️ Settings & Templates - Invoice templates and integrations',
    '🔐 Authentication - Secure user login via Supabase Auth'
  ];

  slide2.addText(features.map(feature => ({ text: feature, options: { ...bulletStyle, fontSize: 12 } })), {
    x: 0.5, y: 1.5, w: 9, h: 5.5
  });

  // Slide 3: AI-powered Invoice Processing
  const slide3 = pptx.addSlide();
  slide3.background = { fill: 'f8fafc' };
  
  slide3.addText('AI-powered Invoice Processing 🤖', {
    x: 0.5, y: 0.5, w: 9, h: 1,
    ...titleStyle
  });

  slide3.addText('🧠 AI Document Recognition', {
    x: 0.5, y: 1.5, w: 9, h: 0.5,
    ...headerStyle
  });

  const aiFeatures = [
    '• Automatic extraction of data from utility invoices',
    '• No OCR needed – reads text-layer PDFs',
    '• Detects invoice number, total payable, utility usage',
    '• Extracts tariff codes and contract parameters',
    '• AI maps data to correct UAP and meter automatically',
    '• Learns new templates over time',
    '• Handles layout changes from suppliers without downtime'
  ];

  slide3.addText(aiFeatures.map(feature => ({ text: feature, options: bulletStyle })), {
    x: 0.5, y: 2, w: 9, h: 4
  });

  // Slide 4: Workflow with Smart Automation
  const slide4 = pptx.addSlide();
  slide4.background = { fill: 'f8fafc' };
  
  slide4.addText('Workflow with Smart Automation', {
    x: 0.5, y: 0.5, w: 9, h: 1,
    ...titleStyle
  });

  const workflowSteps = [
    '1. Data Acquisition - Secure login to supplier portals with daily auto-download',
    '2. AI Extraction - Semantic document classification and structured data extraction',
    '3. Data Distribution - Documents auto-routed to recipient emails based on UAP-mapping',
    '4. Reporting & Alerts - Real-time dashboards with budget thresholds and anomaly detection',
    '5. Archiving - Policy-based cleanup of old data and files'
  ];

  slide4.addText(workflowSteps.map(step => ({ text: step, options: { ...bulletStyle, fontSize: 16 } })), {
    x: 0.5, y: 1.5, w: 9, h: 4
  });

  // Slide 5: Deployment Options
  const slide5 = pptx.addSlide();
  slide5.background = { fill: 'f8fafc' };
  
  slide5.addText('Deployment Options', {
    x: 0.5, y: 0.5, w: 9, h: 1,
    ...titleStyle
  });

  slide5.addText('🔧 On-Premise', {
    x: 0.5, y: 1.5, w: 4, h: 0.5,
    ...headerStyle
  });

  slide5.addText([
    { text: '• Full control, internal hosting', options: bulletStyle },
    { text: '• Ideal for sensitive environments', options: bulletStyle }
  ], {
    x: 0.5, y: 2, w: 4, h: 1.5
  });

  slide5.addText('☁️ SaaS Model (recommended)', {
    x: 5, y: 1.5, w: 4.5, h: 0.5,
    ...headerStyle
  });

  slide5.addText([
    { text: '• Cloud-based access', options: bulletStyle },
    { text: '• Easy rollout, updates included', options: bulletStyle },
    { text: '• Scalable for all organization sizes', options: bulletStyle }
  ], {
    x: 5, y: 2, w: 4.5, h: 1.5
  });

  // Slide 6: Who is it for?
  const slide6 = pptx.addSlide();
  slide6.background = { fill: 'f8fafc' };
  
  slide6.addText('Who is it for?', {
    x: 0.5, y: 0.5, w: 9, h: 1,
    ...titleStyle
  });

  slide6.addText('🏢 Municipalities & Public Sector', {
    x: 0.5, y: 1.5, w: 4, h: 0.5,
    ...headerStyle
  });

  slide6.addText('Offices, schools, utilities, hospitals', {
    x: 0.5, y: 2, w: 4, h: 0.5,
    ...subtitleStyle
  });

  slide6.addText('🏭 Private Sector', {
    x: 5, y: 1.5, w: 4.5, h: 0.5,
    ...headerStyle
  });

  slide6.addText('Factories, logistics centers, real estate managers', {
    x: 5, y: 2, w: 4.5, h: 0.5,
    ...subtitleStyle
  });

  slide6.addText('📊 Use Cases', {
    x: 0.5, y: 3, w: 9, h: 0.5,
    ...headerStyle
  });

  const useCases = [
    '• Energy cost optimization',
    '• ESG/green reporting',
    '• Invoice verification',
    '• Cross-facility benchmarking',
    '• Streamlined procurement & audit readiness'
  ];

  slide6.addText(useCases.map(useCase => ({ text: useCase, options: bulletStyle })), {
    x: 0.5, y: 3.5, w: 9, h: 2.5
  });

  // Slide 7: Benefits at a Glance
  const slide7 = pptx.addSlide();
  slide7.background = { fill: 'f8fafc' };
  
  slide7.addText('Benefits at a Glance', {
    x: 0.5, y: 0.5, w: 9, h: 1,
    ...titleStyle
  });

  const benefits = [
    '✅ Unified energy data in one place',
    '✅ AI automation reduces manual work by 90%',
    '✅ Smart alerts improve responsiveness',
    '✅ Strategic energy cost control',
    '✅ Supports energy security and efficiency policies',
    '✅ Ready for scale, multi-language and multi-supplier'
  ];

  slide7.addText(benefits.map(benefit => ({ text: benefit, options: { ...bulletStyle, fontSize: 16 } })), {
    x: 0.5, y: 1.5, w: 9, h: 4
  });

  // Add statistics
  slide7.addText('📊 Measurable Impact:', {
    x: 0.5, y: 5.5, w: 9, h: 0.5,
    ...headerStyle
  });

  slide7.addText('90% Time Reduction • 40% Cost Savings • 99.9% Accuracy Rate • 24/7 Monitoring', {
    x: 0.5, y: 6, w: 9, h: 0.5,
    fontSize: 14,
    bold: true,
    color: '059669',
    fontFace: 'Arial'
  });

  // Save and download the presentation
  pptx.writeFile({ fileName: 'UCMS-Presentation.pptx' });
};