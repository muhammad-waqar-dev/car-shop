import styled from "styled-components";
// import { Colors } from "../../utility/common/colors/Colors";

const MainLayoutContainer = styled.div`
background-image: url(${(props) => props?.imageUrl});
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

export { MainLayoutContainer };
