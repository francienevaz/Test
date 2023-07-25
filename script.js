const main = document.querySelector(".main");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnLogin = document.querySelector(".btn-login");
const iconClose = document.querySelector(".icon-close");

// btn events
registerLink.addEventListener("click", () => {

          main.classList.add("active");
});

loginLink.addEventListener("click", () => {

          main.classList.remove("active");
});

btnLogin.addEventListener("click", () => {

          main.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {

          main.classList.remove("active-popup");
});

// field validation

const inputs = document.querySelector('.inputs');
const inputEmail = document.querySelector("#email");
//const msgHidden = document.querySelector(".hidden");
const msgCheckValue = document.querySelector(".msg");
const btn = document.querySelector(".btn");

function checkInput() {
	if (inputEmail.value == " ") {
	msgCheckValue.classList.remove("hidden");
	msg.classList.add("msg");
	
} else {
	msgCheckValue.classList.remove("msg");
	msgCheckValue.classList.add("hidden");
	
	}
}

if (inputs.checkValidity()) {
	
  const valor = inputs.value;
  console.log(valor + "check validity");
} else {
  const mensagemDeErro = inputs.validationMessage;
  console.log(mensagemDeErro + "Error");
}

btn.addEventListener("submit", (event) => {
	event.preventDefault();
})

checkInput()
