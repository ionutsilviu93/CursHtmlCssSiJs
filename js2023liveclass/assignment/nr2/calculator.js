let display=document.getElementById("screen");
function clear(){
var reset = document.getElementById("screen");
reset.value='0';
}
function tasta(numar){
    display.value+=numar;
}

function calculeaza()
{
    display.value = eval(display.value);
}