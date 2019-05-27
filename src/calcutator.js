function calculateTip() {
    // Store the data of inputs
    var billAmount = document.getElementById("bill").value;
    var serviceQuality = document.getElementById("service").value;
    var numPeople = document.getElementById("people").value;

    // Quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter some values to get this baby up and running!");
        return;
    }

    // Check to see if this input is empty of less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Do some math!
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("result").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("result").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("submit").onclick = function() {
    event.preventDefault();
    calculateTip();
}