import React, { useState, useEffect } from 'react';
import "./Userprofile.css";
import axios from 'axios'; // Import axios for making HTTP requests

const Userprofile = () => {
  // Define state variables to store user data
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Get the user ID from local storage
        const userId = localStorage.getItem('test');
        console.log('asdasda', userId)

        // Make sure user ID exists
        if (!userId) {
          throw new Error('User ID not found in local storage');
        }

        // Make a GET request to fetch user data by ID
        const response = await axios.get(`https://backend-finalproject-fb9a.onrender.com/api/client/${userId}`);
        
        // Extract user data from the response
        const user = response.data.client;

        // Update state with the fetched user data
        setUserData(user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    // Call fetchUserData function
    fetchUserData();
  }, []);

  return (
    <div className="user-profile">
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && (
          <div>
            <h2>User Profile</h2>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
            <p><strong>Address:</strong> {userData.address}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Userprofile;
