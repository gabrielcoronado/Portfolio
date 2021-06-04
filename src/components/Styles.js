import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 30px 30px 30px;
  text-align: center;
  flex-direction: column;
`;

export const Name = styled.span`
  /* color: #f50057; */
  color: #ffffe9;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 120px;
  font-weight: 700;
  font-size: 5em;
`;

export const TitleName = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 3em;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 4px;
  align-self: center;
  /* border: 1px solid white; */
  /* border: 1px solid #f50057; */

  :hover {
    color: white;
  }
`;

export const Bar = styled.div`
  width: 100%;
  display: flex;
  height: 85px;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLink = styled.p`
  font-size: 28px;
  margin-right: 20px;
  font-weight: bold;

  :hover {
    color: white;
    border-bottom: 1px solid #ffffe9;
  }
`;

export const ProjectLink = styled.a`
  font-size: 28px;
  margin-left: 15px;
  font-weight: bold;
  padding-top: 12px;
  align-items: baseline;

  :hover {
    color: white;
  }
`;

export const Links = styled.div`
  display: flex;
  padding-left: 20px;
  flex-direction: row;
`;

export const Social = styled.div`
  padding-right: 20px;

  :hover {
    color: #ffffe9;
  }
`;

export const Project = styled.div`
  /* padding-top: 30px; */
`;

export const IconLink = styled.a`
  padding-right: 15px;

  :hover {
    color: #ffffe9;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectInfo = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const Img = styled.img`
  width: 850px;
  padding: 0 100px;
`;
