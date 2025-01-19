"use client";
import React from "react";
import { Navbar } from "flowbite-react";
import CountdownPopup from "./countdown";
import Banner from "./assets/banner.jpg";
import Aboutimg from "./assets/about-us.jpg";
import { Card } from "flowbite-react";
import "../src/css/embla.css";
import EmblaCarousel from "./Js/EmblaCarousel";
import TiltedScroll from "./TiltedScroll";
import classimg from "./assets/11class.jpeg";
import classimg2 from "./assets/12class.jpeg";
import cbse from "./assets/CBSE.jpeg";
import cuet from "./assets/cutetaspirent.jpeg";
import affordibilty from "./assets/affordibilty.png";
import expert from "./assets/expert.png";
import success from "./assets/stories.png";
import recorded from "./assets/online.png";

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
function Home() {
  return (
    <>
    <div>
      <CountdownPopup />
    </div>
      {/* Navbar */}

      <Navbar fluid rounded className="bg-zinc-900 text-yellow-400 font-sans">
        <Navbar.Brand href="">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 bg-yellow-400 text-black rounded-lg p-2">
          <button> Contact Us</button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-yellow-400">
            Assignment
          </Navbar.Link>
          <Navbar.Link href="#" className="text-yellow-400">
            MCQ Test
          </Navbar.Link>
          <Navbar.Link href="#" className="text-yellow-400">
            Blog
          </Navbar.Link>
          <Navbar.Link href="#" className="text-yellow-400">
            Login
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* navbar-end */}

      {/* Hero Section */}
      {/* <section>
        <div className="container mx-auto relative ">
          <img src={Banner} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {" "}
              <span className="text-6xl">Master Economics</span> <br /> with
              Expert Guidance
            </h1>
          </div>
        </div>
      </section> */}
      {/* Hero Section End */}
      <section className="bg-black text-white p-10">
        <div className="  px-4">
          <div className="grid grid-cols-12 gap-4">
            {/* Left Section */}
            <div className="col-span-12 md:col-span-6">
              <TiltedScroll />
            </div>

            {/* Right Section */}
            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
              <h1 className="text-center text-3xl">
                {" "}
                <strong className="text-6xl">
                  Master Economics{" "}
                </strong> <br /> with Expert Guidance
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* about us */}

      <section className="mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 md:grid-cols-6 lg:grid-cols-6 gap-4">
            <div className="col-span-12 md:col-span-3 lg:col-span-3">
              <img src={Aboutimg} alt="" className="rounded-lg" />
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-3 ">
              <h2 className="text-3xl text-left text-yellow-400 font-semibold">
                About Us
              </h2>
              <h3 className="text-5xl text-left font-semibold">
                Best Economic Class
              </h3>
              <p className="text-justify mt-5">
                Welcome to Economic Classes by Jatin Rajpal, your destination
                for mastering the art and science of economics. We are dedicated
                to providing high-quality, result-driven coaching to help
                students excel in their academic pursuits and build a strong
                foundation in economics. Led by the expertise of Jatin Rajpal,
                our classes focus on simplifying complex concepts, offering
                personalized guidance, and fostering a deep understanding of the
                subject. Whether you're preparing for board exams, college
                studies, or competitive exams, our structured approach and
                interactive learning environment are designed to help you
                achieve excellence. Join Economic Classes by Jatin Rajpal and
                take a confident step toward your academic and professional
                goals!
              </p>
              <button className="bg-yellow-400 text-white p-3 rounded-sm text-left mt-3 float-start">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* about us end */}

      {/* courses */}
      <section className="mt-20">
        <div className="container mx-auto">
          <div className="">
            <span className="font-semibold">POPULAR COURSES</span>
            <h2 className="text-3xl text-yellow-400 font-semibold">
              Choose Our <span className="text-black">Courses</span>{" "}
            </h2>
          </div>
          <div className="grid grid-cols-12 grid-md-cols-3 grid-lg-cols-3 gap-4 mt-3">
            <div className="col-span-12 md:col-span-3 lg:col-span-3 hover:shadow-lg">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={classimg}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  11 class economics
                </h5>
                <button className="bg-yellow-400 text-white  rounded-sm p-3 mt-3 float-start">
                  Enroll Now
                </button>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-3 hover:shadow-lg">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={classimg2}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  12 Class Economics
                </h5>
                <button className="bg-yellow-400 text-white  rounded-sm p-3 mt-3 float-start">
                  Enroll Now
                </button>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-3 hover:shadow-lg">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={cbse}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  CBSE Aspirants
                </h5>
                <button className="bg-yellow-400 text-white  rounded-sm p-3 mt-3 float-start">
                  Enroll Now
                </button>
              </Card>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-3 hover:shadow-lg">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={cuet}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  CUET Aspirants
                </h5>
                <button className="bg-yellow-400 text-white  rounded-sm p-3 mt-3 float-start">
                  Enroll Now
                </button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* courses end */}

      {/* why choose us */}

      <section className="mt-20">
        <div className="container">
          <span className="font-semibold">WHY CHOOSE US</span>
          <h2 className="text-3xl text-yellow-400 font-semibold">
            {" "}
            What Will You Get ?{" "}
          </h2>
          <div className="grid grid-cols-12 grid-md-cols-6 grid-lg-cols-6 gap-4 mt-3 ">
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <div className="grid grid-cols-12 grid-md-cols-6 grid-lg-cols-6 gap-4 ">
              <div className="col-span-12 md:col-span-6 lg:col-span-6 border-2 border-yellow-400 bg-white shadow-lg rounded-lg inline-block text-left p-6 hover:shadow-xl transition-all">
  <div className="flex items-center mb-4">
    <img
      src={recorded}
      alt="Recorded Classes Icon"
      className="w-12 h-12 mr-4 rounded-full border-2 border-yellow-400 p-1"
    />
    <h3 className="text-xl font-semibold text-gray-800">Recorded Classes</h3>
  </div>
  <p className="text-gray-600 text-sm">
    Access comprehensive, high-quality recorded classes anytime, anywhere to master concepts at your own pace.
  </p>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-6 border-2 border-yellow-400 bg-white shadow-lg rounded-lg inline-block text-left p-6 hover:shadow-xl transition-all">
  <div className="flex items-center mb-4">
    <img
      src={affordibilty}
      alt="Affordability Icon"
      className="w-12 h-12 mr-4 rounded-full border-2 border-yellow-400 p-1"
    />
    <h3 className="text-xl font-semibold text-gray-800">Affordability</h3>
  </div>
  <p className="text-gray-600 text-sm">
    Enjoy top-notch education with our recorded classes, designed to offer quality learning at an affordable price.
  </p>
</div>

<div className="col-span-12 md:col-span-6 lg:col-span-6 border-2 border-yellow-400 bg-white shadow-lg rounded-lg inline-block text-left p-6 hover:shadow-xl transition-all">
  <div className="flex items-center mb-4">
    <img
      src={expert}
      alt="Expert Faculty Icon"
      className="w-12 h-12 mr-4 rounded-full border-2 border-yellow-400 p-1"
    />
    <h3 className="text-xl font-semibold text-gray-800">Expert Faculty</h3>
  </div>
  <p className="text-gray-600 text-sm">
    Learn from experienced and dedicated expert faculty who are committed to guiding you towards success in every step of your educational journey.
  </p>
</div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 border-2 border-yellow-400 bg-white shadow-lg rounded-lg inline-block text-left p-6 hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <img
                      src={success}
                      alt="Success Icon"
                      className="w-12 h-12 mr-4 rounded-full border-2 border-yellow-400 p-1"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      Success Stories
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Discover inspiring success stories from our students who
                    have excelled with the guidance of our expert faculty and
                    affordable, high-quality recorded classes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <img src={Aboutimg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* why choose us end */}

      {/* testimonial */}
      <section className="mt-20 bg-black text-white">
        <div className="container">
          <span className="font-semibold">TESTIMONIAL</span>
          <h2 className="text-3xl text-yellow-400 font-semibold mb-3">
            What Our Learners Says ?{" "}
          </h2>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>

      {/* testimonial end */}

      {/* contact */}
      <section className="mt-20">
        <div className="container">
          <div className="grid grid-cols-12 grid-md-cols-6 grid-lg-cols-6 gap-4 mt-3">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 text-left">
              <span className="font-semibold">CONTACT US</span>
              <h2 className="text-3xl text-yellow-400 font-semibold">
                {" "}
                Get in Touch{" "}
              </h2>
              <p className="mt-3">
                {" "}
                <strong>Address:</strong> Ayodhya Chowk E-2/26, II Floor, above
                Pantanjali Store, Sector 7, Rohini, Delhi-110085
              </p>
              <p>
                {" "}
                <strong>For Admission:</strong> +91-8802666661
              </p>
              <p>
                {" "}
                <strong>Student Helpline: </strong> +91-8802666661
              </p>
              <p>
                {" "}
                <strong>Technical Support:</strong> +91-9899922451
              </p>
              <p>
                {" "}
                <strong>Email:</strong> economicsclasses3@gmail.com
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <h2 className="text-3xl text-yellow-400 font-semibold text-left">
                {" "}
                Enquire Now{" "}
              </h2>
              <form action="">
                <div className="grid grid-cols-12 grid-md-cols-6 grid-lg-cols-6 gap-4 mt-3">
                  <div className="col-span-12 md:col-span-6 lg:col-span-6">
                    <input
                      type="text"
                      placeholder=" Enter Name"
                      className="w-full p-3"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-6">
                    <input
                      type="Email"
                      placeholder="Enter Email"
                      className="w-full p-3"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-6">
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="w-full p-3"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-6">
                    <input
                      type="text"
                      placeholder="Your Subject"
                      className="w-full p-3"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-12">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Your Message"
                      className="w-full"
                    ></textarea>
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-12">
                    <button className="bg-yellow-400 text-white p-3 rounded-lg text-left mt-3 float-start">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* contact end */}
    </>
  );
}

export default Home;
