////Creating Form Element Objects
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var email = document.getElementById("emailAddress");
var phoneno = document.getElementById("phoneNo");
var submitBtn = document.getElementById("submit-btn");
var addPassengerBtn = document.getElementById("add-passenger-btn");

//Creating Second Passenger Form Objects
var secondPassengerfirstName = document.getElementById("secondPassengerfirstName");
var secondPassengerlastName = document.getElementById("secondPassengerlastName");
var secondPassengerage = document.getElementById("secondPassengerage");
var submitBtn2 = document.getElementById("submit-btn-2");

//Regular Expression for Form Elements
var name_regex = /^[a-z A-Z]{1,20}$/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
var phone_regex = /^[0-9]{10}$/;

//Disable Submit Button
submitBtn.disabled = "true";

//Disable Add Passenger Button
addPassengerBtn.disabled = "true";

//Disable Second Passenger Submit Button
submitBtn2.disabled = "true";

let inputValidator = {
    firstn: false,
    lastn: false,
    ageperson: false,
    emailid: false,
    phonenumber: false,
    secondfirstn: false,
    secondlastn: false,
    secondage: false,
};

//Creating Event Listeners
firstName.addEventListener("input", function () { validateName(firstName); });
lastName.addEventListener("input", function () { validateName(lastName); });
age.addEventListener("input", function () { validateAge(age); });
email.addEventListener("input", validateEmail);
phoneno.addEventListener("input", validatePhoneNo);
secondPassengerfirstName.addEventListener("input", function () { validateName(secondPassengerfirstName, inputValidator); });
secondPassengerlastName.addEventListener("input", function () { validateName(secondPassengerlastName, inputValidator); });
secondPassengerage.addEventListener("input", function () { validateAge(secondPassengerage); });

//To show error if invalid input is given
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control-error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//To remove existing error if valid input is given
function removeError(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control-error";
    const small = formControl.querySelector("small");
    small.innerHTML = `<img id="success" src='https://cdn-icons-png.flaticon.com/512/463/463574.png' width=16px height=16px>`;
}

//To enable submit button once all inputs are valid
function buttonRelease() {

    const [result,result2] = validateCondition();
    if (result) {
        submitBtn.removeAttribute("disabled");
        addPassengerBtn.removeAttribute("disabled");
    } else {
        addPassengerBtn.disabled = "true";
    }

    if (result2) {
        submitBtn2.removeAttribute("disabled");
    }
}



//To validate different element object
function validator(ele, sign) {
    if (ele.getAttribute("id") == "firstName") {
        inputValidator.firstn = sign;
    } else if (ele.getAttribute("id") == "lastName") {
        inputValidator.lastn = sign;
    } else if (ele.getAttribute("id") == "secondPassengerfirstName") {
        inputValidator.secondfirstn = sign;
    } else if (ele.getAttribute("id") == "secondPassengerlastName") {
        inputValidator.secondlastn = sign;
    } else if (ele.getAttribute("id") == "age") {
        inputValidator.ageperson = sign;
    } else if (ele.getAttribute("id") == "secondPassengerage") {
        inputValidator.secondage = sign;
    }
}

//To Validate Button Release Condition
function validateCondition() {

    var result =
        inputValidator.firstn === true &&
        inputValidator.lastn === true &&
        inputValidator.ageperson === true &&
        inputValidator.emailid === true &&
        inputValidator.phonenumber === true;

    var result2 =
        inputValidator.secondfirstn === true &&
        inputValidator.lastn === true &&
        inputValidator.secondage === true;

        return [result,result2];


}

//To add Second Passenger Form
function addSecondPassengerForm() {
    submitBtn.parentNode.removeChild(submitBtn);
    addPassengerBtn.parentNode.removeChild(addPassengerBtn);

    document.getElementById("second-passenger").style = "display:true";
    document.getElementById("second-passenger").style = "background: rgba(255,255,255,0.5);backdrop-filter: blur(5px);";
}

//To Validate First Name
function validateName(element) {

    if (name_regex.test(element.value)) {
        valid(element);
        removeError(element);
        validator(element, true);
        buttonRelease();
    } else {
        invalid(element);
        showError(element, "Only Alphabets. Maximum 20 characters.");
        validator(element, false);
    }
}


//To Validate Age
function validateAge(element) {

    if (element.value >= 18 && element.value <= 999) {
        valid(element);
        removeError(element);
        validator(element, true);
        buttonRelease();
    } else {
        invalid(element);
        validator(element, false);
        buttonRelease();
        showError(element, "Minimum 18 Years");
    }
}



//To Validate Email Address
function validateEmail() {

    if (email_regex.test(email.value)) {
        valid(email);
        removeError(email);
        inputValidator.emailid = true;
        buttonRelease();
    } else {
        invalid(email);
        inputValidator.emailid = false;
        showError(email, "Enter A Valid Email");
    }
}

//To Validate Phone Number
function validatePhoneNo() {

    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        removeError(phoneno);
        inputValidator.phonenumber = true;
        buttonRelease();
    } else {
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

//To store First Passenger Details
function firstPassengerStorage() {

    var gender = document.querySelector('input[type=radio][name=gender]:checked');

    sessionStorage.setItem("FirstName", firstName.value);
    sessionStorage.setItem("LastName", lastName.value);
    sessionStorage.setItem("Age", age.value);
    sessionStorage.setItem("Gender", gender.value);
    sessionStorage.setItem("EmailID", email.value);
    sessionStorage.setItem("PhoneNo", phoneno.value);



    sessionStorage.removeItem('SecondFirstName');
    sessionStorage.removeItem('SecondLastName');
    sessionStorage.removeItem('SecondAge');
    sessionStorage.removeItem("SecondGender");
}

//To store Second Passenger Details
function secondPassengerStorage() {
    secondPassengerfirstName = document.getElementById("secondPassengerfirstName");
    secondPassengerlastName = document.getElementById("secondPassengerlastName");
    secondPassengerage = document.getElementById("secondPassengerage");


    var secondgender = document.querySelector('input[type=radio][name=secondgender]:checked');

    if (secondPassengerfirstName.value != '') {

        sessionStorage.setItem("SecondFirstName", secondPassengerfirstName.value);
        sessionStorage.setItem("SecondLastName", secondPassengerlastName.value);
        sessionStorage.setItem("SecondAge", secondPassengerage.value);
        sessionStorage.setItem("SecondGender", secondgender.value);

    }

}


//To be executed on submit button click
function submit1Func() {
    firstPassengerStorage();

}

function submit2Func() {
    firstPassengerStorage();
    secondPassengerStorage();
}