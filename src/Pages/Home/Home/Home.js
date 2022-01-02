import React from "react";
import { useGetAllPostQuery } from "../../../hooks/useProducts";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Home = () => {
    const { data } = useGetAllPostQuery();
    console.log(data)
    return (
        <>
            <Header></Header>
            <Footer></Footer>
            {
                data && data.map((items) => <h2>{items.name}</h2>)
            }
        </>
    );
};

export default Home;
