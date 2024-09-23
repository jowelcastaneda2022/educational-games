import { Carousel } from "react-bootstrap";
import Image from "next/image";

function Header() {
  return (
    <section id="hero">
      <Carousel className="container h-100 d-flex align-items-center">
        <Carousel.Item className="text-center">
          <Image
            src="/banner.gif"
            alt="banner-gif"
            style={{ height: "60vh", width: "auto" }}
            width="2000"
            height="2000"
          />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Image
            src="/3.png"
            alt="banner3"
            style={{ height: "60vh", width: "auto" }}
            width="2000"
            height="2000"
          />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Image
            src="/4.png"
            alt="banner4"
            style={{ height: "60vh", width: "auto" }}
            width="2000"
            height="2000"
          />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Image
            src="/5.png"
            alt="banner5"
            style={{ height: "60vh", width: "auto" }}
            width="2000"
            height="2000"
          />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Image
            src="/6.png"
            alt="banner6"
            style={{ height: "60vh", width: "auto" }}
            width="2000"
            height="2000"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Header;
