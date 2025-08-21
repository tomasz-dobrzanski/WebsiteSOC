import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async () => {
  try {
    console.log('Starting PDF export...');
    
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        <div>Generowanie PDF... Proszę czekać...</div>
      </div>
    `;
    document.body.appendChild(loadingDiv);

    // Wait for all content to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Scroll to top
    window.scrollTo(0, 0);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get all sections
    const sectionSelectors = ['#hero', '#features', '#ai-processing', '#workflow', '#deployment', '#benefits'];
    const sections = sectionSelectors.map(selector => document.querySelector(selector)).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      throw new Error('No sections found to export');
    }

    console.log(`Found ${sections.length} sections to export`);

    const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape A4
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      console.log(`Processing section ${i + 1}/${sections.length}`);
      
      // Update loading message
      loadingDiv.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
          <div>Przetwarzanie sekcji ${i + 1}/${sections.length}...</div>
        </div>
      `;

      // Scroll to section
      section.scrollIntoView({ behavior: 'instant', block: 'start' });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Capture section
      const canvas = await html2canvas(section, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: section.scrollWidth,
        height: section.scrollHeight,
        windowWidth: 1920,
        windowHeight: 1080,
        scrollX: 0,
        scrollY: 0
      });

      // Calculate dimensions
      const imgWidth = pageWidth - 20; // 10mm margin
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add new page if not first
      if (i > 0) {
        pdf.addPage();
      }

      // Add image to PDF
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      if (imgHeight <= pageHeight - 20) {
        pdf.addImage(imgData, 'JPEG', 10, (pageHeight - imgHeight) / 2, imgWidth, imgHeight);
      } else {
        const scaledHeight = pageHeight - 20;
        const scaledWidth = (canvas.width * scaledHeight) / canvas.height;
        pdf.addImage(imgData, 'JPEG', (pageWidth - scaledWidth) / 2, 10, scaledWidth, scaledHeight);
      }
    }

    // Remove loading indicator
    document.body.removeChild(loadingDiv);

    // Save PDF
    pdf.save('UCMS-Prezentacja.pdf');
    console.log('PDF export completed successfully');
    
  } catch (error) {
    // Remove loading indicator if it exists
    const loadingDiv = document.querySelector('div[style*="position: fixed"]');
    if (loadingDiv) {
      document.body.removeChild(loadingDiv);
    }
    
    console.error('Error generating PDF:', error);
    alert('Wystąpił błąd podczas generowania PDF. Spróbuj ponownie.');
  }
};