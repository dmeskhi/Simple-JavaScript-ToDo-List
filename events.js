// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function() {
// 	console.log("CLICK!");
// })
// 
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Make code cleanup
function inputLength() {
	return input.value.length;
}
//Create list element
function listElement() {
	var li = document.createElement("li");
	var but = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
	but.addEventListener("click", function() {
		ul.removeChild(li);
	})
	
	but.appendChild(document.createTextNode("Delete"));
	li.appendChild(but);
	ul.appendChild(li);
	//After entering value input must be empty
	input.value = "";
}

function addItemAfterClick() {
	if (inputLength() > 0) {
		listElement();
	}
}

function addItemAfterKeyPress(event) {
	//Create list element to add it to our ToDo list
	if (inputLength() > 0 && event.keyCode === 13) {
		listElement();
	}
}

//Click event
button.addEventListener("click", addItemAfterClick);

//Keypress event
input.addEventListener("keypress", addItemAfterKeyPress);