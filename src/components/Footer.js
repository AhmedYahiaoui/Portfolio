import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Ahmed Yahyaoui</h1>
          <PText>
            I am a software engineer specialized in full stack development.
            Now! I am a freelance web, mobile and desktop application designer and developer.
            I create professional content. I love art and I always try to show unique views to the audience through my design.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+216 50 77 90 17',
                path: 'tel:+216 50 77 90 17',
              },
              {
                title: 'ahmed.yahyaoui.2@esprit.tn',
                path: 'mailto:ahmed.yahyaoui.2@esprit.tn',
              },
              {
                title: 'Tunis , Tunisia',
                path: 'https://www.google.com/maps/place/Tunis/@36.8068464,10.175792,14.92z/data=!4m5!3m4!1s0x12fd337f5e7ef543:0xd671924e714a0275!8m2!3d36.8065015!4d10.1815367',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/Ahmed.yahyawii/',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/ahmed-yahyaoui-b26191b1/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/yahiaouii_ahmed/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/AhmedYahiaoui',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Ahmed yahyaoui | By 'Black Hummer'
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
