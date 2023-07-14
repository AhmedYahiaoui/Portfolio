import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { doc, getDoc } from 'firebase/firestore';
import github from '../assets/icons/github.png'
import figma from '../assets/icons/figma.png'
import SectionTitle from '../components/SectionTitle';
import { iconName } from '../tools';
import { db,storage} from '../firebase'

function Project() {
  const { id } = useParams(); // Access the dynamic ID value
  const projectId = id;

  const initialvalues = {
    id: '',
    description: '',
    github_link: '',
    title: '',
    tech: [],
    subtitle: '',
    image_cover: '',
    isWeb : false,
  };
  const [project, setProject] = useState(initialvalues);
  const [projectImage, setProjectImage] = useState([]);
  const [projectIcon, setProjectIcon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const documentRef = doc(db, 'projects', projectId);
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
          const documentData = documentSnapshot.data();
          setProject(documentData);
          if (project !== null && project.tech !== null && Array.isArray(project.tech) && project.tech.length>0 ) {
            setProjectIcon(documentData.tech.map((tech) => iconName(tech)).filter((icon) => icon !== 'null'));
          }
          const listRef = ref(storage, `/screenshots/${projectId}/`);
          const listResult = await listAll(listRef);
          
          const imagePromises = listResult.items.map(async (itemRef) => {
              const starsRef = ref(storage, `/screenshots/${projectId}/${itemRef.name}`);
              const url = await getDownloadURL(starsRef);
              return ({ url, name: itemRef.name }); // Include the image name in the resolved promise
            });

          const imageResults = await Promise.all(imagePromises);
          const sortedImages = imageResults
            .filter((image) => image.url !== documentData.image_cover && !image.url.endsWith('_cover.png'))
            .sort((a, b) => {
              const aNumber = parseInt(a.name.split('.')[0]);
              const bNumber = parseInt(b.name.split('.')[0]);
              return aNumber - bNumber;
            });
          const filteredImageUrls = sortedImages.map((image) => image.url);
          setProjectImage(filteredImageUrls);

        }
      } catch (error) {
        console.log('Error fetching project data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectData();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  let projectTechContent;

  const projectIconContent = projectIcon.map((image, index) => (
    <img
      key={index}
      src={image}
      alt="Project Icon"
      style={{ width: 50, height: 50, marginRight: 10 }}
    />
  ));

  if (project !== null && project.tech !== null && Array.isArray(project.tech)) {
    projectTechContent = project.tech.map((tech) => (
      <div className="projectItem__info" style={{ display: 'inline-block', marginRight: 5 }}>
        <p className="projectItem__desc2">{tech}</p>
      </div>
    ));
  }


  const projectImageContent = projectImage.map((image) => (
    <div
      key={image}
      role="button"
      tabIndex={0}
      onClick={() => openModal(image)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          openModal(image);
        }
      }}
      style={{
        display: 'inline-block', // Display images in a row
        marginRight: 35, // Add some spacing between images
        marginBottom : project.isWeb ? 20 : 35,
        cursor: 'pointer',
      }}
    >
      <img src={image} alt="Project Screenshot" style={{ width: project.isWeb ? '100%' : 250, height: 550 , objectFit: project.isWeb ? 'contain' : '' }} />
    </div>
  ));


  return (
    <div>
      <br />
      <br />
      <br />
      <AboutSectionStyles>
        <div className="container">
          <div className="aboutSection__left">
            <div style={{ flexDirection: 'row', marginBottom: 10 }}>
              {projectIconContent}
            </div>
            <SectionTitle subheading={project.subtitle} heading={project.title} />
            <PStyle className="para">{project.description}</PStyle>

            {projectTechContent}
            <div>
              <a href={project.github_link} target="_blank" rel="noreferrer">
                <img key={github} src={github} alt="Icon" style={{ width: 30, height: 30, marginTop: 10, marginRight: 15}} />
                <img key={figma} src={figma} alt="Project" style={{ width: 20, height: null, marginTop: 10 }} />
              </a>
            </div>
          </div>
          <div className="aboutSection__right">
            <img
              className="aboutImg"
              src={project.image_cover}
              alt="Project Cover"
              style={{ maxHeight: 800, maxWidth: 750, minWidth: 300 }}
            />
          </div>
        </div>
      </AboutSectionStyles>
      <br />
      <br />
      <br />
      <AboutSectionStyles>
        <div className="container">
          <div style={{ flexDirection: project.isWeb ?'column' :'row', marginBottom: 10 }}>{projectImageContent}</div>
        </div>
      </AboutSectionStyles>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <img
            src={selectedImage}
            alt="Selected Project Screenshot"
            style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
          />
        </div>
      )}

    </div>
  );
}

export default Project;

const AboutSectionStyles = styled.div`
  padding: 10rem ;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 1rem;
  }
  .projectItem__desc2 {
    font-size: 1.2rem;
    font-family: 'RobotoMono Regular';
    margin-top: 0.1rem;
  }
  .projectItem__info {
    margin-top: 0.8rem;
    background-color: var(--deep-dark);
    padding: 0.8rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.35rem;
  line-height: 2em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;