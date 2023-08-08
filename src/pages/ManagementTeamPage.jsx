import React from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import BoardOfDirector from "../components/BoardOfDirector/BoardOfDirector";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const ManagementTeamPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Management Team" />
      {/* <TeamManagement /> */}
      <BoardOfDirector />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default ManagementTeamPage;
