import React from 'react';
import { MdDesktopMac, MdCode, MdHealing ,MdPhonelink ,MdLaptopMac} from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdLaptopMac />}
            title="Web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdPhonelink />}
            title="Mobile and desktop design"
            desc="I also do ui/ux design for the mobile and desktop that make apps looks better."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="App Dev"
            desc="I develop cross-platform mobile applications. I create mobile apps with eye catching ui. "
          />
        </div>
{/* ------------------------------------ */}
        <div className="services__allItems">

          <ServicesSectionItem
            icon={<MdCode />}
            title="Web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Desk Dev"
            desc="Of corse with JavaFx i can develop modern and smooth desktop applications."
          />
          <ServicesSectionItem
            icon={<MdHealing />}
            title="Small IOT project"
            desc="I have some experience with embedded and iot, so I can be useful in this area two. :D ."
          />
        </div>

      </div>
    </ServicesItemsStyles>
  );
}
