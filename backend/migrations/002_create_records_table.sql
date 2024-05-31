CREATE TABLE records (
    id SERIAL PRIMARY KEY,
    bodyPart VARCHAR(255) NOT NULL,
    recordType VARCHAR(255) NOT NULL,
    dateTimeCreated TIMESTAMPTZ NOT NULL,
    dateTimeAccessed TIMESTAMPTZ NOT NULL,
    accessLocation VARCHAR(255) NOT NULL,
    accessTerminal VARCHAR(255) NOT NULL,
    accessAction VARCHAR(255) NOT NULL,
    accessedBy VARCHAR(255) NOT NULL,
    accessorRole VARCHAR(255) NOT NULL
);
