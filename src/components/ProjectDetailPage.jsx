import { formatText } from "../utils/formatText";
import PdfViewer from "../components/PdfViewer";
import { useState } from "react";
import CsIcon from "../assets/icons/c-sharp.png"



export default function ProjectDetailPage({ modalProject }) {
  
  const [pdfOpen, setPdfOpen] = useState(false)
  const [currentPdf, setCurrentPdf] = useState(null)

  const openPdf = (url) => {
  setCurrentPdf(url);
  setPdfOpen(true);
};


  const project = modalProject;

  // Detectează automat tipul valorii
  const renderValue = (val, key) => {
    // PDF
    if (typeof val === "string" && val.toLowerCase().endsWith(".pdf")) {
  return (
    <button
      key={key}
      onClick={() => openPdf(val)}
      className="text-purple-400 underline text-lg my-3 block text-center hover:text-purple-300"

    >
       <span><img src={CsIcon} alt="C# icon" className="h-6 w-6 inline-block mr-2" /> View Code</span> 
    </button>
  );
}


    // VIDEO (centrat)
    if (typeof val === "string" && val.toLowerCase().endsWith(".mp4")) {
      return (
        <div key={key} className="w-full flex justify-center items-center my-4">
          <video
            src={val}
            className="w-full max-w-xl rounded-lg"
            loop
            muted
            autoPlay
            
          />
        </div>
      );
    }

    // TEXT
    if (typeof val === "string") {
      return (
        <p key={key} className="max-w-6xl text-justify whitespace-pre-line px-6">
          {formatText(val)}
        </p>
      );
    }

    return null;
  };

  return (
    <section className="text-white space-y-6 w-full">

      {/* MAIN VIDEO */}
      <div className="flex justify-center rounded-lg overflow-hidden">
        <video
          src={project.videoUrl}
          className="w-full max-w-4xl object-cover"
          loop
          autoPlay
          controls
        />
      </div>

      {/* ABOUT + INFO */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 px-6">
        <article>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 text-center">
            About
          </h3>
          <p className="text-justify whitespace-pre-line">
            {formatText(project.about)}
          </p>
        </article>

        <article className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 text-center">
            Project Info
          </h3>
          <ul className="space-y-1 text-left">
            {project.projectInfo.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold">{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* INTRODUCTION */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">Introduction</h3>
        <p className="max-w-6xl text-justify whitespace-pre-line px-6">
          {formatText(project.introduction)}
        </p>
      </div>

      {/* WORK IMPACT */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400 text-center">Team Work / My Work</h3>
        <p className="max-w-6xl text-justify whitespace-pre-line px-6">
          {formatText(project.workImpact)}
        </p>
      </div>

      {/* DEVELOPMENT SECTIONS */}
      <div>
        {project.projectDeveleloping.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center my-10">
            
            {/* TITLE */}
            <span className="text-2xl font-semibold mb-4 text-purple-400 text-center ">
              {item.label}
            </span>

            {/* SINGLE VALUE */}
            {!Array.isArray(item.value) && renderValue(item.value, idx)}

            {/* MULTIPLE VALUES */}
            {Array.isArray(item.value) && (
              <div className="flex flex-col gap-4 w-full text-left">
                {item.value.map((val, vIdx) => renderValue(val, vIdx))}
              </div>
            )}

            {/* OPTIONAL SECOND LABEL */}
            {item.label1 && (
              <span className="text-lg font-semibold mt-4 text-purple-300 text-left px-6">
                {item.label1}
              </span>
            )}
          </div>
        ))}
      </div>
      <PdfViewer open={pdfOpen} pdfUrl={currentPdf} onClose={() => setPdfOpen(false)} />
    </section>
  );
}
