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

var secondfirstname = localStorage.getItem("SecondFirstName");
var secondlastname = localStorage.getItem("SecondLastName");
var secondGender = localStorage.getItem("SecondAge");
var secondAge = localStorage.getItem("SecondGender");

if (secondfirstname != null) {

    populateSecondPassengerDetails();
}



function populateSecondPassengerDetails() {

    var content = `

        <h3>Second Passenger Details</h3>
          <div class="passenger-details">
            <h4>First Name</h4>
            <h5 id="sfirstname"></h5>
            <h4>Last Name</h4>
            <h5 id="slastname"></h5>
            <h4>Age</h4>
            <h5 id="sage"></h5>
            <h4>Gender</h4>
            <h5 id="sgender"></h5>
          </div>
`;

    console.log("About to insert");
    document.getElementById("right-right").innerHTML = content;

}




function populateFlightDetails(details) {

    let flightObj = details[flightID - 1];
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

document.getElementById("homepage").addEventListener('click',function(){

    window.location.href = "homepage.html";
})    

var sfname = document.getElementById("sfirstname");
var slname = document.getElementById("slastname");
var sage = document.getElementById("sage");
var sgender = document.getElementById("sgender");

sfname.innerHTML = secondfirstname;
slname.innerHTML = secondlastname;
sage.innerHTML = secondAge;
sgender.innerHTML = secondGender;    
