var fname = document.getElementById("firstname");
var lname = document.getElementById("lastname");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var emailID = document.getElementById("email");
var phoneNO = document.getElementById("phoneno");


var flightNO = document.getElementById("fligtNo");
var ori = document.getElementById("origin");
var destination = document.getElementById("destination");
var departTime = document.getElementById("departt");
var arriveTime = document.getElementById("arrivet");
var price = document.getElementById("price");

var flightID = localStorage.getItem("FlightID");
var firstname = localStorage.getItem("FirstName");
var lastname = localStorage.getItem("LastName");
var Gender = localStorage.getItem("Gender");
var Age = localStorage.getItem("Age");
var EmailID = localStorage.getItem("EmailID");
var PhoneNo = localStorage.getItem("PhoneNo");

fname.innerHTML = firstname;
lname.innerHTML = lastname;
age.innerHTML = Age;
gender.innerHTML = Gender;
emailID.innerHTML = EmailID;
phoneNO.innerHTML = PhoneNo;



function populateFlightDetails(details) {

    let flightObj = details[flightID-1];
    const departT = new Date(flightObj.departTime)
    const arriveT = new Date(flightObj.ArrivalTime)

    flightNO.innerHTML = flightObj.flightNum;
    ori.innerHTML = flightObj.origin
    destination.innerHTML = flightObj.destination
    departTime.innerHTML = departT.toUTCString();
    arriveTime.innerHTML = arriveT.toUTCString();
    price.innerHTML = flightObj.price;
}





fetch('flights.json')
    .then(response => {
        return response.json();
    })
    .then(data => {

        populateFlightDetails(data);

    });
