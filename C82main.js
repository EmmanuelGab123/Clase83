var empty = "empty";
var last_position_x, last_position_y;
var current_position_x, current_position_y;
canvas = document.getElementById("myCanvas");
color = "orange";
ctx = canvas.getContext("2d");
function establecer_color_rojo_fuerte(){
    color = "darkred";
}
function establecer_color_rojo(){
    color = "red";
}
function establecer_color_rojo_naranja(){
    color = "orangered";
}



canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    empty = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    empty = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e){
    empty = "mouseUp";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if (empty == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        console.log("ultima coordenada en x e y");
        console.log("x ="+last_position_x+"y ="+ last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("current position en x e y");
        console.log("x ="+current_position_x+"y ="+ current_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}


