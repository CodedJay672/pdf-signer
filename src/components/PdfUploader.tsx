"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const PdfUploader = ({ onChange }: { onChange: (file: File[]) => void }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      if (file.type === "application/pdf") {
        onChange(acceptedFiles);
      } else {
        alert("Please upload a PDF file.");
      }
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className="w-full justify-center items-center gap-1"
    >
      <input {...getInputProps()} accept="application/pdf" />
      <p className="text-base text-center">Open</p>
    </div>
  );
};

export default PdfUploader;
