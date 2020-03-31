import React from "react";
// Data
import Projects from "./Projects.json";
import Skills from "./Skills.json";
import Info from "./Info.json";
// External Components
import Project from "./Project";
import { TDSpacer, CustomSection, HashtagBtns } from "./Components";
// Styling
import StyleSheet from "../StyleSheet.json";

// Intro
export const IntroSection = () => (
  <CustomSection>
    <ul style={{ ...StyleSheet.listStyleTypeNone }} className="m-0 p-5">
      <li>
        <h1 className="display-2 mb-3">Quang Nguyen</h1>
      </li>
      <li>
        <h4 className="ml-2 font-weight-normal">
          Software Developer (iOS & Web)
        </h4>
      </li>
      <li className="ml-2 mt-3 mb-4">
        <HashtagBtns items={["#projects", "#skills&resumes", "#about"]} />
      </li>
      <li>
        <small>
          <pre className="d-inline ml-2 text-secondary headlineAnimated">
            &#60;!-- I make apps for ios and web. --&#62;
          </pre>
        </small>
      </li>
    </ul>
  </CustomSection>
);

// Projects
export const ProjectsSection = () => (
  <CustomSection id="projects">
    <ul className="list-inline w-100 m-0">
      <li>
        <pre className="ml-5 mb-5 text-secondary">&#60;projects&#62;</pre>
      </li>
      <li>
        <div style={{ overflowX: "auto" }} className="mb-4 pb-2">
          <table className="m-0">
            <tbody>
              <tr>
                <TDSpacer />
                {Projects.map((proj, idx) => (
                  <Project key={idx} proj={proj} />
                ))}
                <TDSpacer />
              </tr>
            </tbody>
          </table>
        </div>
        <small>
          <pre className="d-inline text-secondary ml-5 headlineAnimated">
            &#60;!-- Swipe right to see more... --&#62;
          </pre>
        </small>
      </li>
      <li>
        <pre className="ml-5 mt-5 text-secondary">&#60;&#47;projects&#62;</pre>
      </li>
    </ul>
  </CustomSection>
);

// Resumes
export const ResumesSection = () => (
  <CustomSection id="skills&resumes">
    <ul className="list-inline w-100 m-0 ml-5">
      {/* skills */}
      <li>
        <pre className="mb-4 text-secondary">&#60;skills&#62;</pre>
      </li>
      <li>
        <ul style={{ ...StyleSheet.listStyleTypeInside }}>
          <li>{`Languages: ${Skills.languages.join(", ")}.`}</li>
          <li>
            Web:
            <ul>
              <li className="ml-3">
                {`Front-End: ${Skills.web.frontEnd.join(", ")}.`}
              </li>
              <li className="ml-3">
                {`Back-End: ${Skills.web.backEnd.join(", ")}.`}
              </li>
            </ul>
          </li>
          <li>
            iOS:
            <ul>
              <li className="ml-3">
                {`Frameworks: ${Skills.ios.frameworks.join(", ")}.`}
              </li>
              <li className="ml-3">
                {`Databases: ${Skills.ios.databases.join(", ")}.`}
              </li>
              <li className="ml-3">
                {`Miscellaneous: ${Skills.ios.mics.join(", ")}.`}
              </li>
            </ul>
          </li>
          <li>{`Databases: ${Skills.databases.join(", ")}.`}</li>
          <li>{`Deployment: ${Skills.deployment.join(", ")}.`}</li>
          <li>{`Version Control: ${Skills.versionControl.join(", ")}.`}</li>
          <li>{`Softwares: ${Skills.others.join(", ")}.`}</li>
        </ul>
      </li>
      <li>
        <pre className="my-4 text-secondary">&#60;&#47;skills&#62;</pre>
      </li>
      {/* resumes */}
      <li>
        <pre className="my-4 text-secondary">&#60;resumes&#62;</pre>
      </li>
      <li>
        <a
          href="https://docs.google.com/document/d/1_uznigpMNJfjp69a4AntVCmOCb1DhDL9Is0fZbWOKw8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light border-0 rounded-0 mr-1"
        >
          General Resume
        </a>
        <a
          href="https://www.slideshare.net/slideshow/embed_code/key/I5DRyUj2QVZTBF"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light border-0 rounded-0 mr-1"
        >
          Software Engineer Resume
        </a>
        <a
          href="https://docs.google.com/document/d/1uCO6xavkAcmPusYNCzgKgrK51qrvVq7g23LmPDB4mwI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light border-0 rounded-0 mr-1"
        >
          iOS Dev. Resume
        </a>
      </li>
      <li>
        <pre className="mt-4 text-secondary">&#60;&#47;resumes&#62;</pre>
      </li>
    </ul>
  </CustomSection>
);

// About & Contact
export const AboutContactSection = () => (
  <CustomSection id="about">
    <ul className="list-inline m-0 p-5">
      <li>
        <pre className="mb-4 text-secondary">&#60;about&#62;</pre>
      </li>
      <li>
        <h1 className="mb-0">{Info.about.headline}</h1>
        <p className="text-secondary">{Info.about.subheadline}</p>
        <p className="mt-3">{Info.about.desc}</p>
      </li>
      <li>
        <pre className="my-4 text-secondary">&#60;&#47;about&#62;</pre>
      </li>
      <li>
        <pre className="my-4 text-secondary">&#60;contact&#62;</pre>
      </li>
      <li>
        <ul style={{ ...StyleSheet.listStyleTypeNone }}>
          {Info.contact.map((con, idx) => (
            <li key={idx}>{con}</li>
          ))}
        </ul>
      </li>
      <li>
        <pre className="mt-4 text-secondary">&#60;&#47;contact&#62;</pre>
      </li>
      <li className="mt-5">
        <small className="text-secondary">&copy; 2020 Quang Nguyen</small>
      </li>
    </ul>
  </CustomSection>
);
