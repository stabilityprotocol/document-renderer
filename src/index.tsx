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
import { DocumentRenderer } from "./common/DocumentRenderer";
import { BillOfLadingDocument } from "./templates/Schemas/BOL";
import { ThemeProvider } from "styled-components";
import { Theme } from "./common/Theme";

const registry: TemplateRegistry<
  v3.OpenAttestationDocument & BillOfLadingDocument
> = {
  [TemplateType.BILL_OF_LADING]: [
    {
      id: TemplateType.BILL_OF_LADING,
      label: "Bill of Lading",
      template: ({ document }) => <DocumentRenderer doc={document} />,
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
