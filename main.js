const modal = document.querySelector('.modal');
const field = document.querySelector('#field');
const input = document.querySelector('.hidden')

function OpenModal(){
    modal.style.transform = "scale(1)";
}
function closeModal(){
    modal.style.transform = "scale(0)";
}

function changeScreen(){
    input.style.diplay="block";
    field.style.transition="5s";
    field.style.flexDirection="row-reverse";

}

function validateForm() {
    let uname = document.forms["myForm"]["uname"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let pass = document.forms["myForm"]["pass"].value;
    if (uname == "") {
      alert("Username must be filled out");
      return false;
    }
    if (pass == "") {
      alert("Enter valid password")
      return false;
    }
  }