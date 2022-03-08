import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import HomeCourses from "../HomeCourses/HomeCourses";
import HomeFeature from "../HomeFeature/HomeFeature";
import HomeResource from "../HomeResource/HomeResource";
import HomeReview from "../HomeReview/HomeReview";
import HomeTips from "../HomeTips/HomeTips";

const Home = () => {
 return (
  <>
   <Banner />
   <HomeFeature />
   <HomeCourses />
   <HomeResource />
   <HomeTips />
   <HomeReview />
   <HomeBlogs />
   <Footer />
  </>
 );
};

export default Home;
