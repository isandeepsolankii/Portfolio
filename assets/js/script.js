const email = document.getElementById("inputEmail");

function checkInputs() {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address cannot be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[name='contactFormEmail']"); // Select the form by its name attribute

  form.addEventListener("submit", function (event) {
    // Listen for the 'submit' event
    event.preventDefault(); // Prevent the default form submission

    // Perform client-side validation
    checkInputs();

    // Check if there are any input fields with the 'error' class
    const errors = document.querySelectorAll(".error");
    if (errors.length === 0) {
      // If no errors, allow the form to be submitted
      form.submit();
    }
  });
});
