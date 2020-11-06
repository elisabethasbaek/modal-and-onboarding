var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var closeButton = modal.querySelector(".closeButton");
var accept = overlay.querySelector(".choice__accept");
var deny = overlay.querySelector(".choice__deny");

function hideModal(){
    overlay.style.display = "none";
    overlay.setAttribute("hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    window.localStorage.setItem("isAccepted", "true");

    /* setTimeout(function(){
        overlay.style.display = "block";
        overlay.removeAttribute("hidden", "true");
        overlay.removeAttribute("aria-hidden", "true");
    }, 5000); */
}

closeButton.addEventListener("click", function(){
    hideModal();
});

overlay.addEventListener("click", function(event){
    if(event.target != overlay) return;
    
    hideModal();
});

window.addEventListener("keyup", function(event){
    if(event.key != "Escape") return;

    hideModal();    
});

accept.addEventListener("click", function(){
    window.localStorage.setItem("isAccepted", "true");

    hideModal();
});

deny.addEventListener("click", function(){
    hideModal();
});