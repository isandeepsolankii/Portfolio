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
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Perform client-side validation
      checkInputs();

      // If the form is valid, proceed to send the data
      const form = document.getElementById("myForm");
      const formData = new FormData(form);

      const url = "http://safe-homes-final/assets/php/send_email.php";
      console.log("Sending request to: ", url); // Log the URL to the console

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Form submission response:", data);
          alert(data);
        })
        .catch((error) => {
          console.error("Error during form submission:", error);
        });
    });
});

// designation change

// typingEffect.js
