// import React, { useState, useEffect } from 'react';
// import { Slider } from 'components/Slider/Slider';
import HeroSection from 'components/HeroSection/HeroSection';
import Container from 'components/Container/Container';
import BtnToTop from 'components/Buttons/BtnToTop';
import {
  HomeSection,
  HomeTextMain,
  HomeTextSecondary,
  RedCarImg,
  HomeWrapper,
  ContentWrapper,
} from './Home.styled';
// import AdditionalServices from 'components/AdditionalServices/AdditionalServices';

import redCar from 'images/redCar.jpg';

const Home = ({ data }) => {
  // const [isAnimated, setIsAnimated] = useState(false);

  // useEffect(() => {
  //   setIsAnimated(true);
  // }, []);

  return (
    <>
      <BtnToTop />
      <HeroSection />
      {/* <AdditionalServices /> */}
      <HomeSection>
        <Container>
          <HomeWrapper>
            <RedCarImg src={redCar} alt="red car" />
            <ContentWrapper>
              {/* <Slider cars={data} /> */}
              <HomeTextMain>
                <span style={{ color: '#8d98a9' }}>Open the Road</span> to
                Adventure with Our Car Rental Service!
              </HomeTextMain>
              <HomeTextSecondary>
                The ultimate solution for hassle-free car rentals! With a wide
                range of vehicles to choose from, our user-friendly interface
                simplifies the process of renting a car.
              </HomeTextSecondary>
            </ContentWrapper>
          </HomeWrapper>
        </Container>
      </HomeSection>
    </>
  );
};

export default Home;
