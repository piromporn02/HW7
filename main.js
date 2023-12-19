const loginForm = document.querySelector('.login-form')
// const inp_username = document.querySelector('#username')
// const inp_password = document.querySelector('#passwoed')





const hdlLogin = e => {
  alert('Submmiting...')
  console.log('ok, submit')

 }
loginForm.addEventListener('submit', hdlLogin)



// const hdlLogin = e => {
//   e.preventDefault()
//   console.log(ioginForm.elements)
//   let allInput = loginForm.elements
//   console.log(allInput[0].value)
//   console.log(allInput['username'].value)
//   console.log(document.querySelector('#username').value)
//   console.log(document.querySelector('#password').value)
// }

loginForm.addEventListener('submit', hdlLogin)