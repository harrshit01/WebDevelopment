const score = document.querySelector(".score");
const startscreen = document.querySelector(".start");
const gamearea = document.querySelector(".gamearea");


const keys ={ 
    ArrowDown : false,
    ArrowUp : false,
    ArrowRightm: false,
    ArrowLeft : false
}

function keyDown(x){
    x.preventDefault();
    keys[x.key]= true;
    //console.log(keys);
}
function keyUp(x){
    x.preventDefault();
    keys[x.key]= false;
    //console.log(keys);
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup" , keyUp);

let player = {
    speed : 4,
    score : 0,
};

function moveline(){
    let lines = document.querySelectorAll(".lines");
    lines.forEach(function(item){
        if(item.y >= 710){
            item.y -= 750;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    })

}

function collide(player, enemy){
    a = player.getBoundingClientRect();
    b = enemy.getBoundingClientRect();
    return !((a.bottom < b.top) || (a.top> b.bottom) || (a.left>b.right) || (a.right<b.left));

}

function endgame(){
    player.start = false;
    startscreen.classList.remove("hide");
    startscreen.innerHTML = ` game over <br> your final score is ${player.score} <br> press here to restart the game`
}

function movecar(car){
    let enemycar = document.querySelectorAll(".enemycar");
    enemycar.forEach(function(item){
        if(collide(car,item)){
            console.log("noob");
            endgame();
        }

        if(item.y >= 750){
            item.y = -300;
            item.style.left = Math.round(Math.random()*350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    })
}

function gameplay(){
    let car = document.querySelector(".car");
    let road = gamearea.getBoundingClientRect();
    //console.log(road);
    
    
    if(player.start){
        
        moveline();
        movecar(car);
        
        if (keys.ArrowUp && player.y > 200){
            player.y -= player.speed;
        }
        
        if (keys.ArrowDown && player.y < (road.bottom - 150)){
            player.y += player.speed;
        }
        
        if (keys.ArrowLeft && player.x > 0){
            player.x -= player.speed;
        }
        
        if (keys.ArrowRight && player.x < (350)){
            player.x += player.speed;
        }
        
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

        window.requestAnimationFrame(gameplay);
        score.innerText = `Score : ${player.score++}`;
    }
}
startscreen.addEventListener("click", start);

function start(){
    //gamearea.classList.remove("hide");
    startscreen.classList.add("hide");
    gamearea.innerHTML = " ";

    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gameplay);

    let car = document.createElement("div");
    car.setAttribute("class", 'car' );
    
    gamearea.appendChild(car);
    

    for(let i=0; i<5; i++){
        let lines = document.createElement("div");
        lines.setAttribute("class", 'lines');
        lines.y = (i*150);
        lines.style.top = (lines.y) + "px";
        gamearea.appendChild(lines);
    }
    for(let i=0; i<3; i++){
        let enemycar  = document.createElement("div");
        enemycar.setAttribute("class", 'enemycar');
        enemycar.y = ((i+1)* 350) * -1;
        enemycar.style.top = (enemycar.y) + "px";
        
        enemycar.style.left = Math.round(Math.random()*350) + "px";
        gamearea.appendChild(enemycar);
    }


    
    //to move car

    player.x = car.offsetLeft;
    player.y= car.offsetTop;

}
