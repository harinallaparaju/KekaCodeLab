$(document).ready(function(){


    $('#Name').keyup(function(){
        validateName();
    })

    $('#Email').keyup(function(){
        validateEmail();
    })

    $('#Role').keyup(function(){
        validateRole();
    })

    $('#ContactName').keyup(function(){
        validateContactName();
    })

    $('#ContactEmail').keyup(function(){
        validateContactEmail();
    })

    $('#NameOrg').keyup(function(){
        validateOrg();
    })

    $('#SubmitCheck').click(function(){
        return validateSubmit();
    })

    $('#SubmitCheckCareer').click(function(){
        return validateCareerSubmit();
    })

    $('#FormClear').click(function(){
        return clearForm();
    })

    $('#State').change(function(){
        return getPromo();
    })
    
    $('#Name').keyup(function(){
        return validateDetails();
    })

    $('#Email').keyup(function(){
        return validateDetails();
    })

    $('#Role').keyup(function(){
        return validateDetails();
    })
    
    $('#ContactName').keyup(function(){
        return validateContactDetails();
    })

    $('#ContactEmail').keyup(function(){
        return validateContactDetails();
    })

    $('#NameOrg').keyup(function(){
        return validateContactDetails();
    })

    const regex = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

    function validateName(){
        let name = $('#Name').val();
        
        if(name.length == 0){
            $('#NameError').html("Name is Required");
            return false;
        }
        if(name.length > 0  && name.length < 4){
            $('#NameError').html("Enter Full Name");
        }
        else {
            $('#NameError').html("");
            return true;
        }
    }

    function validateEmail(){
        let email = $('#Email').val();

        if(email.length == 0){
            $('#EmailError').html("Email is Required");
            return false;
        }

        if(email.match(regex)){
            $("#EmailError").html("");
        }
        else{
            $("#EmailError").html("Invalid Email");
        }
    }

    function validateRole(){
        let role = $('#Role').val();

        if(role.length == 0){
            $('#RoleError').html("Enter Valid Role");
            return false;
        }
        else if(role.length > 0 && role.length < 4){
            $('#RoleError').html("Enter Valid Role");
        }
        else {
            $('#RoleError').html("");
            return true;
        }
    }

    function validateDetails() {
        var nameDetails = $('#Name').val();
        var emailDetails = $('#Email').val();
        var roleDetails = $('#Role').val();

        if(nameDetails.length != 0 && emailDetails.length != 0 && roleDetails.length != 0){
            $('#InvalidCareerSubmit').html("");
            return false;
        }
    }

    function validateContactDetails() {
        var contactNameDetails = $('#ContactName').val();
        var contactEmailDetails = $('#ContactEmail').val();
        var orgNameDetails = $('#NameOrg').val();

        if(contactNameDetails.length != "" && contactEmailDetails.length != "" && orgNameDetails.length != ""){
            $('#InvalidSubmit').html("");
        }
    }

    function clearForm() {
        $('#myForm')[0].reset();
        $('#ContactNameError').html("");
        $('#ContactEmailError').html("");
        $('#ContactOrgNameError').html("");
        $('#InvalidSubmit').html("");
    }

    function validateContactName(){
        let contactName = $('#ContactName').val();

        if(contactName.length == 0){
            $("#ContactNameError").html("Name is Required");
            return false;
        }
        if(contactName.length > 0 && contactName.length < 4){
            $("#ContactNameError").html("Enter Full Name");
        }
        else {
            $("#ContactNameError").html("");
        }
    }

    function validateContactEmail(){
        let contactEmail = $('#ContactEmail').val();

        if(contactEmail.length == ""){
            $("#ContactEmailError").html("Email is Required");
            return false;
        }

        if(contactEmail.match(regex)){
            $('#ContactEmailError').html("");
        }
        else {
            $('#ContactEmailError').html("Invalid Email");
        }
    }

    function validateOrg() {
        let orgName = $('#NameOrg').val();

        if(orgName.length == ""){
            $('#ContactOrgNameError').html("Organization Name is Required");
            return false;
        }
        if(orgName.length > 0 && orgName.length < 4){
            $('#ContactOrgNameError').html("Enter Full Organization Name");
        }
        else {
            $('#ContactOrgNameError').html("");
            return true;
        }
    
    }

    function validateSubmit() {
        let contactName = $('#ContactName').val();
        let contactEmail = $('#ContactEmail').val();
        let orgName = $('#NameOrg').val();

        if(contactName == "" || contactEmail == "" || orgName == ""){
            $('#InvalidSubmit').html("Please fill all the required fields below");
            validateContactName();
            validateContactEmail();
            validateOrg();
            return false;
        }
        else{
            alert("Message sent.")
            return true;
        }
    }

    function validateCareerSubmit() {
        let name = $('#Name').val();
        let email = $('#Email').val();
        let role = $('#Role').val();

        if(name == "" || email == "" || role == ""){
            $('#InvalidCareerSubmit').html("Please fill all the required fields below");
            validateName();
            validateEmail();
            validateRole();
            return false;
        }
        else {
            alert("Submitted.");
            return true;
        }
    }

    function getPromo() {
        var promo = $("#State option:selected").val()
        $('#PromoCode').val(promo+"-PROMO");
    }

    $("#BrowseBtn").click(function(){
        $("#FileName").click()
    })

    $("#FileName").change(function(){
        $("#FileText").val(this.files[0].name);
    })

});

