import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import { fadeIn } from "../../helpers/animations";
import { UrlState } from "../../lib/features/types";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";

// ------------------- Type Definitions -------------------

interface ShortenerInputProps {
  loading: boolean;
  url: UrlState;
  isCopied?: boolean;
  copyHandler?(text?: string, result?: boolean): void;
}

// ------------------- Styled Components ------------------
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Url = styled.h2`
  font-size: 26px;
  font-weight: 300;
  border-bottom: 2px dotted #aaa;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    opacity: 0.5;
  }

  @media only screen and (max-width: 448px) {
    font-size: 20px;
  }
`;

const CopyMessage = styled.p`
  position: absolute;
  top: -32px;
  left: 0;
  font-size: 14px;
  color: #689f38;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  color: #f44336;
  text-align: center;
  margin: 16px 0;
  animation: ${fadeIn} 0.3s ease-out;
`;
const ShortenerResult = ({
  loading,
  url,
  isCopied,
  copyHandler,
}: ShortenerInputProps) => {
  const [showCheckmark, setShowCheckmark] = useState(false);

  if (loading) return <CircularProgress />;

  // Show error message if status is failed
  if (url.status === "failed") {
    return <ErrorMessage>{url.error}</ErrorMessage>;
  }

  // Safety check for empty list
  if (!url.list.length) return null;

  const shortUrl = url.list[0].shortUrl;

  const handleCopy = (text?: string, result?: boolean) => {
    if (result) {
      setShowCheckmark(true);
      setTimeout(() => setShowCheckmark(false), 1000);
    }
    if (copyHandler) {
      copyHandler(text, result);
    }
  };

  return (
    <Wrapper>
      {isCopied && <CopyMessage>Copied to clipboard.</CopyMessage>}
      <CopyToClipboard text={shortUrl} onCopy={handleCopy}>
        <IconButton edge="start" aria-label="Copy url" type="button">
          {showCheckmark ? (
            <CheckIcon
              sx={{
                color: "#689f38",
                transition: "all 0.2s ease-out",
              }}
            />
          ) : (
            <ContentCopyIcon
              sx={{
                color: "#aaa",
                transition: "all 0.2s ease-out",
                "&:hover": { color: "#673ab7" },
              }}
            />
          )}
        </IconButton>
      </CopyToClipboard>

      <CopyToClipboard text={shortUrl} onCopy={handleCopy}>
        <Url>{shortUrl.replace(/^https?:\/\//, "")}</Url>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default ShortenerResult;
