  var   mouse_Event= Empty;
  canvas = document.getElementById('myCanvas')
  ctx = canvas.Context("2d");

color="red";
width=2;
radius=20;

canvas.addEventListner("mousdown", "my_mousedown")
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    MouseEvent="mouseDown"
}

canvas.addEventListner("mousemove", "my_mousemove")
function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (MouseEvent == "mousedown"){
    console.log("current position of x and y coordinates=");
    console.log("x = " + current_postion_of_x + "y =" + current_position_of_y);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc=(current_position_of_x, current_postion_of_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

}