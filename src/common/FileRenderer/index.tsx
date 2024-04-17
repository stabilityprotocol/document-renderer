import React, { useState, useEffect, useMemo } from "react";
import { StbleFileDocument } from "../../templates/Schemas/BOL";
import { DocumentContainer } from "../DocumentRenderer/Styles";
import { PdfForm } from "../PdfForm";

export const FileRenderer: React.FC<{
  doc: StbleFileDocument;
}> = ({ doc }) => {
  const [downloadedFileHash, setDownloadedFileHash] = useState<string>();

  useEffect(() => {
    fetch(doc.url)
      .then((res) => res.blob())
      .then(
        async (blob) =>
          await crypto.subtle.digest("SHA-256", await blob.arrayBuffer())
      )
      .then((hash) => {
        return Array.from(new Uint8Array(hash))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
      })
      .then((hash) => setDownloadedFileHash(hash));
  });

  const MemoizedFileRenderer = useMemo(() => {
    return doc.mimeType.includes("pdf") ? (
      <iframe
        src={`https://docs.google.com/gview?url=${encodeURIComponent(doc.url)}&embedded=true`}
        width={"90%"}
        height={"800px"}
      ></iframe>
    ) : (
      <img src={doc.url} alt="file" />
    );
  }, [doc.mimeType]);

  return (
    <DocumentContainer>
      {MemoizedFileRenderer}
      {downloadedFileHash && (
        <PdfForm actualHash={downloadedFileHash}></PdfForm>
      )}
    </DocumentContainer>
  );
};
