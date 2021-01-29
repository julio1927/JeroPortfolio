import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import { GlobalStyle } from '../../UI/GlobalStyle/GlobalStyle';

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

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(prev => !prev);
  }

  return (
    <div id="ProjectsPage">
      <Container>
        <Button onClick={openModal}>View Project</Button>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default ProjectsPage;
