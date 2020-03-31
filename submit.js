var submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var fName = document.querySelectorAll("input")[0].value;
  var lName = document.querySelectorAll("input")[1].value;
  var email = document.querySelectorAll("input")[2].value;
  var password = document.querySelectorAll("input")[3].value;
  var x = 0;
  if (fName === "") {
    document.querySelector("#fname-err").classList.remove("err-off");
    document.querySelector("#fname-err").classList.add("err-on");
    document.querySelector("#fname-err-state").classList.remove("err-state-off");
    document.querySelector("#fname-err-state").classList.add("err-state-on");
    document.querySelector("#fname-ip").classList.add("err-box");
    x++;
  }

  if (lName === "") {
    document.querySelector("#lname-err").classList.remove("err-off");
    document.querySelector("#lname-err").classList.add("err-on-" + x);
    document.querySelector("#lname-err-state").classList.remove("err-state-off");
    document.querySelector("#lname-err-state").classList.add("err-state-on");
    document.querySelector("#lname-ip").classList.add("err-box");
    x++;
  }

  if (email === "") {

    document.querySelector("#email-err").classList.remove("err-off");
    document.querySelector("#email-err").classList.add("err-on-" + x );
    document.querySelector("#email-err-state-empty").classList.remove("err-state-off");
    document.querySelector("#email-err-state-empty").classList.add("err-state-on");
    document.querySelector("#email-ip").classList.add("err-box");
    x++;
  } else if (!validateEmail(email)) {

    document.querySelector("#email-err").classList.remove("err-off");
    document.querySelector("#email-err").classList.add("err-on-" + x);
    document.querySelector("#email-err-state-invalid").classList.remove("err-state-off");
    document.querySelector("#email-err-state-invalid").classList.add("err-state-on");
    document.querySelector("#email-ip").classList.add("err-box");
    x++;
  }

  if (password === "") {

    document.querySelector("#pass-err").classList.remove("err-off");
    document.querySelector("#pass-err").classList.add("err-on-" + x);
    document.querySelector("#pass-err-state").classList.remove("err-state-off");
    document.querySelector("#pass-err-state").classList.add("err-state-on");
    document.querySelector("#pass-ip").classList.add("err-box");
  }

});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
