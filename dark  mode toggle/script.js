const input = document.querySelector(".input") ;

const Body = document.querySelector("body") ;

input.checked= JSON.parse(localStorage.getItem("mode")) ;

updatebody() ;

function updatebody(){
    if(input.checked){
        Body.style.background = "black" ;
    }
    else{
        Body.style.background = "white" ;
    }
}
input.addEventListener('input', function(){
    updatebody()
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem("mode" , JSON.stringify(input.checked)) ;
}