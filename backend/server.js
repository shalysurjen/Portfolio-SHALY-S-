require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const morgan     = require('morgan');
const rateLimit  = require('express-rate-limit');

const contactRoutes = require('./routes/contact');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Security headers
app.use(helmet());

// ── CORS — allow React frontend
app.use(cors({
  origin: [
    process.env.CLIENT_URL || 'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
  ],
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ── Body parsers
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ── Logger (dev only)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ── Global rate limit
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { success: false, message: 'Too many requests. Try again later.' },
}));

// ── Routes
app.use('/api/contact', contactRoutes);

// ── Root
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Shaly S Portfolio API',
    version: '1.0.0',
    endpoints: {
      health:        'GET  /api/contact/health',
      submitMessage: 'POST /api/contact',
      getMessages:   'GET  /api/contact',
      getMessage:    'GET  /api/contact/:id',
      deleteMessage: 'DELETE /api/contact/:id',
    },
  });
});

// ── 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found.` });
});

// ── Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

// ── Start
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀  Server running on http://localhost:${PORT}`);
  console.log(`📡  Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📋  API docs:    http://localhost:${PORT}/\n`);
});
