
function functionCalculate(){
    let dogSize = document.getElementById("dogSize").value;
    let nDays = document.getElementById("days").value;

    if (dogSize && nDays) {
        document.getElementById("printSize").innerHTML = 
            "Dog Size: $" + dogSize + "/day<br>Number of Days: " + nDays;
    } else {
        document.getElementById("printSize").innerHTML = "Please select both a dog size and number of days.";
    }
};

document.getElementById("calculateButton").addEventListener("click", function() {
    functionCalculate();
});