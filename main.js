function opt1Func() {
    document.getElementById("option1").classList.add("active")
    document.getElementById("option2").classList.remove("active")
    document.getElementById("circleCheck1").style.display = "none";
    document.getElementById("checkSvg1").style.display = "block";
    document.getElementById("checkSvg2").style.display = "none";
    document.getElementById("circleCheck2").style.display = "block";
}

function opt2Func() {
    document.getElementById("option2").classList.add("active")
    document.getElementById("option1").classList.remove("active")
    document.getElementById("circleCheck2").style.display = "none";
    document.getElementById("checkSvg2").style.display = "block";
    document.getElementById("checkSvg1").style.display = "none";
    document.getElementById("circleCheck1").style.display = "block";
}

function checkFunc() {
    document.getElementById("boxSvg").classList.toggle("active");
    document.getElementById("boxCheck").classList.toggle("active");
}

function submitBtn() {
    const firstNameMessage = document.getElementById("errorFirstName");
    const lastNameMessage  = document.getElementById("errorLastName");
    const emailMessage = document.getElementById("errorEmail");
    const query1Message = document.getElementById("errorQuery1");
    const messageError = document.getElementById("errorMessage");
    const checkMessage = document.getElementById("errorCheck");

    if (document.getElementById("firstName").value == "" ) {
        firstNameMessage.innerHTML = "This field is required";
        document.getElementById("firstName").style.border = "1px solid red";
    } else {
        firstNameMessage.innerHTML = "";
        document.getElementById("firstName").style.border = "1px solid hsl(186, 15%, 59%)";
    }

    if (document.getElementById("lastName").value == "" ) {
        lastNameMessage.innerHTML = "This field is required";
        document.getElementById("lastName").style.border = "1px solid red";
    } else {
        lastNameMessage.innerHTML = "";
        document.getElementById("lastName").style.border = "1px solid hsl(186, 15%, 59%)";;
    }
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("emailInput").value)) {
        emailMessage.innerHTML = "";
        document.getElementById("emailInput").style.border = "1px solid hsl(186, 15%, 59%)";
    } else {
        emailMessage.innerHTML = "Please enter a valid email address";
        document.getElementById("emailInput").style.border = "1px solid red";
    }

    if (document.getElementById("opt1Input").checked == false && document.getElementById("opt2Input").checked == false) {
        query1Message.innerHTML = "Please select query type";
        document.getElementById("option1").style.border = "1px solid red";      document.getElementById("option2").style.border = "1px solid red";
    } else {
        query1Message.innerHTML = "";
        document.getElementById("option1").style.border = "1px solid hsl(186, 15%, 59%)";
        document.getElementById("option2").style.border = "1px solid hsl(186, 15%, 59%)";
    }

    if (document.getElementById("messageInput").value == "") {
        messageError.innerHTML = "This field is reqired";
        document.getElementById("messageInput").style.border = "1px solid red";
    } else {
        messageError.innerHTML = "";
        document.getElementById("messageInput").style.border = "1px solid hsl(186, 15%, 59%)";
    }

    if (document.getElementById("checkBoxInput").checked == false) {
        checkMessage.innerHTML = "To submit this form, please consent to being contacted";
    } else {
        checkMessage.innerHTML = "";
    }


    let toast = document.getElementById("toastNotif");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("emailInput");
    let radio1 = document.getElementById("opt1Input");
    let radio2 = document.getElementById("opt2Input");
    let message = document.getElementById("messageInput");
    let checkBox = document.getElementById("checkBoxInput"); 

    function toastfunc() {
        toast.classList.add("show")
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    }

    if (firstName && firstName.value && lastName && lastName.value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("emailInput").value) && document.getElementById("option1").className == "option-1 active" && message && message.value && checkBox && checkBox.checked || document.getElementById("option2").className == "option-2 active" && message && message.value && checkBox && checkBox.checked) {
        toastfunc()
    }

    if (toast.className == "toaster show") {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        radio1.checked = false;
        document.getElementById("option1").classList.remove("active");
        document.getElementById("checkSvg1").style.display = "none";
        document.getElementById("circleCheck1").style.display = "block";
        radio2.checked = false;
        document.getElementById("option2").classList.remove("active");
        document.getElementById("checkSvg2").style.display = "none";
        document.getElementById("circleCheck2").style.display = "block";
        message.value = "";
        checkBox.checked = false;
        document.getElementById("boxSvg").classList.remove("active");
        document.getElementById("boxCheck").classList.remove("active");

    }
}
