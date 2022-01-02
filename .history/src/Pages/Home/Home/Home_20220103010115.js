import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { useGetAllPostQuery } from "../../../hooks/useProducts";
import Header from "../../Shared/Header/Header";
import Products from "../../Products/Products";
import { Container, Row } from "react-bootstrap";
import Review from "../../Review/Review";
import Footer from "../../Shared/Footer/Footer";
// import Header from "../../Shared/Header/Header";



import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import RecentProjects from "../RecentProjects/RecentProjects";


const Home = () => {



     

      
      

    const { data } = useGetAllPostQuery();
    return (
        <>
             
            <Header></Header>

            <Navigation></Navigation>
           
                
                    <Banner></Banner>
      <RecentProjects></RecentProjects>
      <Contact></Contact>
            <Review></Review>
            
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
