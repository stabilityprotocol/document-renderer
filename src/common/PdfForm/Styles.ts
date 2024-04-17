import styled from "styled-components";

export const PdfFormWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.box.borderColor};
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.font.secondary};
`;

export const PdfFormDropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  margin-top: 3rem;
  padding: ${(props) => props.theme.spacing.medium};
  gap: ${(props) => props.theme.spacing.medium};
  cursor: pointer;

  > svg {
    width: 2rem;
    height: auto;
  }
`;

export const PdfFormFileRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.medium};

  span {
    font-weight: bold;
  }
`;

export const PdfFormFileAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.medium};
`;
