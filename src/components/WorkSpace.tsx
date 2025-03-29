"use client";

import { useEffect, useRef, useState } from "react";
import { WebViewerInstance } from "@pdftron/webviewer";
import { config } from "@/lib/config";

const WorkSpace = () => {
  const viewerRef = useRef<HTMLDivElement | any>(null);

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
      </header>
      <div className="w-full h-screen overflow-hidden" ref={viewerRef}></div>
    </div>
  );
};

export default WorkSpace;
