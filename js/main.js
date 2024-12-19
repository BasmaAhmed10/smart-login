
const formOpenBtn = document.querySelector("#form-login"), 
      home = document.querySelector(".home"),
      formContainer = document.querySelector(".form-container"),
      formCloseBtn = document.querySelector(".form-close"),
      signupBtn = document.getElementById("signup"),
      loginBtn = document.getElementById("submit-login"), 
      PwShowHide = document.querySelectorAll(".pw-hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

PwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector('input');
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");

  
    const emailInput = document.querySelector('input[type="Email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    const email = emailInput.value;
    const password = passwordInput.value;

   
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email && password) {
        if (emailRegex.test(email)) {
           
            localStorage.setItem("email", email);

            
            window.location.href = "welcome.html"; 
        } else {
            alert("Please enter a valid email address.");
        }
    } else {
        alert("Please fill in both fields.");
    }
});

