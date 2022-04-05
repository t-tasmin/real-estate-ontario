DROP TABLE IF EXISTS listings CASCADE;
CREATE TABLE listings (
    id SERIAL PRIMARY KEY NOT NULL,
    full_link	VARCHAR(255) NOT NULL,
    image	VARCHAR(255) NOT NULL,
    city	VARCHAR(50) NOT NULL,
    neighbourhood	VARCHAR(50) NOT NULL,
    address	VARCHAR(100) NOT NULL,
    type	VARCHAR(50) NOT NULL,
    sold_price	INTEGER  NOT NULL,
    list_price	INTEGER  NOT NULL,
    bedrooms	SMALLINT  NOT NULL,
    bathrooms	SMALLINT  NOT NULL,
    parking	SMALLINT  NOT NULL,
    taxes	FLOAT(3) NOT NULL,
    exterior VARCHAR(25) NOT NULL,
    basement	VARCHAR(50) NOT NULL,
    garage VARCHAR(25) NOT NULL,
    age	VARCHAR(25) NOT NULL,
    heating_fuel VARCHAR(25) NOT NULL,
    levels VARCHAR(25) NOT NULL
);