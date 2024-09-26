import Link from "next/link";
import React from "react";

const GameLink = ({ text, path }) => {
  return (
    <Link href={path ? path : "/eduquest-game"}>
      <div className="game-link">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="text">{text}</span>
      </div>
    </Link>
  );
};

export default GameLink;
