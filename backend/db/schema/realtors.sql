DROP TABLE IF EXISTS realtors CASCADE;
CREATE TABLE realtors (
    id SERIAL PRIMARY KEY NOT NULL,
    name  VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    description VARCHAR (255),
    top_seller BOOLEAN DEFAULT FALSE,
    date_hired TIMESTAMP DEFAULT NOW()
);