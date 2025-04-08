import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animações
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-50px); }
`;

// Tela de introdução
const IntroScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #161934;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

const Nome = styled.h1`
  color: white;
  font-size: 3rem;
  margin-right: 1rem;
  animation: 
    ${slideIn} 1s ease-out forwards,
    ${slideOut} 1s ease-in forwards;
  animation-delay: 0s, 3s;
`;

const Sobrenome = styled.h1`
  color: white;
  font-size: 3rem;
  animation: 
    ${slideIn} 1s ease-out forwards,
    ${slideOut} 1s ease-in forwards;
  animation-delay: 1s, 3s;
`;

// Conteúdo principal
const MainContent = styled.div`
  background-color: #020617;
  min-height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4500); // Tempo total da intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <IntroScreen>
          <Nome>Robert</Nome>
          <Sobrenome>Freitas</Sobrenome>
        </IntroScreen>
      )}

      {!showIntro && (
        <MainContent>
         
        </MainContent>
      )}
    </>
  );
}

export default App;
