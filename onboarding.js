var onboardingOverlay = document.querySelector(".onboardingOverlay");
var nextButton = onboardingOverlay.querySelector(".navButtons__next");
var skipButton = onboardingOverlay.querySelector(".navButtons__skip");
var content = onboardingOverlay.querySelector(".onboardingOverlay__content");

function step(tooltipText, xCoord, yCoord){
    var container = document.createElement("div");
    var p = document.createElement("p");
    var svg = 
    `<svg viewbox="0 0 600 200">
        <circle
            cx="75"
            cy="75"
            r="70"
            stroke="lightblue"
            stroke-width="4"
            fill="transparent" />
        <line
            x1="145"
            y1="75"
            x2="550"
            y2="75"
            stroke="lightblue"
            stroke-width="4" />
    </svg>`;

    container.className = "tooltip container";
    p.className = "tooltip text";
    p.innerText = tooltipText; 
    
    container.innerHTML = svg;
    
    container.appendChild(p);
    content.appendChild(container);
    
    var circle = container.querySelector("svg circle");
    var line = container.querySelector("svg line");

    circle.classList.add("myCircle");
    line.classList.add("myLine");
    
    container.style.left = xCoord; 
    container.style.top = yCoord;

    window.localStorage.setItem("currentStep", parseInt(window.localStorage.getItem("currentStep") || 0) + 1);
} // STEP function end

step("Click to see a single Fuck", "47vw", "45vh");

nextButton.addEventListener("click", function(){
    var currentStep = window.localStorage.getItem("currentStep");
    removeContent();

    if(currentStep == "1"){
        step("Click to see a single Penis", "55vw", "3vh");
    }

    if(currentStep == "2"){
        step("Click to see a double Ugh", "45vw", "20vh");
    }
})

function removeContent(){
    content.removeChild(content.children[0]);
};