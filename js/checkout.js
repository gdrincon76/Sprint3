// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');
var forms = document.querySelectorAll(".needs-validation");
// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      });

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      };
      
}
