import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer-bg py-3" style={{
      // marginTop: "220px",
      width: "100%",
    }}>
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <h6 className="fw-light text-black text-decoration-none"><Link href="/" className=" text-decoration-none text-black">
              Crescendo Learning
            </Link></h6>
            <hr />
            <ul className="list-unstyled">
              <li className="my-3">
                <Link
                  href="/"
                  className="text-black text-decoration-none "
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/about-us"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> About Us
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/seller"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> Sell with Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="fw-light text-black mb-3">CONTACT US</h6>
            <hr />
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faEnvelope} height={20} />
              </span>
              <span className="fw-light text-black">learningame@crescendocollective.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faMapMarked} height={20} />
              </span>
              <span className="fw-light text-black">
                Angeles City, Pampanga Philippines
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} height={20} />
              </span>
              <span className="fw-light text-black">0987 654 3210</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="fw-light mb-3 text-black">FOLLOW US</h6>
            <hr />
            <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <Link
                  href="www.tiktok.com"
                  target="_blank"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon
                    icon={faTiktok}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
