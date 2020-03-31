import React from "react";
// External Components
import {
  IntroSection,
  ProjectsSection,
  ResumesSection,
  AboutContactSection
} from "./components/Sections";
import SocialList from "./components/SocialList";
// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";
// CSS, Styling
import StyleSheet from "./StyleSheet.json";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col
            style={{ ...StyleSheet.sizeFullScreen }}
            md={1}
            className="p-0 bg-light text-center slide-in-left"
          >
            <SocialList />
          </Col>
          <Col
            style={{
              ...StyleSheet.sizeFullScreen,
              overflowX: "hidden",
              scrollSnapType: "y mandatory"
            }}
            md={11}
            className="p-0 slide-in-right"
          >
            <IntroSection />
            <ProjectsSection />
            <ResumesSection />
            <AboutContactSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
