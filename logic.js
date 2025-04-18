var buton_sobre = document.getElementById("sobre_b")


function clicke(namo){
    // alert("dddd")
    var sobre_screen = document.getElementById("sobre_s")
    var draw_screen = document.getElementById("draw_s")
    var prog_screen = document.getElementById("prog_s")

    sobre_screen.style.display = 'none';
    draw_screen.style.display = 'none';
    prog_screen.style.display = 'none';

    if(document.getElementById(namo).style.display === 'block'){
        document.getElementById(namo).style.display = 'none';
    }else{
        document.getElementById(namo).style.display = 'block';
    }
}
function mostrar_tudo(){
    // alert("dddd")
    var sobre_screen = document.getElementById("sobre_s")
    var draw_screen = document.getElementById("draw_s")
    var prog_screen = document.getElementById("prog_s")

    sobre_screen.style.display = 'block';
    draw_screen.style.display = 'block';
    prog_screen.style.display = 'block';
}