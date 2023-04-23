import db from "./connection.js";

const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if (isDeleteMode) {
    db.exec(`DROP TABLE planets;`);
    db.exec(`DROP TABLE people;`);
}

// (DDL)
db.exec(`
CREATE TABLE IF NOT EXISTS planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size FLOAT,
    is_habitable BOOLEAN NOT NULL
);
`);

db.exec(`
CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    planet_id INTEGER,
    FOREIGN KEY (planet_id) REFERENCES planets (id)
);
`);

// Seeding (DML)
if (isDeleteMode) {
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Mercury', False);`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Venus', False);`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Earth', True);`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Mars', False);`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Jupiter', False);`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Saturn', False);`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Uranus', False);`);
    db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Neptune', False);`);
}

