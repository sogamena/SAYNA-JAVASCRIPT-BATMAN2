document.querySelector("#show").addEventListener("click", function(){
    document.querySelector("#confirme").classList.add("active");
})

document.querySelector("#confirme .btn-fermer").addEventListener("click", function(){
    document.querySelector("#confirme").classList.remove("active");
})