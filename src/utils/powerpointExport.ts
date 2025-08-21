import PptxGenJS from 'pptxgenjs';
import html2canvas from 'html2canvas';

export const exportToPowerPoint = async () => {
  try {
    // Wait for all animations and images to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Scroll to top
    window.scrollTo(0, 0);
    await new Promise(resolve => setTimeout(resolve, 500));

    const pptx = new PptxGenJS();
    
    // Set presentation properties
    pptx.author = 'UCMS';
    pptx.company = 'Utility Cost Management System';
    pptx.title = 'UCMS - Utility Cost Management System';
    pptx.subject = 'AI-driven automation for utility cost optimization';

    // Get all sections to export
    const sections = [
      { id: '#hero', title: 'UCMS - Utility Cost Management System' },
      { id: '#features', title: 'Core Features Overview' },
      { id: '#ai-processing', title: 'AI-Powered Invoice Processing' },
      { id: '#workflow', title: 'Smart Automation Workflow' },
      { id: '#deployment', title: 'Deployment Options' },
      { id: '#benefits', title: 'Benefits at a Glance' }
    ];

    for (let i = 0; i < sections.length; i++) {
      const sectionInfo = sections[i];
      const section = document.querySelector(sectionInfo.id) as HTMLElement;
      
      if (!section) continue;

      // Scroll to section
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Prepare section for capture
      const originalStyle = section.style.cssText;
      section.style.minHeight = '100vh';
      section.style.display = 'flex';
      section.style.flexDirection = 'column';
      section.style.justifyContent = 'center';
      section.style.backgroundColor = section.style.backgroundColor || 'white';

      await new Promise(resolve => setTimeout(resolve, 1000));

      // Capture section
      const canvas = await html2canvas(section, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: 'white',
        width: section.scrollWidth,
        height: Math.max(section.scrollHeight, window.innerHeight),
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });

      // Restore original styles
      section.style.cssText = originalStyle;

      // Convert canvas to base64
      const imgData = canvas.toDataURL('image/png');

      // Add slide to presentation
      const slide = pptx.addSlide();
      
      // Add image to slide (full slide)
      slide.addImage({
        data: imgData,
        x: 0,
        y: 0,
        w: '100%',
        h: '100%'
      });
    }

    // Save PowerPoint file
    await pptx.writeFile({ fileName: 'UCMS-Presentation.pptx' });
    
  } catch (error) {
    console.error('Error generating PowerPoint:', error);
    throw new Error('Wystąpił błąd podczas generowania PowerPoint. Spróbuj ponownie.');
  }
};