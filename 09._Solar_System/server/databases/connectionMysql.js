import dotenv from "dotenv/config";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});

const [rows, fields] = await connection.execute("SELECT * FROM users;")
console.log(rows);
