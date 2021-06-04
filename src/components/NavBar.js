import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Bar, Links, Social, IconLink, NavbarLink } from "./Styles";

const NavBar = () => {
  return (
    <Bar>
      <Links>
        <StyledLink to="/">
          <NavbarLink>Home</NavbarLink>
        </StyledLink>
        <StyledLink to="about">
          <NavbarLink>About</NavbarLink>
        </StyledLink>
        <StyledLink to="projects">
          <NavbarLink>Projects</NavbarLink>
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

export const StyledLink = styled(Link)`
  padding-right: 15px;
  font-size: 19px;
  text-decoration: none;
`;

export default NavBar;
