"use client";

import React, { useState, ChangeEvent } from "react";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";
import { fadeIn } from "../../helpers/animations";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

// ------------------- Type Definitions -------------------

// ------------------- Styled Components -------------------

const Wrapper = styled.div`
  position: absolute;
  top: 74px;
  left: 100px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
  z-index: 2;
  @media only screen and (max-width: 448px) {
    top: 56px;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 448px) {
    flex-direction: column;
    align-items: flex-start;

    > * {
      margin-bottom: 16px;
    }
  }
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-right: 16px;
  animation: ${fadeIn} 0.5s ease-out;
  color: #666;

  @media only screen and (max-width: 448px) {
    font-size: 14px;
    margin-right: 8px;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  margin: 24px 32px 24px 0;
  .MuiCheckbox-root {
    color: #9575cd;
  }
  .MuiTypography-root {
    color: #666;
    transition: color 0.3s ease-out;
    &:hover {
      color: black;
    }
  }
`;

function ShortenerOptions(): JSX.Element {
  const [customurlCheckbox, setCustomurlCheckbox] = useState(false);
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    console.log(e.target);
    if (id === "customurlCheckbox") {
      setCustomurlCheckbox((prev) => !prev);
    } else if (id === "passwordCheckbox") {
      setPasswordCheckbox((prev) => !prev);
    }
  };

  const customUrlInput = customurlCheckbox && (
    <div>
      <StyledLabel htmlFor="customurl">
       {window.location.hostname}/
      </StyledLabel>
      <TextField
        id="customurl"
        type="text"
        placeholder="custom name"
        variant="standard"
        size="small"
      />
    </div>
  );

  const passwordInput = passwordCheckbox && (
    <div>
      <StyledLabel htmlFor="password">Password:</StyledLabel>
      <TextField
        id="password"
        type="password"
        placeholder="password"
        variant="standard"
        size="small"
      />
    </div>
  );

  return (
    <Wrapper>
      <CheckboxWrapper>
        <StyledFormControlLabel
          control={
            <MuiCheckbox
              id="customurlCheckbox"
              onChange={handleCheckbox}
              checked={customurlCheckbox}
            />
          }
          label="Set custom URL"
        />
        <StyledFormControlLabel
          control={
            <MuiCheckbox
              id="passwordCheckbox"
              onChange={handleCheckbox}
              checked={passwordCheckbox}
            />
          }
          label="Set password"
        />
      </CheckboxWrapper>
      <InputWrapper>
        {customUrlInput}
        {(customurlCheckbox && passwordCheckbox) && <span className="mx-4"/>}
        {passwordInput}
      </InputWrapper>
    </Wrapper>
  );
}

export default ShortenerOptions;
