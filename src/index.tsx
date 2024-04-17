import React from "react";
import {
  FramedDocumentRenderer,
  TemplateRegistry,
  fullAttachmentRenderer,
} from "@tradetrust-tt/decentralized-renderer-react-components";
import { createRoot } from "react-dom/client";
import { TemplateType } from "./templates";
import { v3 } from "@tradetrust-tt/tradetrust";
import "./main.css";
import { BoLRenderer } from "./common/DocumentRenderer";
import {
  BillOfLadingDocument,
  StbleFileDocument,
} from "./templates/Schemas/BOL";
import { ThemeProvider } from "styled-components";
import { Theme } from "./common/Theme";
import { FileRenderer } from "./common/FileRenderer";

const registry: TemplateRegistry<
  v3.OpenAttestationDocument & (BillOfLadingDocument & StbleFileDocument)
> = {
  [TemplateType.BILL_OF_LADING]: [
    {
      id: TemplateType.BILL_OF_LADING,
      label: "Bill of Lading",
      template: ({ document }) => (
        <BoLRenderer doc={document as BillOfLadingDocument} />
      ),
    },
  ],
  [TemplateType.StbleFile]: [
    {
      id: TemplateType.BILL_OF_LADING,
      label: "Stble File Document",
      template: ({ document }) => (
        <FileRenderer doc={document as StbleFileDocument} />
      ),
    },
  ],
};
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ThemeProvider theme={Theme}>
    <FramedDocumentRenderer
      templateRegistry={registry}
      attachmentToComponent={fullAttachmentRenderer}
    />
  </ThemeProvider>
);
