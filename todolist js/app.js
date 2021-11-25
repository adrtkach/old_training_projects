let input = prompt("Hey! Enter your command");
let commands = ["new", "list", "delete", "quit"];
let list = [];

while (input !== "quit" && input !== "q"){

    if (input == "new") {
        newItem = prompt("What do you want to add?")
        list.push(newItem);
        console.log(`${newItem} added to the list`);
    }

    else if (input == "list") {       
        if (list.length == 0) { 
            console.log("*empty list*")
            }
        else {
            console.log("*** YOUR LIST: ***");
            for (let i = 0; i < list.length; i++)
            console.log(`${i}: ${list[i]}`);
            console.log("******************");
        }
    }

    else if (input == "delete") {
        let indexToDelete = prompt("Enter index of item you want to delete")
        parseInt(indexToDelete);
        while (indexToDelete > list.length) {
            indexToDelete = prompt("Index item does not exist. Enter valid index");
            parseInt(indexToDelete);
        }
        let deletedItem = list.splice(indexToDelete, 1);
        console.log(`${deletedItem} is deleted from the list`);
    }
   
input = prompt("Enter your command")
}
console.log("Quit the app")
