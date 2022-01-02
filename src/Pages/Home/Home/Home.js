import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { useGetAllPostQuery } from "../../../hooks/useProducts";
import Header from "../../Shared/Header/Header";
import Products from "../../Products/Products";
import { Container, Row } from "react-bootstrap";

const Home = () => {
    const { data } = useGetAllPostQuery();
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
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

export default Home;
