
/* eslint-disable camelcase */
import React, {  useState } from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  const {firstname,lastname,about_me_title,about_me_p1,about_me_p2,about_me_p3,about_me_p4,cv_fr_link,cv_eng_link,}=window.profile;
  const experience = window.experiences;;
  let [experiences, setExperiences] = useState([])
  
  useState(() => {
    if(experience.length >1){
      experiences = experience.sort((a, b) => a.data.order > b.data.order);
      setExperiences(experiences);
    }
  },[]);

  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>{firstname} {lastname}</span>
              </p>
              <h2 className="about__heading">{about_me_title}</h2>
              <div className="about__info">
                <PText>
                  {about_me_p1}
                  <br /><br />
                  {about_me_p2}
                  <br /><br />
                  {about_me_p3}
                  <br /><br />
                  {about_me_p4}
                </PText>
              </div>
              <row>
                <Button btnText="Download FR C.V" btnLink={cv_fr_link} />
                <Button btnText="Download ENG C.V" btnLink={cv_eng_link} />
              </row>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Technician"
                items={['The Higher Institute of Technological Studies (ISET)']}
              />
                <br/><br/>
              <AboutInfoItem
                title="Engineering"
                items={['Private Higher school of engineering and technology (ESPRIT)']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Symfony','Django DRF', 'Spring boot', '.Net Core']}
              />
              <AboutInfoItem
                title="Mobile"
                items={['Android', 'Flutter', 'CodeNameOne (java)']}
              />
              <AboutInfoItem
                title="Desktop"
                items={['JavaFX', 'Electron (React)']}
              />                            
              <AboutInfoItem
                title="Conception"
                items={['UML', 'AGILE', 'ISIS', 'ARES', 'Quartus Lite', 'UI', 'UX']}
              />                            
              <AboutInfoItem
                title="Protocols"
                items={['I2C', 'UART', 'SPI', 'MQTT']}
              />                            
              <AboutInfoItem
                title="Design"
                items={['Adobe XD', 'Figma']}
              />
            </div>

            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              {experiences
              .map((exp) => 
                  <AboutInfoItem
                  key={exp.data.createdDate}
                  title={exp.data.year}
                  items={[exp.data.title]}
                />
              )}

            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}


