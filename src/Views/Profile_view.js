import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import '../css/profileview.css';

function ProfileView() {
  const [userData, setUserData] = useState(null);
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    // Fetch user data from your backend API using the stored token
    const token = localStorage.getItem('token');

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchUserCourses = async () => {
      try {
        const response = await axios.get('your_user_courses_api_url', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserCourses(response.data);
      } catch (error) {
        console.error('Error fetching user courses:', error);
      }
    };

    if (token) {
      fetchUserData();
      fetchUserCourses();
    }
  }, []);

  return (
    <div className="top">
      {/* Header Section */}
      <header className="bg-dark text-white py-4 header">
        <div className="container text-center" style={{ padding: 5 }}>
          {/* Check if userData is available before rendering */}
          {userData && (
            <>
              <img
                src={userData.profile_picture}
                alt="Profile Picture"
                className="rounded-circle mb-2"
                width={120}
                style={{ marginLeft: 585 }}
              />
              <h1 className="h4">{userData.name}</h1>
              <p className="lead">{userData.email}</p>
              <p>Account Type: {userData.account_type}</p>
            </>
          )}
        </div>
      </header>
      {/* Navigation Menu */}
      {/* Profile Information Section */}
      <section id="profile-info" className="py-4 profile_info2">
        <div className="container ">
          <h2>Profile Information</h2>
          {/* Form to display/edit profile information */}
          <form>
            {/* Form fields for profile information */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control mb-3" id="name" defaultValue={userData ? userData.name : ''} />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea className="form-control mb-3" id="bio" rows={3} defaultValue={userData ? userData.bio : ''} />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" className="form-control mb-3" id="location" defaultValue={userData ? userData.location : ''} />
            </div>
            {/* Save and Cancel buttons */}
            <button type="submit" className="btn btn-primary mr-2">Save</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </form>
        </div>
      </section>
      {/* Account Settings Section */}
      <section id="account-settings" className="py-4">
        <div className="container">
          <h2>Account Settings</h2>
          {/* Form to manage account settings */}
          <form>
            {/* Form fields for account settings */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control mb-3" id="password" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="form-control mb-3" id="email" defaultValue={userData ? userData.email : ''} />
            </div>
            {/* Save and Cancel buttons */}
            <button type="submit" className="btn btn-primary mr-2">Save</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </form>
        </div>
      </section>
      {/* Payment Details Section */}
      <section id="payment-details" className="py-4">
        <div className="container">
          <h2>Payment Details</h2>
          {/* Form to manage payment details */}
          <form>
            {/* Form fields for payment details */}
            <div className="form-group">
              <label htmlFor="credit-card">Credit Card Number</label>
              <input type="text" className="form-control mb-3" id="credit-card" defaultValue={userData ? userData.credit_card : ''} />
            </div>
            <div className="form-group">
              <label htmlFor="billing-address">Billing Address</label>
              <input type="text" className="form-control mb-3" id="billing-address" defaultValue={userData ? userData.billing_address : ''} />
            </div>
            {/* Save and Cancel buttons */}
            <button type="submit" className="btn btn-primary mr-2">Save</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </form>
        </div>
      </section>
      {/* User Courses Section */}
      <section id="user-courses" className="py-4">
        <div className="container">
          <h2>Your Courses</h2>
          <div className="row">
            {userCourses.map(course => (
              <div key={course.id} className="col-md-4 mb-3">
                <Card>
                  <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileView;
