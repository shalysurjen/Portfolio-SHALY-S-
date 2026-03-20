const db = require('../config/db');
const { sendContactNotification } = require('../config/mailer');

// ─── POST /api/contact ───────────────────────────────────────
const createContact = async (req, res) => {
  try {
    const { name, email, subject = '', message } = req.body;
    const ip = req.ip || req.headers['x-forwarded-for'] || null;

    const [result] = await db.execute(
      `INSERT INTO contacts (name, email, subject, message, ip_address)
       VALUES (?, ?, ?, ?, ?)`,
      [name.trim(), email.trim().toLowerCase(), subject.trim(), message.trim(), ip]
    );

    // ── Fire-and-forget email notification (non-blocking)
    sendContactNotification({
      name:    name.trim(),
      email:   email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    }).catch(err => console.error('Email notification failed (non-fatal):', err.message));

    return res.status(201).json({
      success: true,
      message: "Thank you! Your message has been received. I'll get back to you soon. 🚀",
      data: { id: result.insertId },
    });
  } catch (err) {
    console.error('createContact error:', err);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// ─── GET /api/contact ────────────────────────────────────────
const getAllContacts = async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT id, name, email, subject, message, created_at
       FROM contacts
       ORDER BY created_at DESC`
    );
    return res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    console.error('getAllContacts error:', err);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// ─── GET /api/contact/:id ────────────────────────────────────
const getContactById = async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT id, name, email, subject, message, created_at
       FROM contacts WHERE id = ?`,
      [req.params.id]
    );
    if (!rows.length) {
      return res.status(404).json({ success: false, message: 'Contact not found.' });
    }
    return res.json({ success: true, data: rows[0] });
  } catch (err) {
    console.error('getContactById error:', err);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// ─── DELETE /api/contact/:id ─────────────────────────────────
const deleteContact = async (req, res) => {
  try {
    const [result] = await db.execute(
      `DELETE FROM contacts WHERE id = ?`,
      [req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Contact not found.' });
    }
    return res.json({ success: true, message: 'Deleted successfully.' });
  } catch (err) {
    console.error('deleteContact error:', err);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { createContact, getAllContacts, getContactById, deleteContact };