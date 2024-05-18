import React from 'react';
import '../css/Home.css';
import Header from '../component/Header'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
	
const [courses, setcourses] = useState([]);
const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchUsersWithCourses = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setusers(response.data);
      } catch (error) {
        console.error('Error fetching users with courses:', error);
      }
    };

    fetchUsersWithCourses();
  }, []);
  
    useEffect(() => {
    // Fetch users data from JSON file
    axios.get('https://jsonplaceholder.typicode.com/courses')
      .then(response => {
        setcourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  
  
  
  


  return (
   <>
   <Header/>

   
  {/* Home Section */}
  <section id="home" className="py-5 text-center">
    <div className="container">
      <h1 className="display-4">Welcome to our Courses Website</h1>
      <p className="lead">
        Explore our range of courses and start learning today!
      </p>
      <a href="#courses" className="btn btn-primary btn-lg">
        View Courses
      </a>
    </div>
  </section>
  
  
  {/* Courses Section */}
   <section id="courses" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Our Courses</h2>
          <Row>
            {users.map(user => (
              <Col lg={4} md={6} mb={4} key={user.id}>
                <Card className="position-relative h-100">
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>Email: {user.email}</Card.Text>
                    <Card.Text>Location: {user.location}</Card.Text>
                    {user.courses.map(course => (
                      <div key={course.id}>
                        <hr />
                        <h5>Course Title: {course.title}</h5>
                        <p>Course Description: {course.description}</p>
                        <Link to={`/course-details/${user.id}/${course.category}`} className="btn btn-primary">
                          View Course Details
                        </Link>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
	  
	  
  {/* About Section */}
  <section id="about" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="lead text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui
        velit.
      </p>
    </div>
  </section>
  
  
  {/* Contact Section */}
  <section id="contact" className="py-5 bg-light about ">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Get In Touch</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Contact Information</h4>
              <p className="card-text">123 Main Street, City, Country</p>
              <p className="card-text">Email: example@example.com</p>
              <p className="card-text">Phone: +123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  {/* Footer */}
  <footer className="bg-dark text-white py-4">
    <div className="container text-center">
      <p>© 2024 Courses Website</p>
    </div>
  </footer>
</>

  );
};

export default Home;
