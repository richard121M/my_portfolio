
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
let linkMusic = document.getElementById("link_music");
var audio = document.getElementById("audio_tag");
// var audio = iframe;

var disco = document.getElementById("disc")
var bar_time_music = document.querySelector('.timermusic');

// linkMusic.onclick = () => mudar_musica();

// disco.onclick = () => pause_music();
disco.onclick = () => carregarVideo();


audio.onended = () => pause_cd();
audio.ontimeupdate = () => sicronizabar();

bar_time_music.onchange = () => mudar_tempo();


// Carrega a API do YouTube
var link_str = ""
// carregarVideo()
function carregarVideo() {
    mudar_musica()
    if (link_str == ""){
        disco.style.animationPlayState = 'paused';
    }else{
        disco.style.animationPlayState = 'running';
    }

    document.getElementById("player").innerHTML = `
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/${link_str}?autoplay=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
}

// ===============================================================

// GAME ZONE
let screenGame = document.getElementById("game_drop");
let buton_game = document.getElementById("botao_game");

let b_FM = document.getElementById("fastmouse");
let b_SK = document.getElementById("shadowkitty");
let b_RC = document.getElementById("robob2");

b_FM.onclick = () => cc_FM();
b_RC.onclick = () => cc_RC();
b_SK.onclick = () => cc_SK();

var link_game = "" 
function cc_FM(){
    link_game = "https://html-classic.itch.zone/html/9796414/fast_html/index.html"
};
function cc_RC(){
    link_game = "https://html-classic.itch.zone/html/10635461/robob2/index.html"
};
function cc_SK(){
    link_game = "https://html-classic.itch.zone/html/12365465/ShadowKittyWeb/index.html"
};

buton_game.onclick = () => iniciar_jogo();

function test(){
    alert("asasas")
};

function mudar_musica(){
    var tradu_link = linkMusic.value 
    if (tradu_link.includes("youtube.com/watch?")){
        tradu_link = tradu_link.slice(32,43)
    }else{
        tradu_link = tradu_link.slice(17,28)
    }
    if (tradu_link != ""){
        disco.src = `https://i.ytimg.com/vi/${tradu_link}/hqdefault.jpg`

    }
    link_str = tradu_link
}

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
            mudar_texto("<div class=\"text_stikers\"><img src= \"https://bettysgraphics.neocities.org/images/characters%20and%20people/snoopy%2012.gif\" class=\"stickers\"><h2>SOBRE</h2><img src= \"https://bettysgraphics.neocities.org/images/characters%20and%20people/garfield%2029.gif\" class=\"stickers\"></div>")
        }
        if (namo == "draw_s"){
            mudar_texto("<div class=\"text_stikers\"><img src=\"https://bettysgraphics.neocities.org/images/objects/art%206.gif\"class=\"stickers_f\"><h2>DESENHOS BICHAS</h2><img src=\"https://bettysgraphics.neocities.org/images/objects/art%206.gif\"class=\"stickers\"></div>")
        }
        if (namo == "prog_s"){
            mudar_texto("<div class=\"text_stikers\"><img src= \"https://bettysgraphics.neocities.org/images/objects/lipstick.gif\" class=\"stickers\"><h2>PROGRAMAS</h2><img src= \"https://bettysgraphics.neocities.org/images/web%20graphics/email%20120.gif\" class=\"stickers_f\"></div>")
        }

        setTimeout(() => {
            document.getElementById(namo).style.display = 'block';
        }, 150);
    }
};

function mudar_texto(texto){
    var titulo = document.getElementById("meuTitulo")
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
        // audio.playVideo();
        audio.play();
        // audio.setAttribute('src', iframe.getAttribute('src') + '?autoplay=1'); 
    }else{
        audio.pause();
    }
}

function esconder_header(){
    var header = document.getElementById("cabesario")
    if (header.style.display == 'none'){
        header.style.animation= "nav_apper 0.18s linear "
        header.style.display = 'block';
    }else{
        header.style.animation= "nav_apper_rev 0.18s linear "
        setTimeout(() => {
            header.style.display = 'none';
        }, 185);
    }
}
var hasGame = false
function iniciar_jogo(){
    if (hasGame == false){
        hasGame = true
        screenGame.src = link_game
    }else{
        hasGame = false
        screenGame.src = ""
    }
}