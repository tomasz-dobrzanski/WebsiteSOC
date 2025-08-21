import PptxGenJS from 'pptxgenjs';
import html2canvas from 'html2canvas';

export const exportToPowerPoint = async () => {
  try {
    console.log('Starting PowerPoint export...');
    
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        <div>Generowanie PowerPoint... Proszę czekać...</div>
      </div>
    `;
    document.body.appendChild(loadingDiv);

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Scroll to top
    window.scrollTo(0, 0);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create new presentation
    const pptx = new PptxGenJS.default();
    
    // Set presentation properties
    pptx.author = 'UCMS';
    pptx.company = 'Utility Cost Management System';
    pptx.title = 'UCMS - System Zarządzania Kosztami Mediów';
    pptx.subject = 'Automatyzacja AI dla optymalizacji kosztów mediów';

    // Define sections to capture
    const sections = [
      { id: '#hero', title: 'UCMS - System Zarządzania Kosztami Mediów' },
      { id: '#features', title: 'Przegląd Głównych Funkcji' },
      { id: '#ai-processing', title: 'Przetwarzanie Faktur AI' },
      { id: '#workflow', title: 'Inteligentny Przepływ Automatyzacji' },
      { id: '#deployment', title: 'Opcje Wdrożenia' },
      { id: '#benefits', title: 'Korzyści w Skrócie' }
    ];

    for (let i = 0; i < sections.length; i++) {
      const sectionInfo = sections[i];
      const section = document.querySelector(sectionInfo.id) as HTMLElement;
      
      if (!section) {
        console.warn(`Section ${sectionInfo.id} not found`);
        continue;
      }

      console.log(`Processing slide ${i + 1}/${sections.length}: ${sectionInfo.title}`);
      
      // Update loading message
      loadingDiv.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
          <div>Tworzenie slajdu ${i + 1}/${sections.length}...</div>
        </div>
      `;

      // Scroll to section and wait
      section.scrollIntoView({ behavior: 'instant', block: 'start' });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Capture section with better settings
      const canvas = await html2canvas(section, {
        scale: 1,
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

      // Convert to base64
      const imgData = canvas.toDataURL('image/png', 0.8);

      // Add slide
      const slide = pptx.addSlide();
      
      // Add title
      slide.addText(sectionInfo.title, {
        x: 0.5,
        y: 0.2,
        w: 12.5,
        h: 0.8,
        fontSize: 24,
        bold: true,
        color: '1f2937',
        align: 'center'
      });
      
      // Add image - full slide minus title area
      slide.addImage({
        data: imgData,
        x: 0.2,
        y: 1.2,
        w: 12.6,
        h: 6.8
      });
    }

    // Remove loading indicator
    document.body.removeChild(loadingDiv);

    // Generate and download the file
    console.log('Generating PowerPoint file...');
    
    // Use output('blob') method for browser compatibility
    const pptxBlob = await pptx.output('blob');
    
    // Create download link
    const url = URL.createObjectURL(pptxBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'UCMS-Prezentacja.pptx';
    link.style.display = 'none';
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
    
    console.log('PowerPoint file generated successfully');
    alert('Prezentacja PowerPoint została pomyślnie wygenerowana i pobrana!');
    
  } catch (error) {
    // Remove loading indicator if it exists
    const loadingDiv = document.querySelector('div[style*="position: fixed"]');
    if (loadingDiv && loadingDiv.parentNode) {
      loadingDiv.parentNode.removeChild(loadingDiv);
    }
    
    console.error('Error generating PowerPoint:', error);
    alert('Wystąpił błąd podczas generowania PowerPoint. Spróbuj ponownie.');
  }
};