import React from "react";
import { useGetAllPostQuery } from "../../../hooks/useProducts";

const Home = () => {
    const { data } = useGetAllPostQuery();
    console.log(data)
    return (
        <>
            {
                data && data.map((items) => <h2>{items.name}</h2>)
            }
        </>
    );
};

export default Home;
