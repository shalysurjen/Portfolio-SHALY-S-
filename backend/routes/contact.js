const express  = require('express');
const router   = express.Router();
const { createContact, getAllContacts, getContactById, deleteContact } = require('../controllers/contactController');
const { contactRules, validate } = require('../middleware/validate');
const rateLimit = require('express-rate-limit');

// Strict rate limit on form submissions — 5 per 15 min per IP
const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many submissions. Please wait 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Health check
router.get('/health', (req, res) =>
  res.json({ success: true, status: 'UP', service: 'Portfolio Contact API', timestamp: new Date() })
);

// ── Contact CRUD
router.post('/',     submitLimiter, contactRules, validate, createContact);
router.get('/',      getAllContacts);
router.get('/:id',   getContactById);
router.delete('/:id', deleteContact);

module.exports = router;
