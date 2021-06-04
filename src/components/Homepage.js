import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Name, Title, Wrapper } from "./Styles";

const Homepage = () => {
  return (
    <Wrapper>
      <Title>
        Hi there! <br />
        I'm <Name>Gabriel Coronado</Name>, and this is my site
      </Title>
      <Button to="/projects">
        View my work <FaArrowRight size={17} />
      </Button>
    </Wrapper>
  );
};

export const Button = styled(Link)`
  width: 200px;
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  align-self: center;
`;

export default Homepage;
