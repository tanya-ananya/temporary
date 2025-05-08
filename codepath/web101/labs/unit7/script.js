// Use the DOM method `.getElementById()` to find your form
let form = document.getElementById("myForm");
// 
const validateForm = (event) => {
    let elements = document.getElementById("myForm").elements;
    for (let i = 0; i < elements.length; i++) {
        console.log("This is i's value: " + i);
        if (elements[i].name === "name" && elements[i].value === "") {
            alert("Name input is empty");
        } 
        else if (elements[i].name === "email" && elements[i].value === "") {
            alert("Email input is empty");
        } 
        else if (elements[i].name === "password" && elements[i].value === "") {
            alert("Password input is empty");
        } else {
            console.log(elements[i].value);
        }
    };
    event.preventDefault();
};
  
// Add the an event listener to validate your form
form.addEventListener("submit", validateForm);

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    };
};