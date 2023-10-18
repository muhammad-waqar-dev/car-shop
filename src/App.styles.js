import styled from "styled-components";

// Main application container
const AppContainer = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  width: 100%;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Overlay color */
    opacity: 1;
    pointer-events: none; /* Allow interaction with elements beneath */
  }
`;

// Overlay container Sub container handling types container styling
const TypesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  height: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);

  select {
    width: 300px;
  }
`;

const LogoContainer = styled.div`
  padding-bottom: 20px;
  img {
    width: 185px;
    height: 180px;
  }
`;

export { AppContainer, TypesContainer, FormContainer, LogoContainer };
