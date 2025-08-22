'use client'; // This directive is necessary for client-side components in Next.js App Router

import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
// import cookie from 'js-cookie';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import PageLoading from '../PageLoading/PageLoading';

interface BodyWrapperProps {
    children: React.ReactNode;
    norenew?: boolean;
}

// Define the shape of the Redux state slice
interface LoadingState {
    page: boolean;
}
  
//  ------------------- Styled Components -------------------

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  *::-moz-focus-inner {
    border: none;
  }

  @media only screen and (max-width: 448px) {
    font-size: 14px;
  }
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;


// ------------------- Functional Component -------------------

function BodyWrapper({ children, norenew = false }: BodyWrapperProps): JSX.Element {
    // Use the AppDispatch and RootState types for a fully typed Redux
    // const dispatch = useAppDispatch();
    // const pageLoading = useAppSelector((state) => state.loading.page);
    const pageLoading = false;
  
    // Render content
    const content = pageLoading ? <PageLoading /> : children;
  
    return (
      <Wrapper>
        <ContentWrapper>
          {content}
        </ContentWrapper>
      </Wrapper>
    );
  }
  
  export default BodyWrapper;
  