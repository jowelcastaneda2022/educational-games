import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { Container, Spinner, Image } from "react-bootstrap";
import AnimatedBg from "../components/AnimatedBg/index.js";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Container className="loader-container">
        <div className="loader-contents">
          <Image src="/title.png" alt="" fluid />
          <br />
          <br />
          <Spinner
            animation="border"
            variant="purple"
            className="custom-spinner"
          />
        </div>
      </Container>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>Crescendo Learning</title>
          <link rel="icon" href="/title.png" />
        </Head>
        <AnimatedBg />
        <main>
          <NavigationBar />
          <Collection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
