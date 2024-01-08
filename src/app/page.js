"use client"
import React from 'react';
import Header from '@/containers/Header';
import HeadingCarouselSection from '@/containers/HeadingCarouselSection';
import IndustrialSection from '@/containers/IndustrialSection';
import WhoAreWeSection from '@/containers/WhoAreWeSection';
import OurServicesSection from '@/containers/OurServicesSection';
import WhatWeDoSection from '@/containers/WhatWeDoSection';
import BookDemoSection from '@/containers/BookDemoSection';
import Footer from '@/containers/Footer';


const Home = () => {
  return (
    <div>
      <Header />
      <HeadingCarouselSection />
      <IndustrialSection />
      <WhoAreWeSection />
      <OurServicesSection />
      <WhatWeDoSection />
      <BookDemoSection />
      <Footer />
    </div>
  );
};

export default Home;
