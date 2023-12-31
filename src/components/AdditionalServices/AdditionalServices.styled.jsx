import styled from '@emotion/styled/macro';

export const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  padding: 30px 0 70px;
  background: #657396;
`;

export const ServicesImg = styled.img`
  display: block;
  margin: 0 auto;
  padding: 0;

  max-width: 50%;

  @media (min-width: 768px) {
    display: block;
    width: 40%;
  }
  @media (min-width: 1440px) {
    display: block;
    width: 30%;
  }
`;

export const Face1 = styled.div`
  position: relative;
  background: #333;
  background: #445c84;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(0);
  transition: 1s;
  height: 80px;
  border-radius: 14px;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1440px) {
    width: 150px;
    height: 150px;
  }
`;

export const Face2 = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transform: translateY(-80px);
  transition: 1s;
  height: 80px;
  border-radius: 16px;

  @media (min-width: 768px) {
    transform: translateY(-100px);
    height: 100px;
  }

  @media (min-width: 1440px) {
    transform: translateY(-150px);
    height: 150px;
  }
`;

export const ServiceContent = styled.div`
  opacity: 0.4;
  transition: 0.5s;
`;

export const ServiceCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1440px) {
    gap: 50px;
  }
`;

export const ServiceCard = styled.div`
  position: relative;
  cursor: pointer;
  width: 80px;
  height: 80px;
  transition: 0.5s;
  background: #333;
  border-radius: 16px;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1440px) {
    width: 150px;
    height: 150px;
  }
`;

export const ServiceImg = styled.img`
  width: 50px;
  height: 50px;
  display: block;

  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
    margin-left: 35px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-family: 'Manrope';
  @media (min-width: 768px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ServiceTitle = styled.h1`
  position: relative;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.4;
  text-shadow: 1px 1px 2px #5c5757;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 50px;
  }
`;
