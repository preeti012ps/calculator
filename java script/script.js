console.log("hello");
let input = document.getElementById('input');
let buttons = document.querySelectorAll('button')

let string = ""; // stores the result here in this string..

//making array for storing the value of buttons..
let arr = Array.from(buttons);

//store all the buttons in array by for each loop with arrow function..
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{  // after click, run this function..
        if(e.target.innerHTML == '='){
            string = eval(string);// eval is inbuild function in js .. means it evaluate the equation after click =..
            input.value = string;
        }
        //string empty when we press AC button.and it show on input..
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value =  string;
        }
        // after pressing the del button the string present in input is decrease by one .. 
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            //if we can't press '=' then add the numbers in string .and show that string on input..
            string += e.target.innerHTML;
            input.value = string;

        }


    })
})