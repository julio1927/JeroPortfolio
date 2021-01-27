import React from "react";
import Modal from "../../Modal/Modal";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function ProjectsPage() {
  return (
    <div id="ProjectsPage">
      <Container>
        <Button>View Project</Button>
      </Container>
    </div>
  );
}

export default ProjectsPage;
