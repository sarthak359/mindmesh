import Link from "next/link";
import Spline from "@splinetool/react-spline";

import { SignedIn, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="container">
      <header>
        <h1 data-aos="fade-down" data-aos-duration="1500" className="logo">
          <Link href="/">MindMesh</Link>
        </h1>
        <nav>
          <Link
            data-aos="fade-down"
            data-aos-duration="1500"
            className="links"
            href="/"
          >
            Home
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="2000"
            className="links"
            href="/"
          >
            About
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="2500"
            className="links"
            href="/"
          >
            Contact
          </Link>
        </nav>
        <div data-aos="fade-down" data-aos-duration="2500">
          <UserButton showName />
        </div>
      </header>
      <main>
        {" "}
        <div className="content">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="1500"
            className="tag-box"
          >
            <div className="tag">Introducing &gt; </div>
          </div>
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            THOUGHTS <br />
            FOR TOMORROW
          </h1>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2500"
            className="description"
          >
            MindMesh is your personal AI-powered thinking partner — designed to
            understand your emotions, reflect on your thoughts, and guide you
            through clarity.
          </p>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="buttons"
          >
            <Link className="btn-getstarted" href="#">
              Documentation &gt;
            </Link>
            <Link className="btn-signin-main" href="/Artificial">
              Getstarted &gt;
            </Link>
          </div>
        </div>
        <Spline
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="3000"
          className="robot-3d"
          scene="https://prod.spline.design/Rze2Dq-zpXK3UxzV/scene.splinecode"
        />
      </main>
    </div>
  );
};

export default Navbar;
