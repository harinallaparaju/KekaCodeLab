var viewForm = document.getElementById('ToggleButton');
var formSection = document.getElementById('myForm');
var form = document.getElementById('form');
var contactList = document.getElementById('contactDetails');
var contact = document.createElement('div');
var contactListDetails = document.createElement('div');
contactListDetails.id = "selected-content";
contactListDetails.style.display = "none";
var selectedContact;
var globalUser;
var addContact = document.getElementById("addButton");
var saveDetails = document.getElementById('SaveButton');
var textEdit = document.querySelector('.text-edit');
var textDelete = document.querySelector('.text-delete');
viewForm.addEventListener('click', displayForm);
function displayForm() {
    if (formSection.style.display === "none") {
        formSection.style.display = "block";
        contactListDetails.style.display = "none";
        addContact.style.display = "block";
        saveDetails.style.display = "none";
        console.log('0');
    }
    else {
        formSection.style.display = "none";
        saveDetails.style.display = "none";
        addContact.style.display = "block";
        console.log("1");
    }
    event.preventDefault();
    form.reset();
}
;
var contactDetails = /** @class */ (function () {
    function contactDetails(args) {
        this.name = args.name;
        this.email = args.email;
        this.mobile = args.mobile;
        this.landline = args.landline;
        this.website = args.website;
    }
    return contactDetails;
}());
var contacts = [{
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        mobile: document.getElementById("Mobile").value,
        landline: document.getElementById("Landline").value,
        website: document.getElementById("Website").value
    }];
addContact.addEventListener("click", addUser);
function addUser() {
    event.preventDefault();
    var user = new contactDetails({
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        mobile: document.getElementById("Mobile").value,
        landline: document.getElementById("Landline").value,
        website: document.getElementById("Website").value
    });
    contacts.push(user);
    var contact = document.createElement('div');
    contact.setAttribute('class', 'contact-details-item');
    contact.id = "clickDiv";
    var NameInfo = document.createElement('div');
    NameInfo.innerHTML = (document.getElementById('Name').value);
    contact.appendChild(NameInfo);
    NameInfo.className = ('contact-name');
    var EmailInfo = document.createElement('div');
    EmailInfo.innerHTML = (document.getElementById('Email').value);
    contact.appendChild(EmailInfo);
    EmailInfo.className = ('contact-email');
    var MobileInfo = document.createElement('div');
    MobileInfo.innerHTML = (document.getElementById('Mobile').value);
    contact.appendChild(MobileInfo);
    MobileInfo.className = ('contact-mobile');
    contactList.appendChild(contact);
    var allDivs = document.getElementsByClassName('contact-details-item');
    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "white";
    }
    contact.style.backgroundColor = "rgb(206, 231, 242)";
    var textTruncate = NameInfo.innerHTML;
    if (textTruncate.length > 20) {
        var shortText = textTruncate.substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
        NameInfo.innerHTML = shortText;
        var onEnter = NameInfo;
        onEnter.addEventListener("mouseenter", function () {
            NameInfo.innerHTML = textTruncate;
        });
        onEnter.addEventListener("mouseleave", function () {
            NameInfo.innerHTML = shortText;
        });
    }
    contact.addEventListener('click', function () {
        var allDetails = contactList.children;
        selectedContact = contact;
        for (var i_1 = 0; i_1 < allDetails.length; i_1++) {
            allDetails[i_1].style.backgroundColor = 'white';
        }
        if (selectedContact.style.backgroundColor == "white") {
            selectedContact.style.backgroundColor = 'rgb(206, 231, 242)';
        }
        if (formSection.style.display == 'block') {
            formSection.style.display = "none";
        }
        //Calling Function to Create RightDiv
        createRightDiv(user);
        globalUser = user;
        document.getElementById('TextEdit').addEventListener('click', function () {
            if (formSection.style.display == 'none') {
                formSection.style.display = "block";
                contactListDetails.style.display = "none";
                addContact.style.display = "none";
                saveDetails.style.display = "block";
            }
        });
        document.getElementById('TextDelete').addEventListener('click', function () {
            console.log("100");
            contactListDetails.parentNode.removeChild(contactListDetails);
            contact.parentNode.removeChild(contact);
            createRightDiv(contacts[(contacts.length - 1) - 1]);
            var colorDelete = contactList.lastChild;
            colorDelete.style.backgroundColor = 'rgb(206, 231, 242)';
        });
    });
    formSection.style.display = "none";
}
function createRightDiv(obj) {
    //RightTargetDivCreation
    var targetDivSelect = document.getElementById('contactCompleteDetails');
    if (!(document.querySelector('#selected-content'))) {
        contactListDetails = document.createElement('div');
        contactListDetails.id = "selected-content";
    }
    else {
        contactListDetails = document.querySelector('#selected-content');
    }
    //Name
    if (!(document.querySelector("#DetailsListName"))) {
        var NameInfo = document.createElement('div');
        NameInfo.id = ('DetailsListName');
    }
    else {
        NameInfo = document.querySelector('#DetailsListName');
    }
    NameInfo.innerHTML = obj.name;
    contactListDetails.appendChild(NameInfo);
    //EditButton
    var imgEdit = document.createElement('img');
    imgEdit.src = "scripts/edit1.jpg";
    imgEdit.className = "img-edit";
    NameInfo.appendChild(imgEdit);
    var textEdit = document.createElement('span');
    textEdit.textContent = "EDIT";
    textEdit.className = "text-edit";
    NameInfo.appendChild(textEdit);
    textEdit.id = "TextEdit";
    //DeleteButton
    var imgDelete = document.createElement('img');
    imgDelete.src = "scripts/delete1.png";
    imgDelete.className = "img-delete";
    NameInfo.appendChild(imgDelete);
    var textDelete = document.createElement('span');
    textDelete.textContent = "DELETE";
    textDelete.className = "text-delete";
    NameInfo.appendChild(textDelete);
    textDelete.id = "TextDelete";
    //Email
    if (!(document.querySelector("#DetailsListEmail"))) {
        var EmailInfo = document.createElement('div');
        EmailInfo.id = ('DetailsListEmail');
    }
    else {
        EmailInfo = document.querySelector("#DetailsListEmail");
    }
    EmailInfo.innerHTML = 'Email: ' + obj.email;
    contactListDetails.appendChild(EmailInfo);
    //Mobile
    if (!(document.querySelector("#DetailsListMobile"))) {
        var MobileInfo = document.createElement('div');
        MobileInfo.id = ('DetailsListMobile');
    }
    else {
        MobileInfo = document.querySelector("#DetailsListMobile");
    }
    MobileInfo.innerHTML = 'Mobile: ' + obj.mobile;
    contactListDetails.appendChild(MobileInfo);
    //Landline
    if (!(document.querySelector("#DetailsListLandline"))) {
        var LandlineInfo = document.createElement('div');
        LandlineInfo.id = ('DetailsListLandline');
    }
    else {
        LandlineInfo = document.querySelector("#DetailsListLandline");
    }
    LandlineInfo.innerHTML = 'Landline: ' + obj.landline;
    contactListDetails.appendChild(LandlineInfo);
    //Website
    if (!(document.querySelector("#DetailsListWebsite"))) {
        var WebsiteInfo = document.createElement('div');
        WebsiteInfo.id = ('DetailsListWebsite');
    }
    else {
        WebsiteInfo = document.querySelector("#DetailsListWebsite");
    }
    WebsiteInfo.innerHTML = 'Website: ' + obj.website;
    contactListDetails.appendChild(WebsiteInfo);
    //Address
    if (!(document.querySelector("#DetailsListAddress"))) {
        var AddressInfo = document.createElement('div');
        AddressInfo.id = ('DetailsListAddress');
    }
    else {
        AddressInfo = document.querySelector("#DetailsListAddress");
    }
    AddressInfo.innerHTML = 'Address: ' + (document.getElementById('text-box').value);
    contactListDetails.appendChild(AddressInfo);
    targetDivSelect.appendChild(contactListDetails);
    contactListDetails.style.display = "block";
}
saveDetails.addEventListener('click', function () {
    formSection.style.display = "none";
    selectedContact.querySelectorAll('div').forEach(function (divs, index) {
        if (index === 0) {
            divs.innerText = (document.getElementById('Name')).value;
            globalUser.name = divs.innerText;
        }
        else if (index === 1) {
            divs.innerText = (document.getElementById('Email')).value;
            globalUser.email = divs.innerText;
        }
        else if (index === 2) {
            divs.innerText = (document.getElementById('Mobile')).value;
            globalUser.phone = divs.innerText;
        }
        globalUser.landline = (document.getElementById('Landline')).value;
        globalUser.website = (document.getElementById('Website')).value;
        globalUser.address = (document.getElementById('Address')).value;
    });
    contactListDetails.style.display = "block";
});
document.getElementById('Name').addEventListener('keyup', function () {
    var name = document.getElementById('Name').value;
    var nameError = document.getElementById('NameError');
    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    }
    if (name.length > 0 && name.length < 4) {
        nameError.innerHTML = "Enter Full Name";
    }
    else {
        nameError.innerHTML = '';
        return true;
    }
});
document.getElementById('Email').addEventListener('keyup', function () {
    var regex = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var email = document.getElementById('Email').value;
    var emailError = document.getElementById('EmailError');
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (email.match(regex)) {
        emailError.innerHTML = '';
    }
    else {
        emailError.innerHTML = 'Invalid Email';
    }
});
document.getElementById('Mobile').addEventListener('keyup', function () {
    var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var mobile = document.getElementById('Mobile').value;
    var mobileError = document.getElementById('MobileError');
    if (mobile.length == 0) {
        mobileError.innerHTML = "Mobile is required";
        return false;
    }
    if (mobile.match(regex)) {
        mobileError.innerHTML = '';
    }
    else {
        mobileError.innerHTML = 'Invalid Mobile';
    }
});
