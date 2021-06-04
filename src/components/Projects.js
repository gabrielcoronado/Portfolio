import React from "react";
import {
  Wrapper,
  ProjectTitle,
  Title,
  ProjectLink,
  TitleName,
  ProjectInfo,
  Project,
  Img
} from "./Styles";
import { FaGithub } from "react-icons/fa";
import techhut from "../assets/techhut-img.png";

const Projects = () => {
  return (
    <Wrapper>
      <TitleName>The projects i've created so far are:</TitleName>

      <Project>
        <ProjectTitle>
          <TitleName>The Couch Network</TitleName>
          <ProjectLink
            href="https://github.com/gabrielcoronado/C-Network"
            alt="github"
          >
            <FaGithub size={30} />
          </ProjectLink>
        </ProjectTitle>
        <ProjectInfo>
          The Couch Network is a project I created from scratch that is your
          go-to movie site where you will be able post reviews of your favourite
          movies and recommend them to your friends.
        </ProjectInfo>
        <div>
          {
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L-MP_xfHWYM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          }
        </div>{" "}
      </Project>
      <Project>
        <ProjectTitle>
          <TitleName>Tech Hut</TitleName>
          <ProjectLink
            href="https://github.com/hrrreaper/project-e-commerce"
            alt="github"
          >
            <FaGithub size={30} />
          </ProjectLink>
        </ProjectTitle>
        <ProjectInfo>
          This group project was completed over the course of one week as part
          of our coding bootcamp, in which we developed an e-commerce web app
          for wearable tech and designed the front as well as back-end.
        </ProjectInfo>
        <Img src={techhut} alt="Tech-Hut" />
      </Project>
    </Wrapper>
  );
};

export default Projects;
