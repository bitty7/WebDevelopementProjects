var num1 = document.getElementById("num1");

var num2 = document.getElementById("num2");

var res = document.getElementById("res");

var form = document.getElementById("fo");




// res.innerHTML = "Result is: " + result + "%";
// if (result > 0){
//     res.innerHTML = "Result is: " + result + "%";
// } else{
//     res.innerHTML = "Result is: ";
// }


form.addEventListener("submit", (event) => {
    if (!num1.value || ! num2.value){
        alert("please enter values in the fields");
    }else {
        const x = num1.value;
        const y = num2.value;
        const result = (x*100)/y;
        res.innerHTML = "Result is: " + result + "%";
        event.preventDefault();

    }

});
