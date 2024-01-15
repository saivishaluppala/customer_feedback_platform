import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Replace with your backend server URL

const makeRequest = async (endpoint, method = 'GET', data = {}) => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}/${endpoint}`,
      data,
    });
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw new Error('Failed to fetch data'); // Handle errors gracefully
  }
};

export const login = async () => {
  // Initiate Google OAuth flow (implementation depends on chosen library)
};

export const submitFeedback = async (category, rating, comments) => {
  try {
    const response = await makeRequest('feedback', 'POST', {
      category,
      rating,
      comments,
    });
    return response; // Handle successful submission
  } catch (error) {
    console.error('Feedback submission error:', error);
    // Handle submission errors
  }
};

export const getFeedbackData = async (category) => {
  try {
    const response = await makeRequest(
      category ? `feedback/${category}` : 'feedback'
    );
    return response; // Handle fetched data
  } catch (error) {
    console.error('Feedback retrieval error:', error);
    // Handle retrieval errors
  }
};
