const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../auth'); // Authentication middleware
const frill = require('../frill'); // Frill.co integration module

// Endpoint for submitting feedback
router.post('/submit', ensureAuthenticated, async (req, res) => {
  try {
    const { category, rating, comments } = req.body;

    // Validate feedback data
    if (!category || !rating || !comments) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use Frill.co's API to submit feedback
    await frill.submitFeedback({
      category,
      rating,
      comments,
      // Add user information if available (e.g., from session)
    });

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

module.exports = router;
