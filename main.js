var score = 0;
var stomach = 0;
var mon = 0;
var eao = 1;
var stomspace = 25;
var cs=1;

function eat()
{
    if(stomach<stomspace){
    document.getElementById("bite").play();
    score = score + eao;
        stomach = stomach+cs;
        document.getElementById("stom").innerHTML = stomach;
    document.getElementById("sc").innerHTML = score;
    }
    if(stomach>stomspace){
        stomach = stomach-1;
        document.getElementById("stom").innerHTML = stomach;
    }
}
function sell()
{
    mon = mon+stomach;
    stomach = 0;
    document.getElementById("mon").innerHTML = mon;
    document.getElementById("stom").innerHTML = stomach;
}
function bigcookie()
{
    if(mon>39){
        mon=mon-40;
        document.getElementById("mon").innerHTML = mon;
        cs=cs+1;
    }
    
}
function stomspaceup()
{
    if(mon>29){
        mon = mon-30;
        stomspace = stomspace+10;
        document.getElementById("mon").innerHTML = mon;
    }
    
}