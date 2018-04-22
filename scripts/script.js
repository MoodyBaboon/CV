
window.onload = function () {
    var plane = document.getElementById("plane");

    plane.addEventListener("webkitAnimationEnd", planeCrash);
    plane.addEventListener("animationend", planeCrash);

    function planeCrash() {
       plane.classList.add("crash"); 
    }

    plane.onclick = function () {
        plane.classList.add("save");
    }

    var body = document.querySelector("body");
    var scene = document.getElementById("scene");
    var barrel = document.getElementById("barrel");
    var submarine = document.getElementById("submarine");
    var arrow = document.getElementById("arrow");
    var arrow2 = document.getElementById("arrow2");
    var arrow3 = document.getElementById("arrow3");
    var homer2 = document.getElementById("homer2");
    var airship = document.getElementById("airship");
    var cloud = document.getElementById("cloud");
    var cloud2 = document.getElementById("cloud2");
    var wave1 = document.getElementById("wave1");
    var wave2 = document.getElementById("wave2");
    var wave3 = document.getElementById("wave3");
    var wave4 = document.getElementById("wave4");
    var wave5 = document.getElementById("wave5");
    var wave6 = document.getElementById("wave6");
    var ray = document.querySelectorAll(".ray");
    var birdsWrapper = document.getElementById("birdsWrapper");
    var canvasBirds = document.createElement("canvas");
    var eveElements = document.querySelectorAll(".eveElement");
    var man = document.getElementById("man");
    var firs = document.getElementById("firs2");
    var board = document.getElementById("board");
    var tree = document.getElementById("tree");
    var dayElements = document.querySelectorAll(".dayElement"); 
    var eveElements = document.querySelectorAll(".eveElement"); 
    var nightElements = document.querySelectorAll(".nightElement"); 


    barrel.onclick = function () {
        barrel.classList.add("immersion");
        submarine.classList.add("emersion");
        arrow.classList.add("fadeOut");
        arrow2.classList.add("fadeIn"); 
    }

    submarine.onclick = function () {    
        arrow2.classList.add("fadeOut");
        scene.classList.add("evening"); 
        body.classList.add("evening");       
        submarine.classList.add("exit"); 


        setTimeout(function(){
            airship.style.left = airship.getBoundingClientRect().left + 280 + "px";
            airship.classList.remove("animated");
            airship.style.animation = "goingRight 1.4s cubic-bezier(0,-0.01,.94,-0.21) both";
            airship.style.webkitAnimation = "goingRight 1.4s cubic-bezier(0,-0.01,.94,-0.21) both";
            plane.classList.add("save");
        }, 1800);  

        setTimeout(function(){            
            homer2.classList.remove("animated");
            homer2.style.animationPlayState = "goingDeeper 1s ease-in both";
            homer2.style.webkitAnimation = "goingDeeper 1s ease-in both";
            homer2.style.animation = "goingDeeper 1s ease-in both";
        }, 2200);  

        setTimeout(function(){   
            cloud.style.animationPlayState = "goingLeft 1s cubic-bezier(0,-0.01,.94,-0.21) both";
            cloud.style.webkitAnimation = "goingLeft 1s cubic-bezier(0,-0.01,.94,-0.21) both";
            cloud.style.animation = "goingLeft 1s cubic-bezier(0,-0.01,.94,-0.21) both";
        }, 2600);  
        

        setTimeout(function(){ 
            wave6.classList.add("waveFadeOut"); 
        }, 2800); 
        setTimeout(function(){ 
            wave5.classList.add("waveFadeOut"); 
        }, 3000);  
        setTimeout(function(){ 
            wave4.classList.add("waveFadeOut"); 
        }, 3200);  
        setTimeout(function(){ 
            wave3.classList.add("waveFadeOut"); 
        }, 3400);  
        setTimeout(function(){
            wave2.classList.add("waveFadeOut"); 
        }, 3600);  
        setTimeout(function(){   
            wave1.classList.add("waveFadeOut");
        }, 3800);   

        setTimeout(function(){   
            for(var i = 0; i < eveElements.length; i++) {
                eveElements[i].classList.remove("turnOff"); 
            }
        }, 3000);  

        setTimeout(function(){   
            for(var i = 0; i < ray.length; i++) {
                ray[i].classList.remove("ray"); 
            }

            /*birdsWrapper.appendChild(canvasBirds);*/
            birdsOn();
        }, 4200); 
        
        setTimeout(function(){   
            var waves = document.querySelectorAll(".wave"); 
            for(var i = 0; i<waves.length; i++) {
                waves[i].style.display = "none";
                waves[i].classList.remove("wave");
            } 
            for(var i = 0; i<dayElements.length; i++) {
                dayElements[i].remove();
            }

        }, 5000); 
    }

    /* evening */
    man.onclick = function () {
        arrow3.classList.add("fadeOut");
        board.classList.add("boardOn");
    }
    firs.onclick = function () {
        arrow3.classList.add("fadeOut");
        board.classList.add("boardOn");
    }

    board.onclick = function () {  
        board.classList.remove("boardOn");
        board.classList.add("boardOff");
        arrow4.classList.add("fadeOut");
        tree.classList.add("treeOff");

        body.classList.add("night");
        scene.classList.add("night"); 

        setTimeout(function(){   
            for(var i = 0; i < eveElements.length; i++) {
                eveElements[i].remove();
            } 
            cancelAnimationFrame(birdsId);
        }, 4000); 
        setTimeout(function(){               
            for(var i = 0; i < nightElements.length; i++) {
                nightElements[i].style.display = "block";
            }

        }, 4000); 
    }
}
