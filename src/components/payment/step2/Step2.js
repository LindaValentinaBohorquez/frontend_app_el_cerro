import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Step2.css';

const Step2 = ({ formData, handleNextStep }) => {
    const [editedData, setEditedData] = useState({
        cedula: formData?.cedula || '',
        correo: formData?.correo || '',
        direccion: formData?.direccion || '',
        nombre: formData?.nombre || '',
        telefono: formData?.telefono || '',
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

    const handleNextClick = async () => {
        try {
            console.log('Comenzando handleNextClick');

            const checkUserUrl = `http://localhost:8080/AppElCerro/resources/usuario/usuarios/${editedData.cedula}`;
            const checkCartUrl = `http://localhost:8080/AppElCerro/resources/carrito/carritoUsuario/${editedData.cedula}`;

            const userResponse = await fetchUser(checkUserUrl);

            console.log('userResponse:', userResponse);

            if (userResponse === null) {
                console.log('Usuario no encontrado, creando nuevo usuario');

                // Usuario no encontrado, crear nuevo usuario
                const createUserResponse = await createUser('http://localhost:8080/AppElCerro/resources/usuario/usuariosCrear', editedData);

                console.log('createUserResponse:', createUserResponse);

                if (!createUserResponse.ok) {
                    throw new Error('Error al crear usuario');
                }

                console.log('Usuario creado con éxito');

                // Usuario creado, crear carrito asociado
                const createCartResponse = await createCart('http://localhost:8080/AppElCerro/resources/carrito/carritoCrear', editedData);

                console.log('createCartResponse:', createCartResponse);

                if (!createCartResponse.ok) {
                    throw new Error('Error al crear carrito');
                }

                console.log('Carrito creado con éxito');
            } else if (!userResponse.ok) {
                console.log('Usuario encontrado, actualizando usuario');

                // Usuario encontrado, actualizar usuario
                await updateUser('http://localhost:8080/AppElCerro/resources/usuario/usuariosCambiar/', editedData);
            }

            console.log('Continuando con el resto del código');

            const cartResponse = await fetchCart(checkCartUrl);

            if (cartResponse !== null && typeof cartResponse === 'object' && 'id' in cartResponse) {
                const cartId = cartResponse.id;
                console.log('cartId:', cartId);

                // Puedes acceder a otras propiedades si las necesitas
                const cartActivo = cartResponse.activo;
                console.log('cartActivo:', cartActivo);

                await addProductsToCart(cartId);
            } else {
                console.error('Error: La respuesta del servidor para el carrito no es un objeto válido o no contiene una propiedad "id" válida.');
            }
            navigate("/payment/step3");

        } catch (error) {
            console.error('Error general al realizar la solicitud:', error.message);
        }
    };


    const parseJsonResponse = async (response, entityName) => {
        try {
            if (response && response.headers && response.headers.get('content-type') && response.headers.get('content-type').includes('application/json')) {
                const json = await response.json();

                // Log the JSON content for debugging
                console.log(`${entityName} JSON response:`, json);

                // Check if the response is an object with an 'id' property
                if (json && typeof json === 'object' && 'id' in json) {
                    return json.id;
                }

                // If the response does not have an 'id' property, consider it invalid
                console.error(`Error: La respuesta del servidor para ${entityName} no contiene una propiedad 'id' válida.`);
                throw new Error(`Error: La respuesta del servidor para ${entityName} no contiene una propiedad 'id' válida.`);
            } else {
                const errorMessage = await response.text();
                console.error(`Error: La respuesta del servidor para ${entityName} no es un JSON válido. Detalles: ${errorMessage}`);
                throw new Error(`Error: La respuesta del servidor para ${entityName} no es un JSON válido. Detalles: ${errorMessage}`);
            }
        } catch (jsonError) {
            console.error(`Error al analizar la respuesta JSON para ${entityName}:`, jsonError);
            throw jsonError;
        }
    };



    const fetchUser = async (url) => {
        try {
            const response = await fetch(url, { mode: 'cors' });

            if (!response.ok) {
                // Si el usuario no existe (estado 404), se crea un nuevo usuario
                if (response.status === 404) {
                    return null;
                }

                throw new Error(`Error fetching user. Status: ${response.status}`);
            }

            return response;
        } catch (error) {
            console.error('Error in fetchUser:', error);
            throw error;
        }
    };

    const fetchCart = async (url) => {
        try {
            const response = await fetch(url, { mode: 'cors' });

            console.log('Response from fetchCart:', response);

            if (!response.ok) {
                // Si el carrito no existe (estado 404), devolver null
                if (response.status === 404) {
                    console.log('Cart not found. Returning null.');
                    return null;
                }

                throw new Error(`Error fetching cart. Status: ${response.status}`);
            }

            const cartDataArray = await response.json();
            console.log('Cart data array:', cartDataArray);

            // Si esperas un solo objeto, puedes devolver el primer elemento del array
            return cartDataArray.length > 0 ? cartDataArray[0] : null;
        } catch (error) {
            console.error('Error in fetchCart:', error);
            throw error;
        }
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
        try {
            return await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'cors',
            });
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw error;
        }
    };

    const createCart = async (url, data) => {
        try {
            const randomCartId = generateRandomId(8);

            const cartData = {
                id: parseInt(randomCartId),
                id_usuario: {
                    cedula: data.cedula.toString()
                }
            };

            return await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartData),
                mode: 'cors',
            });
        } catch (error) {
            console.error('Error al crear carrito:', error);
            throw error;
        }
    };

    const generateRandomId = (length) => {
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const addProductsToCart = async (cartId) => {
        try {
            const productsSelected = localStorage.getItem('productsSelected')?.split(";");
    
            console.log('Productos seleccionados:', productsSelected);
    
            if (productsSelected && productsSelected.length > 0) {
                console.log('Agregando productos al carrito. ID del carrito:', cartId);
    
                // Filtra y verifica que los valores sean strings numéricos
                const validProductIds = productsSelected.filter(value => /^\d+$/.test(value));
    
                console.log('IDs de productos a agregar al carrito:', validProductIds);
    
                for (const productId of validProductIds) {
                    const apiUrl = 'http://localhost:8080/AppElCerro/resources/detalle/detallesCrear';
    
                    const requestBody = {
                        id_carrito: {
                            id: parseInt(cartId),
                        },
                        id_producto: {
                            id: productId,
                        },
                        cantidad: 1  // Puedes dejarlo como número si es apropiado
                    };
    
                    try {
                        console.log('Agregando producto al carrito. ID del producto:', productId);
                        await addProductToCart(apiUrl, requestBody);
                        console.log('Producto agregado al carrito con éxito.');
                    } catch (error) {
                        console.error('Error al agregar producto al carrito:', error);
                        throw error;
                    }
                }
    
                console.log('Todos los productos agregados al carrito.');
            } else {
                console.log('No hay productos seleccionados para agregar al carrito.');
            }
        } catch (error) {
            console.error('Error al agregar productos al carrito:', error);
            throw error;
        }
    };
    
    // Resto del código (sin cambios)
    
    
    
    const addProductToCart = async (url, data) => {
        try {
            console.log('Making API request to add product to cart. URL:', url);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'cors',
            });
    
            if (!response.ok) {
                console.error('Error adding product to cart. Status:', response.status);
                throw new Error(`Error adding product to cart. Status: ${response.status}`);
            }
    
            console.log('Product added to cart successfully.');
            return response;
        } catch (error) {
            console.error('Error adding product to cart:', error);
            throw error;
        }
    };
    




    return (
        <div className="step2-title">
            <div className="step2-title">
                <h2>Inicio &gt; Proceso de pago &gt; <span style={{ backgroundColor: 'white', color: 'black' }}>Información personal</span></h2>
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
                            <input type="text" name="correo" value={editedData.email} onChange={handleInputChange} />
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

