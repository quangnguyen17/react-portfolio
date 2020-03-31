import React from "react";
// Styling
import StyleSheet from "../StyleSheet.json";

// Components
// TDSpacer
export const TDSpacer = () => <td style={{ minWidth: 48 }}></td>;

export const CustomSection = ({ id, children }) => (
  <div
    id={id}
    style={{
      ...StyleSheet.customSection,
      borderBottom: "0.3px solid rgb(240, 240, 240)"
    }}
    className="m-5 py-5"
  >
    {children}
  </div>
);

export const HashtagBtns = ({ items }) => (
  <ul className="list-inline m-0">
    {items.map((item, idx) => (
      <li key={idx} className="list-inline-item">
        <a href={item} className="btn btn-sm btn-light border-0 rounded-0">
          {item}
        </a>
      </li>
    ))}
  </ul>
);
