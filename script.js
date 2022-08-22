function answer(e){
    let result = document.getElementById("result");
    let obj = e.target;
    if (result==0){
        result.value = obj.textContent;
    }
    else{
       result.value = result.value + obj.textContent; 
    }

}

//signs 
let result = document.getElementById("result");
let equal = document.getElementById("equal");
let reset = document.getElementById("reset");
let symbols = document.getElementsByClassName("symbol");

for (let i=0;i<symbols.lenght;i++){
    symbols.addEventListener("click",answer);
}

// evaluation for equal sign 

equal.addEventListener("click", () => result.value = eval(result.value));


// to clear eveyrthing 
reset.addEventListener("click", ()=> document.getElementById("result").value = 0);


