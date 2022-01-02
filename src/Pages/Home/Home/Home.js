import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import RecentProjects from "../RecentProjects/RecentProjects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentProjects></RecentProjects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
