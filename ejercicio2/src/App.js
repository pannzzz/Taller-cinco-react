import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

// Contenedor que centra el contenido
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Esto asegura que ocupe toda la pantalla */
  background-color: #f9f9f9;
`;

function App() {
  return (
    <CenteredContainer>
      <ProductCard />
    </CenteredContainer>
  );
}

export default App;
