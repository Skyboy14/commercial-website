"use client"
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import HeadingCarousel from '@/components/HeadingCarousel';
import IndustrialSection from '@/containers/IndustrialSection';
import WhoAreWeSection from '@/containers/WhoAreWeSection';
import OurServicesSection from '@/containers/OurServicesSection';
import React from 'react';
import WhatWeDoSection from '@/containers/WhatWeDoSection';
import BookDemoSection from '@/containers/BookDemoSection';


const Home = () => {
  return (
    <div>
      <Header />
      <HeadingCarousel />
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
