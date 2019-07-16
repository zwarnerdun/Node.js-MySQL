# Node.js-MySQL  

https://zwarnerdun.github.io/Node.js-MySQL/

## Overview

In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

## My Role -- Challenge #1: Customer View

To create two prompts:

 * The first should ask them the ID of the product they would like to buy.
 
 * The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through. However, if your store does have enough of the product, you should fulfill the customer's order. This means updating the SQL database to reflect the remaining quantity. Once the update goes through, show the customer the total cost of their purchase.


## How to use a CLI-App

1. Open your Terminal (i.e. Bash).

2. Navigate to your Node.js-MySQL file.

3. Type your node command (i.e node bamazonCustomer.js) in your terminal.

Example 1: Shows the table of the products to pick from. After a product id is picked with a sufficient amount you want, it will calculate your total and let you know that it is in stock. 

![Capture Great news](https://user-images.githubusercontent.com/49568886/61315998-fb6efd00-a7cd-11e9-95f3-2eb6ca9f1b76.PNG)


Example 2: Shows the table of the products to pick from. After a product id is picked with an insufficient amount you want, it will notify you that there is not enouh of the product in stock. 

![Capture insufficient quantity](https://user-images.githubusercontent.com/49568886/61315999-fb6efd00-a7cd-11e9-80b3-05ed1456bd4e.PNG)


## TECHNOLOGIES USED

* Javascript
* Nodejs
* Node packages: MySQL, CLI, and Inquirer
* JSON packages
* Git
* GitHub
