import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";


import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import RecentProjects from "../RecentProjects/RecentProjects";


const Home = () => {
  return (

    <div>

      <h1>This is Home page </h1>
      <h2>Branch Created</h2>

      
          <Navigation></Navigation>
          <h1>This is Home page </h1>
          


      <Banner></Banner>
      <RecentProjects></RecentProjects>
      <Contact></Contact>

    </div>
  );
};

export default Home;
