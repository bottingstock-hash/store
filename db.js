const Database = require('better-sqlite3');
const db = new Database(process.env.DB_FILE || './store.db');


// initialize tables
db.exec(`
CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
email TEXT UNIQUE,
password TEXT,
balance INTEGER DEFAULT 0,
is_admin INTEGER DEFAULT 0,
reset_token TEXT,
reset_expires INTEGER
);


CREATE TABLE IF NOT EXISTS products (
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT,
description TEXT,
price INTEGER,
stock INTEGER DEFAULT 0
);


CREATE TABLE IF NOT EXISTS orders (
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER,
total INTEGER,
status TEXT,
provider TEXT,
provider_payment_id TEXT,
created_at INTEGER
);
`);


module.exports = db;