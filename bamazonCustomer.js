var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Elijahantoine1!",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
  
var showItems = function (){
    var query = "Select * FROM items";
	connection.query(query, function(err, res){
		if(err) throw err;
		var showTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,30,25,10,14]
		});
		for(var i = 0; i < res.length; i++){
			showTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(showTable.toString());
		purchasePrompt();
	});
}
showItems()
function purchasePrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter the Item ID you would like to purhcase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many of this items would you like to buy?",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, quantityNeeded);
 });
};

function purchaseOrder(ID, itemAmount){
	connection.query('Select * FROM items WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(itemAmount <= res[0].stock_quantity){
			var totalCost = res[0].price * itemAmount;
			console.log("Great news your order is in stock!");
			console.log("Your total cost for " + itemAmount + " " +res[0].product_name + " is" + " $" + totalCost + ". Thank you!");

			// connection.query("UPDATE items SET stock_quantity = stock_quantity - " + itemAmount + "WHERE ? " + ID);
        } 
        // else{
		// 	console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
		// };
        // showItems();
        updateOrder()
	});
};

function updateOrder(res) {
    // if (err) throw (err);
    console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
    var query = connection.query(
        console.log(query.sql)
    //   "UPDATE items SET ? WHERE ?",
    //   [
    //     {
    //       stock_quantity: []
    //     },
    //     {
    //       product_name: []
    //     }
    // //   ],
    //   function(err, res) {
    //     if (err) throw err;
    //     console.log("sorry we do not have enough " + res[0].product_name + "to complete your order.");

    //   }
    );
   
}
  