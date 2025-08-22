import { FormEvent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fadeIn } from "../../helpers/animations";
import { RootState } from "../../lib/features/types";
import { createShortUrl } from '@/lib/features/url/urlSlice'; // Assume actions are from a Redux slice

const Wrapper = styled.div`
  position: relative;
  width: 800px;
  max-width: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  margin: 16px 0 40px;
  padding-bottom: 125px;
  animation: ${fadeIn} 0.8s ease-out;

  @media only screen and (max-width: 800px) {
    padding: 0 8px 96px;
  }
`;

const ResultWrapper = styled.div`
  position: relative;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;

  @media only screen and (max-width: 448px) {
    height: 72px;
  }
`;

function BodyWrapper(): JSX.Element {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state: RootState) => ({
    url: state.url,
  }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const shortenerForm = e.currentTarget;
    const {
      target: originalUrl,
      customurl: customurlInput,
      password: pwd,
    } = shortenerForm.elements as typeof shortenerForm.elements & {
      target: HTMLInputElement;
      customurl: HTMLInputElement;
      password: HTMLInputElement;
    };
    
    const target = originalUrl.value.trim();
    const customurl = customurlInput?.value.trim() ?? '';
    const password = pwd?.value ?? '';

    const options = { customurl, password }
    shortenerForm.reset();

    dispatch(createShortUrl({ target, ...options }));

    return (
      <div>
      </div>  
    );
  };
}
