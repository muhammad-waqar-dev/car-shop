import React from "react";
import { Container} from "react-bootstrap";
import { MainLayoutContainer } from "./Layout.styles";
import backgroundImage from "../../assets/images/main-bg.jpg";

const Layout = ({ children }) => {
  return (
    <MainLayoutContainer imageUrl={backgroundImage}>
    <Container fluid className="px-0 main">
            <main>{children}</main>
    </Container>
    </MainLayoutContainer>
  );
};

export default Layout;