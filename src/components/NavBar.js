import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <Bar>
      <Links>
        <StyledLink to="/">
          <p>Home</p>
        </StyledLink>
        <StyledLink to="about">
          <p>About</p>
        </StyledLink>
        <StyledLink to="projects">
          <p>Projects</p>
        </StyledLink>
      </Links>
      <Social>
        <IconLink href="https://www.linkedin.com/in/gabrielecoronado/">
          <FaLinkedin size={27} />
        </IconLink>
        <IconLink href="https://github.com/gabrielcoronado">
          <FaGithub size={27} />
        </IconLink>
      </Social>
    </Bar>
  );
};

const Bar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  padding-left: 20px;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  padding-right: 15px;
  font-size: 19px;
  text-decoration: none;
`;

const Social = styled.div`
  padding-right: 20px;
`;

const IconLink = styled.a`
  padding-right: 15px;
`;

export default NavBar;
