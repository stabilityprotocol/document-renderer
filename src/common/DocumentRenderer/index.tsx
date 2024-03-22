import React, { useMemo } from "react";
import { BillOfLadingDocument } from "../../templates/Schemas/BOL";
import {
  AttestationAttribute,
  AttestationGroup,
  AttestationHorizontalGroup,
  AttestationTitle,
  DocumentContainer,
} from "./Styles";

export const DocumentRenderer: React.FC<{
  doc: BillOfLadingDocument;
}> = ({ doc }) => {
  return (
    <DocumentContainer>
      <AttestationTitle>Bill of Lading</AttestationTitle>
      <AttestationHorizontalGroup>
        <AttestationGroup>
          <AttestationTitle>Issuer</AttestationTitle>
          <AttestationAttribute>{doc.issuer.partyName}</AttestationAttribute>
          <AttestationAttribute>{doc.issuer.address}</AttestationAttribute>
          <AttestationAttribute>{doc.issuer.email}</AttestationAttribute>
          <AttestationAttribute>{doc.issuer.phone}</AttestationAttribute>
        </AttestationGroup>
        <AttestationGroup>
          <AttestationTitle>Shipper</AttestationTitle>
          <AttestationAttribute>{doc.shipper.partyName}</AttestationAttribute>
          <AttestationAttribute>{doc.shipper.address}</AttestationAttribute>
          <AttestationAttribute>{doc.shipper.email}</AttestationAttribute>
          <AttestationAttribute>{doc.shipper.phone}</AttestationAttribute>
        </AttestationGroup>
      </AttestationHorizontalGroup>
      <AttestationHorizontalGroup>
        <AttestationGroup>
          <AttestationTitle>Consignee</AttestationTitle>
          <AttestationAttribute>{doc.consignee.partyName}</AttestationAttribute>
          <AttestationAttribute>{doc.consignee.address}</AttestationAttribute>
          <AttestationAttribute>{doc.consignee.email}</AttestationAttribute>
          <AttestationAttribute>{doc.consignee.phone}</AttestationAttribute>
        </AttestationGroup>
        <AttestationGroup>
          <AttestationTitle>Notify Party</AttestationTitle>
          <AttestationAttribute>
            {doc.notifyParty.partyName}
          </AttestationAttribute>
          <AttestationAttribute>{doc.notifyParty.address}</AttestationAttribute>
          <AttestationAttribute>{doc.notifyParty.email}</AttestationAttribute>
          <AttestationAttribute>{doc.notifyParty.phone}</AttestationAttribute>
        </AttestationGroup>
      </AttestationHorizontalGroup>
      <AttestationHorizontalGroup>
        <AttestationGroup>
          <AttestationTitle>Port of Loading</AttestationTitle>
          <AttestationAttribute>
            {doc.portOfLoading.locationName}
          </AttestationAttribute>
        </AttestationGroup>
        <AttestationGroup>
          <AttestationTitle>Port of Discharge</AttestationTitle>
          <AttestationAttribute>
            {doc.portOfDischarge.locationName}
          </AttestationAttribute>
        </AttestationGroup>
      </AttestationHorizontalGroup>
      <AttestationHorizontalGroup>
        <AttestationGroup>
          <AttestationTitle>Cargo Description</AttestationTitle>
          <AttestationAttribute>{doc.cargoGrossWeight}</AttestationAttribute>
        </AttestationGroup>
        <AttestationGroup>
          <AttestationTitle>Measurement</AttestationTitle>
          <AttestationAttribute>{doc.measurement}</AttestationAttribute>
        </AttestationGroup>
      </AttestationHorizontalGroup>
      <AttestationGroup>
        <AttestationTitle>Description of Goods</AttestationTitle>
        {doc.descriptionOfGoods.map((description, index) => (
          <AttestationAttribute key={index}>{description}</AttestationAttribute>
        ))}
      </AttestationGroup>
      <AttestationHorizontalGroup>
        <AttestationGroup>
          <AttestationTitle>Vessel</AttestationTitle>
          <AttestationAttribute>{doc.vessel}</AttestationAttribute>
        </AttestationGroup>
        <AttestationGroup>
          <AttestationTitle>Reference No</AttestationTitle>
          <AttestationAttribute>{doc.referenceNo}</AttestationAttribute>
        </AttestationGroup>
      </AttestationHorizontalGroup>
      <AttestationGroup>
        <AttestationTitle>Date of Issue</AttestationTitle>
        <AttestationAttribute>{doc.dateOfIssue}</AttestationAttribute>
      </AttestationGroup>
      <AttestationGroup>
        <AttestationTitle>Date of Shipped</AttestationTitle>
        <AttestationAttribute>{doc.shippedOnBoardDate}</AttestationAttribute>
      </AttestationGroup>
    </DocumentContainer>
  );
};
