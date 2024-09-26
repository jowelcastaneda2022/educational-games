import React from "react";
import Link from "next/link";

const PageHeader = ({ text, path }) => {
  return (
    <div className="page-header">
      <Link href={path ? path : "/eduquest-game"}>
        <div className="back-link">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="text">{text}</span>
        </div>
      </Link>
    </div>
  );
};

export default PageHeader;
