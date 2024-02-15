import React from 'react'
import './checkout.css'
import Modal from 'react-modal';
import { useState } from 'react';


function Checkout({ cart }) {
    console.log("checkout", cart)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckout = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div>
                <button onClick={handleCheckout}>Checkout</button>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    contentLabel="Checkout Modal"
                >
                    <div>
                        <h2>Confirm Purchase</h2>
                        {cart.map((product) =>
                            <div key={product.id}>
                                <div>  <img src={product.image} alt="" /></div>
                              
                                <p>{product.title}</p>
                            </div>
                        )}
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Checkout