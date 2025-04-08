import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação suave de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LoadingWrapper = styled.div`
  background: linear-gradient(to bottom, #161934, #020617);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  color: white;
`;

const Name = styled.h1`
  font-size: 3rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const Surname = styled.h1`
  font-size: 3rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1.2s;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <Name>Robert</Name>
      <Surname>Freitas</Surname>
    </LoadingWrapper>
  );
}

