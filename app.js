let myTip = document.querySelector("#tip-amount");
let myTotal = document.querySelector("#total-per-person");
let myBill = document.querySelector("#bill-amount");
let myNumber =  document.querySelector("#number-of-people");
let percent = document.querySelector('input[name="tip"]:checked');
let calculate =  document.querySelector("#calculate");

let myFunction = ()=> {
    let bill = parseFloat(myBill.value);
    let number = parseFloat(myNumber.value);
    let per = parseFloat(percent.value);

    if(bill && number && per){
        let tip = (bill * per) / 100;
        let total = (bill + tip) / number;

        myTip.innerHTML = tip.toFixed(1);
        myTotal.innerHTML = total.toFixed(1);
    }
}

calculate.addEventListener("click", myFunction);