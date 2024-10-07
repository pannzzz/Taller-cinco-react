import React, { useState } from 'react';
import styles from './Card.module.css'; // Importamos los estilos de CSS Modules
import productImage from './Assets/product.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Contenedor que centrará la tarjeta */}
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.productName}>Tu nuevo sofá ahora</h2>
          <p>$359.900</p>
          <button className={styles.buyButton} onClick={toggleModal}>Comprar unu</button>
        </div>
      </div>

      <div className={`${styles.modal} ${isModalOpen ? styles.show : ''}`}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={toggleModal}>
            <i className="bi bi-x-lg"></i> {/* Ícono de Bootstrap */}
          </button>
          <img className={styles.modalImage} src={productImage} alt="Product" />
          <button className={styles.payButton}>Pagar ahora!</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
