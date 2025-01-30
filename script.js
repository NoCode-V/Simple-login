const forgot = document.getElementById("forgotdiv");
const welcomeinput = document.getElementById("welcomeinput");
const email = "email@email.com";
const password = "1234";
const passwordCheck = document.getElementById("password");
const emailCheck = document.getElementById("email");
const passwordInput = passwordCheck.value;
const emailInput = passwordCheck.value;
const succesfulLogin = document.getElementById("succesfulLogin");
const incorrect = document.getElementById("incorrect");
const retrieval = document.getElementById("retrieval");
const hide = document.getElementById("hide");
const button = document.getElementById("button");

function swap () {

  if (welcomeinput.style.display === "block" || forgot.style.display === "none") {
    
    welcomeinput.style.display = "none";
    forgot.style.display = "block";
    button.textContent = "Submit";


  } else {

    forgot.style.display = "none";
    welcomeinput.style.display = "block";
    button.textContent = "Login";
  
  }
} 

function login () {

  const passwordInput = passwordCheck.value;
  const emailInput = emailCheck.value;

  if (emailInput.trim() === email && passwordInput.trim() === password) {
    welcomeinput.style.display = "none";
    succesfulLogin.style.display = "block";
    hide.style.display = "none";
    incorrect.style.display = "none";
    
  } else {
    incorrect.style.display = "block";
  }

}
