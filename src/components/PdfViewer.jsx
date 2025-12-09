import React from "react";

export default function PdfViewer({ open, onClose, pdfUrl }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-transparent backdrop-blur-sm z-[9999] flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-transparent rounded-lg w-full max-w-5xl h-[90vh] overflow-hidden border border-purple-600 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={pdfUrl}
          className="w-full h-full rounded-b-lg"
          title="PDF Viewer"
          
        />

      </div>
    </div>
  );
}
