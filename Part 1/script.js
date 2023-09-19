/* Plain Javascript Way

function changeColor() {
    document.querySelector("h1").style.color = "red";
}

document.querySelector("button").addEventListener("click", changeColor);
*/

/* jQuery Way */

$(document).ready(
    $("button").click( function() {          
            if($("h1").css("color") != "rgb(255, 0, 0)"){
                $("h1").css("color", "#ff0000");
            }
            else{
                $("h1").css("color", "#000000");
            }
    })
);