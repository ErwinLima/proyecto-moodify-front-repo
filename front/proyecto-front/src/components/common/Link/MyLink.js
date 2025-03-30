import React from "react";

const MyLink = ({ text, linkText, to }) => {
  return (
    <p className="register-text">
      {`${text} `}
      <a href={to} className="link">
        {linkText}
      </a>
    </p>
  );
};

export default MyLink;
