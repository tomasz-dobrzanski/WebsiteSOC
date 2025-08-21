import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async () => {
  try {
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

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      
      // Temporarily modify styles for better PDF rendering
      const originalStyle = section.style.cssText;
      section.style.backgroundColor = 'white';
      section.style.minHeight = '100vh';
      section.style.display = 'flex';
      section.style.flexDirection = 'column';
      section.style.justifyContent = 'center';

      // Capture the section
      const canvas = await html2canvas(section, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: 'white',
        width: section.scrollWidth,
        height: section.scrollHeight
      });

      // Restore original styles
      section.style.cssText = originalStyle;

      // Calculate dimensions to fit page
      const imgWidth = pageWidth - 20; // 10mm margin on each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add new page if not the first section
      if (i > 0) {
        pdf.addPage();
      }

      // Add image to PDF
      const imgData = canvas.toDataURL('image/png');
      
      if (imgHeight <= pageHeight - 20) {
        // Image fits on one page
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      } else {
        // Image needs to be scaled down to fit
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