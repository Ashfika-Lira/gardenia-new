import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";




import { useGetAllPostQuery } from "../../../hooks/useProducts";
import Header from "../../Shared/Header/Header";
import Products from "../../Products/Products";
import { Container, Row } from "react-bootstrap";
import Review from "../../Review/Review";
import Footer from "../../Shared/Footer/Footer";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import RecentProjects from "../RecentProjects/RecentProjects";
import FeatursImg from "../FeatursImg/FeatursImg";


const Home = () => {
  const { data } = useGetAllPostQuery();
  return (

    <div>
      <Navigation></Navigation>


    <>
      <Header></Header>
      <Navigation></Navigation>

      <Banner></Banner>


      <Banner></Banner>
      <FeatursImg></FeatursImg>

      <Container>
        <Row>
          {data?.slice(0, 6).map((items) => (
            <Products key={items._id} product={items}></Products>
          ))}
        </Row>
      </Container>
      <RecentProjects></RecentProjects>
      <Review></Review>
      <Contact></Contact>

    </div>

      <Footer></Footer>
    </>

  );
};

export default Home;
