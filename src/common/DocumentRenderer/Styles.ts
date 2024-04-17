import styled from "styled-components";

export const DocumentContainer = styled.div`
  margin: auto;
  font-family: Space Grotesk;
  display: flex;
  flex-direction: column;
  min-height: 30rem;
  width: 50rem;
  max-width: 90%;
  border-radius: 0.5rem;
  border: 1px solid #eaeaea;
`;

export const AttestationHorizontalGroup = styled.div`
  display: flex;

  > * {
    width: 100%;
  }
`;

export const AttestationGroup = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

export const AttestationTitle = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
  background: #f4f4f4;
`;

export const AttestationAttribute = styled.div`
  font-family: DM Sans;
  padding: 0.75rem 1rem;
`;
