import styled from "styled-components";
import "./banner.css";
import { Link } from "react-router-dom";

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 12;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const BannerComponent = styled.p`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Lora", serif;
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
    span {
      padding: 0.5rem 1rem;
    }
  }
`;

const Banner = () => {
  return (
    <div className="pt-12 bg-black rounded-t-3xl">
      <SectionWrapper>
        <Container id="up">
          <BannerComponent>
            <Link to="/services/photography">
              <img
                src="img/Photo.webp"
                className="ban-pic"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="10"
                data-scroll-target="#up"
                alt="Image 1"
              />
            </Link>
          </BannerComponent>
          <BannerComponent>
            <Link to="/services/branding">
              <img
                src="img/bran.webp"
                className="ban-pic"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-6"
                data-scroll-target="#up"
                alt="Image 2"
              />
            </Link>
          </BannerComponent>
          <BannerComponent>
            <Link to="/services/marketing">
              <img
                src="img/market.webp"
                className="ban-pic"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="6"
                data-scroll-target="#up"
                alt="Image 3"
              />
            </Link>
          </BannerComponent>
          <BannerComponent>
            <Link to="/services/web">
              <img
                src="img/web.webp"
                className="ban-pic"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-4"
                data-scroll-target="#up"
                alt="Image 4"
              />
            </Link>
          </BannerComponent>
          <BannerComponent>
            <Link to="/services/space">
              <img
                src="img/space.webp"
                className="ban-pic"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="3"
                data-scroll-target="#up"
                alt="Image 5"
              />
            </Link>
          </BannerComponent>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default Banner;
