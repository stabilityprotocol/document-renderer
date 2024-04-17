import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import {
  PdfFormDropzone,
  PdfFormFileAction,
  PdfFormFileRow,
  PdfFormWrapper,
} from "./Styles";
import { HiOutlineDocument } from "react-icons/hi";
import { MdCheck, MdStopCircle } from "react-icons/md";
import React from "react";
import { ButtonSmallAction } from "../Button";

export const PdfForm = ({ actualHash }: { actualHash: string }) => {
  const [file, setFile] = useState<File | undefined>();
  const [calculatedHash, setCalculatedHash] = useState<string>();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
  });

  const onVerify = useCallback(async () => {
    try {
      if (!file) return;
      const fileHashed = await crypto.subtle.digest(
        "SHA-256",
        await file!.arrayBuffer()
      );

      const hash = Array.from(new Uint8Array(fileHashed))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      setCalculatedHash(hash);
    } catch (err) {
      console.error(err);
    }
  }, [file]);

  const onRemove = useCallback(() => {
    setFile(undefined);
    setCalculatedHash(undefined);
  }, []);

  return (
    <>
      <PdfFormWrapper>
        {file ? (
          <>
            <PdfFormFileRow>
              <span>{file.name}</span>
              <ButtonSmallAction onClick={onRemove}>Remove</ButtonSmallAction>
            </PdfFormFileRow>
            <PdfFormFileRow>
              {calculatedHash && (
                <FileVerifierResult
                  actualHash={actualHash}
                  calculatedHash={calculatedHash}
                ></FileVerifierResult>
              )}
            </PdfFormFileRow>
            <PdfFormFileAction>
              {calculatedHash ? (
                <ButtonSmallAction onClick={onRemove}>
                  Check other file
                </ButtonSmallAction>
              ) : (
                <ButtonSmallAction onClick={onVerify}>
                  Check file integrity
                </ButtonSmallAction>
              )}
            </PdfFormFileAction>
          </>
        ) : (
          <PdfFormDropzone {...getRootProps()}>
            <input {...getInputProps()} />
            <HiOutlineDocument />
            {isDragActive ? (
              <div>Drop the files here...</div>
            ) : (
              <>
                <div>Drag and drop a file here, or click to verify a file</div>
              </>
            )}
          </PdfFormDropzone>
        )}
      </PdfFormWrapper>
    </>
  );
};

const FileVerifierResult = ({
  actualHash,
  calculatedHash,
}: {
  actualHash: string;
  calculatedHash: string;
}) => {
  const matches = actualHash === calculatedHash;

  return (
    <FileVerifierResultWrapper>
      {matches ? (
        <SpanCard type="success">
          <MdCheck style={{ color: "green" }} /> The uploaded file is original
        </SpanCard>
      ) : (
        <SpanCard type="error">
          <MdStopCircle /> The file has been manipulated
        </SpanCard>
      )}
      <div>
        <strong>Actual Hash:</strong> {actualHash}
      </div>
      <div>
        <strong>Calculated Hash:</strong> {calculatedHash}
      </div>
    </FileVerifierResultWrapper>
  );
};

const SpanCard = styled.span<{ type: "error" | "success" }>`
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.type === "success" ? "lightgreen" : "lightcoral"};
`;

const FileVerifierResultWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
`;
