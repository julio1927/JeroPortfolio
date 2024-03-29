import styled from "styled-components";

export const ProjectDiv = styled.div`
  background: #222831;
`;

export const ProjectHeader = styled.h1`
  color: #fff;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 20%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 400px;
  height: 500px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  font-weight: 500;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #222831;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2rem" : "1rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 10px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #c7c7c7;
  font-size: 0.8rem;
  line-height: 24px;
  text-align: justify;
  @media screen and (max-width: 640px) {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

export const ExternalLinks = styled.a`
  color: #FFF;
  text-decoration: none !important;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  background: #222831;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #3772FF;
    color: #FFF;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #3772FF;
  list-style: none;
  font-size: 1.1rem;
`;
