document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Logo").innerHTML = "JavaScript";

  document.getElementById("Logo").style.color = "red";

  // document.getElementById("Logo").style.display = "none";

  document.getElementById("Logo").classList.add("new_class");

  // document.getElementsByClassName("Cards").style.color = "red";

  // var example = "example value";

  // console.log(example);

  // var logo = document.getElementById("Logo");

  let new_logo = document.getElementById("Logo");

  console.log(new_logo, "first time");

  new_logo = "different value";

  console.log(new_logo, "second time");

  // logo.innerHTML = new_logo

  // logo.innerHTML = "New Values"

  // logo.classList.add("new_class");

  // string
  var example = "example value";

  // integer;  number
  var integer_example = 5;

  //boolean
  var boolean_example = true;
  var boolean_example_2 = false;

  console.log(example + integer_example);

  let x = 5;
  let y = 25;

  console.log("this is the area of a square", x * y);




// Объявление функции
function greet(name) {
    console.log("hello,", name)    
}
// вызов функции
greet("Iurii")







});
