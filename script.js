function functionCalculate() {
    let dogSize = document.getElementById("dogSize").value;
    let nDays = document.getElementById("days").value;

    if (dogSize && nDays) {
        // Calculate subtotal
        let subtotal = dogSize * nDays;
        
        // Tax rate in Utah
        let taxRate = 0.047;
        
        // Calculate tax and total
        let tax = subtotal * taxRate;
        let total = subtotal + tax;

        // Display the results
        document.getElementById("printSize").innerHTML = 
            "Dog Size: $" + dogSize + "/day<br>" +
            "Number of Days: " + nDays + "<br>" +
            "Subtotal: $" + subtotal.toFixed(2) + "<br>" +
            "Tax (4.7%): $" + tax.toFixed(2) + "<br>" +
            "Total: $" + total.toFixed(2);
    } else {
        document.getElementById("printSize").innerHTML = "Please select both a dog size and number of days.";
    }
}

document.getElementById("calculateButton").addEventListener("click", function() {
    functionCalculate();
});