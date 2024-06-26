import { musicas } from "./musicas.js"

export function editarCabecalho(id){
    let head = document.querySelector('.head')
    let nomeMusica = head.children[1]
    let nomeArtista = head.children[2]
    nomeMusica.textContent = "Nome da Musica: " + " " + musicas[id].musica
    nomeArtista.textContent = "Artista: " + " " + musicas[id].nomeArtista
}


export function editarMusica(id){
    let musica = document.querySelector('.musica')
    musica.style.backgroundImage = "url(" + musicas[id].img_capa +")"
    musica.style.backgroundSize = "100% 100%"
    let titulo = musica.children[0]
    titulo.textContent = musicas[id].musica
    let letra = musica.children[1]
    letra.innerHTML = ''
    letra.innerHTML = musicas[id].letra
    
}

export function editarTraducao(id){
    let traducao = document.querySelector('.traducao')
    traducao.style.backgroundImage = "url(" + musicas[id].img_capa2 +")"
    traducao.style.backgroundSize = "100% 100%"
    let titulo_t = traducao.children[0]
    titulo_t.textContent = musicas[id].tituloTraduzido
    let letra_t = traducao.children[1]
    letra_t.innerHTML = ''
    letra_t.innerHTML = musicas[id].traducao
}

export function editarVideo(id){
    let componentes_video = document.querySelector('.video')
    let img1_video = componentes_video.children[0]
    img1_video.src = musicas[id].img1

    let video = componentes_video.children[1]
    video.src = musicas[id].url_musica
    let img2_video = componentes_video.children[2]
    img2_video.src = musicas[id].img2
}

export function tirarEnfase(){
     let imgs = document.querySelectorAll('nav img')
     imgs.forEach(img =>{
         
             img.classList.add('invisivel')
         
     })
}

export function destacar(p){
    let tagPai = p.parentNode
    let img = tagPai.children[0]
    img.classList.remove('invisivel')
}