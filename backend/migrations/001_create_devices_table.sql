CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
    serialNumber VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    vendor VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    osVersionCurrent VARCHAR(255) NOT NULL,
    osVersionLatest VARCHAR(255) NOT NULL,
    clsRating NUMERIC NOT NULL,
    remarks TEXT,
    isCatalog BOOLEAN DEFAULT TRUE
);

ALTER TABLE devices ADD CONSTRAINT unique_serialNumber UNIQUE (serialNumber);
