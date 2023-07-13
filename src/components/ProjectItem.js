import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';
import github from '../assets/icons/github.png'
import figma from '../assets/icons/figma.png'

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
  .projectItem__desc2 {
    font-size: 1.4rem;
    font-family: 'RobotoMono Regular';
    margin-top: 0.1rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  id = '',
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  desc2 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  githubLink = '',
}) {
  return (
    <ProjectItemStyles>
      <Link to={`/project/${id}`} className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to= {`/project/${id}`}>
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc" style={{maxLines:1}}>{desc}</p>
        <br/>
      </div>

      <div className="projectItem__info">
        <p className="projectItem__desc2">{desc2}</p>
      </div>

      <a href={githubLink} target="_blank" rel="noreferrer">
        <img key={github} src={github} alt="Icon" style={{ width: 30, height: 30, marginTop: 10, marginRight: 15}} />
        <img key={figma} src={figma} alt="Project" style={{ width: 20, height: null, marginTop: 10 }} />
      </a>
    </ProjectItemStyles>
  );
}
