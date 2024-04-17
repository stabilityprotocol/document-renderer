import { v2 } from "@tradetrust-tt/tradetrust";
import { faker } from "@faker-js/faker";
import { SchemaId, SignedWrappedDocument } from "@govtechsg/open-attestation";

// References:
// https://storybook.generic-templates.tradetrust.io/?path=/story/billofladingbimco--bill-of-lading-v-1-bimco
// https://github.com/TradeTrust/generic-templates/blob/a613613d744b7acd52c7ad51067bf8a183122117/src/templates/BillOfLadingBimcoStandard/types.ts#L3
export type BillOfLadingSchema = SignedWrappedDocument<
  v2.OpenAttestationDocument & BillOfLadingDocument
>;

export interface Party {
  partyName: string;
  phone: string;
  email: string;
  address: string;
}

export interface Location {
  locationName: string;
}

export interface BillOfLadinDocumentData {
  issuer: Party;
  shipper: Party;
  consignee: Party;
  notifyParty: Party;
  portOfLoading: Location;
  portOfDischarge: Location;
  descriptionOfGoods: string[];
  vessel: string;
  referenceNo: string;
  cargoGrossWeight: string;
  measurement: string;
  dateOfIssue: string;
  shippedOnBoardDate: string;
}

export interface BillOfLadingDocument {
  $template: {
    name: "BILL_OF_LADING";
    type: v2.TemplateType.EmbeddedRenderer;
    url: string;
  };
  issuer: Party;
  shipper: Party;
  consignee: Party;
  notifyParty: Party;
  portOfLoading: Location;
  portOfDischarge: Location;
  descriptionOfGoods: string[];
  vessel: string;
  referenceNo: string;
  cargoGrossWeight: string;
  measurement: string;
  dateOfIssue: string;
  shippedOnBoardDate: string;
}

export interface StbleFileDocument {
  $template: {
    name: "STABILITY_FILE";
    type: v2.TemplateType.EmbeddedRenderer;
    url: string;
  };
  mimeType: string;
  hash: string;
  url: string;
}

export const generateMockBillOfLading = (): BillOfLadingSchema => {
  return {
    version: SchemaId.v2,
    data: {
      $template: {
        name: "BILL_OF_LADING",
        type: v2.TemplateType.EmbeddedRenderer,
        url: faker.internet.url(),
      },
      issuers: [
        {
          name: "Stability GTN - TradeTrust",
          tokenRegistry: "0x03f9950d6cd37a6040834aded3f47a4755983f53",
          identityProof: {
            type: v2.IdentityProofType.DNSTxt,
            location: "tradetrust-gtn.stabilityprotocol.com",
          },
        },
      ],
      issuer: {
        partyName: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      },
      shipper: {
        partyName: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      },
      consignee: {
        partyName: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      },
      notifyParty: {
        partyName: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
      },
      portOfLoading: {
        locationName: faker.location.city(),
      },
      portOfDischarge: {
        locationName: faker.location.city(),
      },
      descriptionOfGoods: [faker.commerce.product()],
      measurement: "10x10x10 meters",
      cargoGrossWeight: faker.number.int().toString(),
      referenceNo: faker.commerce.isbn(),
      vessel: faker.word.noun(),
      shippedOnBoardDate: faker.date.past().toISOString(),
      dateOfIssue: faker.date.past().toISOString(),
    },
    signature: {
      type: "SHA3MerkleProof",
      targetHash:
        "13092783a544dceb55a65fbc026d173def7178f8a5def1d3a0106a9a5f8d7537",
      proof: [],
      merkleRoot:
        "13092783a544dceb55a65fbc026d173def7178f8a5def1d3a0106a9a5f8d7537",
    },
    proof: [],
  };
};
