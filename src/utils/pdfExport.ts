import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async () => {
  try {
    // Wait for all animations and images to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Scroll to top to ensure everything is visible
    window.scrollTo(0, 0);
    await new Promise(resolve => setTimeout(resolve, 500));

    // Get all sections to export
    const sections = [
      document.querySelector('#hero'),
      document.querySelector('#features'),
      document.querySelector('#ai-processing'),
      document.querySelector('#workflow'),
      document.querySelector('#deployment'),
      document.querySelector('#benefits')
    ].filter(Boolean);

    if (sections.length === 0) {
      throw new Error('No sections found to export');
    }

    const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      
      // Scroll to section to ensure it's in view
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Temporarily modify styles for better PDF rendering
      const originalStyle = section.style.cssText;
      const originalOverflow = document.body.style.overflow;
      
      // Ensure section is fully visible
      section.style.minHeight = '100vh';
      section.style.display = 'flex';
      section.style.flexDirection = 'column';
      section.style.justifyContent = 'center';
      section.style.backgroundColor = section.style.backgroundColor || 'white';
      document.body.style.overflow = 'visible';

      // Wait for any remaining animations
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Capture the section with high quality
      const canvas = await html2canvas(section, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        width: section.scrollWidth,
        height: Math.max(section.scrollHeight, window.innerHeight),
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        scrollX: 0,
        scrollY: 0
      });

      // Restore original styles
      section.style.cssText = originalStyle;
      document.body.style.overflow = originalOverflow;

      // Calculate dimensions to fit page (landscape)
      const imgWidth = pageWidth - 20; // 10mm margin on each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add new page if not the first section
      if (i > 0) {
        pdf.addPage();
      }

      // Add image to PDF
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      if (imgHeight <= pageHeight - 20) {
        // Image fits on one page
        pdf.addImage(imgData, 'PNG', 10, (pageHeight - imgHeight) / 2, imgWidth, imgHeight);
      } else {
        // Scale down to fit page
        const scaledHeight = pageHeight - 20;
        const scaledWidth = (canvas.width * scaledHeight) / canvas.height;
        pdf.addImage(imgData, 'PNG', (pageWidth - scaledWidth) / 2, 10, scaledWidth, scaledHeight);
      }
    }

    // Save the PDF
    pdf.save('UCMS-Presentation.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Wystąpił błąd podczas generowania PDF. Spróbuj ponownie.');
  }
};