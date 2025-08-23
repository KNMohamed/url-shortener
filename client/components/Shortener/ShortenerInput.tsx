import React, { FormEvent } from "react";
import styled from "styled-components";
import ShortenerTextInput from "./ShortenerTextInput";

// ------------------- Type Definitions -------------------

interface ShortenerInputProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setShortenerFormError?: (error: string) => void;
}

// ------------------- Styled Components -------------------

const ShortenerForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  max-width: 100%;
  gap: 10px;
`;

function ShortenerInput({ handleSubmit }: ShortenerInputProps): JSX.Element {
  return (
    <ShortenerForm id="shortenerform" onSubmit={handleSubmit}>
      <ShortenerTextInput
        id="target"
        name="target"
        placeholder="Paste your long URL"
        style={{ width: "80%" }}
        autoFocus
      />
    </ShortenerForm>
  );
}

export default ShortenerInput;
