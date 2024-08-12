import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/GodwinCV.pdf";

// Set the workerSrc to load the PDF worker script.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = () => {
  var pdfUrl = resume; // Replace with your PDF file path or URL

  return (
    <div>
      <Document file={pdfUrl}>
        <Page width={1000} pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} className="pdf"/>
      </Document>
    </div>
  );
};

export default PdfViewer;
