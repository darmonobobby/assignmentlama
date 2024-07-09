//fetch("./contoh,js");


//PROMISE   
//console.log("a");
//setTimeout(function() {
//    console.log(">> after timeout");
//
//}, 3000);
//console.log("b");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then (data => data.map(item => console.log(item.name)));