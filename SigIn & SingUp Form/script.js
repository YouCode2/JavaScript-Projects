const container = document.querySelector('.container') ;
const SignUp = document.querySelector('.signup-link') ;
const SignIn = document.querySelector('.signin-link') ;


SignUp.addEventListener('click' , () =>{
    container.classList.add('animate-signin') ;
    container.classList.remove('animate-signup') ;
}) ;

SignIn.addEventListener('click' , () =>{
    container.classList.add('animate-signup') ;
    container.classList.remove('animate-signin') ;
}) ;