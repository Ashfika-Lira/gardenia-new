import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { useGetAllPostQuery } from "../../../hooks/useProducts";
import Header from "../../Shared/Header/Header";
import Products from "../../Products/Products";
import { Container, Row } from "react-bootstrap";
=======
import Review from "../../Review/Review";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

>>>>>>> 8be12aa70b69f5bcafcb617a4f8b062924c63167

const Home = () => {
    const { data } = useGetAllPostQuery();
    return (
        <>
            <Header></Header>
<<<<<<< HEAD
            <Navigation></Navigation>
            <Container>
            <Row>
=======
            <Review></Review>
            <Footer></Footer>
            
>>>>>>> 8be12aa70b69f5bcafcb617a4f8b062924c63167
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
