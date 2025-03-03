import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';

function ProductDetailsPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for authentication token
        // const token = sessionStorage.getItem('authToken');
        // if (!token) {
        //     navigate('/app/login'); // Redirect to login page if token is not present
        //     return;
        // }

        const fetchProduct = async () => {
            try {
                const response = await fetch(`${urlConfig.backendUrl}/api/gifts/${productId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error; ${response.status}`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log('Fetch error: ' + error.message);
            }
        };

        fetchProduct();
    }, [productId, navigate]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <button onClick={() => navigate(-1)} className="btn btn-secondary mb-3">Back</button> {/* Add this button */}
            <div className="row">
                <div className="col-md-6">
                    {product.image ? (
                        <img src={product.image} alt={product.name} className="img-fluid" />
                    ) : (
                        <div className="no-image-available">No Image Available</div>
                    )}
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Condition: {product.condition}</p>
                    <p>Date Added: {new Date(product.date_added * 1000).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
