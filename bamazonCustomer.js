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
		// purchasePrompt();
	});
}
showItems()