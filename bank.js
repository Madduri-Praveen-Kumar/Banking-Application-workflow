let balance = 0;
function deposit() {

    let amount=Number(document.getElementById("amount").value)

    if (amount<=0){

        document.getElementById("message").textconent="please enter a valid amount";

    }
    

    balance = balance + amount;

    document.getElementById("balance").textContent = + balance;

    document.getElementById("message").textContent ="Money deposited successfully";

    document.getElementById("amount").value = "";
}


function withdraw() {

    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        document.getElementById("message").textContent ="Please enter a valid amount";

        return;
    }

    if (amount > balance) {

        document.getElementById("message").textContent = "Insufficient balance";

        return;
    }

    balance = balance - amount;

    document.getElementById("balance").textContent = + balance;

    document.getElementById("message").textContent ="Money withdrawn successfully";

    document.getElementById("amount").value = "";
}


function checkBalance() {

    document.getElementById("message").textContent ="Your current balance is " + balance;
}