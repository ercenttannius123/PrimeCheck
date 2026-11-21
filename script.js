const numberinput = document.getElementById("numberinput")
const checkbutton = document.getElementById("checkbutton")
const result = document.getElementById("result")

checkbutton.addEventListener("click",function(){
    if(numberinput.value === ""){
        result.textContent = "Please Enter A Number";
        return;
    }
    const number = Number(numberinput.value) //Dari Inputan User
    if(!Number.isInteger(number)){
        result.textContent = "Please Enter A valid integer";
        return;
    }
    let isprime = true //asumsi awalnya true
    if(number < 2){
        isprime = false
    }
    else{
        for(let i = 2;i<= Math.sqrt(number);i++){
            if(number % i === 0){
                isprime = false;
                break;
            }
        }
    }
    if(isprime){
        result.textContent = number + " is a prime number";
    }
    else{
        result.textContent = number + " is not a prime number";
    }
})