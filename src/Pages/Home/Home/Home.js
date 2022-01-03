import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import RecentProjects from "../RecentProjects/RecentProjects";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>

      <Banner></Banner>
      <RecentProjects></RecentProjects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
