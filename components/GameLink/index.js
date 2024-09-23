import Link from "next/link";
import React from "react";

const GameLink = ({ text, path }) => {
  return (
    <Link className="game-link" href={path ? path : "/"}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="text">{text}</span>
    </Link>
  );
};

export default GameLink;
