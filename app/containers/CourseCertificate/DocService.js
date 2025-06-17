import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = html => {
    savePDF(html, {
      paperSize: 'A4',
      fileName: 'FinLitCertificate.pdf',
      margin: 0,
      fontFamily: 'Lato',
    });
  };
}

const Doc = new DocService();
export default Doc;
