import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
    let {id} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(()=>{
        getProductDetail();
    }, []);

    const getProductDetail = async function() {
        let url = `https://my-json-server.typicode.com/juneif/noona-hnm//products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    return <Container>
        <Row>
            <Col className="product-img">
                <img src={product?.img}/>
            </Col>
            <Col>
                <div>{product?.title}</div>
                <div>{product?.price}</div>
            </Col>
        </Row>
    </Container>;
}

export default ProductDetail;