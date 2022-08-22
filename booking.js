////Creating Form Element Objects
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var email = document.getElementById("emailAddress");
var phoneno = document.getElementById("phoneNo");
var submitBtn = document.getElementById("submit-btn");
var addPassengerBtn = document.getElementById("add-passenger-btn");

var secondPassengerfirstName;
var secondPassengerlastName;
var secondPassengerage;



//Regular Expression for Form Elements
var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

//Disable Submit Button
submitBtn.disabled = "true";


let inputValidator = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false
};


firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)


//To show error if invalid input is given
function showError(input, message) {

    const formControl = input.parentElement;
    formControl.className = 'form-control-error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

//To remove existing error if valid input is given
function removeError(input) {

    const formControl = input.parentElement;
    formControl.className = 'form-control-error';
    const small = formControl.querySelector('small');
    small.innerHTML = `<img id="success" src='https://cdn-icons-png.flaticon.com/512/463/463574.png' width=16px height=16px>`;

}

//To enable submit button once all input in valid
function buttonRelease() {

    console.log(inputValidator);

    var result = inputValidator.firstn === true && inputValidator.lastn === true && inputValidator.ageperson === true && inputValidator.emailid === true && inputValidator.phonenumber === true;
    console.log(result);
    if (result) {

        submitBtn.removeAttribute("disabled");
        console.log("Submit button active");
    }
    else {
        submitBtn.disabled = "true";
        console.log("Submit button not active");
    }
}

//To access Gender data from radio element
function displayRadioValue(val) {

    var ele = document.getElementsByName(val);

    for (i = 0; i < ele.length; i++) {

        if (ele[i].checked) {

            return ele[i].value;
        }

    }
}



function addSecondPassengerForm() {
    submitBtn.parentNode.removeChild(submitBtn);
    addPassengerBtn.parentNode.removeChild(addPassengerBtn);

    var form = `
      <form action="confirmation.html" class="secondPassenger">
              <h2 id="second-title">2nd Passenger Details</h2>
              <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="secondPassengerfirstName" required>
              </div>
              <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="secondPassengerlastName" required>
              </div>
              <div class="mb-3">
                  <label for="age" class="form-label">Age</label>
                  <input type="text" class="form-control" id="secondPassengerage" required>
              </div>
              <div class="radio-box">
                  <label for="gender" class="form-label">Gender</label><br>
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="male" value="Male" name="secondgender" checked required>
                      <label class="form-check-label" for="male">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="female" value="Female" name="secondgender">
                      <label class="form-check-label" for="female">Female</label>
                  </div>
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="other" value="Other" name="secondgender">
                      <label class="form-check-label" for="other">Other</label>
                  </div>
              </div>
              <br>
              <div class="button-collection">
                  <div class="submitBtn">
                      <button type="submit" class="btn btn-primary" id="submit-btn-2" onclick="submitFunc()">Submit</button>
                  </div>
              </div>
          </form>
      
      `;

    document.getElementById("second-passenger").innerHTML = form;
    document.getElementById("second-passenger").style =
        "background: rgba(255,255,255,0.5);backdrop-filter: blur(5px);";


}


//To Validate First Name
function validateFirstName() {

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        removeError(firstName);
        inputValidator.firstn = true;
        buttonRelease();
    }
    else {

        invalid(firstName);
        showError(firstName, "Only Alphabets. Maximum 20 characters.");
        inputValidator.firstn = false;

    }
}



//To Validate Last Name
function validateLastName() {

    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
        valid(lastName);
        removeError(lastName);
        inputValidator.lastn = true;
        buttonRelease();

    }
    else {

        invalid(lastName);
        inputValidator.lastn = false;
        showError(lastName, "Only Alphabets. Maximum 20 characters.");

    }

}

//To Validate Age
function validateAge() {

    console.log(age.value);

    if (age_regex.test(age.value)) {
        valid(age);
        removeError(age);
        inputValidator.ageperson = true;
        buttonRelease();

    }
    else {

        invalid(age);
        inputValidator.ageperson = false;
        buttonRelease();
        showError(age, "Minimum 18 Years");

    }

}

//To Validate Email Address
function validateEmail() {

    console.log(email.value);

    if (email_regex.test(email.value)) {
        valid(email);
        removeError(email);
        inputValidator.emailid = true;
        buttonRelease();

    }
    else {

        invalid(email);
        inputValidator.emailid = false;
        showError(email, "Enter A Valid Email");

    }

}

//To Validate Phone Number
function validatePhoneNo() {

    console.log(phoneno.value);

    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        removeError(phoneno);
        inputValidator.phonenumber = true;
        buttonRelease();

    }
    else {

        invalid(phoneno);
        inputValidator.phonenumber = false;
        showError(phoneno, "Enter A Valid Phone Number");

    }

}

//To Specify Valid Inputs
function valid(element) {

    element.style.borderColor = "green";
    element.style.borderWidth = "thin thick";

}

//To Specify InValid Inputs
function invalid(element) {

    element.style.borderColor = "red";
    element.style.borderWidth = "thin thick";

}

function secondPassengerValidate() {

    secondPassengerfirstName = document.getElementById("secondPassengerfirstName");
    secondPassengerlastName = document.getElementById("secondPassengerlastName");
    secondPassengerage = document.getElementById("secondPassengerage");

    secondPassengerfirstName.addEventListener('input',validateFirstName)
    secondPassengerlastName.addEventListener('input',validateLastName)
    secondPassengerage.addEventListener('input',validateAge)


}


//To store First Passenger Details
function firstPassengerStorage() {

    var gender = displayRadioValue("gender");
    console.log("Gender:" + gender);

    localStorage.setItem("FirstName", firstName.value);
    localStorage.setItem("LastName", lastName.value);
    localStorage.setItem("Age", age.value);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("EmailID", email.value);
    localStorage.setItem("PhoneNo", phoneno.value);


}

//To store Second Passenger Details
function secondPassengerStorage() {

    secondPassengerfirstName = document.getElementById("secondPassengerfirstName");
    secondPassengerlastName = document.getElementById("secondPassengerlastName");
    secondPassengerage = document.getElementById("secondPassengerage");

    secondPassengerValidate();

    var secondgender = displayRadioValue("secondgender");

    localStorage.setItem("SecondFirstName", secondPassengerfirstName.value);
    localStorage.setItem("SecondLastName", secondPassengerlastName.value);
    localStorage.setItem("SecondAge", secondPassengerage.value);
    localStorage.setItem("SecondGender", secondgender);



}


//To be executed on submit button click
function submitFunc() {

    firstPassengerStorage();
    secondPassengerStorage();



}




























