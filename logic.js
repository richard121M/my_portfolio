
// butoes area
// ===============================================================
let buton_sobre = document.getElementById("botao_s");
let buton_programa = document.getElementById("botao_p");
let buton_draw = document.getElementById("botao_d");

buton_sobre.onclick = () => clicke('sobre_s');
buton_draw.onclick = () => clicke('draw_s');
buton_programa.onclick =() => clicke('prog_s');

let buton_escode = document.querySelector(".b_esconder")

buton_escode.onclick = () => esconder_header();

const botoes = document.getElementsByClassName("botao");

const info_instance = document.querySelector('.info');
// ===============================================================

// AUDIO AREA
// ===============================================================
var audio = document.getElementById("audio_tag")
var disco = document.getElementById("disc")
var bar_time_music = document.querySelector('.timermusic');

disco.onclick = () => pause_music();

audio.onended = () => pause_cd();
audio.ontimeupdate = () => sicronizabar();

bar_time_music.onchange = () => mudar_tempo();
// ===============================================================

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
            mudar_texto("<div class=\"text_stikers\"><img src= \"https://bettysgraphics.neocities.org/images/objects/lipstick.gif\" class=\"stickers\"><h2>PROGRAMAS</h2><img src= \"https://bettysgraphics.neocities.org/images/web%20graphics/email%20120.gif\" class=\"stickers_f\"></div>")
        }

        setTimeout(() => {
            document.getElementById(namo).style.display = 'block';
        }, 150);
    }
};

function mudar_texto(texto){
    var titulo = document.getElementById("meuTitulo")
    // titulo.innerText = texto
    titulo.innerHTML = texto
};

function pause_cd(){
    disco.style.animationPlayState = 'paused';
    
}

function sicronizabar(){
    const newtime_bar = audio.currentTime/audio.duration;
    bar_time_music.value = newtime_bar*100 
}
function mudar_tempo(){
    const newtime = (bar_time_music.value/100)*audio.duration;
    audio.currentTime = newtime 
};

function pause_music(){
    if (disco.style.animationPlayState == 'running'){
        disco.style.animationPlayState = 'paused';
    }else{
        disco.style.animationPlayState = 'running';
    }
    
    if (audio.paused){
        // audio.currentTime = 0;
        audio.play();
    }else{
        audio.pause();
    }
}

function esconder_header(){
    var header = document.getElementById("cabesario")
    if (header.style.display == 'none'){
        header.style.display = 'block';
    }else{
        header.style.display = 'none';

    }
}