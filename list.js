var list = document.getElementsByTagName("ul")[0];
var input = document.getElementById("item").textContent;
var button = document.getElementById("add_item");

function add(){
 return list.appendChild(input);
}

button.addEventListener('click', add);
