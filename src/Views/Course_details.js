import React, { useState } from "react";
import '../css/course_details.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Course_details = () => {
  const { userId, category } = useParams();
  const [user, setUser] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [videos, setVideos] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});


  const [courses, setcourses] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(userResponse.data);

        // Fetch related courses
        const relatedCoursesResponse = await axios.get(`https://jsonplaceholder.typicode.com/courses?category=${category}`);
        setRelatedCourses(relatedCoursesResponse.data);

        // Fetch videos
        const videosResponse = await axios.get(`https://jsonplaceholder.typicode.com/courses/videos/${userId}`);
        setVideos(videosResponse.data);

        // Fetch course questions
        const questionsResponse = await axios.get(`https://jsonplaceholder.typicode.com/courses/questions/${userId}`);
        setQuestions(questionsResponse.data);

        // Initialize quiz answers state
        const initialQuizAnswers = {};
        questionsResponse.data.forEach(question => {
          initialQuizAnswers[question.id] = '';
        });
        setQuizAnswers(initialQuizAnswers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId, category]);

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit quiz answers
      await axios.post('/api/quiz/submit', { userId, answers: quizAnswers });
      alert('Quiz submitted successfully!');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Error submitting quiz. Please try again later.');
    }
  };

  const handleAnswerChange = (questionId, answer) => {
    setQuizAnswers(prevState => ({
      ...prevState,
      [questionId]: answer
    }));
  };
  return (
    <>
       {/* Course Banner Section */}
      <div className="container mt-4">
        <div className="jumbotron">
          {user && (
            <>
              <h1 className="display-4">{user.courseTitle}</h1>
              <p className="lead">Instructor: {user.instructorName}</p>
              <hr className="my-4" />
              <p>{user.courseDescription}</p>
            </>
          )}
        </div>
      </div>
	  
	  
      {/* Course Curriculum Section */}
      <div className="container">
        <h2>Course Curriculum</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>

      </div>
	  
   {/* Videos Section */}
      <div className="container mt-4">
        <h2>Videos</h2>
        <div className="row">
          {videos.map(video => (
            <div className="col-md-4" key={video.id}>
              {/* Render video component */}
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Questions Section */}
      <div className="container mt-4">
        <h2>Questions</h2>
        <form onSubmit={handleQuizSubmit}>
          <div className="accordion" id="questionsAccordion">
            {questions.map(question => (
              <div className="accordion-item" key={question.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#questionCollapse${question.id}`}
                    aria-expanded="true"
                    aria-controls={`questionCollapse${question.id}`}
                  >
                    {question.question}
                  </button>
                </h2>
                <div
                  id={`questionCollapse${question.id}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#questionsAccordion"
                >
                  <div className="accordion-body">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Your answer..."
                      value={quizAnswers[question.id]}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit Quiz</button>
        </form>
      </div>
	  
{/* Instructor Section */}
<div className="container mt-4">
    <h2>Instructor</h2>
    <div className="media">
      <img
        src="instructor-profile-picture.jpg"
        className="mr-3"
        alt="Instructor Profile Picture"
        style={{ width: 100 }}
      />
      <div className="media-body">
        <h5 className="mt-0">Instructor Name</h5>
        <p>Instructor Bio and credentials</p>
      </div>
    </div>
  </div>
  
  
  
  
  {/* Course Reviews and Ratings Section */}
  <div className="container mt-4">
    <h2>Reviews and Ratings</h2>
	
	
    {/* Ratings display */}
    <p>Overall rating: 4.5 out of 5 stars</p>
	
	
    {/* Individual reviews go here */}
  </div>
  
 {/* end Course Reviews and Ratings Section */}
 
 
  {/* Enrollment and Pricing Section */}
  <div className="container mt-4">
    <h2>Enrollment and Pricing</h2>
    <p>Price: $99</p>
    <button type="button" className="btn btn-primary">
      Enroll Now
    </button>
  </div>
  
   {/* Related Courses Section */}
      <div className="container mt-4">
        <h2>Related Courses</h2>
        <div className="row">
          {relatedCourses.map(course => (
            <div className="col-md-4" key={course.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  
  
  {/* Footer Section */}
  <footer className="footer mt-auto py-3">
    <div className="container">
      <span className="text-muted">© 2024 Your Website</span>
    </div>
  </footer>
    

    </>
  );
};

export default Course_details;
