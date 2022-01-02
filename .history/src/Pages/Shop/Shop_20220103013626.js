import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useGetAllPostQuery } from '../../hooks/useProducts';
import Products from '../Products/Products';
import Header from '../Shared/Header/Header';

const Shop = () => {
    const { data } = useGetAllPostQuery();
    return (
      <>
        <Header />
        <Na
        <Container>
            <Row>
            {
                data?.map((items) => <Products
                    key={items._id}
                    product={items}
                ></Products>)
            }
        </Row>
        </Container>
      </>
    );
};

export default Shop;