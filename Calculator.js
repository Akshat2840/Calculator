let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let io = document.querySelector("#io");
let all_clear = document.querySelector("#all_clear");
let del = document.querySelector("#delete");
let equal = document.querySelector("#equal");


// console.log(numbers);
numbers.forEach((number) => {
    number.addEventListener("click" , () => {
        io.value = io.value + number.value;
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click" , () => {
        let check = io.value.toString().slice(-1);
        
        if(check != "." && check != "/" && check != "*" && check != "+" && check != "-" && check != ""){
            io.value = io.value + operator.value;
        }
    })
})

all_clear.addEventListener("click" , () => {
    io.value = "";
})

del.addEventListener("click" , () => {
    io.value = io.value.toString().slice(0,-1);
})

equal.addEventListener("click" , () => {
    io.value = eval(io.value);
})

// $("#all_clear" , ".num").on("mouseover" , () => {
//     $("#all_clear").animate({width : "110%", height : "110%"});
// })

// $("#all_clear").on("mouseout" , () => {
//     $("#all_clear").animate({width : "90%", height : "90%"});
// })


