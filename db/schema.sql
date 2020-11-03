DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(15),
    devoured BOOLEAN DEFAULT false
)

-- INSERT INTO burgers (burger_name,devoured)
-- VALUES ("THE YUM YUM",false),("THE SO SO",false),("THE UGLY",true);

-- SELECT * FROM burgers