CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE items (
	item_id INT(3) NOT NULL,
    product_name VARCHAR (100) NULL,
    department_name VARCHAR (100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM items;

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (52,"yellow 14k studs", "jewelry", 20.00, 200);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (63, "cameo ring", "jewelry", 8.99, 50);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (29, "yellow peplum", "women's clothing", 14.99, 150);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "pink tunic", "women's clothing", 15.99, 125);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (21, "bell bottom jean", "women's clothing", 24.80, 100);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (89, "basic tee", "men's clothing", 4.00, 80);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (25, "graphic tee", "men's clothing", 5.00, 200);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (31, "cargo shorts", "men's clothing", 30.00, 90);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (42, "blue pinstripe button up", "junior's clothing", 12.99, 50);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (74, "fushcia circle skirt ", "junior's clothing", 9.99, 20);