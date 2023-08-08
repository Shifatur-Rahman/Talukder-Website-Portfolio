import React from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TeamMemberMessage from "../components/TeamMemberMessage/TeamMemberMessage";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const TeamMemberMessagePage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <>
      <TopNavigation title="Talukder Group" />
      <PageTop pageTitle="Message from Management" />
      <TeamMemberMessage />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default TeamMemberMessagePage;
