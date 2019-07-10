CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NULL,
    department_name VARCHAR (100) NULL,
    price DECIMAL (40,20) NULL,
    stock_quantity INT NULL,
     PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yellow 14k studs", "jewelry", 20.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cameo ring", "jewelry", 8.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yellow peplum", "women's clothing", 14.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pink tunic", "women's clothing", 15.99, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bell bottom jean", "women's clothing", 24.80, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("basic tee", "men's clothing", 4.00, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("graphic tee", "men's clothing", 5.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cargo shorts", "men's clothing", 30.00, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blue pinstripe button up ", "junior's clothing", 12.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fushcia circle skirt  ", "junior's clothing", 9.99, 20);