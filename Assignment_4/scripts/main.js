let nameError = document.getElementById('NameError');
let emailError = document.getElementById('EmailError');
let roleError = document.getElementById('RoleError');
let resumeError = document.getElementById('ResumeError');

let contactNameError =  document.getElementById('ContactNameError');
let contactEmailError = document.getElementById('ContactEmailError');
let orgNameError = document.getElementById('ContactOrgNameError');

let browseButton = document.getElementById('BrowseButton');
let fileName = document.getElementById('FileName');

const regex = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

function validateName() {

    let name = document.getElementById('Name').value;

    if (name.length == 0){
    nameError.innerHTML = "Name is Required";
    return false;
    }
    if (name.length > 0 && name.length < 4){
        nameError.innerHTML = "Enter Full Name";
    }
    else {
        nameError.innerHTML = '';
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById('Email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    
    if (email.match(regex)) {
        emailError.innerHTML = '';
    }
    else {
        emailError.innerHTML = 'Invalid Email';
    }
}


function validateRole(){
    let role = document.getElementById('Role').value;

    if(role.length == 0){
        roleError.innerHTML = "Enter Valid Role";
        return false;
    }
    else if(role.length > 0 && role.length < 4){
        roleError.innerHTML = "Enter Valid Role";
    }
    else {
    roleError.innerHTML = '';
    return true;
    }
}

function validateDetails() {

    var nameDetails = document.getElementById('Name').value;
    var emailDetails = document.getElementById('Email').value;
    var roleDetails = document.getElementById('Role').value;

    if(nameDetails.length != "" && emailDetails.length != "" && roleDetails.length != ""){
        document.getElementById('InvalidCareerSubmit').innerText = "";
    }
    
}

function validateContactDetails() {
    var contactNameDetails = document.getElementById('ContactName').value;
    let contactEmailDetails = document.getElementById('ContactEmail').value;
    let orgNameDetails = document.getElementById('NameOrg').value;

    if(contactNameDetails.length != "" && contactEmailDetails.length != "" && orgNameDetails != ""){
        document.getElementById('InvalidSubmit').innerText = "";
    }
}

function clearForm(){
    document.getElementById("myForm").reset();
    document.getElementById('ContactNameError').innerHTML = "";
    document.getElementById('ContactEmailError').innerHTML = "";
    document.getElementById('ContactOrgNameError').innerHTML = "";
    document.getElementById('InvalidSubmit').innerText = "";
}

function validateContactName() {
    let contactName = document.getElementById('ContactName').value;

    if (contactName.length == ""){
    contactNameError.innerHTML = "Name is Required";
    return false;
    }
    if (contactName.length > 0 && contactName.length < 4){
        contactNameError.innerHTML = "Enter Full Name";
    }
    else {
        contactNameError.innerHTML = '';
        return true;
    }
    
}

function validateContactEmail() {
    let contactEmail = document.getElementById('ContactEmail').value;

    if(contactEmail.length == 0){
        contactEmailError.innerHTML = "Email is Required";
        return false;
    }
    
    if (contactEmail.match(regex)) {
        contactEmailError.innerHTML = '';
    }
    else {
        contactEmailError.innerHTML = 'Invalid Email';
    }
    
}

function validateOrg() {
    let orgName = document.getElementById('NameOrg').value;

    if (!orgName.length){
    orgNameError.innerHTML = "Organization Name is Required";
    return false;
    }
    if (orgName.length > 0 && orgName.length < 4){
        orgNameError.innerHTML = "Enter Full Organization Name";
    }
    else {
        orgNameError.innerHTML = '';
        return true;
    }
    
}

function validateSubmit() {
        let contactName = document.getElementById("ContactName").value;
        let contactEmail = document.getElementById("ContactEmail").value;
        let orgName = document.getElementById("NameOrg").value;
        if (contactName == "" || contactEmail == "" || orgName == ""){
            document.getElementById('InvalidSubmit').innerText = "Please fill all the required fields below";
            validateContactName();
            validateContactEmail();
            validateOrg();
            return false;
        }
        else{
            alert("Message sent.");
            return true;
        }
}

function validateCareerSubmit() {
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let role = document.getElementById('Role').value;
    if(name == "" || email == "" || role == ""){
        document.getElementById('InvalidCareerSubmit').innerText = "Please fill all the required fields below";
        validateName();
        validateEmail();
        validateRole();
        return false;
    }
    else{
        alert("Submitted.");
        return true;
    }
}

function getPromo() {

    var value = document.getElementById("State");
    var promo = value.options[value.selectedIndex].text;
    document.getElementById("PromoCode").value = promo+"-PROMO";
 
  }

  function getFile(){
      var fileName = document.getElementById('FileName').value.split("\\").pop();
      document.getElementById('FileText').value = fileName;
  }