    import React, { useState } from 'react';
    import styled, { keyframes } from 'styled-components';
    import productImage from './Assets/product.jpeg';
    import 'bootstrap-icons/font/bootstrap-icons.css';


    const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px); /* Empieza más abajo */
    }
    to {
        opacity: 1;
        transform: translateY(0); /* Se desliza hacia su posición */
    }
    `;

    // Contenedor principal de la tarjeta
    const Card = styled.div`
    background-color: #C68FE6;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
    `;

    // Estilo para el nombre del producto
    const ProductName = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
    `;

    // Botón de compra
    const BuyButton = styled.button`
    background-color: #6a0dad;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #4b0082;
    }
    `;

    // Modal container con animación
    const Modal = styled.div`
    display: ${(props) => (props.show ? 'flex' : 'none')}; /* Mostrar o esconder el modal */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    `;

    // Modal content con animación de entrada
    const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    position: relative;
    animation: ${fadeIn} 0.5s ease; /* Aplica la animación de fade-in */
    `;

    // Botón de cerrar modal (ícono de Bootstrap)
    const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;

    &:hover {
        color: #7A1CAC; /* Cambia de color al pasar el ratón */
    }
    `;

    const ModalImage = styled.img`
    width: 100%;
    border-radius: 12px;
    margin-bottom: 15px;
    `;

    const PayButton = styled.button`
    background-color: #2E073F;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #7A1CAC;
    }
    `;

    const ProductCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
        <Card>
            <ProductName>Tu nuevo sofa ahora</ProductName>
            <p>$359.900</p>
            <BuyButton onClick={toggleModal}>Comprar unu</BuyButton>
        </Card>

        <Modal show={isModalOpen}>
            <ModalContent>
            <CloseButton onClick={toggleModal}>
                <i class="bi bi-x-lg"></i> {/* Ícono de Bootstrap */}
            </CloseButton>
            <ModalImage src={productImage} alt="Product" />
            <PayButton>Pagar ahora!</PayButton>
            </ModalContent>
        </Modal>
        </>
    );
    };

    export default ProductCard;