import React from 'react';
import '../css/About_us.css'
const About_us = () => {
  return (
<>
  {/* Header Section */}
  <section className="header">
    <div className="container">
      <img
        src="self-study_03375353.png"
        alt="Company Logo"
        className="header-logo"
      />
      <h1>Welcome to Our Courses Website</h1>
    </div>
  </section>
  {/* Introduction Section */}
  <section className="introduction">
    <div className="container">
      <p>
        At Our Courses, we are dedicated to providing high-quality learning
        experiences that empower individuals to achieve their goals and advance
        their careers. Explore our diverse range of courses and unlock your full
        potential today!
      </p>
    </div>
  </section>
  {/* Mission and Vision Section */}
  <section className="mission-vision">
    <div className="container">
      <h2>Mission &amp; Vision</h2>
      <p>
        Our mission is to make education accessible to everyone, everywhere. We
        envision a future where learning knows no boundaries and individuals
        have the tools they need to thrive in a rapidly evolving world.
      </p>
    </div>
  </section>
  {/* Core Values Section */}
  <section className="core-values">
    <div className="container">
      <h2>Core Values</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Excellence</h3>
          <p>
            We strive for excellence in everything we do, ensuring the highest
            quality standards in our courses and services.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Innovation</h3>
          <p>
            We embrace innovation and constantly seek new ways to enhance the
            learning experience for our students.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Community</h3>
          <p>
            We foster a supportive and inclusive community where learners can
            connect, collaborate, and grow together.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Team Members Section */}
  <section className="team-members">
    <div className="container">
      <h2>Meet Our Team</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src="team-member1.jpg"
            alt="Team Member 1"
            className="img-fluid"
          />
          <h3>John Doe</h3>
          <p>Founder &amp; CEO</p>
        </div>
        <div className="col-md-4">
          <img
            src="self-study_03375353.png"
            alt="Team Member 2"
            className="img-fluid"
          />
          <h3>Jane Smith</h3>
          <p>Head of Curriculum</p>
        </div>
        <div className="col-md-4">
          <img
            src="team-member3.jpg"
            alt="Team Member 3"
            className="img-fluid"
          />
          <h3>David Lee</h3>
          <p>Lead Instructor</p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials Section */}
  <section className="testimonials">
    <div className="container">
      <h2>Testimonials</h2>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="testimonial">
              "I've taken several courses with Our Courses, and I'm impressed by
              the depth of knowledge and expertise of the instructors. Highly
              recommended!"
            </p>
            <h3 className="testimonial-author">- Sarah Johnson</h3>
          </div>
          <div className="carousel-item">
            <p className="testimonial">
              "The courses offered by Our Courses have been instrumental in
              helping me advance my career. Thank you for the invaluable
              learning experiences!"
            </p>
            <h3 className="testimonial-author">- Michael Smith</h3>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  {/* Call-to-Action Section */}
  <section className="cta">
    <div className="container">
      <h2>Ready to Start Your Learning Journey?</h2>
      <a href="#" className="btn btn-primary btn-lg">
        Explore Courses
      </a>
    </div>
  </section>
  {/* Footer Section */}
  <footer className="footer">
    <div className="container">
      <p>© 2024 Our Courses. All rights reserved.</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Home</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Courses</a>
        </li>
        <li className="list-inline-item">
          <a href="#">About Us</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul className="list-inline social-icons">
        <li className="list-inline-item">
          <a href="#">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</>


  );
};

export default About_us;
