import React from "react";
import TDSpacer from "./TDSpacer";
import { Badge } from "react-bootstrap";

const Project = ({ proj }) => {
  return (
    <>
      <td
        style={{ minWidth: 350, width: "auto", maxWidth: 375 }}
        className="align-top"
      >
        <h1 className="mb-1 font-weight-normal">{proj.name}</h1>
        <h6>
          <Badge variant="light" className="text-secondary rounded-0">
            Status:
            <span
              className={`text-${
                proj.status === "Live" ? "success" : "warning"
              } ml-1`}
            >
              {proj.status}
            </span>
          </Badge>
        </h6>
        <p className="m-0 mt-3 text-secondary">{proj.date}</p>
        <p className="mt-1">{proj.desc}</p>
        <ul className="ml-3 mb-3">
          {proj.mics.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="mb-2">
          <small className="text-secondary">
            {proj.categories
              .map(category => `#${category.replace(/ /g, "-")}`)
              .join(" ")}
          </small>
        </p>
        {proj.links.site && (
          <a
            className="btn btn-sm btn-dark rounded-0 border-0"
            href={proj.links.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        )}
        <a
          className="btn btn-sm btn-light rounded-0 border-0"
          href={proj.links.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </td>
      <TDSpacer />
    </>
  );
};

export default Project;
