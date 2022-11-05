

// clicked object is 0 or not 

function answer(e){
    let result = document.getElementById("result");
    let obj = e.target;
    if (result.value == 0){
        result.value = obj.textContent;
    }
    else{
        result.value = result.value + obj.textContent;
    }
    
}
// back space function
function back() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0, result.length - 1);
}

//signs
let result = document.getElementById("result");
let equal = document.getElementById("equal");
let reset = document.getElementById("reset");
let del = document.getElementById("delete");
//sign and number execution using loop on click

let symbols = document.getElementsByClassName("symbol");

for (let i=0;i<symbols.length;i++){
    symbols[i].addEventListener("click",answer);
}

// evaluation for equal sign 

equal.addEventListener("click", () => result.value = eval(result.value));


// to clear everything 
reset.addEventListener("click", ()=> document.getElementById("result").value = 0);

//last text deletion 

del.addEventListener("click",back);

// toggle button 

let buttons = document.getElementsByClassName("th-button");
let arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// theme changer

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
function themes(){
if (one.value == 1){
  document.body.classList.toggle("second-theme");
}
else if(two.value == 2){
  document.body.classList.toggle("second-theme");
}
else {
  document.body.classList.toggle("root")
}
}

theme.addEventListener("click",themes);

