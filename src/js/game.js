var holes; var moles;
var score = 0;
var time = 30;

function timer(){
    time--;
    if (time < 10) document.getElementById("time").textContent="TIME: 00:0" + time
    else document.getElementById("time").textContent="TIME: 00:" + time;
    
    if (time == 0) stop();
}

function setHolesAndMoles(){
    holes = document.querySelectorAll(".hole");
    moles = document.querySelectorAll(".mole");
}

setHolesAndMoles();

for(let i = 0; i<holes.length; i++){
    holes[i].addEventListener("click", clicked)
}
/*holes.forEach(holes.addEventListener("click", clicked));*/

function getRandHole(h){
    let i = Math.floor(Math.random()*h.length);
    return h[i];
}

function addMole(){
    if(holes.length !== 0){
        let hole = getRandHole(holes);
        hole.classList.replace("hole", "mole");
        setHolesAndMoles();
    }

}

function delMole(){
    if(moles.length !== 0){
        let mole = getRandHole(moles);
        mole.classList.replace("mole", "hole");
        setHolesAndMoles();
    }
}

function clicked(e){
    if(this.classList.item(0) === "mole"){
        score++;
        document.getElementById("score").textContent="SCORE: " + score*10;
        this.classList.replace("mole", "hole");
        setHolesAndMoles();
    }
}

function stop(){
    clearInterval(t1);
    clearInterval(t2);
    clearInterval(t3);
    document.getElementById("time").textContent="TIME: 00:00";
    alert("Your score: "+score*10);
    
}

var t3 = setInterval(timer, 1000);
var t1 = setInterval(addMole, 1000);
var t2 = setInterval(delMole, 1500);