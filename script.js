/////////*****Sliding divs with background images*****/////////


const slides = document.querySelector(".slides-container").children;
//console.log(slides); //lists all the slides in the console
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicators = document.querySelector(".indicators");

let index = 0;

prev.addEventListener("click", function(){
//console.log("you clicked prev why?");
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener("click", function(){
//console.log("you clicked next why?");
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

function circleIndicators(){       //Note: i is like using index above. It means the starting point
    for(let i = 0; i < slides.length; i++){
        const div = document.createElement("div");
        div.innerHTML = i +1;

        div.setAttribute("onclick", "indicateSlide(this)")
        div.id = i;     //to add id attribute to all circle indicator children and give it index numbers 1 to 5

        if(i==0){
            div.className="activeB";    //To create the activeB class and toggle it. Note: use for menu.active state.
        }
        indicators.appendChild(div);    //to create the indicators
    }
}
circleIndicators();

//LAST FUNCTION, TO INDICATE WHICH CIRCLE IS CLICKED OR ACTIVE
function indicateSlide(element){
    //console.log(element.id);
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator(){   //for indicateSlide
    for(let i = 0; i < indicators.children.length; i++){
        indicators.children[i].classList.remove("activeB");
    }
    indicators.children[index].classList.add("activeB");    //Note: [index] for add, [i] to toggle remove
}

function prevSlide(){
    if(index == 0){
        index = slides.length -1;
    } else {
        index--;      /*reverse, counting backwards */
    }

    changeSlide();
}

function nextSlide(){
    if(index == slides.length - 1){
        index = 0;
    } else {
        index++;
    }

    changeSlide();
}

function changeSlide(){

    //to remove the class "active" from the slides
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }

    //add class active to all slides
    slides[index].classList.add("active");                  
    
    /*Both, toggles and adds the class Active to all slides */
}

function resetTimer(){
    //to stop timer when controls are clicked.
    clearInterval(timer);
    //to set back the timer
    timer = setInterval(autoplay, 3000);
}

function autoplay(){
    nextSlide();
    updateCircleIndicator();    //to also update or change the circle indicator
}

let timer = setInterval(autoplay, 4000);

//THE END


//To create an alert message for the button clicked
let link = document.querySelector(".link");
link.addEventListener("click", function(){
    alert("Thank you. Your order is on the way!");
})

/*I want all the links to alert the above message when clicked on, but only the first link displays the alert. */

