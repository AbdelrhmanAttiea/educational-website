import React, { useState } from 'react';
import axios from 'axios';
import '../css/courseUpload.css';

function CourseUpload() {
  const [courseData, setCourseData] = useState({
    name: '',
    image: null,
    videos: [],
    title: '',
    description: '',
    category: '',
    questions: [{ question: '', answers: ['', '', ''], correctAnswerIndex: 0 }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setCourseData(prevData => ({
      ...prevData,
      image: e.target.files[0]
    }));
  };

  const handleVideoChange = (e) => {
    setCourseData(prevData => ({
      ...prevData,
      videos: [...prevData.videos, e.target.files[0]]
    }));
  };

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const questions = [...courseData.questions];
    questions[index][name] = value;
    setCourseData(prevData => ({
      ...prevData,
      questions
    }));
  };

  const handleAnswerChange = (e, qIndex, aIndex) => {
    const { value } = e.target;
    const questions = [...courseData.questions];
    questions[qIndex].answers[aIndex] = value;
    setCourseData(prevData => ({
      ...prevData,
      questions
    }));
  };

  const addQuestion = () => {
    setCourseData(prevData => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        { question: '', answers: ['', '', ''], correctAnswerIndex: 0 }
      ]
    }));
  };

  const addAnswer = (qIndex) => {
    const questions = [...courseData.questions];
    questions[qIndex].answers.push('');
    setCourseData(prevData => ({
      ...prevData,
      questions
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const formData = new FormData();
      formData.append('name', courseData.name);
      formData.append('image', courseData.image);
      courseData.videos.forEach((video, index) => {
        formData.append(`video${index}`, video);
      });
      formData.append('title', courseData.title);
      formData.append('description', courseData.description);
      formData.append('category', courseData.category);
      formData.append('questions', JSON.stringify(courseData.questions));

      const response = await axios.post('https://jsonplaceholder.typicode.com/courses', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Handle success, maybe redirect user or show success message
    } catch (error) {
      console.error('Error uploading course:', error);
      // Handle error, maybe show error message to user
    }
  };

  return (
    <div className="container">
      <h1>Upload Course</h1>
      <form onSubmit={handleSubmit}>
        {/* Course details */}
        <input type="text" name="name" value={courseData.name} onChange={handleChange} placeholder="Course Name" />
        <input type="file" name="image" onChange={handleImageChange} accept="image/*" />
        <input type="text" name="title" value={courseData.title} onChange={handleChange} placeholder="Course Title" />
        <textarea name="description" value={courseData.description} onChange={handleChange} placeholder="Course Description"></textarea>
        <input type="text" name="category" value={courseData.category} onChange={handleChange} placeholder="Course Category" />

        {/* Video uploads */}
        {courseData.videos.map((video, index) => (
          <input key={index} type="file" onChange={(e) => handleVideoChange(e, index)} accept="video/*" />
        ))}
        <button type="button" onClick={() => setCourseData(prevData => ({ ...prevData, videos: [...prevData.videos, ''] }))}>Add Video</button>

        {/* Questions */}
        {courseData.questions.map((question, qIndex) => (
          <div key={qIndex}>
            <input type="text" name="question" value={question.question} onChange={(e) => handleQuestionChange(e, qIndex)} placeholder="Question" />
            {question.answers.map((answer, aIndex) => (
              <input key={aIndex} type="text" value={answer} onChange={(e) => handleAnswerChange(e, qIndex, aIndex)} placeholder="Answer" />
            ))}
            <button type="button" onClick={() => addAnswer(qIndex)}>Add Answer</button>
          </div>
        ))}
        <button type="button" onClick={() => addQuestion()}>Add Question</button>

        <button type="submit">Upload Course</button>
      </form>
    </div>
  );
}

export default CourseUpload;
