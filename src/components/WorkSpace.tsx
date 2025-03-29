"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { WebViewerInstance } from "@pdftron/webviewer";
import { config, webViewerOptions } from "@/lib/config";
import PdfUploader from "./PdfUploader";

const WorkSpace = () => {
  const viewerRef = useRef<HTMLDivElement | any>(null);
  const [file, setFile] = useState<File[] | any>(null);

  useEffect(() => {
    import("@pdftron/webviewer")
      .then((module) => {
        const WebViewer = module.default;

        WebViewer(
          {
            path: "/webviewer",
            licenseKey: config.pdfTronSecret,
            extension: "pdf",
            enableFilePicker: true,
          },
          viewerRef?.current!
        ).then((instance: WebViewerInstance) => {
          const { documentViewer, annotationManager, Annotations } =
            instance.Core;
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="w-full p-2 flex justify-between items-center bg-slate-300 lg:px-10">
        <h1 className="text-center font-medium text-base lg:text-lg">
          PDF Signer
        </h1>
        <div className="w-16 rounded-xl p-2 bg-white/75 cursor-pointer">
          <h1>Export</h1>
        </div>
      </header>
      <div className="w-full h-screen overflow-hidden" ref={viewerRef}></div>
    </div>
  );
};

export default WorkSpace;
