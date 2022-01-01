import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";



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
>>>>>>> 2147a03e3055a3fb4a41a73baa8801319445823b
};

export default Home;
