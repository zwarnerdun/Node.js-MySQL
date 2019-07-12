var mysql = require("mysql");
var inquirer = require("inquirer");

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
    idSearch();
});
  
function idSearch() {
   inquirer 
    .prompt ({
        name: "shopping",
        type: "list",
        message: "What would you like to buy?",
        choices: ["yellow 14k studs",
            "cameo ring",
            "yellow peplum",
            "pink tunic",
            "bell bottom jean",
            "graphic tee",
            "cargo shorts", 
            "blue pinstripe button up",
            "fushcia circle skirt ",
            "exit"
        ]
    })
    
}