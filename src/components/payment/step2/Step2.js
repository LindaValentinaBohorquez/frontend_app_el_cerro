import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Step2.css';

const Step2 = ({ formData, handleNextStep }) => {
    const [editedData, setEditedData] = useState({
        nombre: formData?.nombre || '',
        direccion: formData?.direccion || '',
        email: formData?.email || '',
        telefono: formData?.telefono || '',
        cedula: formData?.cedula || '',
    });

    const navigate = useNavigate();
    const location = useLocation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleIconClick = () => {
        navigate("/payment/step2");
    };

    // ...

    const handleNextClick = async () => {
        try {
            const checkUserUrl = `http://localhost:8080/AppElCerro/resources/usuario/usuarios/${editedData.cedula}`;
            const checkCartUrl = `http://localhost:8080/AppElCerro/resources/carrito/carritoUsuario/${editedData.cedula}`;

            const userResponse = await fetchUser(checkUserUrl);

            if (userResponse.ok) {
                await updateUser('http://localhost:8080/AppElCerro/resources/usuario/usuariosCambiar/', editedData);
                console.log(updateUser);
            } else {
                await createUser('http://localhost:8080/AppElCerro/resources/usuario/usuariosCrear', editedData);
                console.log(updateUser);
            }

            const userData = await userResponse.json();
            console.log('Respuesta del servidor (Usuario):', userData);

            const cartResponse = await fetchCart(checkCartUrl);

            if (!cartResponse.ok) {
                await createCart('http://localhost:8080/AppElCerro/resources/carrito/carritoCrear', editedData);
            }

            const cartData = await cartResponse.json();
            console.log('Respuesta del servidor (Carrito):', cartData);

            const cartId = cartData.id;
            await addProductsToCart(cartId);

            handleNextStep(editedData);
            navigate('/payment/step3');
        } catch (error) {
            console.error('Error general al realizar la solicitud:', error);
        }
    };

    const fetchUser = async (url) => {
        return await fetch(url, { mode: 'cors' });
    };

    const fetchCart = async (url) => {
        return await fetch(url, { mode: 'cors' });
    };

    const createUser = async (url, data) => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
        });
    };

    const updateUser = async (url, data) => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
        });
    };

    const createCart = async (url, data) => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario: {
                    cedula: data.cedula,
                },
            }),
            mode: 'cors',
        });
    };

    const addProductsToCart = async (cartId) => {
        const productsSelected = location.state.productsSelected;

        for (const productId of productsSelected) {
            const apiUrl = 'http://localhost:8080/AppElCerro/resources/detalle/detallesCrear';

            const requestBody = {
                id_carrito: {
                    id: cartId,
                },
                id_producto: {
                    id: productId,
                },
                cantidad: 1,
            };

            try {
                await addProductToCart(apiUrl, requestBody);
            } catch (error) {
                console.error('Error adding product to cart:', error);
            }
        }
    };

    const addProductToCart = async (url, data) => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
        });
    };


    return (
        <div className="step2-title">
            <div className="step2-title">
                <h2>Inicio &gt; Proceso de pago &gt; <span style={{ backgroundColor: 'white', color: 'black' }}>Step2</span></h2>
            </div>
            <div className="step2-title2">
                <h2>Información Personal </h2>
            </div>
            <div className="icons">
                <img src="https://i.postimg.cc/fRym7QLT/carrito-de-compras.png" alt="Carrito" />
                <span className="arrow">→</span>
                <button onClick={() => handleIconClick()} className="icon-button">
                    <div className="icon-background">
                        <img src="https://i.postimg.cc/qRxWQvD2/usuario.png" alt="Usuario" />
                    </div>
                </button>
                <span className="arrow">→</span>
                <img src="https://i.postimg.cc/YSrpHTcN/mano.png" alt="Mano" />
            </div>
            <div className="step2-title3">
                <div style={{ padding: '10px', background: '#AB8742' }}>
                    <h2>Realiza el siguiente formulario</h2>
                    <p>Realiza el formulario con tus datos personales, para cumplir de manera satisfactoria el proceso del envío de tu producto.</p>
                </div>
                <h3>Información personal</h3>
                <div className="input-field">
                    <div>
                        <label>
                            Nombre:
                            <input type="text" name="nombre" value={editedData.nombre} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Dirección:
                            <input type="text" name="direccion" value={editedData.direccion} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Teléfono:
                            <input type="tel" name="telefono" value={editedData.telefono} onChange={handleInputChange} />
                        </label>
                    </div>

                    <div>
                        <label>
                            Cédula:
                            <input type="text" name="cedula" value={editedData.cedula} onChange={handleInputChange} />
                        </label>
                    </div>
                </div>
                <button onClick={() => handleNextClick()} className="next-step-button">Siguiente paso</button>
            </div>
        </div>
    );
};

export default Step2;

