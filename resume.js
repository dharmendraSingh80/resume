
/*------Smooth-Scroll-------*/

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
// console.log(navMenuAnchorTags);
for(let i = 0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        // var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSectionID = this.getAttribute('href').replace('#','').trim();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        
        // interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function(){
            scrollVertically(targetSection);
        }, 20);


        // var interval = setInterval(function(){
        //     var targetSectionCoordinates = targetSection.getBoundingClientRect(    
        //         );
        //     if(targetSectionCoordinates.top <= 100){
        //         clearInterval(interval);
        //         return;
        //     }
        //     window.scrollBy(0, 50);
        // }, 20);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect(    
        );
    if(targetSectionCoordinates.top <= 100){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


/*------Skill-Bar-Auto-Fill-------*/

// var progressBars = document.querySelectorAll('.skill-progress > div');
// // console.log(progressBars);
// var skillContainer = document.getElementById('skill-container');
// window.addEventListener("scroll", checkScroll);
// var animationDone = false;

// function initialiseBars(){
//     for(let bar of progressBars){
//         bar.style.width = 0 + '%';
//     }
// }
// initialiseBars();


// function fillBars(){
//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute("data-bar-width");
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth > targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         }, 5);
//     }
// }

// function checkScroll(){
//     //You have to check whether skill container is visible

//     var coordinates = skillContainer.getBoundingClientRect(); 
//     if(!animationDone && coordinates.top <= window.innerHeight){
//         animationDone = true;
//         // console.log('skill section visible')
//         fillBars();
//     }else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }
// }



var progressBars = document.querySelectorAll('.skill-progress > div');

function initialiseBar(bar){
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 +'%';
}

for(var bar of progressBars){
    initialiseBar(bar);
}

function fillBar(bar){
    console.log(bar);
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function(){
        if(currentWidth >= targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);
}

function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }
    }
}

window.addEventListener('scroll', checkScroll);
