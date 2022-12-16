const modal = document.querySelector('.modal');
const field = document.getElementById('field');
// const input = document.querySelector('.hidden')
const uname = document.getElementById('username')
const pass = document.getElementById('password')
const pass1 = document.getElementById('password1')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const phone = document.getElementById('phone')
const FormIcon = document.getElementById('icon')
const hide = document.getElementById('hidden')
const hide1 = document.getElementById('hidden1')
const hide2 = document.getElementById('hidden2')
const log = document.getElementById('login')
const log1 = document.getElementById('login1')
const reg = document.getElementById('register')
const reg1 = document.getElementById('register1')


function OpenModal(){
  modal.style.transition = "0.3s";
    modal.style.transform = "scale(1)";
}
function closeModal(){
    modal.style.transform = "scale(0)";
}

function changeScreen(){
    field.style.flexDirection="row-reverse";
    FormIcon.style.width="70%";
    FormIcon.style.height="auto"
    hide.style.display="none"
    hide1.style.display="none"
    hide2.style.display="none"
    reg1.style.display="block"
    log.style.display="block"
    reg.style.display="none"
    log1.style.display="none"
    
    // field.style.setProperty('changer')
}
function changeScreenReverse(){
    field.style.flexDirection="row";
    FormIcon.style.width="20%";
    FormIcon.style.height="auto"
    hide.style.display="block"
    hide1.style.display="block"
    hide2.style.display="block"
    reg1.style.display="none"
    log.style.display="none"
    reg.style.display="block"
    log1.style.display="block"
    
    // field.style.setProperty('changer')
}
form.addEventListener('submit', (e) => {
  let messages =[]
  if(uname.value === "" || uname.value == null){
    messages.push('Username is required')
  }

  else if(phone.value === "" || phone.value == null){
    messages.push('Phone can not be empty')
  }

  else if(pass.value === "" || pass.value == null){
    messages.push('Password can not be empty')
  }

  else if(pass.value.length <= 4){
    messages.push('Password must be more that 4 character')
  }

  else if(pass.value.length >= 10){
    messages.push('Password must be less that 10 character')
  }

  else if(pass.value === 'password'){
    messages.push('Password can not be password')
  }

  else if(pass1.value === "" || pass1.value == null){
    messages.push('Please confirm password')
  }

  else if(pass.value !== pass1.value){
    messages.push("Password does'nt much")
  }

  if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ');
    errorElement.style.transition = "0.5s"
  }
  else{
    modal.style.transition = "0.5s";
    modal.style.marginTop = "-110vh";
  }
})