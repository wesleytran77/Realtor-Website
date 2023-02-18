const callButton = document.querySelectorAll(".phone")


callButton.forEach(button =>{
    button.addEventListener("click", function(){
        window.location.href = "tel:+9562619528";
    })
})