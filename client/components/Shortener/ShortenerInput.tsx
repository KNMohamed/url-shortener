import React, { FormEvent, MouseEvent } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
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
`;

const Submit = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 12px;
  width: 64px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover svg {
    fill: #673ab7;
  }
  @media only screen and (max-width: 448px) {
    right: 8px;
    width: 40px;
  }
`;

const Icon = styled(SVG)`
  svg {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 2px;
    fill: #aaa;
    transition: all 0.2s ease-out;

    @media only screen and (max-width: 448px) {
      height: 22px;
      width: 22px;
    }
  }
`;

function ShortenerInput({
  handleSubmit,
  setShortenerFormError,
}: ShortenerInputProps): JSX.Element {
  return (
    <ShortenerForm id="shortenerform" onSubmit={handleSubmit}>
      <ShortenerTextInput
        id="target"
        name="target"
        placeholder="Paste your long URL"
        autoFocus
      />
    </ShortenerForm>
  );
}

export default ShortenerInput;
