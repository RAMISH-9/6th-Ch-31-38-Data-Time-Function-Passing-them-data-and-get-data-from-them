// (Current Data and Time)
let rightNowDate = new Date();
document.getElementById("originalTextBox").innerHTML = rightNowDate;

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}

// Get Name of Today 
function getNameOfToday() {

    let rigthNow = new Date();
    console.log(rigthNow)
    let theDay = rigthNow.getDay();
    console.log(theDay)
    let nameOfToday = dayNames[theDay];
    // console.log(nameOfToday)
    showOutput(nameOfToday)
    tellTime()
}

// Calculate days passed since you born
function calculateDaysPassed() {
    let dob = document.getElementById("dob").value;
    console.log(dob)

    let today = new Date();
    let bornDate = new Date(dob);
    console.log(today)
    console.log(bornDate)

    let todayTime = today.getTime();
    let bornDateTime = bornDate.getTime();
    console.log(todayTime)
    console.log(bornDateTime)
    // return

    let msDiff = todayTime - bornDateTime;

    console.log("msDiff", msDiff)

    let daysDiff = msDiff / (1000 * 60 * 60 * 24); // this line may generate floating point 
    console.log(daysDiff)

    let html = Math.floor(daysDiff) + "days have been passed since you born";
    showOutput(html)
    tellTime();
}


// When is your next Birthday

function calculateNextBirthday(dob) {

    let today = new Date();
    
    let birthYear = dob.getFullYear();
    let birthMonth = dob.getMonth();
    let birthDay = dob.getDate();

    
    let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);

    if (today > nextBirthday) {
        
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    let timeUntilNextBirthday = nextBirthday.getTime() - today.getTime();

    let daysUntilNextBirthday = Math.ceil(timeUntilNextBirthday / (1000 * 60 * 60 * 24));

    return {
        nextBirthdayDate: nextBirthday,
        daysUntilNextBirthday: daysUntilNextBirthday
    };
    tellTime()
}


// Greet User
function greetUser(msg) {
    showOutput(msg)
}
function greetUserButton() {
    let userName = prompt("Enter your name");

    let now = new Date();
    let hour = now.getHours();

    let greetinngMessage = "Good "

    if (hour >= 4 && hour < 12) {
        greetinngMessage += "Morning"
    }else if (hour >= 12 && hour < 17) {
        greetinngMessage += "Afternoon"
    }else if (hour >= 17 && hour < 20) {
        greetinngMessage += "Evening"
    }else {
        greetinngMessage += "Night"
    }let msg = greetinngMessage + " " + userName

    greetUser(msg)
    tellTime()
}


// When is your next Birthday
function calculateNextBirthday() {
    // Get the user's date of birth from the input field
    let dobInput = document.getElementById("dob").value;
    
    // Convert the date of birth string to a Date object
    let dob = new Date(dobInput);
    
    // Create a new Date object for today
    let today = new Date();
    
    // Calculate the year of the next birthday
    let nextBirthdayYear = today.getFullYear();
    if (today.getMonth() > dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() > dob.getDate())) {
        nextBirthdayYear++; // Increment year if birthday has already occurred this year
    }
    
    // Set the next birthday date
    let nextBirthday = new Date(nextBirthdayYear, dob.getMonth(), dob.getDate());
    
    // Calculate the number of days until the next birthday
    let daysUntilNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    // Display the result in an HTML element
    let resultElement = document.getElementById("output");
    resultElement.textContent = "Your next birthday is on " + nextBirthday.toDateString() + " (" + daysUntilNextBirthday + " days left).";
    tellTime()
}

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    output.innerHTML += "<br>You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br/>";
}

// Tell Time 1 Btn
function tellTime1() {
    // tellTime()
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    output.innerHTML += "<br>You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br/>";
}

// Tell Time 2 Btn
function tellTime2() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    output.innerHTML += "<br>You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br/>";
}

// Tell Time 3 Btn
function tellTime3() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    output.innerHTML += "<br>You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br/>";
}

// Calculate Tax

function calculateTaxBtn() {
    var price = +prompt("Enter price");
    var taxRate = 17;

    // var tax = price * taxRate / 100;
    var tax = calculateTax(price, taxRate);

    let html = "Tax: " + tax;
    showOutput(html)
}

function calculateTax(price, taxRate) {

    return price * taxRate / 100;
}

function calculateTotal(price) {

    if (price < 1000) {
        var taxRate = 8;
    } else {
        var taxRate = 16;
    }
    var tax = calculateTax(price, taxRate)

    var total = price + tax;

    return total;
}

// Calculate Total Button 
function calculateTotalBtn() {
    
    var price = +prompt("Enter price");
    var total = calculateTotal(price);
    let html = "Total: " + Math.round(total);
    showOutput(html)
}

// Clear Output Button
document.getElementById("clearOutPutButton").onclick = function () {
    document.getElementById("output").innerHTML= '';
}