
var last_position_x, last_position_y;
canvas = document.getElementById("myCanvas");
color = "orange";
ctx = canvas.getContext("2d");
var width = screen.width;
new_width = screen.width-70;
var height = screen.height;
new_height = screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
} 
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_position_x = e.touches[0].clientX -canvas.offsetLeft;
    last_position_y = e.touches[0].clientY -canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_x = e.touches[0].clientX -canvas.offsetLeft;
    current_position_y = e.touches[0].clientY -canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2; 
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}
function establecer_color_rojo_fuerte(){
    color = "darkred";
}
function establecer_color_rojo(){
    color = "red";
}
function establecer_color_rojo_naranja(){
    color = "orangered";
}





