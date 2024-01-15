const Frill = require('frill.co');
require('dotenv').config(); // Load environment variables

const frill = new Frill({
  apiKey: process.env.FRILL_API_KEY, // Replace with your Frill.co API key
});

// Function to submit feedback to Frill.co
async function submitFeedback(feedback) {
  try {
    await frill.createFeedback(feedback);
    console.log('Feedback submitted successfully!');
  } catch (error) {
    console.error('Error submitting feedback:', error);
  }
}

// Function to retrieve feedback data from Frill.co
async function getFeedbackData(query = {}) {
  try {
    const feedback = await frill.getFeedback(query);
    return feedback;
  } catch (error) {
    console.error('Error retrieving feedback:', error);
    return []; // Return an empty array if there's an error
  }
}

module.exports = { submitFeedback, getFeedbackData };
