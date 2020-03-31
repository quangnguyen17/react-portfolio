import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithubAlt,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import StyleSheet from "../StyleSheet.json";

const SocialList = () => {
  const [links] = useState([
    {
      url: "https://www.linkedin.com/in/quangnguyen2001/",
      element: <FaLinkedinIn size={34} />
    },
    {
      url: "https://github.com/quangnguyen17",
      element: <FaGithubAlt size={34} />
    },
    {
      url: "https://www.instagram.com/quangd_nguyen/",
      element: <FaInstagram size={34} />
    },
    {
      url: "https://www.facebook.com/profile.php?id=100023587177082",
      element: <FaFacebookF size={34} />
    },
    {
      url: "https://twitter.com/Wangnguyen01",
      element: <FaTwitter size={34} />
    }
  ]);

  const DarkLink = props => (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark"
    >
      {props.children}
    </a>
  );

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        flexFlow: "row wrap",
        alignItems: "center",
        ...StyleSheet.listStyleTypeNone
      }}
      className="w-100 h-100 m-0 py-5"
    >
      {links.map((item, idx) => (
        <li key={idx} className="w-100 p-0">
          <DarkLink href={`${item.url}`}>{item.element}</DarkLink>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
