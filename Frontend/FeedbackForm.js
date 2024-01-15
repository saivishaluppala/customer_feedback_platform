import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

const FeedbackForm = () => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post('/api/feedback', {
        category,
        rating,
        comments,
      });

      // Handle successful submission
      console.log('Feedback submitted:', response.data);
      // Clear form fields or display a success message
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for category, rating, and comments */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {/* Options for categories */}
      </select>

      {/* Rating component (e.g., star rating) */}

      <textarea value={comments} onChange={(e) => setComments(e.target.value)} />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default FeedbackForm;
