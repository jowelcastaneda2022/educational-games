import Link from "next/link";

export default function Title() {
  return (
    <div className="title" style={{ zIndex: 1 }}>
      <h1>
        <span className="first-part">
          <Link rel="icon" href="/">
            <span className="first-part">Colour Memo</span>
          </Link>
        </span>
      </h1>
    </div>
  );
}
