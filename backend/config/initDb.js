const mysql = require('mysql2/promise');
require('dotenv').config();

async function initDb() {
  const conn = await mysql.createConnection({
    host:     process.env.DB_HOST     || 'localhost',
    port:     process.env.DB_PORT     || 3306,
    user:     process.env.DB_USER     || 'root',
    password: process.env.DB_PASSWORD || '',
    multipleStatements: true,
  });

  console.log('🔧  Initialising database…');

  await conn.query(`
    CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || 'portfolio_db'}\`
      CHARACTER SET utf8mb4
      COLLATE utf8mb4_unicode_ci;
  `);

  await conn.query(`USE \`${process.env.DB_NAME || 'portfolio_db'}\`;`);

  await conn.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id         BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      name       VARCHAR(100) NOT NULL,
      email      VARCHAR(150) NOT NULL,
      subject    VARCHAR(200) DEFAULT '',
      message    TEXT         NOT NULL,
      ip_address VARCHAR(45)  DEFAULT NULL,
      created_at DATETIME     DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_email      (email),
      INDEX idx_created_at (created_at DESC)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  console.log('✅  Table `contacts` ready');
  await conn.end();
}

module.exports = { initDb };