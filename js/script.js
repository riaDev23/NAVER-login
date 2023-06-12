const idBox = document.querySelector(".id");
const idInput = idBox.querySelector("input");
const passwordBox = document.querySelector(".password");
const passwordInput = passwordBox.querySelector("input");

let idDel = idBox.querySelector(".on");
let passwordDel = passwordBox.querySelector(".on");

idInput.addEventListener("focus", () => {
  idBox.classList.add("focused");
});
idInput.addEventListener("blur", () => {
  idBox.classList.remove("focused");
});
passwordInput.addEventListener("focus", () => {
  passwordBox.classList.add("focused");
});
passwordInput.addEventListener("blur", () => {
  passwordBox.classList.remove("focused");
});

idDel.addEventListener("click", () => {
  idInput.value = "";
});
passwordDel.addEventListener("click", () => {
  passwordInput.value = "";
});

let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", () => {
  if (idInput.value === "") {
    document.querySelector(".id-err").classList.remove("blind");
    document.querySelector(".pass-err").classList.add("blind");
  } else {
    document.querySelector(".id-err").classList.add("blind");

    if (passwordInput.value === "") {
      document.querySelector(".pass-err").classList.remove("blind");
    } else {
      document.querySelector(".pass-err").classList.add("blind");
    }
  }
});

document.addEventListener('keydown', (event) => {
  const capsLockOn = event.getModifierState('CapsLock');
  
  if (capsLockOn) {
    document.querySelector(".caps-err").classList.remove("blind");
  } else {
    document.querySelector(".caps-err").classList.add("blind");
  }
});