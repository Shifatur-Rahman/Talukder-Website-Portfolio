import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Concern from "../components/Concern/Concern";
import Footer from "../components/Footer/Footer";

const ConcernPage = () => {
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Our Concern" />
      <Concern />
      <Footer />
    </>
  );
};

export default ConcernPage;
