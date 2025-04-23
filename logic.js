let buton_sobre = document.getElementById("sobre_b");
var elemente_load = document.getElementById("sobre_b");
const botoes = document.getElementsByClassName("botao");

const info_instance = document.querySelector('.info');

const myObserve = new IntersectionObserver((entries)=>{
    alert("ddd")
});

myObserve.observe(info_instance)

function test(){
    alert("asasas")
};

function clicke(namo){

    var sobre_screen = document.getElementById("sobre_s")
    var draw_screen = document.getElementById("draw_s")
    var prog_screen = document.getElementById("prog_s")

    sobre_screen.style.display = 'none';
    draw_screen.style.display = 'none';
    prog_screen.style.display = 'none';

    if(document.getElementById(namo).style.display === 'block'){
        document.getElementById(namo).style.display = 'none';
    }else{
        if (namo == "sobre_s"){
            // mudar_texto("SOBRE")
            mudar_texto("<div class=\"text_stikers\"><img src= \"https://bettysgraphics.neocities.org/images/characters%20and%20people/snoopy%2012.gif\" class=\"stickers\"><h2>SOBRE</h2><img src= \"https://bettysgraphics.neocities.org/images/characters%20and%20people/garfield%2029.gif\" class=\"stickers\"></div>")
        }
        if (namo == "draw_s"){
            // mudar_texto("DESENHOS")
            mudar_texto("<div class=\"text_stikers\"><img src=\"https://bettysgraphics.neocities.org/images/objects/art%206.gif\"class=\"stickers_f\"><h2>DESENHOS BICHAS</h2><img src=\"https://bettysgraphics.neocities.org/images/objects/art%206.gif\"class=\"stickers\"></div>")
        }
        if (namo == "prog_s"){
            // mudar_texto("<div class=\"text_stikers\"><img src=\"https://bettysgraphics.neocities.org/images/objects/art%206.gif\"class=\"stickers_f\"><h2>DESENHOS BICHAS</h2><img src=\"https://bettysgraphics.neocities.org/images/objects/art%206.gif\"class=\"stickers\"></div>")
            mudar_texto("<div class=\"text_stikers\"><img src= \"https://bettysgraphics.neocities.org/images/objects/lipstick.gif\" class=\"stickers\"><h2>PROGRAMAS😘</h2><img src= \"https://bettysgraphics.neocities.org/images/web%20graphics/email%20120.gif\" class=\"stickers_f\"></div>")
        }

        setTimeout(() => {
            document.getElementById(namo).style.display = 'block';
        }, 150);
    }
};
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
        
        
    }, 150); //1000
    
};
function mudar_texto(texto){
    var titulo = document.getElementById("meuTitulo")
    // titulo.innerText = texto
    titulo.innerHTML = texto
};

function sicronizabar(){
    // alert("sdasd")
    audioelemente = document.getElementById("audio_tag");
    var progressBar = document.querySelector(".timermusic")
    const newtime_bar = audioelemente.currentTime/audioelemente.duration;
    progressBar.value = newtime_bar*100 
}

function mudar_tempo(){
    
    audioelemente = document.getElementById("audio_tag");
    
    // alert("dnaii")
    var progressBar = document.querySelector(".timermusic")
    const newtime = (progressBar.value/100)*audioelemente.duration;
    audioelemente.currentTime = newtime 
};

function pause_music(){
    // alert("funci")
    disc = document.querySelector('.disco');
    // disc.style.display = "none";
    disc.id = "disc"
    if (disc.style.animationPlayState == 'running'){
    
        disc.style.animationPlayState = 'paused';
    }else{
        disc.style.animationPlayState = 'running';
    }

    audioelemente = document.getElementById("audio_tag")
    if (audioelemente.paused){
        // audioelemente.currentTime = 0;
        audioelemente.play();
    }else{
        audioelemente.pause();
    }
}

function esconder_header(){

    header = document.getElementById("cabesario")
    if (header.style.display == 'none'){
        header.style.display = 'block';
    }else{
        header.style.display = 'none';

    }
    // alert(header.style.display)
    // header[0].style.display = 'block';
}