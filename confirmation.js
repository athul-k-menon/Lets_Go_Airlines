//Creating Form Element Objects
var fname = document.getElementById("firstname");
var lname = document.getElementById("lastname");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var emailID = document.getElementById("email");
var phoneNO = document.getElementById("phoneno");

var sfname = document.getElementById("sfirstname");
var slname = document.getElementById("slastname");
var sage = document.getElementById("sage");
var sgender = document.getElementById("sgender");

//Creating Flight Element Objects
var flightNO = document.getElementById("fligtNo");
var ori = document.getElementById("origin");
var destination = document.getElementById("destination");
var departTime = document.getElementById("departt");
var arriveTime = document.getElementById("arrivet");
var price = document.getElementById("price");

//Accessing Passenger Details From Storage
var flightID = sessionStorage.getItem("FlightID");
var firstname = sessionStorage.getItem("FirstName");
var lastname = sessionStorage.getItem("LastName");
var Gender = sessionStorage.getItem("Gender");
var Age = sessionStorage.getItem("Age");
var EmailID = sessionStorage.getItem("EmailID");
var PhoneNo = sessionStorage.getItem("PhoneNo");

//Appending Passenger Details
fname.innerHTML = firstname;
lname.innerHTML = lastname;
age.innerHTML = Age;
gender.innerHTML = Gender;
emailID.innerHTML = EmailID;
phoneNO.innerHTML = PhoneNo;

//Accessing Second Passenger Details From Storage
var secondfirstname = sessionStorage.getItem("SecondFirstName");
var secondlastname = sessionStorage.getItem("SecondLastName");
var secondGender = sessionStorage.getItem("SecondAge");
var secondAge = sessionStorage.getItem("SecondGender");


//Appending Second Passenger Details
sfname.innerHTML = secondfirstname;
slname.innerHTML = secondlastname;
sage.innerHTML = secondAge;
sgender.innerHTML = secondGender;    


//To check if Second Form is Empty
if (secondfirstname != null) {

    document.getElementById("right-right").style = "display:true";
}




//To Display Flight Details
function populateFlightDetails(details) {

    let flightObj = details[flightID - 1];
    const departT = new Date(flightObj.departTime)
    const arriveT = new Date(flightObj.ArrivalTime)

    flightNO.innerHTML = flightObj.flightNum;
    ori.innerHTML = flightObj.origin
    destination.innerHTML = flightObj.destination
    departTime.innerHTML = departT.toUTCString();
    arriveTime.innerHTML = arriveT.toUTCString();
    price.innerHTML = "₹" + flightObj.price;
}


fetch('flights.json')
    .then(response => {
        return response.json();
    })
    .then(data => {

        populateFlightDetails(data);

    });

  




