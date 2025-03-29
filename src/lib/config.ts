export const config = {
  pdfTronSecret: process.env.NEXT_PUBLIC_PDFTRON_KEY!,
};

export const webViewerOptions = {
  path: "/webviewer",
  licenseKey: config.pdfTronSecret,
  extension: "pdf",
  enableFilePicker: true,
};
