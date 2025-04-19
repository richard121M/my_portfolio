let buton_sobre = document.getElementById("sobre_b");
var elemente_load = document.getElementById("sobre_b");


const info_instance = document.querySelector('.info');

const myObserve = new IntersectionObserver((entries)=>{
    alert("ddd")
})

myObserve.observe(info_instance)

function test(){
    alert("asasas")
}
function clicke(namo){
    // setInterval(() => {
    //     alert("sdasfaaaaaaaaaiiii mei")
    //   }, 5000);
    
    // alert("dddd")
    var sobre_screen = document.getElementById("sobre_s")
    var draw_screen = document.getElementById("draw_s")
    var prog_screen = document.getElementById("prog_s")

    // prog_screena.id = "ssssssasa"

    sobre_screen.style.display = 'none';
    draw_screen.style.display = 'none';
    prog_screen.style.display = 'none';
    // elemente_load(namo)
    // ona(namo)
    if(document.getElementById(namo).style.display === 'block'){
        document.getElementById(namo).style.display = 'none';
    }else{
        setTimeout(() => {
            document.getElementById(namo).style.display = 'block';
        }, 100);
    }
}
function mostrar_tudo(){
    var sobre_screen = document.getElementById("sobre_s")
    var draw_screen = document.getElementById("draw_s")
    var prog_screen = document.getElementById("prog_s")
    
    sobre_screen.style.display = 'none';
    draw_screen.style.display = 'none';
    prog_screen.style.display = 'none';
    
    setTimeout(() => {
        sobre_screen.style.display = 'block';
        draw_screen.style.display = 'block';
        prog_screen.style.display = 'block';
        
        
    }, 100); //1000
    
}

function mexer_disco(){
    disc = document.querySelector('.disco');
    // disc.style.display = "none";
    disc.id = "disc"
}
function parar_disco(){
    disc = document.querySelector('.disco');
    disc.id = "disc_pausa"
    
    // disc.style.display = "none";
}